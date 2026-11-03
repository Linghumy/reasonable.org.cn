import Link from "next/link";
import {
    ArrowRightIcon,
    BoltIcon,
    CheckCircleIcon,
    GlobeAltIcon,
    KeyIcon,
    ServerStackIcon,
} from "@heroicons/react/24/solid";
import Section, {Container} from "@/app/ui/container";
import PointsPurchase from "@/app/ui/ai/points-purchase";
import {modelPrices} from "@/app/ui/ai/data";

export const metadata = {
    title: "AI API 中转站",
    // 原描述："Reasonable AI API 中转站，统一接入主流大模型，兼容 OpenAI 协议，按点数计费。"
    description: "禾李（杭州）科技有限责任公司旗下的 AI API 中转站，统一接入主流大模型，兼容 OpenAI 协议，按点数计费。",
};

// 核心能力展示数据
const features = [
    {
        title: '多模型统一接入',
        description: '一个接口调用 GPT、Claude、DeepSeek、Gemini 等主流模型，减少重复接入成本。',
        icon: GlobeAltIcon,
    },
    {
        title: 'OpenAI 协议兼容',
        description: '兼容 OpenAI SDK 与常用参数格式，现有项目通常只需替换 Base URL 与 API Key。',
        icon: KeyIcon,
    },
    {
        title: '按点数灵活计费',
        description: '购买点数后按实际 Token 消耗扣费，无固定月费，适合个人开发与团队项目。',
        icon: BoltIcon,
    },
    {
        title: '稳定中转服务',
        description: '统一入口与调用统计，方便在控制台查看用量、余额与最近请求记录。',
        icon: ServerStackIcon,
    },
];

