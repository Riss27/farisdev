# Muhammad Faris Fathur Rohman — Portfolio & Technical Profile

Production-grade personal portfolio engineered with Next.js 16, React 19, and Tailwind CSS v4, designed with a structured 60-30-10 color architectural philosophy and professional engineering credibility.

- **Live URL:** [https://farisfathurrr.vercel.app](https://farisfathurrr.vercel.app)
- **Repository:** [https://github.com/Riss27/farisdev](https://github.com/Riss27/farisdev)

---

## 🎨 Visual Identity: 60-30-10 Palette

The interface adopts a single-theme, high-contrast, editorial palette designed for visual clarity and accessibility (WCAG AA compliant):

| Ratio | Token | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **60% (Dominant)** | Butter Cream | `#F5EFEB` (`--color-cream`) | Background canvas, high readability, paper warmth |
| **30% (Secondary)** | Forest Green | `#162E20` (`--color-forest`) | Typography, borders, structural cards, executive tone |
| **10% (Accent)** | Hot Pink | `#F43F5E` (`--color-pink`) | Interactive highlights, cursor follower, badge accents |

---

## 🏛️ Architecture & Key Engineering Highlights

### 1. Career & Education Timeline (`src/components/About.jsx`)
- Replaced generic stat cards with structured, verifiable milestones.
- Highlights industry internship at **PT Saptaloka Digital** (Express.js REST APIs, Sequelize ORM, relational MySQL) and ongoing undergraduate study in Informatics Engineering at **Universitas Pasundan**.

### 2. Architecture Case Studies (`src/components/Projects.jsx`)
- Expandable deep-dives covering problem context, architectural decisions, and measurable outcomes across key repositories:
  - **Cosmic Bunny:** Next.js + Zustand client state architecture avoiding layout shifts.
  - **FE MangTodo:** Android Kotlin client with MVVM + Room offline-first persistence.
  - **Internship Saptaloka:** Express.js REST API modules with versioned migrations and JWT middleware.
  - **Neon Pong:** Zero-dependency 60fps HTML5 Canvas physics engine.

### 3. Engineering Spotlight (`src/components/CodeShowcase.jsx`)
- Interactive multi-pattern code tabs showcasing production code snippets:
  - `useResponsive.ts` (Frontend passive viewport hook)
  - `TaskRepository.kt` (Android Kotlin Coroutines + Room single source of truth)
  - `validateSchema.ts` (Strict runtime-to-compile-time request guard)

### 4. Direct Action & Availability (`src/components/Contact.jsx`)
- Integrated one-click 15-minute call request with prefilled email templates.
- Real-time clipboard copy interaction with feedback states and active engineering availability indicator.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.4 (App Router, Turbopack)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (`@theme` CSS variable tokens)
- **Animation:** Motion (`motion/react`)
- **Icons:** Lucide React
- **Security:** Content Security Policy (CSP), Referrer-Policy, Strict-Transport-Security configured in `next.config.js`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Riss27/farisdev.git
cd farisdev

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📄 License

MIT © [Muhammad Faris Fathur Rohman](https://github.com/Riss27)
