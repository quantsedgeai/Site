# QuantsEdge Brand Guidelines

_Premium Crypto Trading Platform_

## Typography

### Primary Font Stack

- **Display/Headlines**: Inter (Black weight, -0.045em tracking)
- **Body Text**: Inter (Regular/Medium/Semibold)
- **Trading Data/Metrics**: JetBrains Mono (precise numerical display)
- **Fallbacks**: system-ui, sans-serif / SF Mono, Monaco, monospace

### Font Hierarchy

- **Display XL**: clamp(3rem, 8vw, 8rem) - Hero headlines, major impact
- **Display LG**: clamp(2.5rem, 6vw, 6rem) - Section headlines
- **Display MD**: clamp(2rem, 4vw, 4rem) - Subsection headlines
- **Heading**: 1.5rem-2.25rem - Card titles, feature headlines
- **Body Large**: 18px - Important descriptions, feature details
- **Body**: 16px - Standard text, readable content
- **Body Small**: 14px - Secondary information, metadata
- **Caption**: 12px - Fine print, disclaimers, technical details

### Professional Typography Features

- Enabled: `kern`, `liga`, `calt` (kerning, ligatures, contextual alternates)
- Display fonts use `ss01` stylistic set for premium appearance
- Monospace uses `zero` (slashed zero) and `ss02` for trading precision
- Tabular numbers for consistent data alignment
- Precise letter-spacing for technical readability

## Color Palette

### Core Brand Identity

- **Signature Cyan**: `#00FFC6` (primary brand color, call-to-actions, highlights)
- **Cyan Dark**: `#00D4AA` (hover states, interactive elements)
- **Cyan Darker**: `#00B896` (pressed states, active elements)
- **Cyan Scale**: 50-900 (complete tonal range for sophisticated applications)

### Professional Dark Foundation

- **True Black**: `#000000` (primary backgrounds, maximum contrast)
- **Rich Black**: `#0A0A0A` (card backgrounds, subtle depth)
- **Elevated Black**: `#0F0F0F` (modal overlays, floating elements)
- **Charcoal**: `#1A1A1A` (section dividers, subtle backgrounds)
- **Graphite**: `#2A2A2A` (border elements, inactive states)
- **Slate**: `#3A3A3A` (disabled states, placeholder text)

### Premium Text Hierarchy

- **Pure White**: `#FFFFFF` (headlines, critical information, max readability)
- **High Contrast**: `#F5F5F5` (primary body text, important content)
- **Medium Contrast**: `#B3B3B3` (secondary text, descriptions, metadata)
- **Low Contrast**: `#737373` (captions, disclaimers, subtle information)

### Trading Interface Colors

- **Bull Green**: `#00FF88` (positive P&L, gains, buy actions)
- **Bear Red**: `#FF4444` (negative P&L, losses, sell actions)
- **Warning Amber**: `#FFB800` (alerts, pending states, cautions)
- **Info Blue**: `#00B4FF` (information, neutral states, links)

### Supporting Professional Palette

- **Premium Purple**: `#8B5CF6` (premium features, pro indicators)
- **Deep Blue**: `#2563EB` (trust signals, security indicators)
- **Emerald**: `#10B981` (success states, confirmations)
- **Rose**: `#F43F5E` (errors, critical alerts, deletions)

## Visual Effects

### Professional Glass Morphism

- **Trading Card Glass**: 8-12% white overlay, 60px backdrop blur, refined edge treatment
- **Premium Modal Glass**: Gradient borders, 200% saturation, enhanced depth blur
- **Interactive Glass**: Subtle opacity shifts, precise glow effects, elevated depth shadows
- **Data Panel Glass**: Ultra-clear backdrop for readable trading data overlays

### Sophisticated Gradients

- **Hero Text Gradient**: 92deg linear from white → cyan → white (brand emphasis)
- **Trading Data Gradient**: Subtle radial gradients for P&L visualization
- **Background Ambience**: Ultra-subtle radial gradients (2-5% opacity) for depth
- **Premium Border Gradients**: Animated 135deg gradients for pro-tier elements
- **Performance Visualization**: Dynamic gradients reflecting real-time data states

### Professional Lighting System