export default function AiApiPage() {
    return (
        <Section>
            {/* 业务介绍 */}
            <Container className="pt-0">
                <div className="overflow-hidden rounded-3xl border border-primary bg-secondary p-6 dark:border-primary-dark dark:bg-secondary-dark sm:p-10">
                    <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                        Reasonable 新业务
                    </span>
                    <h1 className="mt-4 text-3xl font-black tracking-tight text-title dark:text-title-dark sm:text-5xl">
                        AI API 中转站
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-content dark:text-content-dark sm:text-lg">
                        为开发者提供统一的 AI 大模型 API 接入服务。兼容 OpenAI 协议，按点数计费，
                        一个密钥即可调用多种模型。当前页面为业务展示，支付与真实调用能力正在接入中。
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
                        >
                            进入控制台
                            <ArrowRightIcon className="ml-2 h-4 w-4"/>
                        </Link>
                        <a
                            href="#purchase"
                            className="inline-flex items-center rounded-lg border border-primary bg-white/60 px-5 py-2.5 text-sm font-medium text-title transition hover:bg-white dark:border-primary-dark dark:bg-white/5 dark:text-title-dark dark:hover:bg-white/10"
                        >
                            购买点数
                        </a>
                    </div>
                    {/* API 接入地址展示 */}
                    <div className="mt-8 rounded-2xl border border-primary bg-white/70 p-4 dark:border-primary-dark dark:bg-white/5">
                        <p className="text-xs font-medium uppercase tracking-wide text-content dark:text-content-dark">
                            API Base URL（示例）
                        </p>
                        <code className="mt-2 block break-all text-sm text-title dark:text-title-dark">
                            https://api.example.com/v1
                        </code>
                        <p className="mt-2 text-xs text-content dark:text-content-dark">
                            实际接入地址与密钥请在控制台中查看，本页地址仅作展示。
                        </p>
                    </div>
                </div>
            </Container>

            {/* 核心能力 */}
            <Container>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-title dark:text-title-dark">核心能力</h2>
                    <p className="mt-2 text-sm text-content dark:text-content-dark">
                        面向个人开发者与团队的一站式 AI API 接入方案
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-primary bg-white/60 p-5 dark:border-primary-dark dark:bg-white/5"
                            >
                                <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400"/>
                                <h3 className="mt-4 font-bold text-title dark:text-title-dark">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-content dark:text-content-dark">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* 模型与示例计费 */}
            <Container>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
                    <div>
                        <h2 className="text-2xl font-bold text-title dark:text-title-dark">支持模型与示例计费</h2>
                        <p className="mt-2 text-sm text-content dark:text-content-dark">
                            单位：点数 / 1K Tokens，以下价格仅为演示数据
                        </p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-content dark:bg-secondary-dark dark:text-content-dark">
                        持续接入更多模型
                    </span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-primary dark:border-primary-dark">
                    <table className="min-w-full divide-y divide-primary text-left text-sm dark:divide-primary-dark">
                        <thead className="bg-secondary dark:bg-secondary-dark">
                            <tr>
                                <th className="px-4 py-3 font-medium text-title dark:text-title-dark">模型</th>
                                <th className="px-4 py-3 font-medium text-title dark:text-title-dark">提供方</th>
                                <th className="px-4 py-3 font-medium text-title dark:text-title-dark">输入</th>
                                <th className="px-4 py-3 font-medium text-title dark:text-title-dark">输出</th>
                                <th className="px-4 py-3 font-medium text-title dark:text-title-dark">上下文</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary dark:divide-primary-dark">
                            {modelPrices.map((model) => (
                                <tr key={model.name} className="bg-white/40 dark:bg-white/5">
                                    <td className="px-4 py-3 font-medium text-title dark:text-title-dark">{model.name}</td>
                                    <td className="px-4 py-3 text-content dark:text-content-dark">{model.provider}</td>
                                    <td className="px-4 py-3 text-content dark:text-content-dark">{model.input} 点</td>
                                    <td className="px-4 py-3 text-content dark:text-content-dark">{model.output} 点</td>
                                    <td className="px-4 py-3 text-content dark:text-content-dark">{model.context}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>

            {/* 购买点数 */}
            <Container>
                <div id="purchase" className="rounded-3xl border border-primary bg-white/50 p-5 dark:border-primary-dark dark:bg-white/5 sm:p-8">
                    <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
                        <div>
                            <h2 className="text-2xl font-bold text-title dark:text-title-dark">购买点数</h2>
                            <p className="mt-2 text-sm text-content dark:text-content-dark">
                                选择套餐后使用支付宝支付。当前支付通道尚未接入，按钮暂不可用。
                            </p>
                        </div>
                        <Link
                            href="/dashboard/billing"
                            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300"
                        >
                            查看订单记录
                            <ArrowRightIcon className="ml-1 h-4 w-4"/>
                        </Link>
                    </div>
                    <PointsPurchase/>
                </div>
            </Container>

            {/* 接入示例 */}
            <Container>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-title dark:text-title-dark">快速接入示例</h2>
                    <p className="mt-2 text-sm text-content dark:text-content-dark">
                        以 OpenAI 兼容接口为例，替换 Base URL 与 API Key 即可开始调用。
                    </p>
                </div>
                <div className="rounded-2xl border border-primary bg-slate-950 p-5 text-slate-100 dark:border-primary-dark">
                    <pre className="overflow-x-auto text-xs leading-6 sm:text-sm">
{`curl https://api.example.com/v1/chat/completions \\
  -H "Authorization: Bearer sk-demo-xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "你好，介绍一下你自己"}
    ]
  }'`}
                    </pre>
                </div>
            </Container>

            {/* 底部引导 */}
            <Container>
                <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-primary bg-secondary p-6 dark:border-primary-dark dark:bg-secondary-dark sm:flex-row sm:items-center sm:p-8">
                    <div>
                        <h2 className="text-xl font-bold text-title dark:text-title-dark">准备好开始使用了吗？</h2>
                        <p className="mt-2 text-sm text-content dark:text-content-dark">
                            前往控制台查看业务概览、点数余额与充值记录。
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
                        >
                            打开控制台
                        </Link>
                        <Link
                            href="/dashboard/billing"
                            className="inline-flex items-center rounded-lg border border-primary bg-white/60 px-5 py-2.5 text-sm font-medium text-title transition hover:bg-white dark:border-primary-dark dark:bg-white/5 dark:text-title-dark dark:hover:bg-white/10"
                        >
                            前往充值
                        </Link>
                    </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-content dark:text-content-dark">
                    <CheckCircleIcon className="mr-1 h-4 w-4"/>
                    本页面为业务展示，所有数据均为演示内容。
                </div>
            </Container>
        </Section>
    );
}
