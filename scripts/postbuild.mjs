import fs from "fs/promises";

await fs.cp("./src/types", "./dist/types", { recursive: true });
await fs.copyFile("./LICENSE", "./dist/LICENSE");
await fs.copyFile("./README.md", "./dist/README.md");

const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
delete packageObj.private;
delete packageObj.devDependencies;
delete packageObj.scripts;
await fs.writeFile("./dist/package.json", JSON.stringify(packageObj, null, 2));
