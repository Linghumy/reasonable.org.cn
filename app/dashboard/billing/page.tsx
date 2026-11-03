import Link from "next/link";
import clsx from "clsx";
import {ArrowRightIcon, BanknotesIcon, ClockIcon, CreditCardIcon} from "@heroicons/react/24/solid";
import PointsPurchase from "@/app/ui/ai/points-purchase";
import {accountOverview, billingOrders} from "@/app/ui/dashboard/data";

export const metadata = {
    title: "点数与支付",
};

export default function BillingPage() {
    // 待支付订单数量（演示数据）
    const pendingOrders = billingOrders.filter((order) => order.status === '等待支付').length;

    return (
        <div className="space-y-6">
            {/* 余额与支付概览 */}
            <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-content dark:text-content-dark">当前点数</p>
                        <BanknotesIcon className="h-5 w-5 text-blue-600 dark:text-blue-400"/>
                    </div>
                    <p className="mt-3 text-title dark:text-title-dark">
                        <span className="text-2xl font-black">{accountOverview.balance.toLocaleString('zh-CN')}</span>
                        <span className="ml-1 text-sm">点</span>
                    </p>
                    <p className="mt-1 text-xs text-content dark:text-content-dark">可用于全部已接入模型</p>
                </div>
                <div className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-content dark:text-content-dark">本月充值</p>
                        <CreditCardIcon className="h-5 w-5 text-blue-600 dark:text-blue-400"/>
                    </div>
                    <p className="mt-3 text-title dark:text-title-dark">
                        <span className="text-2xl font-black">200</span>
                        <span className="ml-1 text-sm">元</span>
                    </p>
                    <p className="mt-1 text-xs text-content dark:text-content-dark">累计到账 15,000 点（演示）</p>
                </div>
                <div className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-content dark:text-content-dark">待支付订单</p>
                        <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400"/>
                    </div>
                    <p className="mt-3 text-title dark:text-title-dark">
                        <span className="text-2xl font-black">{pendingOrders}</span>
                        <span className="ml-1 text-sm">笔</span>
                    </p>
                    <p className="mt-1 text-xs text-content dark:text-content-dark">支付通道接入中</p>
                </div>
            </div>

            {/* 购买点数 */}
            <section className="rounded-2xl border border-primary bg-white/50 p-5 dark:border-primary-dark dark:bg-white/5 sm:p-6">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
                    <div>
                        <h2 className="text-xl font-bold text-title dark:text-title-dark">购买点数</h2>
                        <p className="mt-1 text-sm text-content dark:text-content-dark">
                            选择套餐后使用支付宝完成支付。当前为演示页面，不会产生真实扣款。
                        </p>
                    </div>
                    <Link
                        href="/ai#purchase"
                        className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300"
                    >
                        查看套餐说明
                        <ArrowRightIcon className="ml-1 h-4 w-4"/>
                    </Link>
                </div>
                <PointsPurchase/>
            </section>

            {/* 支付方式与说明 */}
            <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5">
                    <h2 className="font-bold text-title dark:text-title-dark">支付方式</h2>
                    <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border-2 border-blue-500 bg-blue-50/60 p-4 dark:border-blue-400 dark:bg-blue-500/10">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                                支
                            </div>
                            <div>
                                <p className="font-medium text-title dark:text-title-dark">支付宝</p>
                                <p className="text-xs text-content dark:text-content-dark">扫码支付 / 跳转支付</p>
                            </div>
                        </div>
                        <span className="shrink-0 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                            支付宝API等待接入
                        </span>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-content dark:text-content-dark">
                        支付宝开放平台接口正在申请与联调中，暂时无法在线支付。
                        如需大额充值或对公转账，请联系团队成员处理。
                    </p>
                </section>

                <section className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5">
                    <h2 className="font-bold text-title dark:text-title-dark">充值说明</h2>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-content dark:text-content-dark">
                        <li>· 点数购买后立即到账，可用于所有已接入模型。</li>
                        <li>· 点数仅用于 API 调用扣费，不支持提现或转赠。</li>
                        <li>· 当前支付接口未接入，页面数据均为演示内容。</li>
                        <li>· 如需帮助，请在团队 QQ 群内联系管理员。</li>
                    </ul>
                    <Link
                        href="/dashboard"
                        className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300"
                    >
                        返回业务概览
                        <ArrowRightIcon className="ml-1 h-4 w-4"/>
                    </Link>
                </section>
            </div>

            {/* 订单记录 */}
            <section className="rounded-2xl border border-primary bg-white/60 dark:border-primary-dark dark:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary px-5 py-4 dark:border-primary-dark">
                    <div>
                        <h2 className="font-bold text-title dark:text-title-dark">订单记录</h2>
                        <p className="mt-1 text-xs text-content dark:text-content-dark">最近 3 笔演示订单</p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-content dark:bg-secondary-dark dark:text-content-dark">
                        演示数据
                    </span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-primary text-left text-sm dark:divide-primary-dark">
                        <thead className="bg-secondary dark:bg-secondary-dark">
                            <tr>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">订单号</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">套餐</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">点数</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">金额</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">状态</th>
                                <th className="px-5 py-3 font-medium text-title dark:text-title-dark">创建时间</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary dark:divide-primary-dark">
                            {billingOrders.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-5 py-3 font-mono text-xs text-content dark:text-content-dark">{order.id}</td>
                                    <td className="px-5 py-3 text-title dark:text-title-dark">{order.packageName}</td>
                                    <td className="px-5 py-3 text-content dark:text-content-dark">{order.points.toLocaleString('zh-CN')}</td>
                                    <td className="px-5 py-3 text-content dark:text-content-dark">¥{order.amount}</td>
                                    <td className="px-5 py-3">
                                        <span
                                            className={clsx(
                                                'inline-flex rounded-full px-2.5 py-1 text-xs font-medium',
                                                order.status === '已完成'
                                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                            )}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-content dark:text-content-dark">{order.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
