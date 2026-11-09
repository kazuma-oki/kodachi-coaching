import Site from '../site';
import { notFound } from 'next/navigation';
import { pageTitles } from '../../lib/content';
export const dynamicParams = false;
export function generateStaticParams(){return Object.keys(pageTitles).filter(path=>path!=='/404/').map(path=>({slug:path.split('/').filter(Boolean)}));}
export async function generateMetadata({params}: {params: Promise<{slug:string[]}>}) { const {slug}=await params; return {title: pageTitles['/'+slug.join('/')+'/'] || 'ページが見つかりません'}; }
export default async function Page({params}: {params: Promise<{slug:string[]}>}) { const {slug}=await params; const path='/'+slug.join('/')+'/'; if (!pageTitles[path]) notFound(); return <Site path={path}/>; }
