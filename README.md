# @walr-labs/ui - ARCHIVED ⚠️

> **This repository has been archived and is no longer maintained.**
> 
> The UI package has been moved into the main platform monorepo.

## New Location

**Repository:** https://github.com/walr-tech/labs-walr-platform

**Package location:** `packages/ui/`

## For Consumers

The package is now published to **GitHub Packages** instead of git tags.

### Installation

1. **Create `.npmrc` in your project:**
   ```
   @walr-labs:registry=https://npm.pkg.github.com
   ```

2. **Set up GitHub token:**
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```
   
   Or add to `.npmrc` (don't commit!):
   ```
   //npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
   ```

3. **Install via npm:**
   ```bash
   pnpm install @walr-labs/ui@^2.1.0
   ```

### Usage

Usage remains the same:

```tsx
import { Header, Button, Card, CardContent, cn } from '@walr-labs/ui'
```

```css
@import "@walr-labs/ui/styles/globals.css";
```

## Migration Guide

### For Lab Apps

1. Add `.npmrc` with GitHub Packages registry
2. Update `package.json`:
   ```json
   {
     "dependencies": {
       "@walr-labs/ui": "^2.1.0"
     }
   }
   ```
3. Run `pnpm install`

### For Platform Development

The platform now uses a monorepo structure:

```bash
git clone https://github.com/walr-tech/labs-walr-platform.git
cd labs-walr-platform
pnpm install
pnpm run dev:all  # Run shell + UI in watch mode
```

## Documentation

- [Platform README](https://github.com/walr-tech/labs-walr-platform)
- [Architecture Overview](https://github.com/walr-tech/labs-walr-platform/blob/main/docs/ARCHITECTURE.md)
- [Contributing Guide](https://github.com/walr-tech/labs-walr-platform/blob/main/docs/CONTRIBUTING.md)

## Questions?

Please open issues in the new repository: https://github.com/walr-tech/labs-walr-platform/issues

---

**Archived:** December 27, 2025  
**Reason:** Migrated to monorepo for better development workflow
