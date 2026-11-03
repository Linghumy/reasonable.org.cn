'use client';

import {useState} from "react";
import clsx from "clsx";
import {CheckCircleIcon, SparklesIcon} from "@heroicons/react/24/solid";
import {pointPackages} from "@/app/ui/ai/data";

/**
 * 点数购买选择器。
 * 当前仅做页面展示与选中交互，支付通道尚未接入。
 */
export default function PointsPurchase() {
    // 默认选中推荐套餐，若没有推荐则选中第一个
    const defaultPackage = pointPackages.find((item) => item.recommended) ?? pointPackages[0];
    const [selectedId, setSelectedId] = useState(defaultPackage.id);

    // 根据选中状态查找套餐
    const selected = pointPackages.find((item) => item.id === selectedId) ?? defaultPackage;
    // 计算到账总点数（基础点数 + 赠送点数）
    const totalPoints = selected.points + selected.bonus;

    return (
        <div className="space-y-5">
            {/* 套餐卡片列表 */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {pointPackages.map((item) => {
                    const active = item.id === selectedId;
                    const itemTotal = item.points + item.bonus;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedId(item.id)}
                            className={clsx(
                                'relative rounded-2xl border p-5 text-left transition',
                                active
                                    ? 'border-blue-500 bg-blue-50 shadow-sm dark:border-blue-400 dark:bg-blue-500/10'
                                    : 'border-primary bg-white/60 hover:border-blue-300 hover:bg-white dark:border-primary-dark dark:bg-white/5 dark:hover:border-blue-400/60'
                            )}
                        >
                            {/* 推荐标签 */}
                            {item.recommended && (
                                <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
                                    <SparklesIcon className="mr-1 h-3 w-3"/>推荐
                                </span>
                            )}
                            <p className="text-sm font-medium text-content dark:text-content-dark">{item.name}</p>
                            <p className="mt-3 text-title dark:text-title-dark">
                                <span className="text-3xl font-black">{item.points.toLocaleString('zh-CN')}</span>
                                <span className="ml-1 text-sm">点</span>
                            </p>
                            <p className="mt-1 text-xs text-content dark:text-content-dark">
                                {item.bonus > 0 ? `含赠送 ${item.bonus.toLocaleString('zh-CN')} 点，共 ${itemTotal.toLocaleString('zh-CN')} 点` : '无赠送点数'}
                            </p>
                            <p className="mt-4 text-2xl font-bold text-title dark:text-title-dark">
                                ¥{item.price}
                            </p>
                            <p className="mt-1 text-xs text-content dark:text-content-dark">{item.description}</p>
                            {/* 选中标记 */}
                            {active && (
                                <CheckCircleIcon className="absolute bottom-4 right-4 h-5 w-5 text-blue-600 dark:text-blue-400"/>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* 选中套餐汇总与支付占位 */}
            <div className="flex flex-col gap-4 rounded-2xl border border-primary bg-white/70 p-5 dark:border-primary-dark dark:bg-white/5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-medium text-title dark:text-title-dark">
                        已选：{selected.name}
                    </p>
                    <p className="mt-1 text-sm text-content dark:text-content-dark">
                        到账 {totalPoints.toLocaleString('zh-CN')} 点，应付
                        <span className="mx-1 text-lg font-bold text-title dark:text-title-dark">¥{selected.price}</span>
                    </p>
                    <p className="mt-1 text-xs text-content dark:text-content-dark">
                        演示数据：点数将在支付成功后自动到账
                    </p>
                </div>
                <div className="flex flex-col items-stretch gap-2 sm:items-end">
                    {/* 支付通道尚未接入，按钮保持禁用 */}
                    <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white opacity-60"
                    >
                        支付宝API等待接入
                    </button>
                    <span className="text-xs text-content dark:text-content-dark">
                        支付方式：支付宝 · 通道接入中
                    </span>
                </div>
            </div>
        </div>
    );
}
