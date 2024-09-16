import fs from "fs/promises";
import path from "path";
import KittensModel from "../4-models/kitten-model";

const jsonFile = path.join(__dirname, "..", "1-assets/json", "kittens.json");

async function loadKittens(): Promise<KittensModel[]> {
    const content: string = await fs.readFile(jsonFile, "utf8");
    const kittens: KittensModel[] = JSON.parse(content);
    return kittens;
}

async function saveKittens(kittens: KittensModel[]): Promise<void> {
    const content: string = JSON.stringify(kittens, null, 4);
    await fs.writeFile(jsonFile, content);
}

export default {
    loadKittens,
    saveKittens
}