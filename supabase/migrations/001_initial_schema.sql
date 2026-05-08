create extension if not exists "pgcrypto";

create type public.user_role as enum ('user', 'admin', 'cafe_owner');
create type public.record_status as enum ('active', 'pending', 'rejected');
create type public.product_category as enum (
  'coffee',
  'non_coffee',
  'matcha',
  'pastry',
  'dessert',
  'meal',
  'other'
);
create type public.suggestion_type as enum ('cafe', 'product');
create type public.suggestion_status as enum ('pending', 'approved', 'rejected');
create type public.report_target_type as enum ('post', 'comment', 'cafe', 'product');
create type public.report_status as enum ('pending', 'reviewed', 'dismissed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  username text not null unique,
  email text not null,
  avatar_url text,
  bio text,
  location text,
  role public.user_role not null default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_username_format check (username ~ '^[a-z0-9_]{3,24}$'),
  constraint profiles_bio_length check (bio is null or char_length(bio) <= 160)
);

create table public.cafes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  handle text unique,
  description text,
  address text,
  city text,
  latitude numeric(9, 6),
  longitude numeric(9, 6),
  image_url text,
  logo_url text,
  is_verified boolean not null default false,
  status public.record_status not null default 'pending',
  owner_user_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint cafes_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint cafes_handle_format check (handle is null or handle ~ '^[a-z0-9_]{3,30}$')
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  cafe_id uuid not null references public.cafes(id) on delete cascade,
  name text not null,
  slug text not null,
  category public.product_category not null default 'other',
  description text,
  price numeric(10, 2),
  image_url text,
  status public.record_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (cafe_id, slug),
  constraint products_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint products_price_positive check (price is null or price >= 0)
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  cafe_id uuid not null references public.cafes(id) on delete restrict,
  product_id uuid not null references public.products(id) on delete restrict,
  image_url text not null,
  caption text,
  rating numeric(2, 1),
  is_hidden boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint posts_rating_range check (rating is null or (rating >= 1 and rating <= 5)),
  constraint posts_caption_length check (caption is null or char_length(caption) <= 2200)
);

create table public.upranks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, post_id)
);

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  content text not null,
  is_hidden boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint comments_content_length check (char_length(content) between 1 and 500)
);

create table public.suggestions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  type public.suggestion_type not null,
  name text not null,
  cafe_id uuid references public.cafes(id) on delete cascade,
  notes text,
  status public.suggestion_status not null default 'pending',
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id) on delete set null,
  constraint suggestions_name_length check (char_length(name) between 2 and 120),
  constraint suggestions_notes_length check (notes is null or char_length(notes) <= 500)
);

create table public.saved_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, post_id)
);

create table public.follows (
  id uuid primary key default gen_random_uuid(),
  follower_user_id uuid not null references public.profiles(id) on delete cascade,
  following_user_id uuid references public.profiles(id) on delete cascade,
  cafe_id uuid references public.cafes(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint follows_one_target check (
    (following_user_id is not null and cafe_id is null)
    or (following_user_id is null and cafe_id is not null)
  ),
  constraint follows_no_self_follow check (
    following_user_id is null or follower_user_id <> following_user_id
  ),
  unique (follower_user_id, following_user_id),
  unique (follower_user_id, cafe_id)
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_user_id uuid not null references public.profiles(id) on delete cascade,
  target_type public.report_target_type not null,
  target_id uuid not null,
  reason text not null,
  status public.report_status not null default 'pending',
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id) on delete set null,
  constraint reports_reason_length check (char_length(reason) between 3 and 500)
);

