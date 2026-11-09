import {spawnSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
const repo=process.env.GITHUB_REPOSITORY?.split('/')[1]||'kodachi-coaching';
const basePath=repo.endsWith('.github.io')?'':`/${repo}`;
const build=spawnSync(process.execPath,['node_modules/next/dist/bin/next','build','--webpack'],{stdio:'inherit',env:{...process.env,NEXT_PUBLIC_BASE_PATH:basePath,NEXT_TELEMETRY_DISABLED:'1'}});
if(build.status!==0)process.exit(build.status||1);
writeFileSync('out/.nojekyll','');
console.log(`GitHub Pages export ready: ${basePath || '/'}`);
