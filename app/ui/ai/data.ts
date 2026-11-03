// AI API 中转站展示用数据。
// 说明：以下点数、价格与计费规则均为页面演示数据，实际规则以控制台配置为准。

// 点数套餐类型
export type PointPackage = {
    id: string;          // 套餐唯一标识
    name: string;        // 套餐名称
    points: number;      // 基础点数
    bonus: number;       // 赠送点数
    price: number;       // 售价（元）
    description: string; // 套餐说明
    recommended?: boolean; // 是否为推荐套餐
};

// 可购买的点数套餐
export const pointPackages: PointPackage[] = [
    {
        id: 'starter',
        name: '体验包',
        points: 1000,
        bonus: 0,
        price: 10,
        description: '适合首次体验与接口联调',
    },
    {
        id: 'standard',
        name: '标准包',
        points: 5500,
        bonus: 500,
        price: 50,
        description: '适合日常开发与小型项目',
        recommended: true,
    },
    {
        id: 'pro',
        name: '专业包',
        points: 12000,
        bonus: 2000,
        price: 100,
        description: '适合团队协作与中高并发',
    },
    {
        id: 'team',
        name: '团队包',
        points: 30000,
        bonus: 6000,
        price: 200,
        description: '适合多项目共享与长期使用',
    },
];

// 模型计费类型
export type ModelPrice = {
    name: string;     // 模型名称
    provider: string; // 模型提供方
    input: number;    // 每 1K 输入 Token 消耗的点数
    output: number;   // 每 1K 输出 Token 消耗的点数
    context: string;  // 上下文长度
};

// 支持的模型与示例计费
export const modelPrices: ModelPrice[] = [
    {name: 'GPT-4o', provider: 'OpenAI', input: 25, output: 100, context: '128K'},
    {name: 'GPT-4o mini', provider: 'OpenAI', input: 2, output: 8, context: '128K'},
    {name: 'Claude 3.5 Sonnet', provider: 'Anthropic', input: 30, output: 150, context: '200K'},
    {name: 'Claude 3 Haiku', provider: 'Anthropic', input: 3, output: 15, context: '200K'},
    {name: 'DeepSeek-V3', provider: 'DeepSeek', input: 1, output: 4, context: '64K'},
    {name: 'Gemini 1.5 Pro', provider: 'Google', input: 18, output: 72, context: '1M'},
];