create index cafes_status_city_idx on public.cafes(status, city);
create index products_cafe_status_idx on public.products(cafe_id, status);
create index products_category_status_idx on public.products(category, status);
create index posts_created_at_idx on public.posts(created_at desc);
create index posts_user_created_at_idx on public.posts(user_id, created_at desc);
create index posts_cafe_created_at_idx on public.posts(cafe_id, created_at desc);
create index posts_product_created_at_idx on public.posts(product_id, created_at desc);
create index upranks_post_created_at_idx on public.upranks(post_id, created_at desc);
create index comments_post_created_at_idx on public.comments(post_id, created_at desc);
create index suggestions_status_created_at_idx on public.suggestions(status, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger cafes_set_updated_at
before update on public.cafes
for each row execute function public.set_updated_at();

create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

create trigger posts_set_updated_at
before update on public.posts
for each row execute function public.set_updated_at();

create trigger comments_set_updated_at
before update on public.comments
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace view public.product_rankings as
with post_stats as (
  select
    p.product_id,
    count(distinct p.id) as post_count,
    avg(p.rating) filter (where p.rating is not null) as average_rating,
    count(distinct u.id) as uprank_count,
    count(distinct c.id) filter (where c.is_hidden = false) as comment_count
  from public.posts p
  left join public.upranks u on u.post_id = p.id
  left join public.comments c on c.post_id = p.id
  where p.is_hidden = false
  group by p.product_id
)
select
  products.id as product_id,
  products.cafe_id,
  products.name as product_name,
  products.slug as product_slug,
  products.category,
  cafes.name as cafe_name,
  cafes.slug as cafe_slug,
  coalesce(post_stats.post_count, 0) as post_count,
  coalesce(round(post_stats.average_rating::numeric, 2), 0) as average_rating,
  coalesce(post_stats.uprank_count, 0) as uprank_count,
  coalesce(post_stats.comment_count, 0) as comment_count,
  (
    coalesce(post_stats.average_rating, 0) * 20
    + coalesce(post_stats.uprank_count, 0) * 2
    + coalesce(post_stats.comment_count, 0)
  )::numeric(12, 2) as score
from public.products
join public.cafes on cafes.id = products.cafe_id
left join post_stats on post_stats.product_id = products.id
where products.status = 'active'
  and cafes.status = 'active';

create or replace view public.weekly_product_rankings as
with recent_posts as (
  select *
  from public.posts
  where is_hidden = false
    and created_at >= now() - interval '7 days'
),
recent_stats as (
  select
    products.id as product_id,
    count(distinct recent_posts.id) as recent_post_count,
    count(distinct upranks.id) filter (
      where upranks.created_at >= now() - interval '7 days'
    ) as recent_uprank_count,
    count(distinct comments.id) filter (
      where comments.created_at >= now() - interval '7 days'
        and comments.is_hidden = false
    ) as recent_comment_count
  from public.products
  left join recent_posts on recent_posts.product_id = products.id
  left join public.posts all_posts on all_posts.product_id = products.id
  left join public.upranks on upranks.post_id = all_posts.id
  left join public.comments on comments.post_id = all_posts.id
  group by products.id
)
select
  products.id as product_id,
  products.cafe_id,
  products.name as product_name,
  products.slug as product_slug,
  products.category,
  cafes.name as cafe_name,
  cafes.slug as cafe_slug,
  coalesce(recent_stats.recent_post_count, 0) as recent_post_count,
  coalesce(recent_stats.recent_uprank_count, 0) as recent_uprank_count,
  coalesce(recent_stats.recent_comment_count, 0) as recent_comment_count,
  (
    coalesce(recent_stats.recent_uprank_count, 0) * 3
    + coalesce(recent_stats.recent_comment_count, 0)
    + coalesce(recent_stats.recent_post_count, 0) * 2
  )::numeric(12, 2) as weekly_score
from public.products
join public.cafes on cafes.id = products.cafe_id
left join recent_stats on recent_stats.product_id = products.id
where products.status = 'active'
  and cafes.status = 'active';

alter table public.profiles enable row level security;
alter table public.cafes enable row level security;
alter table public.products enable row level security;
alter table public.posts enable row level security;
alter table public.upranks enable row level security;
alter table public.comments enable row level security;
alter table public.suggestions enable row level security;
alter table public.saved_posts enable row level security;
alter table public.follows enable row level security;
alter table public.reports enable row level security;

create policy "Profiles are publicly readable"
on public.profiles for select
using (true);

create policy "Users can insert their own profile"
on public.profiles for insert
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles for update
using (auth.uid() = id or public.is_admin())
with check (auth.uid() = id or public.is_admin());

create policy "Active cafes are publicly readable"
on public.cafes for select
using (status = 'active' or owner_user_id = auth.uid() or public.is_admin());

create policy "Authenticated users can suggest cafes"
on public.cafes for insert
with check (auth.uid() is not null and status = 'pending');

create policy "Admins and owners can update cafes"
on public.cafes for update
using (public.is_admin() or owner_user_id = auth.uid())
with check (public.is_admin() or owner_user_id = auth.uid());

create policy "Active products are publicly readable"
on public.products for select
using (
  status = 'active'
  or public.is_admin()
  or exists (
    select 1 from public.cafes
    where cafes.id = products.cafe_id
      and cafes.owner_user_id = auth.uid()
  )
);

create policy "Authenticated users can suggest products"
on public.products for insert
with check (auth.uid() is not null and status = 'pending');

create policy "Admins and owners can update products"
on public.products for update
using (
  public.is_admin()
  or exists (
    select 1 from public.cafes
    where cafes.id = products.cafe_id
      and cafes.owner_user_id = auth.uid()
  )
)
with check (
  public.is_admin()
  or exists (
    select 1 from public.cafes
    where cafes.id = products.cafe_id
      and cafes.owner_user_id = auth.uid()
  )
);

create policy "Visible posts are publicly readable"
on public.posts for select
using (is_hidden = false or user_id = auth.uid() or public.is_admin());

create policy "Authenticated users can create posts"
on public.posts for insert
with check (auth.uid() = user_id);

create policy "Users can update their own posts"
on public.posts for update
using (auth.uid() = user_id or public.is_admin())
with check (auth.uid() = user_id or public.is_admin());

create policy "Users can delete their own posts"
on public.posts for delete
using (auth.uid() = user_id or public.is_admin());

create policy "Upranks are readable"
on public.upranks for select
using (true);

create policy "Users can create their own upranks"
on public.upranks for insert
with check (auth.uid() = user_id);

create policy "Users can delete their own upranks"
on public.upranks for delete
using (auth.uid() = user_id);

create policy "Visible comments are readable"
on public.comments for select
using (is_hidden = false or user_id = auth.uid() or public.is_admin());

create policy "Authenticated users can create comments"
on public.comments for insert
with check (auth.uid() = user_id);

create policy "Users can update their own comments"
on public.comments for update
using (auth.uid() = user_id or public.is_admin())
with check (auth.uid() = user_id or public.is_admin());

create policy "Users can delete their own comments"
on public.comments for delete
using (auth.uid() = user_id or public.is_admin());

create policy "Users can create suggestions"
on public.suggestions for insert
with check (auth.uid() = user_id and status = 'pending');

create policy "Users can read their own suggestions"
on public.suggestions for select
using (auth.uid() = user_id or public.is_admin());

create policy "Admins can update suggestions"
on public.suggestions for update
using (public.is_admin())
with check (public.is_admin());

create policy "Users can read their own saved posts"
on public.saved_posts for select
using (auth.uid() = user_id);

create policy "Users can save posts"
on public.saved_posts for insert
with check (auth.uid() = user_id);

create policy "Users can unsave posts"
on public.saved_posts for delete
using (auth.uid() = user_id);

create policy "Follows are publicly readable"
on public.follows for select
using (true);

create policy "Users can create their own follows"
on public.follows for insert
with check (auth.uid() = follower_user_id);

create policy "Users can delete their own follows"
on public.follows for delete
using (auth.uid() = follower_user_id);

create policy "Users can create reports"
on public.reports for insert
with check (auth.uid() = reporter_user_id);

create policy "Users can read their own reports"
on public.reports for select
using (auth.uid() = reporter_user_id or public.is_admin());

create policy "Admins can update reports"
on public.reports for update
using (public.is_admin())
with check (public.is_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'post-images',
  'post-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

create policy "Post images are publicly readable"
on storage.objects for select
using (bucket_id = 'post-images');

create policy "Users can upload post images to own folder"
on storage.objects for insert
with check (
  bucket_id = 'post-images'
  and auth.uid()::text = split_part(name, '/', 1)
);

create policy "Users can update own post images"
on storage.objects for update
using (
  bucket_id = 'post-images'
  and auth.uid()::text = split_part(name, '/', 1)
)
with check (
  bucket_id = 'post-images'
  and auth.uid()::text = split_part(name, '/', 1)
);

create policy "Users can delete own post images"
on storage.objects for delete
using (
  bucket_id = 'post-images'
  and auth.uid()::text = split_part(name, '/', 1)
);
