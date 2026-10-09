// Restores the Next.js folder structure from the flat delivery.
// Flat file names encode their path with "__", e.g.
//   app__oppaat__[slug]__page.tsx  ->  app/oppaat/[slug]/page.tsx
// Runs automatically before `npm run build` and `npm run dev` (prebuild/predev),
// so the flat files can be deployed directly (e.g. to Vercel). Safe to run repeatedly.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
let moved = 0;
for (const name of fs.readdirSync(dir)) {
  if (!name.includes("__")) continue;
  const src = path.join(dir, name);
  if (!fs.statSync(src).isFile()) continue;
  const target = path.join(dir, ...name.split("__"));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.renameSync(src, target);
  moved++;
}

if (!fs.existsSync(path.join(dir, "app"))) {
  console.error("restore.mjs: app/ folder not found after restore – check that all files were uploaded.");
  process.exit(1);
}
console.log(moved > 0 ? `restore.mjs: restored ${moved} files into folders.` : "restore.mjs: folder structure already in place.");
