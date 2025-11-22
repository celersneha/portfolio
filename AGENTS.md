# AI Coding Agent Rules for Sneha-Portfolio Project

## Project Overview

This is a modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. It showcases full-stack development skills with a focus on performance, SEO, and user experience.

## Core Technologies & Frameworks

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Deployment**: Vercel

## Project Structure Rules

Follow this exact folder structure:

```
src/
  app/                    # Next.js App Router pages
    globals.css          # Global styles
    layout.tsx           # Root layout
    page.tsx             # Home page
    [route]/             # Dynamic routes
  components/             # Reusable components
    ui/                  # shadcn/ui components
    [feature]/           # Feature-specific components
  lib/                   # Utilities and configurations
    utils.ts             # cn() utility for classnames
    [feature].ts         # Feature utilities
  actions/               # Server actions
    [feature]/           # Feature-specific actions
```

## Development Rules

### 1. Package Management

- **Always use Bun** as the package manager
- **Always check existing dependencies** before installing new ones
- Use `bun add` for new packages, `bun remove` for removal
- Prefer minimal dependencies, only add what's necessary

### 2. Component Development

- **Always use shadcn/ui components** for UI elements
- **Always create reusable components** - avoid code duplication
- Use TypeScript interfaces for component props
- Follow the established naming conventions
- Use the `cn()` utility from `@/lib/utils` for conditional classes

### 3. Styling Guidelines

- Use Tailwind CSS classes with CSS variables for theming
- Follow the design system established with shadcn/ui
- Use responsive design patterns (sm:, md:, lg:)
- Implement dark/light mode support where appropriate
- Use Framer Motion for animations with consistent timing

### 4. TypeScript Usage

- Strict TypeScript configuration
- Define interfaces for all data structures
- Use proper typing for API responses and component props
- Avoid `any` types - use proper type definitions

### 5. Server Actions

- Use Next.js Server Actions for data fetching and mutations
- Place actions in `src/actions/[feature]/` directories
- Handle errors appropriately with try/catch blocks
- Use environment variables for API keys and sensitive data

### 6. SEO & Performance

- Implement comprehensive metadata for each page
- Use Next.js Image component for optimized images
- Include proper Open Graph and Twitter Card meta tags
- Optimize fonts with `next/font/google`
- Use semantic HTML elements

### 7. Code Quality

- Follow ESLint and TypeScript rules
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused on single responsibilities
- Use proper error handling

### 8. Git & Deployment

- Use descriptive commit messages
- Deploy to Vercel with proper configuration
- Use environment variables for different environments
- Test builds locally before deployment

## Specific Implementation Patterns

### Component Structure

```tsx
interface ComponentProps {
  // Define props interface
}

export function ComponentName({ prop }: ComponentProps) {
  return (
    <div className={cn("base-classes", conditionalClass)}>
      {/* Component content */}
    </div>
  );
}
```

### Server Action Pattern

```typescript
"use server";

export async function actionName(data: FormData) {
  try {
    // Action logic
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### Styling Pattern

```tsx
// Use CSS variables for theming
className="bg-background text-foreground border-border"

// Responsive design
className="text-sm md:text-base lg:text-lg"

// Conditional styling
className={cn(
  "base-styles",
  isActive && "active-styles",
  variant === "primary" && "primary-styles"
)}
```

## Dependencies to Always Check Before Adding New Ones

- **UI Components**: Check if shadcn/ui has the component first
- **Icons**: Use Lucide React or React Icons
- **Animations**: Use Framer Motion
- **Forms**: Use React Hook Form with proper validation
- **State Management**: Use React hooks or context as needed
- **Data Fetching**: Use Server Actions or SWR for client-side

## Performance Considerations

- Use Next.js Image component for images
- Implement proper code splitting
- Optimize bundle size
- Use lazy loading for heavy components
- Minimize re-renders with proper key props

## Testing & Validation

- Test components in different screen sizes
- Validate TypeScript types
- Check accessibility (WCAG guidelines)
- Test in both light and dark modes
- Verify SEO meta tags

## File Naming Conventions

- Components: PascalCase (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Pages: kebab-case for routes, PascalCase for components
- Folders: kebab-case for features, camelCase for utilities

## Responsive Design & Layout Rules

### Layout Structure (Inspired by aulianza.id)

The project follows a **sticky sidebar** layout pattern with optimal responsiveness:

#### Desktop Layout (lg and above)

```tsx
<div className="mx-auto max-w-4xl">
  <div className="flex flex-col lg:flex-row lg:gap-8 lg:py-6">
    <Sidebar /> {/* lg:w-1/5 - Sticky sidebar */}
    <main className="lg:flex-1 lg:max-w-4xl">
      {" "}
      {/* Main content area */}
      {children}
    </main>
  </div>