- **Elevated Card Shadows**: `0 12px 48px rgba(0,0,0,0.4)` with cyan accent glow
- **Primary Button Shadows**: `0 6px 24px rgba(0,255,198,0.25)` for CTAs
- **Interactive Element Shadows**: `0 4px 16px rgba(0,255,198,0.15)` for hover states
- **Trading Widget Shadows**: `0 8px 32px rgba(0,0,0,0.6)` for data importance
- **Modal Overlay Shadows**: `0 20px 80px rgba(0,0,0,0.8)` for focus isolation

## Interactive Elements

### Button Hierarchy

- **Primary CTA**: Signature cyan background, pure black text, prominent glow shadow, confident hover lift
- **Secondary Action**: Transparent background, white text, cyan border, refined hover treatment
- **Trading Action**: Context-aware colors (bull green/bear red), high-contrast text, instant feedback
- **Tertiary/Ghost**: Subtle background, medium contrast text, minimal hover effect
- **Icon Buttons**: Square/circular, consistent sizing, precise hover states

### Professional Hover States

- **Desktop Hover**: 3px lift, 1.02 scale, enhanced shadows with cyan glow
- **Mobile Touch**: Gentle scale (0.98), haptic feedback simulation, instant visual response
- **Active Press**: Scale down to 0.96-0.98, darker shadow, tactile feel
- **Disabled States**: 50% opacity, no interaction, clear visual hierarchy

### Trading Interface Cards

- **Market Data Cards**: Glass morphism with ultra-clear data readability
- **Portfolio Cards**: Elevated shadows, P&L color coding, responsive hover depth
- **Chart Containers**: Minimal borders, maximum content focus, seamless interactions
- **Control Panels**: Organized layout, logical grouping, professional spacing

### Premium Magnetic Effects

- **Desktop**: 3px hover lift with 1.02 scale, magnetic attraction feel
- **Mobile**: Optimized for touch, no hover effects, press feedback only
- **Transitions**: Smooth cubic-bezier (0.4, 0, 0.2, 1), professional timing
- **Accessibility**: Respect reduced motion, clear focus indicators

## Animation & Motion

### Timing Functions

- **Primary**: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth ease)
- **Spring**: For magnetic effects and hover states
- **Duration**: 300ms standard, 600ms for complex animations

### Key Animations

- **Gradient Shift**: 8s infinite background position animation
- **Float**: 6s vertical oscillation for floating elements
- **Shimmer**: 3s loading state animation
- **Fade In Up**: 0.8s entrance animation with 20px vertical offset

### Stagger Effects

- 100ms incremental delays for list items
- GPU-accelerated with `transform3d` and `will-change`

## Layout & Spacing

### Container Widths

- **Max Width**: 7xl (80rem / 1280px)
- **Responsive Padding**: 6px mobile, scales up
- **Section Padding**: 24px vertical (py-24)

### Grid Systems

- CSS Grid for complex layouts
- Flexbox for simple alignment
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

## Content Guidelines

### Headlines

- Use display font stack with black weight
- Apply tight letter spacing (-0.045em)
- Implement responsive font sizing with clamp()
- Add gradient text effects for emphasis

### Body Text

- Inter regular/medium for readability
- Maintain comfortable line heights (1.5-1.6)
- Use text hierarchy (primary/secondary/tertiary)

### Technical Content

- JetBrains Mono for code, metrics, and data
- Enable slashed zero for number clarity
- Apply tight tracking for technical precision

## Brand Voice & Tone

### Technical Authority

- Precise, evidence-based language
- No marketing hyperbole or superlatives
- Focus on capabilities and measurable outcomes

### Professional Clarity

- Direct, concise communication
- Avoid jargon without context
- Explain complex concepts accessibly

### Innovation Focus

- Emphasize cutting-edge technology (AI/ML, Bayesian optimization)
- Highlight systematic approaches
- Position as enterprise-grade solution

## Implementation Notes

### Performance

- Use `will-change` sparingly for active animations
- Implement GPU acceleration with `transform3d(0,0,0)`
- Optimize font loading with appropriate `font-display` values

### Accessibility

- Maintain WCAG 2.1 AA contrast ratios
- Provide focus indicators with accent color
- Support reduced motion preferences
- Implement proper touch targets (44px minimum)

### Cross-Platform

- Test glass morphism fallbacks for older browsers
- Ensure touch interactions work on mobile devices
- Optimize animations for different screen sizes

---

**Last Updated**: December 2024
**Version**: 1.0
**Contact**: admin@quantsedge.ai
