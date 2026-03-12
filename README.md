# ashar-site

Minimal personal portfolio starter for **ashar khan**, built with **Vite + React + TypeScript + Tailwind CSS**.

The design intentionally mirrors the calm editorial feel of `karaj.uk` with:
- a sparse introduction area
- understated typography and neutral colors
- a selected work section
- a chronological archive section
- simple responsive behavior

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS

## Project structure

```text
ashar-site/
├── .gitignore
├── README.md
└── frontend/
	├── index.html
	├── package-lock.json
	├── package.json
	├── postcss.config.js
	├── tailwind.config.js
	├── tsconfig.app.json
	├── tsconfig.json
	├── tsconfig.node.json
	├── vite.config.ts
	└── src/
		├── App.tsx
		├── index.css
		├── main.tsx
		└── data/
			└── siteData.ts
```

## Content

All placeholder content lives in `frontend/src/data/siteData.ts`.
Update that file to change:
- intro text
- social links
- projects
- years
- technology labels

## Development

Install dependencies and start the dev server:

```bash
cd frontend
npm install
npm run dev
```

Create a production build:

```bash
cd frontend
npm run build
```

## Notes

- Styling is fully handled with Tailwind utility classes.
- Components are intentionally small and functional.
- The structure is designed to be easy to expand into a full portfolio later.
