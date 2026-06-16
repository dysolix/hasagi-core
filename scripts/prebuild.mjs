import fs from "fs/promises";

if (await fs.access("./dist").then(() => true, () => false))
    await fs.rm("./dist", { recursive: true, force: true })
