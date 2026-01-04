# Portfolio Ktauchert V2 - AI Assistant Guidelines

## Project Overview

This is a Next.js 15 portfolio website with Sanity CMS integration, React Three.js 3D elements, and bilingual support (English/German). The site follows a component-based architecture with Tailwind CSS v4 styling.

## Architecture Patterns

### Content Management Flow

- **Sanity CMS**: All content is managed through Sanity Studio at `/studio` route
- **Data Fetching**: Server-side data fetching in page components using `client.fetch()` with 300s revalidation
- **Schema Pattern**: All content types include `lang` field for internationalization
- **Query Pattern**: Always pass `{ lang: "en" }` parameter and use `{ next: { revalidate: 300 } }` for caching

Example query pattern:

```typescript
const query = `*[_type == "hero" && lang == $lang][0]{ title, content, "imageUrl": image.asset->url }`;
const data = await client.fetch(
  query,
  { lang: "en" },
  { next: { revalidate: 300 } }
);
```

### Component Organization

- **Section Components**: Each main section (Hero, About, Skills, Experience, Projects, Contact) has a `*Main.tsx` component
- **Sub-components**: Break down into smaller, focused components within section folders
- **Data Props**: Pass fetched data as props from page components to section components
- **Image Optimization**: Use Next.js `Image` component with Sanity image URLs

### Styling Conventions

- **Tailwind v4**: Uses `@import "tailwindcss"` and custom theme in `globals.css`
- **Color System**: Custom color palette defined in CSS custom properties (cyan, orange, brown variants)
- **Typography**: Two Google Fonts - Josefin Sans (headings) and Nunito (body), defined in layout
- **Responsive**: Mobile-first approach with specific breakpoints for navbar behavior

### Animation & Interactivity

- **Framer Motion**: Use the `motion` library for animations (note: using `motion` not `framer-motion`)
- **Animation Utils**: `src/utils/variants.ts` provides `fadeIn()` function with direction and delay parameters
- **3D Components**: React Three Fiber components in `src/components/models/` with auto-rotation and hover effects

## Development Workflow

### File Structure Conventions

- **Absolute Imports**: Use `@/` alias for `src/` directory
- **Component Naming**: PascalCase with descriptive prefixes (e.g., `HeroMain`, `NavbarLinks`)
- **Type Safety**: TypeScript strict mode enabled, define interfaces for all data structures

### Sanity Integration

- **Schema Location**: All schema types in `src/sanity/schemaTypes/`
- **Client Configuration**: Configured for CDN usage with environment variables
- **Image Handling**: Use `"imageUrl": image.asset->url` pattern in queries
- **Portable Text**: Use `PortableTextWrapper` component for rich text content with custom styling

### Content Patterns

- **Bilingual Support**: All content types have `lang` field with "en" | "de" options
- **Image Assets**: Sanity images with hotspot enabled, Next.js Image optimization configured
- **Rich Content**: Use PortableText for complex content with custom component styling

## Key Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint checking
```

## Critical Dependencies

- **CMS**: `next-sanity` for Sanity integration
- **3D**: `@react-three/fiber`, `@react-three/drei`, `three`
- **Animation**: `motion` (Framer Motion)
- **Styling**: `tailwindcss` v4, `sass`
- **Content**: `@portabletext/react` for rich text

## Common Patterns

- Server components for data fetching, client components for interactivity
- Sanity Studio embedded at `/studio` route using catch-all dynamic routing
- 3D models stored in `/public` and loaded with `useGLTF` hook
- Animation variants defined centrally and applied consistently
- Custom PortableText components for branded rich text styling

When adding new features, follow the established patterns for data fetching, component organization, and styling conventions.
