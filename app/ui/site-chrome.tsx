'use client';

import {usePathname} from "next/navigation";
import Hero from "@/app/ui/home/hero";
import Navbar from "@/app/ui/navbar";

/**
 * 全站公共装饰组件。
 * 控制台使用独立的侧边栏布局，因此在该路由下隐藏全站 Hero 与导航。
 */
export default function SiteChrome() {
    // 读取当前路径，用于判断是否处于控制台
    const pathname = usePathname();

    // /dashboard 及其子页面不展示全站 Hero 与导航
    if (pathname.startsWith('/dashboard')) {
        return null;
    }

    return (
        <>
            <Hero/>
            <Navbar/>
        </>
    );
}
