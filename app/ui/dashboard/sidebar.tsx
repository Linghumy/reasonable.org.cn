'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {BanknotesIcon, ChartPieIcon} from "@heroicons/react/24/solid";
import {accountOverview} from "@/app/ui/dashboard/data";

// 控制台导航项
const links = [
    {name: '业务概览', href: '/dashboard', icon: ChartPieIcon},
    {name: '点数与支付', href: '/dashboard/billing', icon: BanknotesIcon},
];

/**
 * 控制台侧边栏。
 * 桌面端固定在左侧，移动端横向滚动展示。
 */
export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            {/* 账户信息与余额 */}
            <div className="rounded-2xl border border-primary bg-secondary p-4 dark:border-primary-dark dark:bg-secondary-dark">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        禾
                    </div>
                    <div className="min-w-0">
                        <p className="truncate font-medium text-title dark:text-title-dark">{accountOverview.name}</p>
                        <p className="truncate text-xs text-content dark:text-content-dark">{accountOverview.plan}</p>
                    </div>
                </div>
                <div className="mt-4 rounded-xl border border-primary bg-white/60 p-3 dark:border-primary-dark dark:bg-white/5">
                    <p className="text-xs text-content dark:text-content-dark">点数余额</p>
                    <p className="mt-1 text-2xl font-black text-title dark:text-title-dark">
                        {accountOverview.balance.toLocaleString('zh-CN')}
                    </p>
                </div>
            </div>

            {/* 导航链接 */}
            <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                {links.map((link) => {
                    const Icon = link.icon;
                    // 当前路径与导航地址一致时高亮
                    const active = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                'flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition lg:w-full',
                                active
                                    ? 'bg-white text-title shadow-sm dark:bg-midnight dark:text-title-dark'
                                    : 'text-content hover:bg-white/60 hover:text-title dark:text-content-dark dark:hover:bg-white/10 dark:hover:text-title-dark'
                            )}
                        >
                            <Icon className="h-4 w-4"/>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* 服务状态提示 */}
            <div className="hidden rounded-2xl border border-primary bg-white/50 p-4 dark:border-primary-dark dark:bg-white/5 lg:block">
                <p className="text-xs font-medium text-title dark:text-title-dark">业务状态</p>
                <p className="mt-2 flex items-center text-xs text-content dark:text-content-dark">
                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500"></span>
                    API 服务运行中
                </p>
                <p className="mt-1 text-xs text-content dark:text-content-dark">当前为演示数据</p>
            </div>
        </aside>
    );
}
