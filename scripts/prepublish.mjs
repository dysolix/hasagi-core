import prompt from "prompt";
import fs from "fs/promises";

const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
const distPackageObj = JSON.parse(await fs.readFile("./dist/package.json", "utf8"));

prompt.start();

let { version } = await prompt.get(
    {
        name: 'version',
        validator: /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/,
        allowEmpty: true,
        default: packageObj.version,
    }
);

if (version === packageObj.version)
    throw new Error("Version did not change.");

packageObj.version = version;
distPackageObj.version = version;

await fs.writeFile("./dist/package.json", JSON.stringify(distPackageObj, null, 2));
await fs.writeFile("./package.json", JSON.stringify(packageObj, null, 2));