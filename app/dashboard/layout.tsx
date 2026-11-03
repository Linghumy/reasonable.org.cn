import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import Section from "@/app/ui/container";
import DashboardSidebar from "@/app/ui/dashboard/sidebar";

export const metadata = {
    title: {
        default: '控制台',
        // 原标题模板：'%s | 控制台 · Reasonable'
        template: '%s | 控制台 · 禾李（杭州）科技有限责任公司',
    },
    // 原描述：'Reasonable AI API 中转站控制台，管理业务详情、点数余额与支付记录。'
    description: '禾李（杭州）科技有限责任公司 AI API 中转站控制台，管理业务详情、点数余额与支付记录。',
};

/**
 * 控制台布局。
 * 使用独立侧边栏，不展示全站 Hero 与顶部导航。
 */
export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Section className="min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-8">
                {/* 控制台顶部标题栏 */}
                <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-content dark:text-content-dark">
                            {/* 原文案：Reasonable Console */}
                            禾李（杭州）科技有限责任公司
                        </p>
                        <h1 className="mt-1 text-2xl font-black text-title dark:text-title-dark sm:text-3xl">
                            AI API 控制台
                        </h1>
                    </div>
                    <Link
                        href="/ai"
                        className="inline-flex items-center rounded-lg border border-primary bg-white/60 px-4 py-2 text-sm font-medium text-title transition hover:bg-white dark:border-primary-dark dark:bg-white/5 dark:text-title-dark dark:hover:bg-white/10"
                    >
                        <ArrowLeftIcon className="mr-2 h-4 w-4"/>
                        返回 AI API 页
                    </Link>
                </header>

                {/* 侧边栏 + 内容区 */}
                <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
                    <DashboardSidebar/>
                    <div className="min-w-0">{children}</div>
                </div>
            </div>
        </Section>
    );
}
