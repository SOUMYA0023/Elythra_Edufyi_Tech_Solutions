# Elythra Edufyi Tech Solutions — Official Website

> **Learn Skills. Build Projects. Get Placed.**
> Modern EdTech & Technology Career Accelerator Website built with Next.js 16 (App Router), TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion.

---

## 🌟 Overview

[Elythra Edufyi Tech Solutions](https://elythraedufyi.com) is an ed-tech company providing industry-aligned technical and non-technical skill courses with structured internship tracks and placement assistance. 

This repository contains the complete production marketing and application platform engineered with high visual polish, interactive 3D elements, performance-optimized animations, full accessibility support, and responsive layouts across mobile, tablet, and desktop viewports.

---

## 🚀 Key Features

* **3D Interactive Hero**: Built using `@react-three/fiber` and `@react-three/drei`, rendering a floating skill node network background with low-motion fallbacks for `prefers-reduced-motion`.
* **26 Skill Domains**:
  * **17 Technical Domains**: App Development, Data Analytics, Machine Learning, HEV, AI & ML, Comprehensive AI/ML, Business Analyst, Data Science, Full Stack Web Development, IoT, UI/UX Design, VLSI, Embedded Systems, DevOps, Cloud Computing, Cyber Security, Medical Coding.
  * **9 Non-Technical Domains**: AutoCAD, Construction Planning, Finance, Biotechnology, Genetic Engineering, Human Resources, Stock Marketing, Digital Marketing, Psychology Workshop.
* **Interactive Domain Modals**: Detailed domain cards with click-to-open modals showcasing tools, key skills, learning objectives, real project exposure, suitable candidate profiles, and direct application CTAs.
* **Preferred Industry Ecosystem Marquee**: Infinite horizontal marquee displaying 20+ partner tech companies (IBM, Accenture, Capgemini, Hexaware, Apple, Autodesk, AutoCAD, Flipkart, Deloitte, HCL Infosystems, KPMG, TCS, Wipro, Infosys, Tech Mahindra, Cognizant, Oracle, Cisco, Amazon, Microsoft).
* **WhatsApp Integration (`+91 6362209993`)**: Instant click-to-chat integration embedded across Navbar, Hero, Contact section, Footer, and a fixed, responsive Floating WhatsApp Widget.
* **3-Tier Program Comparison**: Clear comparison for Self-Paced (₹7,000), Mentor-Led (₹12,000), and Professional Placement (₹17,000) tracks.
* **Direct Google Form Application**: Seamless redirection to official application form (`https://forms.gle/RuHQHcq5ZwtvDUgR8`).
* **Balanced Contact Experience**: 2-column contact interface featuring direct inquiry form, contact information cards, and WhatsApp counselor integration.
* **Legal & Policy Suite**: Complete Terms & Conditions (`/terms`) and Cookie Policy (`/cookies`) with interactive consent banner (`CookieBanner`).
* **Branded Custom Loader**: Smooth loading screen with logo mark pulse, motto badge, and shimmer progress line.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4 with custom design token system
* **3D Visuals**: React Three Fiber (`@react-three/fiber`) & Drei (`@react-three/drei`)
* **Motion & Animations**: Framer Motion & CSS Keyframes
* **Icons**: Inline SVG Icons (Lucide/Heroicons standard)

---

## 📁 Repository Structure

```
elythra-site/
├── public/
│   └── images/             # Brand logos & static image assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (Fonts, SEO metadata, Navbar, Footer, FloatingWhatsApp)
│   │   ├── page.tsx        # Homepage (Hero, Marquee, Domains, Journey, Pricing, About)
│   │   ├── globals.css     # Design tokens, custom keyframes, scrollbar styling
│   │   ├── about/          # About Us page
│   │   ├── apply/          # Application page & Google Form CTA
│   │   ├── contact/        # Contact page (2-column layout & form)
│   │   ├── pricing/        # Pricing & program comparison page
│   │   ├── terms/          # Terms & Conditions legal page
│   │   ├── cookies/        # Cookie Policy legal page
│   │   └── courses/
│   │       ├── technical/  # Technical domain catalog (17 courses)
│   │       └── non-technical/ # Non-technical domain catalog (9 courses)
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky responsive navigation header
│   │   ├── Footer.tsx      # Footer with quick links & social profiles
│   │   ├── CourseCard.tsx  # Domain card with detail modal callback
│   │   ├── DomainDetailModal.tsx # Interactive domain popup
│   │   ├── PartnerMarquee.tsx   # Infinite partner scrolling marquee
│   │   ├── FloatingWhatsApp.tsx # Fixed WhatsApp widget
│   │   ├── PricingCard.tsx      # 3-tier program pricing card
│   │   ├── SectionReveal.tsx    # Scroll reveal animation wrapper
│   │   └── three/
│   │       ├── HeroScene.tsx    # R3F 3D background canvas
│   │       └── HeroSceneWrapper.tsx # Client-side dynamic wrapper
│   ├── config/
│   │   └── site.ts         # Centralized site configuration & social URLs
│   └── data/
│       ├── courses.ts      # Comprehensive course datasets
│       ├── partners.ts     # Industry partners dataset
│       └── pricing.ts      # Pricing tier dataset
```

---

## 💻 Getting Started Locally

### Prerequisites

* Node.js 18.x or higher
* npm, pnpm, or yarn

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/SOUMYA0023/Elythra_Edufyi_Tech_Solutions.git
   cd Elythra_Edufyi_Tech_Solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Build & Verification Commands

To verify type safety, linting, and build optimization:

```bash
# Type check
npx tsc --noEmit

# Lint check
npm run lint

# Production build
npm run build
```

---

## 📜 License & Copyright

© 2026 **Elythra Edufyi Tech Solutions**. All rights reserved.
