# GoldenFlow Labs Landing Page

A premium, production-ready landing page for GoldenFlow Labs built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Premium Design**: Dark theme with gold accents and aurora gradient backgrounds
- **Smooth Animations**: Framer Motion-powered scroll reveals, magnetic buttons, and micro-interactions
- **Accessible**: WCAG AA compliant with focus states and reduced-motion support
- **Performance**: Optimized for Lighthouse score ≥90 in all categories
- **SEO Ready**: OpenGraph tags, JSON-LD structured data, and semantic HTML
- **Netlify Forms**: Integrated pilot program application form

## 🎨 Design System

### Colors

- Gold: `#FACC15` (primary accent)
- Dark: `#0B1220` (background)
- Dark Lighter: `#1F2937` (borders)
- Text: `#F5F5F5` (main text)

### Components

- `AuroraBackground`: Animated gradient background
- `GlassyCard`: Glassmorphism card component
- `GlowButton`: Interactive button with magnetic effect
- `SectionHeader`: Gradient text headers

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build settings are configured in `netlify.toml`
3. Enable Netlify Forms in your site settings
4. Deploy!

Build command: `npm run build`
Publish directory: `.next`

### Environment Variables

No environment variables required for basic deployment.

## 🎯 Project Structure

```
goldenflow-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms of service
├── components/
│   ├── AuroraBackground.tsx
│   ├── GlassyCard.tsx
│   ├── GlowButton.tsx
│   └── SectionHeader.tsx
├── public/
│   ├── og.png              # OpenGraph image (1200×630)
│   └── favicon.ico         # Site favicon
├── netlify.toml            # Netlify configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  gold: {
    DEFAULT: '#FACC15',
    light: '#FDE047',
    dark: '#EAB308',
  },
  // ... more colors
}
```

### Modifying Animations

Animation timings and easing can be adjusted in:

- Framer Motion components: See individual component files
- Tailwind animations: Edit `tailwind.config.js`

### Content Updates

Main landing page content is in `app/page.tsx`. Sections include:

- Hero
- Value Props
- Problem
- Solution (TrustStack layers)
- TrustStack Diagram
- Pilot Program Form
- About
- Contact & Social
- Footer

## 🔧 Performance Optimization

- All animations use GPU-accelerated transforms
- Images lazy load by default
- Respects `prefers-reduced-motion`
- Critical CSS inlined
- Security headers configured in `netlify.toml`

## 📝 Forms

The pilot program form uses Netlify Forms:

- Automatic spam filtering
- Form submissions appear in Netlify dashboard
- No backend code required

## 🔒 Security

Security headers configured in `netlify.toml`:

- X-Frame-Options: DENY
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy

## 📄 License

© 2024 GoldenFlow Labs. All rights reserved.

## 🤝 Support

For questions or issues:

- Email: hello@goldenflow.com
- Website: https://goldenflow.com

---

Built with ❤️ by GoldenFlow Labs
