import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('../', import.meta.url));
const server = await createServer({
  root,
  configFile: false,
  plugins: [react()],
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  for (const [currentPage, entry, component] of [
    ['home', 'index.html', null],
    ['timeline', 'timeline/index.html', '/src/pages/Timeline.tsx'],
    ['beyond-code', 'beyond-code/index.html', '/src/pages/BeyondCode.tsx'],
  ]) {
    const Page = component ? (await server.ssrLoadModule(component)).default : undefined;
    const markup = renderToString(createElement(App, { currentPage, Page }));
    const output = new URL(`../dist/${entry}`, import.meta.url);
    const html = await readFile(output, 'utf8');
    if (!html.includes('<div id="root"></div>')) throw new Error(`Missing root in ${entry}`);
    await writeFile(output, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
    process.stdout.write(`Pre-rendered ${currentPage}\n`);
  }
} finally {
  await server.close();
}
