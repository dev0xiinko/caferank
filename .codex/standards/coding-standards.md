# Coding Standards

## TypeScript

Use TypeScript strictly.

Avoid:

```txt
any
unknown without narrowing
large untyped objects
```

Prefer:

```txt
Explicit types
Generated database types
Zod schemas
Reusable interfaces
```

## Components

Rules:

```txt
One component = one responsibility
Keep components small
Use props clearly
Avoid duplicated UI
Use composition
```

## Naming

Use clear names.

Good:

```txt
PostCard
UprankButton
CafeHeader
CreatePostForm
RankingRow
```

Bad:

```txt
Card1
ButtonThing
DataComp
```

## Files

Recommended naming:

```txt
kebab-case for files
PascalCase for React components
camelCase for functions
```

## Server Logic

Do not put database mutation logic directly inside UI components.

Prefer:

```txt
lib/actions/
lib/queries/
lib/validators/
```

## Validation

Validate inputs before database writes.

Use:

```txt
zod
```

## Error Handling

Always handle:

```txt
Loading
Success
Error
Empty state
Unauthorized state
```

## Styling

Use Tailwind.

Avoid:

```txt
Large custom CSS files
Inline styles unless necessary
Random inconsistent colors
```

## Accessibility

```txt
Buttons need labels
Icons need aria-label when icon-only
Inputs need labels
Use readable contrast
Tap targets minimum 44px
```
