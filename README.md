# QuantsEdge Website (Next.js + React + TypeScript)

Modern, professional website for QuantsEdge built with Next.js, React, TypeScript, and Framer Motion. Deployed via Netlify with static generation.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS with custom QuantsEdge design system
- 🎭 Framer Motion animations
- 📱 Mobile-first responsive design
- ♿ Accessibility optimized
- 🔧 TypeScript for type safety
- 📊 Animated performance counters
- 🌟 Glass morphism UI effects

## Development

### Prerequisites

- Node.js 18+ (recommended: use `.nvmrc`)
- pnpm (recommended package manager)

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
# Development
pnpm run dev          # Start dev server

# Building
pnpm run build        # Production build
pnpm run start        # Start production server

# Code Quality
pnpm run lint         # ESLint with auto-fix
pnpm run typecheck    # TypeScript checking
pnpm run format       # Prettier formatting

# Dependency Management
pnpm ci               # Clean install (CI/CD)
```

### Environment Variables

```bash
cp .env.sample .env.local
```

- `REQUEST_ACCESS_WEBHOOK_URL` – optional Slack (or generic HTTP) webhook that receives request-access submissions when using the API route. The default site flow opens the visitor's mail client to email admin@quantsedge.ai directly.

## Deployment (Netlify)

The site automatically deploys via Netlify when pushing to the main branch:

- **Build command**: `pnpm run build`
- **Publish directory**: `out`
- **Node version**: 18+ (set in Netlify dashboard)

### Manual Deploy

```bash
# Build for production
pnpm run build

# Deploy the `out` folder to your hosting provider
```

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root layout with fonts & metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── sections/       # Page sections (Performance, Technology, etc.)
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with animations
│   └── ...
├── lib/                # Utilities & static content
│   ├── content.ts      # Structured copy & data definitions
│   ├── constants.ts    # Shared constants/events
│   └── utils.ts        # Class name utilities
public/                 # Static assets
├── images/             # Team photos & assets
├── favicon.svg         # Site favicon
├── logo.svg            # QuantsEdge logo
└── og-image.png        # Open Graph image
```

## Design System

### Colors

- **Accent**: #00FFC6 (QuantsEdge brand green)
- **Background**: #000000 (Pure black)
- **Cards**: #0F0F0F (Dark gray)
- **Text**: #FFFFFF, #999999, #666666 (Primary, secondary, tertiary)

### Typography

- **Primary**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Display text**: Custom font weights & spacing

### Components

- Glass morphism effects
- Subtle hover animations
- Mobile-first responsive design
- Accessibility-focused interactions

## Performance

- Static generation for optimal loading
- Optimized fonts with `display: swap`
- Framer Motion with reduced motion support
- Responsive images and modern formats

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Contributing

1. Follow QuantsEdge coding conventions
2. Run `pnpm run lint` and `pnpm run typecheck`
3. Test on mobile and desktop
4. Ensure accessibility compliance

## License

MIT License - see LICENSE file for details.
