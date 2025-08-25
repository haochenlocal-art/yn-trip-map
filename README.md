# 云南7日行程地图 🗺️

一个基于高德地图的云南旅行路线规划应用，展示9天详细行程安排，包含天气适应性建议和互动地图功能。

## ✨ 功能特性

- 📍 **互动地图展示**：基于高德地图API，显示详细的旅行路线
- 🛣️ **智能路径规划**：自动生成景点间的驾车路线，失败时使用直线连接备选方案
- 🌤️ **天气适应性建议**：根据晴天、雨天、雾天提供不同的行程安排
- 📱 **响应式设计**：支持手机、平板、桌面设备
- 🎯 **景点定位**：点击景点可快速定位到地图位置
- 📋 **行程详情**：底部抽屉展示每日详细行程安排
- 🔄 **实时加载状态**：友好的加载提示和错误处理

## 🚀 在线预览

访问：[https://yn-trip-map.vercel.app](https://yn-trip-map.vercel.app)

## 📋 行程概览

**第1天**：北京 → 昆明 → 抚仙湖  
**第2天**：抚仙湖 → 建水（朱家花园、米轨小火车）  
**第3天**：建水 → 元阳梯田（麻栗寨、哈尼博物馆）  
**第4天**：元阳梯田全天（多依树、全福庄、爱春蓝）  
**第5天**：元阳 → 蒙自 → 普者黑（碧色寨、西南联大）  
**第6天**：普者黑全天（溶洞群、苗寨、湿地）  
**第7天**：普者黑 → 弥勒东风韵（艺术馆、葡萄园）  
**第8天**：弥勒 → 石林 → 昆明（石林徒步、斗南花市）  
**第9天**：昆明 → 北京（省博物馆、返程）  

## 🛠️ 技术栈

- **前端**：原生 HTML5 + CSS3 + JavaScript ES6+
- **地图服务**：高德地图 Web API 2.0
- **部署平台**：Vercel
- **样式框架**：自定义 CSS（响应式设计）

## 📦 本地开发

### 环境要求

- Python 3.x（用于本地服务器）
- 现代浏览器（支持 ES6+）

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/yn-trip-map.git
   cd yn-trip-map
   ```

2. **启动本地服务器**
   ```bash
   # 使用 Python
   python3 -m http.server 8080
   
   # 或使用 npm（如果已安装 Node.js）
   npm run dev
   ```

3. **访问应用**
   打开浏览器访问：`http://localhost:8080`

## 🌐 部署到公网

### 方式一：Vercel 部署（推荐）

1. **准备 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yn-trip-map.git
   git push -u origin main
   ```

2. **Vercel 部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 导入你的 GitHub 仓库
   - 部署设置保持默认即可
   - 点击 "Deploy"

3. **自定义域名**（可选）
   - 在 Vercel 项目设置中添加自定义域名
   - 配置 DNS 记录指向 Vercel

### 方式二：Netlify 部署

1. 访问 [netlify.com](https://netlify.com)
2. 拖拽项目文件夹到部署区域
3. 或连接 GitHub 仓库自动部署

### 方式三：GitHub Pages

1. 在 GitHub 仓库设置中启用 Pages
2. 选择 `main` 分支作为源
3. 访问 `https://yourusername.github.io/yn-trip-map`

## ⚙️ 配置说明

### 高德地图 API Key

1. **获取 API Key**
   - 访问 [高德开放平台](https://lbs.amap.com/)
   - 注册开发者账号
   - 创建应用获取 Web 服务 API Key

2. **配置 API Key**
   - 编辑 `app.js` 文件
   - 修改 `AMapKey` 变量为你的 API Key
   ```javascript
   const AMapKey = 'your-amap-api-key-here';
   ```

3. **域名白名单设置**
   - 在高德控制台中设置允许的域名
   - 本地开发：`localhost:8080`
   - 生产环境：你的实际域名

### 安全密钥（可选）

如果启用了 Web 安全密钥校验：
```javascript
const AMapSecurityJsCode = 'your-security-js-code';
```

## 📁 项目结构

```
yn-trip-map/
├── index.html          # 主页面
├── app.js             # 核心 JavaScript 逻辑
├── styles.css         # 样式文件
├── vercel.json        # Vercel 部署配置
├── package.json       # 项目配置
├── .gitignore         # Git 忽略文件
└── README.md          # 项目文档
```

## 🔧 自定义修改

### 修改行程数据

编辑 `app.js` 中的 `itinerary` 数组：

```javascript
const itinerary = [
  {
    day: 1,
    title: '行程标题',
    subtitle: '行程副标题',
    color: '#0ea5e9',
    tips: '驾驶提示',
    pois: [
      { name: '景点名称', time: '时间', lat: 纬度, lng: 经度 }
    ],
    weather: {
      sunny: ['晴天活动'],
      rain: ['雨天活动'],
      fog: ['雾天活动']
    }
  }
];
```

### 修改样式主题

编辑 `styles.css` 中的 CSS 变量：

```css
:root {
  --primary-color: #0ea5e9;
  --secondary-color: #64748b;
  /* 其他颜色变量 */
}
```

## 🐛 故障排除

### 地图不显示
- 检查 API Key 是否正确
- 确认域名已添加到白名单
- 查看浏览器控制台错误信息

### 路径规划失败
- 应用会自动使用直线连接作为备选方案
- 检查 API Key 是否有路径规划权限
- 确认坐标数据格式正确

### 部署后访问异常
- 检查 HTTPS 配置
- 确认静态资源路径正确
- 查看部署平台的错误日志

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues: [项目 Issues 页面](https://github.com/yourusername/yn-trip-map/issues)
- Email: your.email@example.com

---

**享受你的云南之旅！** 🌄✨