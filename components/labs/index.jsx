import * as path from "path";
/*
import * as fs from "fs";

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
//console.log(__dirname)

const labsFolder = path.join(__dirname, "..", "..", "pages", "labs")
const meta = JSON.parse(fs.readFileSync(path.join(labsFolder, "_meta.json"), "utf-8"));
*/

import CLink from '@components/clink'
import meta from '../../pages/labs/_meta.json' assert {type: 'json'}
delete(meta.index)
console.log(meta);

console.log(Object.keys(meta));

function linkToRepos(k) {
  if (!meta[k].noRepos) return  <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
    <li key={"repos"+k}>
        <CLink href={"https://github.com/orgs/ULL-ESIT-PL-2223/repositories?q="+k}>Repos</CLink>
    </li>
    <li key={"rubric"+k}>
        <CLink href={"/labs/"+k+"#rubric"}>Grading Rubric</CLink>
    </li>
    <li key={"clases"+k}>Related  classes: 
       {meta[k].clases.map(c => <span><CLink href={"/clases/"+c+"-leccion"}>{c}</CLink> </span>)}
    
    </li>
  </ul>
  else return <></> 
}


export default function Labs() {
  return (
    <div>
      <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400" reversed>
        {Object.keys(meta).reverse().map(
          (k) => <li key={k}>
            <CLink href={'/labs/'+k}>{meta[k].title}</CLink> 
            {linkToRepos(k)}
          </li>)
          }
      </ol>
    </div>
  );
}


// 1 
//import * as meta from "/Users/casianorodriguezleon/campus-virtual/2223/pl2223/pl2223apuntes-nextra/pages/labs/_meta.json" assert { type: 'json' };
// Write a function that returns the list of file names with a given extension in a given directory
// The function should return an array of file names, not file paths
// The function should return an empty array if there are no files with the given extension in the given directory



/*
function getLabsWithExtension(dir, ext) {
  const files = fs.readdirSync(dir);
  console.log(files);
  const filesWithExtension = files.filter(file => ext.test(path.extname(file)));
  return filesWithExtension;
}

console.log(getFilesWithExtension(
  labsFolder, 
  /\.mdx?$/));  
*/



