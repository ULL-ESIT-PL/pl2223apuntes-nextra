import * as path from "path";
import * as fs from "fs";

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const labsFolder = path.join(__dirname, "..", "..", "pages", "labs")

const meta = JSON.parse(fs.readFileSync(path.join(labsFolder, "_meta.json"), "utf-8"));
console.log(meta);

console.log(Object.keys(meta));

for(let k in meta ) {
  console.log(k);
} // 1 
//import * as meta from "/Users/casianorodriguezleon/campus-virtual/2223/pl2223/pl2223apuntes-nextra/pages/labs/_meta.json" assert { type: 'json' };
// Write a function that returns the list of file names with a given extension in a given directory
// The function should return an array of file names, not file paths
// The function should return an empty array if there are no files with the given extension in the given directory


console.log(__dirname)

function getFilesWithExtension(dir, ext) {
  const files = fs.readdirSync(dir);
  console.log(files);
  const filesWithExtension = files.filter(file => ext.test(path.extname(file)));
  return filesWithExtension;
}


console.log(getFilesWithExtension(
  labsFolder, 
  /\.mdx?$/));  
process.exit(0);


