# Annimake Studio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)

> A premium beauty & styling studio landing page built with **Next.js 15** and **Tailwind CSS**. Features scroll-triggered animations, parallax effects, and a sophisticated dark aesthetic targeting a luxury clientele.

---

## 🖼️ Pages & Sections

### `/` — Home
- **Hero** — Full-viewport cinematic intro with parallax background and animated text
- **Services Preview** — Staggered card grid showcasing the three service tiers with `ScrollReveal` entrance animations
- **Footer** — Studio branding and contact

### `/galeria` — Gallery
- Visual portfolio of work — hairstyles, makeup, nail art — presented in an editorial grid

### `/servicios` — Services
- Detailed breakdown of service offerings: Maquillaje Profesional, Nail Art & Cuidado, Productos

---

## ✨ Technical Highlights

- 🎬 **Scroll-Triggered Animations** — `ScrollReveal` component wraps content sections for smooth entrance effects with configurable delay
- 🖼️ **Parallax Background** — `BackgroundParallax` component for depth-layered hero imagery
- 🃏 **3D Service Cards** — perspective-tilted cards with hover interactions (`ServiceCard`)
- 🗺️ **SEO-Ready** — `robots.ts` and `sitemap.ts` configured for production indexing
- ⚡ **App Router** — full Next.js 15 App Router architecture with server/client component split
- 🎨 **Custom Design System** — Tailwind extended with `ebony`, `rose-gold`, and `ebony-light` color tokens

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 3 + custom tokens |
| Language | TypeScript 5 |
| Runtime | React 19 |
| Font | Geist (Vercel) |
| Images | Next.js `<Image>` + WebP |

---

## 🚀 Getting Started

```bash
git clone https://github.com/yomero243/annimake.git
cd annimake
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

---

## 📁 Project Structure

```
annimake/
├── app/
│   ├── page.tsx           # Home — hero + services preview
│   ├── layout.tsx         # Root layout with fonts + globals
│   ├── globals.css        # Base styles + Tailwind directives
│   ├── galeria/
│   │   └── page.tsx       # Photo gallery page
│   ├── servicios/
│   │   └── page.tsx       # Services detail page
│   ├── robots.ts          # SEO robots config
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── Navbar.tsx         # Responsive navigation
│   ├── Hero.tsx           # Full-viewport hero section
│   ├── ServiceCard.tsx    # 3D-perspective service card
│   ├── ScrollReveal.tsx   # Scroll-triggered entrance wrapper
│   ├── BackgroundParallax.tsx  # Parallax depth layer
│   └── Footer.tsx         # Studio footer
├── public/
│   ├── background/        # Hero imagery (WebP + JPG)
│   └── images/gallery/    # Gallery assets (PNG)
└── tailwind.config.ts     # Extended design tokens
```

---

## 🎨 Design Decisions

- **Ebony + Rose Gold palette** — luxury feel that reads as premium without being cold
- **Serif headings + light body text** — editorial typography hierarchy
- **Staggered scroll reveals** — each section enters with progressive delay to create a cinematic rhythm
- **WebP assets** — all hero imagery converted to WebP for optimal LCP

---

## 👨‍💻 About

Built by **Gabriel** — Fullstack developer with a focus on performant, design-forward web experiences.

> 💼 **Available for freelance** — landing pages, studio sites, 3D web experiences, and frontend engineering. [Let's connect →](https://github.com/yomero243)
