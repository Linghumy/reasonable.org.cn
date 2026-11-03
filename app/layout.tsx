import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/ui/footer";
// 原布局直接引入 Hero 与 Navbar，现统一交给 SiteChrome 管理：
// import Hero from "@/app/ui/home/hero";
// import Navbar from "@/app/ui/navbar";
import SiteChrome from "@/app/ui/site-chrome";
import React from "react";

export const metadata: Metadata = {
    title: {
        // 正式场景统一使用公司全称，原值保留如下：
        // template: '%s | Reasonable',
        // default: 'Reasonable · 禾李团队',
        template: '%s | 禾李（杭州）科技有限责任公司',
        default: '禾李（杭州）科技有限责任公司',
    },
    // 原描述："禾李，一群 Minecraft 玩家组成的团队"
    description: "禾李（杭州）科技有限责任公司，一群 Minecraft 玩家组成的团队",
    // 原关键词：["禾李", "Minecraft", "Reasonable"]
    keywords: ["禾李", "禾李（杭州）科技有限责任公司", "Minecraft", "Reasonable"],
    generator: 'Next.js'
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
            <body>
                {/* 原布局：Hero 与 Navbar 固定展示，控制台页面也会显示。
                    现改为由 SiteChrome 按路由决定是否展示：
                <Hero/>
                <Navbar/>
                {children}
                <Footer/>
                */}
                <SiteChrome/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
