# React UI Components

一个现代化的 React UI 组件库，包含按钮、消息提示和通知组件。基于 Ant Design 和 styled-components 构建，提供更现代的视觉效果和更好的用户体验。

## 特性

- 🎨 现代化的渐变设计风格
- 🚀 流畅的动画效果
- 📱 完全响应式设计
- 🎯 完整的类型检查
- 🎪 支持主题定制
- 🔥 即插即用的组件

## 安装 
bash
npm install your-package-name

## 组件使用指南

### Button 按钮

一个支持多种状态的现代化按钮组件，具有渐变效果和动画反馈。
jsx
import { Button } from 'your-package-name';
// 基础用法
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
// 不同尺寸
<Button size="large">大按钮</Button>
<Button size="middle">中等按钮</Button>
<Button size="small">小按钮</Button>
// 状态
<Button loading>加载中</Button>
<Button disabled>禁用状态</Button>
<Button danger>危险按钮</Button>

#### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | 'primary' \| 'default' \| 'link' \| 'text' | 'default' |
| size | 按钮大小 | 'large' \| 'middle' \| 'small' | 'middle' |
| loading | 加载状态 | boolean | false |
| disabled | 禁用状态 | boolean | false |
| danger | 危险按钮 | boolean | false |

### Message 消息提示

轻量级的全局消息提示组件，用于操作反馈。
jsx:README.md
import { showSuccessMessage, showWarningMessage } from 'your-package-name';
// 成功消息
showSuccessMessage('操作成功！');
// 警告消息
showWarningMessage('请注意！');

#### Message API

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| showSuccessMessage | 显示成功消息 | (content: string) => void |
| showWarningMessage | 显示警告消息 | (content: string) => void |

### Notification 通知提醒

可自定义的通知提醒组件，支持成功和错误两种类型。
jsx
import {
NotificationProvider,
successNotification,
errorNotification
} from 'your-package-name';
// 在应用根组件中添加 Provider
function App() {
return (
<NotificationProvider>
<YourApp />
</NotificationProvider>
);
}
// 显示成功通知
successNotification('操作已完成');
// 显示错误通知
errorNotification('发生错误');

#### Notification API

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| successNotification | 显示成功通知 | (message: string) => void |
| errorNotification | 显示错误通知 | (message: string) => void |

## 开发指南

### 环境准备
bash
克隆项目
git clone your-repository-url
安装依赖
npm install
启动开发环境
npm run dev
构建
npm run build

### 目录结构
components/
├── Button/
│ ├── index.js
│ ├── Button.js
│ └── styles.js
├── Message/
│ ├── index.js
│ ├── Message.js
│ └── styles.js
├── Notification/
│ ├── index.js
│ ├── Notification.js
│ ├── NotificationItem.js
│ └── styles.js
└── index.js

## 依赖说明

- React >= 16.8.0
- styled-components >= 5.0.0
- antd >= 4.0.0
- @ant-design/icons >= 4.0.0

## 浏览器支持

- Chrome >= 51
- Firefox >= 54
- Safari >= 10
- Edge >= 79

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

MIT © [Your Name]