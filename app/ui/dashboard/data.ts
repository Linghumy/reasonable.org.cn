// 控制台展示用模拟数据。
// 说明：当前没有接入后端与真实支付，所有数据仅用于页面展示。

// 账户概览信息
export const accountOverview = {
    // 原演示账户名：'禾李开发者'
    name: '禾李科技开发者',
    email: 'dev@reasonable.org.cn',
    plan: '按量付费',
    balance: 12800,
    status: '正常',
    baseUrl: 'https://api.example.com/v1',
    apiKey: 'sk-demo-3f8a9c2e7b1d4f6a',
};

// 用量趋势（按月份，单位为消耗点数）
export const usageTrend = [
    {month: '6月', points: 1200},
    {month: '7月', points: 1800},
    {month: '8月', points: 1500},
    {month: '9月', points: 2600},
    {month: '10月', points: 3100},
    {month: '11月', points: 2400},
];

// 最近调用记录
export const recentCalls = [
    {id: 'req_001', time: '11-03 14:22', model: 'GPT-4o mini', tokens: 1840, points: 18, status: '成功'},
    {id: 'req_002', time: '11-03 13:58', model: 'DeepSeek-V3', tokens: 4200, points: 21, status: '成功'},
    {id: 'req_003', time: '11-03 12:31', model: 'Claude 3 Haiku', tokens: 960, points: 9, status: '成功'},
    {id: 'req_004', time: '11-03 11:05', model: 'GPT-4o', tokens: 2350, points: 108, status: '成功'},
    {id: 'req_005', time: '11-02 22:47', model: 'Gemini 1.5 Pro', tokens: 1200, points: 54, status: '失败'},
];

// 订单记录
export const billingOrders = [
    {id: 'ORD-20261103-001', packageName: '标准包', points: 6000, amount: 50, status: '等待支付', createdAt: '11-03 14:30'},
    {id: 'ORD-20261020-002', packageName: '体验包', points: 1000, amount: 10, status: '已完成', createdAt: '10-20 09:12'},
    {id: 'ORD-20261001-003', packageName: '专业包', points: 14000, amount: 100, status: '已完成', createdAt: '10-01 18:45'},
];
