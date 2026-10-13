# Ashar khan — personal site

Personal portfolio site for Ashar Khan, a software engineer based in Greater Glasgow, United Kingdom.

The homepage links to separate Timeline (`/timeline/`) and Beyond the code (`/beyond-code/`) pages. The Timeline page shows selected highlights from TCS, Aston University, PwC, and Kodamai. Career content and social links live in `frontend/src/data/siteData.ts`.

Beyond the code shows skydiving photos, a London video, and Penny. Add future travel and interests in `frontend/src/data/beyondCode.ts`. Media files live in `frontend/public/media/beyond-code`; the photo viewer supports arrow keys and Escape, and video starts only on request.

Vite builds an HTML entry for each page, so direct links and refreshes work on GitHub Pages. Each page has its own title and description, and the homepage loads the page components only when their pages are visited.

Live at [asharkhxn.github.io](https://asharkhxn.github.io)

Built with Vite, React, TypeScript, and Tailwind CSS.

To preview locally:

```sh
cd frontend
npm ci
npm run dev
```

Run `npm run build` from `frontend` to check TypeScript and create the production build. The existing GitHub Pages workflow deploys pushes to `main`.
