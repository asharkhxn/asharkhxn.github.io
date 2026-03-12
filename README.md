# ashar-site

Personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- **Responsive layout** — works on all screen sizes
- **Smooth scroll navigation** with a sticky, backdrop-blur navbar
- **Dark-themed** minimal design with violet accent color
- Sections: Hero · About · Projects · Skills · Contact · Footer
- Placeholder content ready to be replaced with real data

## Tech Stack

- [Vite](https://vite.dev/) — build tooling
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customizing Content

Replace the placeholder content in the following component files under `src/components/`:

| File | What to update |
|---|---|
| `Hero.tsx` | Name, role, tagline, social links |
| `About.tsx` | Bio paragraphs, stats |
| `Projects.tsx` | Project titles, descriptions, tags, links |
| `Skills.tsx` | Skill categories and individual skills |
| `Contact.tsx` | Email address |
| `Footer.tsx` | Name, social links, email |
| `Navbar.tsx` | Logo text, resume link |

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder.