</div>
```

#### Key Layout Principles:

1. **Container Width**: Use `mx-auto max-w-4xl` for consistent page width
2. **Sidebar Width**: Desktop sidebar is `lg:w-1/5` with sticky positioning
3. **Content Width**: Main content is `lg:flex-1 lg:max-w-4xl` for optimal reading
4. **Spacing**: Use `lg:gap-8` between sidebar and content
5. **Padding**: Apply `lg:py-6` to the container for vertical spacing

### Sidebar Responsiveness Rules

#### Desktop Sidebar (lg and above)

- **Position**: `lg:sticky lg:top-0 lg:self-start` - Stays visible while scrolling
- **Width**: Flexible with `lg:w-1/5`
- **Profile Image**: Shrinks on scroll (80px → 60px) for space efficiency
- **Navigation**: Always visible with hover effects and active states
- **Social Links**: Horizontal layout with subtle hover effects

#### Mobile Sidebar (below lg)

- **Header**: Fixed header with `fixed z-20 w-full` containing:
  - Small profile image (40px) that disappears when menu is expanded (80px)
  - Profile name and username
  - Hamburger menu button (animated 3-line icon)
- **Menu Behavior**:
  - Expandable menu using AnimatePresence from Framer Motion
  - Smooth slide-down animation
  - Prevents body scroll when open
  - Closes on navigation
- **Background**: `bg-background/95 backdrop-blur-sm` for modern glass effect

### Responsive Breakpoints

Follow Tailwind's default breakpoints:

- `sm`: 640px - Small devices
- `md`: 768px - Medium devices (tablets)
- `lg`: 1024px - Large devices (desktops) - **Main breakpoint for sidebar**
- `xl`: 1280px - Extra large devices
- `2xl`: 1536px - 2X large devices

### Animation & Transition Rules

#### Sidebar Animations

```tsx
// Profile image size transition
style={{
  width: isScrolled ? "60px" : "80px",
  height: isScrolled ? "60px" : "80px",
}}
className="transition-all duration-300"

// Menu expansion animation
<AnimatePresence>
  {expandMenu && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>

// Navigation item hover
className="group-hover:-rotate-12 transition-transform duration-300"
```

#### Active State Animations

- Use `animate-pulse` for active route icons
- Apply `group-hover:-rotate-12` for playful hover effects
- Smooth color transitions with `transition-colors duration-200`

### Mobile-First Responsive Patterns

#### Always Start Mobile

```tsx
// Base styles (mobile)
className = "p-4 text-sm";

// Then add responsive modifications
className = "p-4 text-sm md:p-6 md:text-base lg:p-8 lg:text-lg";
```

#### Hide/Show Content

```tsx
// Hidden on desktop, visible on mobile
className = "lg:hidden";

// Visible on desktop, hidden on mobile
className = "hidden lg:block";
```

#### Flexible Layouts

```tsx
// Stack on mobile, row on desktop
className = "flex flex-col lg:flex-row";

// Full width on mobile, constrained on desktop
className = "w-full lg:w-1/2";
```

### Scroll Behavior Rules

#### Tracking Scroll State

```tsx
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

#### Applying Scroll-Based Changes

- Profile image shrinks after 100px scroll
- Sticky sidebar on desktop maintains position
- Smooth transitions for all scroll-triggered changes

### Menu State Management

#### Body Scroll Lock

```tsx
useEffect(() => {
  if (expandMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [expandMenu]);
```

### Active Route Detection

Use Next.js `usePathname()` for accurate active state:

```tsx
const pathname = usePathname();
const isActive = pathname === item.href;
```

### Backdrop & Overlay Effects

```tsx
// Mobile menu backdrop
className = "bg-background/95 backdrop-blur-sm";

// Border styling
className = "border-b border-border";

// Shadow for elevation
className = "shadow-sm lg:shadow-none";
```

### Performance Considerations for Responsive Design

1. **Image Optimization**: Use `priority` prop for above-the-fold images
2. **Conditional Rendering**: Only render mobile/desktop content as needed
3. **Smooth Transitions**: Limit animation duration to 200-300ms
4. **Prevent Layout Shift**: Set explicit widths/heights for transitioning elements

### Testing Responsive Design

Always test at these viewpoints:

- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1024px (Laptop)
- **Large Desktop**: 1920px (Full HD)

### Common Responsive Patterns

```tsx
// Container padding
className = "px-4 md:px-6 lg:px-8";

// Font sizes
className = "text-sm md:text-base lg:text-lg";

// Spacing
className = "space-y-4 md:space-y-6 lg:space-y-8";

// Grid layouts
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";

// Flex direction
className = "flex flex-col md:flex-row gap-4";
```

Remember: This project emphasizes modern web development practices, performance optimization, and excellent user experience. The responsive design should feel native on all devices, with smooth transitions and intuitive navigation patterns. Always prioritize code quality, reusability, and maintainability.
