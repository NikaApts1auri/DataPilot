# DataPilot Landing Page

## Overview

**DataPilot** is a fictional SaaS product, and this repository contains a responsive landing page created using **React**, **Tailwind CSS**, and **Vite**. The landing page highlights the key features of the product, showcases customer testimonials, presents pricing plans, and provides a footer with social media links. The page is fully responsive, ensuring it looks great on desktop, tablet, and mobile devices.

You can view the live version of the landing page here: [DataPilot Live](https://data-pilot-q5mi.vercel.app/)

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Setup](#project-setup)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Responsive Design](#responsive-design)
6. [Husky and Prettier Setup](#husky-and-prettier-setup)
7. [License](#license)
8. [Goals for Improvement](#goals-for-improvement)
9. [Demo](#demo)
10. [Resources](#resources)

---

## Technologies Used

- **React** – JavaScript library for building user interfaces.
- **Tailwind CSS** – Utility-first CSS framework used for styling.
- **Vite** – A fast build tool and development server.
- **JavaScript (ES6+)** – Modern JavaScript for app functionality.
- **TypeScript** – A superset of JavaScript, adding type safety.
- **ESLint** & **Prettier** – For linting and code formatting.
- **Husky** & **Lint-staged** – For pre-commit hooks ensuring that only properly linted and formatted code is committed.

---

## Project Setup

Follow the steps below to set up the project locally:

### 1. Clone the Repository:

```bash
git clone https://github.com/yourusername/DataPilot.git
cd DataPilot
```

### 2. Install Dependencies:

```bash
npm install
```

### 3. Start the Development Server:

```bash
npm run dev
```

### 4. Build for Production:

```bash
npm run build
```

### 5. Preview the Production Build:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/         # Images and static files
├── components/     # Reusable UI components
├── pages/          # Page sections like Hero, Features, Pricing, etc.
├── App.tsx         # Root component
└── main.tsx        # Entry point
index.css       # Tailwind imports
```

---

## Features

- **Hero Section** – Visually appealing intro with product pitch
- **Features Section** – Highlights core features of DataPilot
- **Testimonials Section** – Displays customer feedback
- **Pricing Section** – Clear pricing plans with CTAs
- **Footer** – Contains social links and navigation

---

## Responsive Design

The landing page is fully responsive and optimized for:

- **Mobile** – `<640px`
- **Tablet** – `640px – 1024px`
- **Desktop** – `>1024px`

---

## Husky and Prettier Setup

This project uses **Husky** and **Lint-staged** to maintain code quality:

### 1. Install Husky

```bash
npx husky-init && npm install
```

### 2. Add Pre-commit Hook

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

This will automatically lint and format only staged files before each commit.

---

## License

This project is licensed under the **MIT License**.\
See the [LICENSE](LICENSE) file for details.

---

## Goals for Improvement

- Add dark mode support
- Add animations and transitions for better UI/UX
- Integrate contact form functionality
- Add unit and integration tests
- Create a blog section

---

## Demo 

Here’s a preview of the landing page:

Live URL  
https://data-pilot-q5mi.vercel.app/

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [ESLint Docs](https://eslint.org/docs/latest/)
- [Prettier Docs](https://prettier.io/docs/en/index.html)

