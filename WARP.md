# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js documentation site using Nextra (a documentation theme) for the Transfer Agent Protocol. It documents smart contracts, OCF format, and development workflows for the tap-cap-table project.

## Common Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start local development server (runs Next.js dev server on port 3000)
- `pnpm build` - Build production site
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint on all files (includes .mdx files)
- `pnpm format` - Format code with Prettier

## Code Architecture

### Documentation Framework
- Uses Nextra theme for Next.js to create documentation site
- All documentation content lives in `src/pages/` as MDX files
- Navigation structure defined by `_meta.json` files in each directory
- `theme.config.jsx` configures site branding, footer, SEO metadata, and Open Graph tags

### Documentation Structure
Four main documentation sections:
1. **Introduction** (`index.mdx`) - Overview of Transfer Agent Protocol
2. **Development** (`development/`) - Installation and setup guides
3. **Protocol Specification** (`protocol/`) - Smart contract specs (OCF, CapTable, Structs, Stock functions)
4. **Features** (`features/`) - Feature documentation (Issuer, StockClass, Stakeholder, Transactions, etc.)

### MDX Components
- MDX files support React components from `nextra/components`:
  - `Cards`, `Card` - Card grid layouts
  - `Callout` - Info/warning boxes with emojis
  - `FileTree` - Visual directory structure representation
- Custom app entry point in `src/_app.mdx`

### Code Quality
- ESLint configured with special rules for MDX files (`plugin:mdx/recommended`)
- Prettier configured with 4-space tabs, 150 char line width
- CI runs linting on every push via GitHub Actions

## Development Notes

- **Package manager**: pnpm - `pnpm-lock.yaml` present (configured without corepack per user preference)
- **Deployment**: Automatically deployed to Vercel when PRs merge to `main` branch
- **TypeScript**: Configured but strict mode is off
- **Node.js**: Latest LTS version used in CI
- **Dependencies**: 
  - Next.js 14.2.3
  - Nextra 2.13.4
  - React 18.3.1

## File Organization

```
src/
├── _app.mdx                    # Custom app entry point
└── pages/
    ├── _meta.json              # Root navigation config
    ├── index.mdx               # Homepage/introduction
    ├── development/            # Dev setup & deployment guides
    │   ├── _meta.json
    │   ├── install.mdx
    │   ├── setup.mdx
    │   ├── factory-deploy.mdx
    │   └── cap-table-deploy.mdx
    ├── protocol/               # Protocol specifications
    │   ├── _meta.json
    │   ├── tap-ocf.mdx
    │   ├── tap-cap-table.mdx
    │   ├── structs-lib.mdx
    │   └── stock-lib.mdx
    └── features/               # Feature documentation
        ├── _meta.json
        ├── issuer.mdx
        ├── stakeholder.mdx
        ├── stock-class.mdx
        ├── transactions.mdx
        └── ...

public/                         # Static assets (images, manifest, favicons)
theme.config.jsx                # Nextra theme configuration
next.config.js                  # Next.js configuration with Nextra
```

## Related Repositories

This documentation site references the main [tap-cap-table](https://github.com/transfer-agent-protocol/tap-cap-table) repository which contains:
- Smart contracts in `chain/src/` (Solidity with Foundry)
- OCF schema as submodule in `ocf/`
- Database schema in `src/db/`
- Server implementation in `src/routes/`
