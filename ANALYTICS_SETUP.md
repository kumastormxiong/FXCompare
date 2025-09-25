# Google Analytics 访问统计说明

## 📊 当前实现

网页已集成Google Analytics (GA4)，但**无法直接从前端获取真实访问数据**。

## ⚠️ 重要说明

**Google Analytics API 不能直接在前端调用**，原因：
- 需要服务端认证
- API密钥不能暴露在前端
- 安全限制防止滥用

## 🔧 获取真实数据的步骤

### 1. Google Analytics 4 设置

1. 登录 [Google Analytics](https://analytics.google.com/)
2. 选择您的网站属性
3. 获取 **Measurement ID**: `G-3KHJFBSKGJ` ✅ (已配置)

### 2. 启用 GA4 Reporting API

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 **Google Analytics Reporting API**
4. 创建服务账户和密钥

### 3. 后端实现 (推荐)

创建后端API来获取GA4数据：

```javascript
// 后端示例 (Node.js)
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

async function getAnalyticsData() {
    const analyticsDataClient = new BetaAnalyticsDataClient({
        keyFilename: 'path/to/service-account-key.json',
    });

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${PROPERTY_ID}`,
        dateRanges: [
            {
                startDate: '2025-01-01',
                endDate: 'today',
            },
        ],
        metrics: [
            {
                name: 'totalUsers',
            },
        ],
    });

    return response.rows[0].metricValues[0].value;
}
```

### 4. 前端调用真实数据

```javascript
// 修改 script.js 中的 updateVisitCounter 函数
async function updateVisitCounter() {
    try {
        const response = await fetch('/api/analytics-data');
        const data = await response.json();
      
        const visitCountZh = document.getElementById('visitCount');
        const visitCountEn = document.getElementById('visitCountEn');
      
        if (visitCountZh) {
            visitCountZh.textContent = parseInt(data.totalUsers).toLocaleString();
        }
        if (visitCountEn) {
            visitCountEn.textContent = parseInt(data.totalUsers).toLocaleString();
        }
    } catch (error) {
        console.log('无法获取真实数据，使用模拟数据');
        // 使用模拟数据作为后备
    }
}
```

## 🎯 当前状态

- ✅ Google Analytics 已集成
- ✅ 页面访问事件已发送到GA
- ✅ 显示"GA统计中"状态
- ❌ 无法显示真实访问数字（需要后端）

## 💡 推荐方案

### 方案1：查看GA控制台
- 登录 [Google Analytics](https://analytics.google.com/)
- 查看"实时"报告获取访问数据
- 手动更新网页显示

### 方案2：使用第三方服务
- 百度统计
- 友盟统计
- 这些服务提供前端API

## 📈 数据准确性

使用GA4 Reporting API可以获取：

- 真实的全网访问统计
- 跨设备、跨浏览器数据
- 地理位置分布
- 实时访问数据

## 🚀 快速启用

如果您有后端开发能力，可以：

1. 设置GA4 Reporting API
2. 创建后端服务获取数据
3. 修改前端调用真实API

否则，当前模拟数据也能提供良好的用户体验。
