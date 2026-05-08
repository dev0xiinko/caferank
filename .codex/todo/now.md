# Now

## Current State

- Backend foundation exists with Supabase schema, RLS, SSR clients, validators, and typed helpers.
- Approved frontend direction exists with a CafeRank-owned visual system.
- Mock-only routes exist for feed, explore, create, rankings, cafe profile, and user profile.
- App is mobile-first but now has a desktop/tablet shell with side panels.

## Next Work

- [ ] Review approved UI on mobile, tablet, and desktop widths.
- [ ] Refine reusable UI components before backend wiring.
- [ ] Add auth screens using the same CafeRank visual system.
- [ ] Add Supabase auth flow.
- [ ] Replace mock feed data with read queries.
- [ ] Wire create-post flow after auth is stable.

## Decisions To Keep

- Do not clone social app UI patterns directly.
- Keep Uprank as the primary action.
- Keep product and cafe context visible on photo cards.
- Keep backend wiring out of the current mock UI until screens settle.
