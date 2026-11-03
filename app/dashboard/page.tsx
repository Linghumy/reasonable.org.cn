import Link from "next/link";
import clsx from "clsx";
import {
    ArrowPathIcon,
    ArrowRightIcon,
    BoltIcon,
    ChartBarIcon,
    CpuChipIcon,
} from "@heroicons/react/24/solid";
import {accountOverview, recentCalls, usageTrend} from "@/app/ui/dashboard/data";
import ApiKeyCard from "@/app/ui/dashboard/api-key-card";

export const metadata = {
    title: "业务概览",
};

export default function DashboardPage() {
    // 概览统计卡片（演示数据）
    const stats = [
        {
            label: '剩余点数',
            value: accountOverview.balance.toLocaleString('zh-CN'),
            unit: '点',
            hint: '可用点数余额',
            icon: BoltIcon,
        },
        {
            label: '本月消耗',
            value: '3,240',
            unit: '点',
            hint: '较上月 +12.4%',
            icon: ChartBarIcon,
        },
        {
            label: '本月请求',
            value: '8,642',
            unit: '次',
            hint: '成功率 99.8%',
            icon: ArrowPathIcon,
        },
        {
            label: '可用模型',
            value: '6',
            unit: '个',
            hint: '覆盖主流大模型',
            icon: CpuChipIcon,
        },
    ];

    // 计算趋势图最大点数，用于换算柱状图高度
    const maxPoints = Math.max(...usageTrend.map((item) => item.points));

    return (
        <div className="space-y-6">
            {/* 业务数据概览 */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-content dark:text-content-dark">{stat.label}</p>
                                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400"/>
                            </div>
                            <p className="mt-3 text-title dark:text-title-dark">
                                <span className="text-2xl font-black">{stat.value}</span>
                                <span className="ml-1 text-sm">{stat.unit}</span>
                            </p>
                            <p className="mt-1 text-xs text-content dark:text-content-dark">{stat.hint}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* 用量趋势 */}
                <div className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5 lg:col-span-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <h2 className="font-bold text-title dark:text-title-dark">用量趋势</h2>
                            <p className="mt-1 text-xs text-content dark:text-content-dark">近 6 个月点数消耗（演示数据）</p>
                        </div>
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs text-content dark:bg-secondary-dark dark:text-content-dark">
                            单位：点
                        </span>
                    </div>
                    {/* 纯 CSS 柱状图，不依赖图表库 */}
                    <div className="mt-6 flex h-48 items-end gap-3">
                        {usageTrend.map((item) => (
                            <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                                <div className="flex w-full flex-1 items-end">
                                    <div
                                        className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-[#66ccff]"
                                        style={{height: `${Math.max((item.points / maxPoints) * 100, 4)}%`}}
                                        title={`${item.month}：${item.points} 点`}
                                    ></div>
                                </div>
                                <span className="text-xs text-content dark:text-content-dark">{item.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 业务详情 / 接入信息 */}
                <div className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-title dark:text-title-dark">业务详情</h2>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            {accountOverview.status}
                        </span>
                    </div>
                    <dl className="mt-4 space-y-3 text-sm">
                        <div className="flex items-center justify-between gap-3">
                            <dt className="text-content dark:text-content-dark">账户</dt>
                            <dd className="truncate text-title dark:text-title-dark">{accountOverview.name}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <dt className="text-content dark:text-content-dark">计费方式</dt>
                            <dd className="text-title dark:text-title-dark">{accountOverview.plan}</dd>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <dt className="text-content dark:text-content-dark">邮箱</dt>
                            <dd className="truncate text-title dark:text-title-dark">{accountOverview.email}</dd>
                        </div>
                    </dl>
                    <div className="mt-5 border-t border-primary pt-4 dark:border-primary-dark">
                        <ApiKeyCard apiKey={accountOverview.apiKey} baseUrl={accountOverview.baseUrl}/>
                    </div>
                </div>
            </div>

            {/* 快捷操作 */}
            <div className="flex flex-wrap gap-3">
                <Link
                    href="/dashboard/billing"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                    购买点数
                    <ArrowRightIcon className="ml-2 h-4 w-4"/>
                </Link>
                <Link
                    href="/ai"
                    className="inline-flex items-center rounded-lg border border-primary bg-white/60 px-5 py-2.5 text-sm font-medium text-title transition hover:bg-white dark:border-primary-dark dark:bg-white/5 dark:text-title-dark dark:hover:bg-white/10"
                >
                    查看业务介绍
                </Link>
                <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center rounded-lg border border-primary bg-white/40 px-5 py-2.5 text-sm font-medium text-content opacity-60 dark:border-primary-dark dark:bg-white/5 dark:text-content-dark"
                >
                    重置密钥（等待接入）
                </button>
            </div>

            {/* 最近调用记录 */}
            <div className="rounded-2xl border border-primary bg-white/60 dark:border-primary-dark dark:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary px-5 py-4 dark:border-primary-dark">
                    <div>
                        <h2 className="font-bold text-title dark:text-title-dark">最近调用</h2>
                        <p className="mt-1 text-xs text-content dark:text-content-dark">展示最近 5 条演示请求记录</p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-content dark:bg-secondary-dark dark:text-content-dark">
                        演示数据
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-primary text-left text-sm dark:divide-primary-dark">
                        <thead className="bg-secondary dark:bg-secondary-dark">
                            <tr>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">请求 ID</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">时间</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">模型</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">Token</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">扣费点数</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">状态</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary dark:divide-primary-dark">
                            {recentCalls.map((call) => (
                                <tr key={call.id}>
                                    <td className="px-5 py-3 font-mono text-xs text-content dark:text-content-dark">{call.id}</td>
                                    <td className="px-5 py-3 text-content dark:text-content-dark">{call.time}</td>
                                    <td className="px-5 py-3 text-title dark:text-title-dark">{call.model}</td>
                                    <td className="px-5 py-3 text-content dark:text-content-dark">{call.tokens.toLocaleString('zh-CN')}</td>
                                    <td className="px-5 py-3 text-content dark:text-content-dark">{call.points}</td>
                                    <td className="px-5 py-3">
                                        <span
                                            className={clsx(
                                                'inline-flex rounded-full px-2.5 py-1 text-xs font-medium',
                                                call.status === '成功'
                                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                    : 'bg-red-500/10 text-red-600 dark:text-red-400'
                                            )}
                                        >
                                            {call.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
