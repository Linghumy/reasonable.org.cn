import { MDXRemote } from 'next-mdx-remote/rsc'
import dynamic from "next/dynamic";
import {promises as fs} from 'fs';
import {notFound} from "next/navigation";
import Section, {Container} from "@/app/ui/container";
import {ArrowLeftCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
 
export default async function RemoteMdxPage({params}: { params: { page: string } }) {
    const markdown = await fs.readFile(process.cwd() + `/app/post/${params.page}.md`, 'utf8').catch(err => {
        console.log(err);
        notFound();
    });
    return <MDXRemote source={markdown} />

    // 原代码下方还有一段未启用的动态导入写法，其中 Post 未定义会导致类型检查失败，
    // 现已注释保留：
    // const { default: Post } = await import(`@/posts/${params.page}.mdx`)
    // return <Post />
}