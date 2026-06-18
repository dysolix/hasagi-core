// Run by npm's "version" lifecycle hook: inserts a placeholder CHANGELOG entry for the version npm
// just bumped to, so every `npm version` produces a stub to fill in (and it's included in the version
// commit via the `git add` in the "version" script). Idempotent — won't duplicate an existing entry.
import fs from "node:fs/promises";

const version = process.env.npm_package_version;
if (!version) {
  console.error("changelog-stub: npm_package_version not set — run this via `npm version`, not directly.");
  process.exit(1);
}

const path = "./CHANGELOG.md";
let content = await fs.readFile(path, "utf8");

if (content.includes(`## [${version}]`)) {
  console.log(`changelog-stub: CHANGELOG already has an entry for ${version}; leaving it untouched.`);
  process.exit(0);
}

const date = new Date().toISOString().slice(0, 10);
const entry = `## [${version}] - ${date}\n\n### Changed\n\n- _TODO: describe changes for ${version} before pushing._\n\n`;

// Insert above the most recent existing release heading (Keep a Changelog is reverse-chronological).
const idx = content.indexOf("\n## [");
content = idx === -1
  ? `${content.trimEnd()}\n\n${entry}`
  : content.slice(0, idx + 1) + entry + content.slice(idx + 1);

await fs.writeFile(path, content);
console.log(`changelog-stub: added a placeholder entry for ${version} — fill it in before pushing.`);
