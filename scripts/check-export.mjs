import fs from 'node:fs/promises';
import path from 'node:path';
const output=path.resolve('out');
const repo=process.env.GITHUB_REPOSITORY?.split('/')[1]||'kodachi-coaching';
const prefix=repo.endsWith('.github.io')?'':`/${repo}`;
const htmlFiles=[];
async function walk(dir){for(const f of await fs.readdir(dir,{withFileTypes:true})){const target=path.join(dir,f.name);if(f.isDirectory())await walk(target);else if(f.name.endsWith('.html'))htmlFiles.push(target);}}
await walk(output);
const links=new Set(),errors=[];
for(const file of htmlFiles){
 const html=await fs.readFile(file,'utf8');
 if((html.match(/<h1[\s>]/g)||[]).length!==1)errors.push(`h1 count: ${path.relative(output,file)}`);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"\s]+)"/g)){
  const url=match[1].split(/[?#]/)[0];
  if(url.startsWith('//'))continue;
  if(prefix&&url!==prefix&&!url.startsWith(prefix+'/')){errors.push(`Missing repository prefix: ${url}`);continue;}
  links.add(decodeURIComponent(url.slice(prefix.length)));
 }
}
for(const link of links){const target=path.resolve(output,'.'+link);if(!target.startsWith(output+path.sep)&&target!==output){errors.push(`Invalid path: ${link}`);continue;}try{const stat=await fs.stat(target);if(stat.isDirectory())await fs.access(path.join(target,'index.html'));}catch{errors.push(`Missing target: ${link}`);}}
for(const file of ['index.html','404.html','.nojekyll']){try{await fs.access(path.join(output,file));}catch{errors.push(`Missing export file: ${file}`);}}
console.log(JSON.stringify({htmlPages:htmlFiles.length,checkedTargets:links.size,basePath:prefix,errors},null,2));
if(errors.length)process.exit(1);
