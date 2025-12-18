# @walr-labs/ui

Shared design system and UI components for Walr AI Labs applications.

## Installation

```bash
npm install github:walr-tech/labs-walr-ui#v1.0.0
```

Or add to package.json:
```json
{
  "dependencies": {
    "@walr-labs/ui": "github:walr-tech/labs-walr-ui#v1.0.0"
  }
}
```

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
| `Button` | Styled button with variants (default, outline, ghost) |
| `Card` | Card container with CardHeader, CardContent, CardFooter |
| `Avatar` | User avatar with image and fallback support |

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

## Releasing New Versions

1. Make changes and commit
2. Update version in package.json
3. Tag the release: `git tag v1.x.x`
4. Push: `git push origin main --tags`
5. Consumer apps update their dependency version

