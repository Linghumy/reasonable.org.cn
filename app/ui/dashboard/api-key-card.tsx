'use client';

import {useState} from "react";
import {CheckIcon, ClipboardDocumentIcon, EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";

/**
 * 控制台 API 接入信息卡片。
 * 仅提供显示 / 复制演示密钥的交互，不涉及真实鉴权。
 */
export default function ApiKeyCard({apiKey, baseUrl}: { apiKey: string; baseUrl: string }) {
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    // 脱敏展示：保留前缀与后四位
    const maskedKey = `${apiKey.slice(0, 7)}••••••••${apiKey.slice(-4)}`;

    // 复制演示密钥到剪贴板
    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(apiKey);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // 浏览器不支持或未授权时静默失败，页面仍可正常展示
        }
    }

    return (
        <div className="space-y-4">
            {/* Base URL */}
            <div>
                <p className="text-xs font-medium uppercase tracking-wide text-content dark:text-content-dark">
                    API Base URL
                </p>
                <code className="mt-2 block break-all rounded-xl border border-primary bg-white/60 px-3 py-2 text-sm text-title dark:border-primary-dark dark:bg-white/5 dark:text-title-dark">
                    {baseUrl}
                </code>
            </div>

            {/* API Key */}
            <div>
                <p className="text-xs font-medium uppercase tracking-wide text-content dark:text-content-dark">
                    API Key
                </p>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-primary bg-white/60 px-3 py-2 dark:border-primary-dark dark:bg-white/5">
                    <code className="min-w-0 flex-1 break-all text-sm text-title dark:text-title-dark">
                        {visible ? apiKey : maskedKey}
                    </code>
                    <button
                        type="button"
                        onClick={() => setVisible((value) => !value)}
                        aria-label={visible ? '隐藏 API Key' : '显示 API Key'}
                        className="rounded-lg p-1.5 text-content transition hover:bg-secondary hover:text-title dark:text-content-dark dark:hover:bg-white/10 dark:hover:text-title-dark"
                    >
                        {visible ? <EyeSlashIcon className="h-4 w-4"/> : <EyeIcon className="h-4 w-4"/>}
                    </button>
                    <button
                        type="button"
                        onClick={handleCopy}
                        aria-label="复制 API Key"
                        className="rounded-lg p-1.5 text-content transition hover:bg-secondary hover:text-title dark:text-content-dark dark:hover:bg-white/10 dark:hover:text-title-dark"
                    >
                        {copied ? <CheckIcon className="h-4 w-4 text-emerald-500"/> : <ClipboardDocumentIcon className="h-4 w-4"/>}
                    </button>
                </div>
                <p className="mt-2 text-xs text-content dark:text-content-dark">
                    请勿在前端代码或公开仓库中暴露 API Key。
                </p>
            </div>
        </div>
    );
}
