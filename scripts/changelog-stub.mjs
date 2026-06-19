// Run by the "changelog" / "postversion" scripts: inserts a placeholder CHANGELOG entry for the
// current package version (creating CHANGELOG.md if absent), so every version bump leaves a stub to
// fill in. Run via `postversion`, it executes after the version commit, so the stub appears as an
// uncommitted change. Idempotent — won't duplicate an existing entry.
import fs from "node:fs/promises";

const version = process.env.npm_package_version;
if (!version) {
  console.error("changelog-stub: npm_package_version not set — run via `npm version` or `npm run changelog`.");
  process.exit(1);
}

const path = "./CHANGELOG.md";
const HEADER = `# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
`;

let content = await fs.readFile(path, "utf8").catch(() => null);
const created = content === null;
if (created) content = HEADER;

if (!created && content.includes(`## [${version}]`)) {
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
console.log(`changelog-stub: ${created ? "created CHANGELOG.md and added" : "added"} a placeholder entry for ${version} — fill it in before pushing.`);
