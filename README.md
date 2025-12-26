# @walr-labs/ui

Shared design system and UI components for Walr AI Labs applications.

## Installation

```bash
npm install github:walr-tech/labs-walr-ui#v2.0.0
```

Or add to package.json:
```json
{
  "dependencies": {
    "@walr-labs/ui": "github:walr-tech/labs-walr-ui#v2.0.0"
  }
}
```

The package will automatically build when installed from GitHub via the `prepare` script.

## What's New in v2.0.0

**BREAKING CHANGE:** The package no longer commits build artifacts (`dist/`) to Git. 
Instead, it builds automatically when you install from GitHub. This happens transparently 
via npm's `prepare` lifecycle hook.

**Requirements:**
- Node.js 18+ (already required by Next.js 14+)
- npm/pnpm/yarn (any modern version)

**Install time:** First install adds ~10-20 seconds for the build. Subsequent installs 
use cached builds.

## Usage

### Import Components

```tsx
import { Header, Button, Card, CardContent, cn } from '@walr-labs/ui'
```

### Import Styles

In your `globals.css`:
```css
@import "tailwindcss";
@import "@walr-labs/ui/styles/globals.css";
```

### Available Components

| Component | Description |
|-----------|-------------|
| `Header` | Shared navigation header with logo and user avatar |
| `BackNav` | Back navigation bar for lab apps (local dev navigation) |
| `ThemeProvider` | Wrapper for next-themes ThemeProvider |
| `ThemeToggle` | Theme toggle button (light/dark mode) |
| `Button` | Styled button with variants (default, outline, ghost, destructive, secondary, link) |
| `Card` | Card container with CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardAction |
| `Avatar` | User avatar with image and fallback support (AvatarImage, AvatarFallback) |
| `Badge` | Badge component with variants (default, secondary, destructive, outline) |
| `Input` | Styled input field with focus states and validation support |
| `Label` | Accessible label component (Radix UI based) |
| `Select` | Full-featured select dropdown with SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, SelectValue |

### Utilities

| Utility | Description |
|---------|-------------|
| `cn()` | Tailwind class merge utility (clsx + tailwind-merge) |

## Theme

The package provides CSS variables for a dark-first theme:

- Background: Near-black (`#09090b`)
- Primary: Cyan (`#06b6d4`)
- Cards: Zinc-900
- Borders: Zinc-800

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode
npm run dev
```

## Local Development with Consumer Apps

Use **yalc** to test changes locally before releasing. This copies built files (not symlinks) which works with Next.js Turbopack.

### Setup (one-time)
```bash
npm install -g yalc
```

### Workflow
```bash
# 1. Build and publish to local yalc store
cd labs-walr-ui
pnpm run build
yalc publish

# 2. Add to consumer app
cd ../labs-sample-pricing-assist  # or any consumer
yalc add @walr-labs/ui

# 3. Start dev servers
pnpm run dev
```

### After Making UI Changes
```bash
cd labs-walr-ui
pnpm run build && yalc push
# Refresh browser to see changes
```

### Before Committing Consumer App
```bash
cd labs-sample-pricing-assist
yalc remove @walr-labs/ui
pnpm install
```

> **Note:** Consumer apps have a husky pre-commit hook that blocks commits with yalc references.

## Releasing New Versions

1. Make changes and commit
2. Update version in package.json
3. Tag the release: `git tag v2.x.x`
4. Push: `git push origin main --tags`
5. Consumer apps update their dependency version

