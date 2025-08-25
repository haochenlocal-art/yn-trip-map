# 部署指南 📋

本文档详细说明如何将云南7日行程地图应用部署到公网。

## 🔑 高德地图API配置

### 1. 获取API Key

1. 访问 [高德开放平台](https://lbs.amap.com/)
2. 注册并登录开发者账号
3. 进入控制台 → 应用管理 → 我的应用
4. 点击「创建新应用」
5. 填写应用信息：
   - 应用名称：`云南行程地图`
   - 应用类型：`Web端`
6. 创建成功后获取 `Web服务API Key`

### 2. 配置API Key

编辑 `app.js` 文件，替换API Key：

```javascript
// 找到这一行
const AMapKey = 'dc51bae1d2a001bf0eb3ff3a61b28987';

// 替换为你的API Key
const AMapKey = 'your-actual-api-key-here';
```

### 3. 域名白名单配置

**重要：** 高德地图API需要配置域名白名单，否则在公网访问时会报错。

#### 在高德控制台配置：

1. 登录 [高德开放平台控制台](https://console.amap.com/)
2. 进入「应用管理」→ 选择你的应用
3. 点击「设置」→「安全设置」
4. 在「Web端(JS API)」部分添加域名：

**本地开发环境：**
```
localhost:8080
127.0.0.1:8080
```

**生产环境（根据你选择的平台）：**

- **Vercel部署：**
  ```
  your-project-name.vercel.app
  *.vercel.app
  ```

- **Netlify部署：**
  ```
  your-site-name.netlify.app
  *.netlify.app
  ```

- **GitHub Pages：**
  ```
  yourusername.github.io
  ```

- **自定义域名：**
  ```
  yourdomain.com
  www.yourdomain.com
  ```

#### 配置示例：

如果你的应用将部署到 `yn-trip-map.vercel.app`，则在域名白名单中添加：
```
yn-trip-map.vercel.app
*.vercel.app
localhost:8080
```

## 🚀 部署步骤

### 方式一：Vercel 部署（推荐）

#### 准备工作

1. **创建GitHub仓库**
   ```bash
   # 初始化Git仓库
   git init
   
   # 添加所有文件
   git add .
   
   # 提交代码
   git commit -m "Initial commit: 云南行程地图应用"
   
   # 添加远程仓库（替换为你的仓库地址）
   git remote add origin https://github.com/yourusername/yn-trip-map.git
   
   # 推送到GitHub
   git push -u origin main
   ```

#### Vercel部署

1. **访问Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录

2. **导入项目**
   - 点击「New Project」
   - 选择「Import Git Repository」
   - 选择你的 `yn-trip-map` 仓库

3. **配置部署**
   - Project Name: `yn-trip-map`
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: 留空
   - Output Directory: `./`
   - Install Command: 留空

4. **部署**
   - 点击「Deploy」
   - 等待部署完成
   - 获得部署URL，如：`https://yn-trip-map.vercel.app`

5. **更新API域名白名单**
   - 将获得的Vercel域名添加到高德地图控制台的域名白名单中

### 方式二：Netlify 部署

#### 拖拽部署

1. 访问 [netlify.com](https://netlify.com)
2. 注册并登录账号
3. 将项目文件夹直接拖拽到部署区域
4. 等待部署完成
5. 获得部署URL并添加到API域名白名单

#### Git连接部署

1. 点击「New site from Git」
2. 选择GitHub并授权
3. 选择你的仓库
4. 配置构建设置：
   - Build command: 留空
   - Publish directory: `./`
5. 点击「Deploy site」

### 方式三：GitHub Pages

1. **启用GitHub Pages**
   - 进入GitHub仓库设置
   - 滚动到「Pages」部分
   - Source选择「Deploy from a branch」
   - Branch选择「main」
   - Folder选择「/ (root)」
   - 点击「Save」

2. **访问网站**
   - 部署完成后访问：`https://yourusername.github.io/yn-trip-map`
   - 将此域名添加到API白名单

## ✅ 部署后检查清单

- [ ] API Key已正确配置
- [ ] 域名已添加到高德地图白名单
- [ ] 网站可以正常访问
- [ ] 地图可以正常加载
- [ ] 路径规划功能正常（或显示直线备选方案）
- [ ] 移动端适配正常
- [ ] 所有交互功能正常

## 🔧 常见问题解决

### 1. 地图显示空白

**原因：** API Key未配置或域名未加入白名单

**解决：**
- 检查 `app.js` 中的API Key是否正确
- 确认当前访问域名已添加到高德控制台白名单
- 查看浏览器控制台错误信息

### 2. 路径规划不显示

**原因：** API权限不足或网络问题

**解决：**
- 应用会自动降级为直线连接
- 检查API Key是否有路径规划服务权限
- 确认网络连接正常

### 3. HTTPS相关错误

**原因：** 高德地图API在HTTPS环境下有特殊要求

**解决：**
- 确保部署平台支持HTTPS（Vercel、Netlify默认支持）
- 检查混合内容策略

### 4. 移动端显示异常

**原因：** 响应式样式或触摸事件问题

**解决：**
- 检查viewport设置
- 测试触摸滑动功能
- 验证底部抽屉交互

## 📊 性能优化建议

1. **启用CDN加速**
   - Vercel和Netlify默认提供全球CDN
   - 考虑使用自定义域名

2. **缓存策略**
   - 静态资源设置长期缓存
   - HTML文件设置短期缓存

3. **图片优化**
   - 如添加图片，使用WebP格式
   - 实现懒加载

4. **代码压缩**
   - 生产环境压缩CSS和JS
   - 移除调试代码

## 🔄 持续部署

### 自动部署设置

配置完成后，每次推送代码到GitHub主分支，Vercel/Netlify会自动重新部署：

```bash
# 修改代码后
git add .
git commit -m "更新功能描述"
git push origin main

# 自动触发重新部署
```

### 环境变量管理

对于敏感信息（如API Key），建议使用环境变量：

1. **Vercel环境变量**
   - 项目设置 → Environment Variables
   - 添加 `AMAP_KEY` 变量

2. **代码中使用**
   ```javascript
   const AMapKey = process.env.AMAP_KEY || 'fallback-key';
   ```

## 📈 监控和分析

1. **访问统计**
   - 集成Google Analytics
   - 使用Vercel Analytics

2. **错误监控**
   - 配置Sentry错误追踪
   - 监控API调用失败率

3. **性能监控**
   - 使用Lighthouse检测性能
   - 监控页面加载时间

---

**部署成功后，你的云南行程地图就可以供全世界的用户访问了！** 🌍✨