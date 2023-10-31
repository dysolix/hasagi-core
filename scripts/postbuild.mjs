import fs from "fs/promises";

await fs.cp("./src/types", "./dist/types", { recursive: true });
await fs.copyFile("./LICENSE", "./dist/LICENSE");

const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
delete packageObj.private;
delete packageObj.devDependencies;
delete packageObj.scripts;
await fs.writeFile("./dist/package.json", JSON.stringify(packageObj, null, 2));

const clientDeclarationContent = await fs.readFile("./dist/client.d.ts", "utf8").then(c => c.split("\n"));
let lastFoundIndex = -1;
do {
    const index = clientDeclarationContent.findIndex((l, i) => l.includes("LCUEndpointResponseType<Method, Path>") && i > lastFoundIndex);
    if(index != -1) {
        clientDeclarationContent.splice(index, 0, "\t// @ts-ignore");
        lastFoundIndex = index + 1;
    } else {
        lastFoundIndex = index
    }
} while (lastFoundIndex != -1)

await fs.writeFile("./dist/client.d.ts", clientDeclarationContent.join("\n"));