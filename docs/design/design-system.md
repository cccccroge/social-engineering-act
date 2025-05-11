# CryptoTech Pro V2 設計系統規範

## 1. 品牌識別系統

### 1.1 Logo 設計
- 主要標誌：六邊形 "C" 符號 + "CryptoTech Pro" 文字
- Icon 設計：漸層色六邊形配合加密貨幣符號
- 使用場景：深色/淺色背景各一版
- 保護空間：Logo 高度的 1/2
- 最小尺寸：24px（Icon）、80px（完整標誌）

### 1.2 品牌色系
主色調：
- Primary Blue: #007BFF → #0056b3 (漸層)
- Gold Accent: #FFD700 → #FFA500 (漸層)
- Deep Background: #1A1F36 → #2D3748 (漸層)

功能色：
- Success: #28A745 → #1e7e34 (漸層)
- Warning: #FFC107 → #d39e00 (漸層)
- Danger: #DC3545 → #bd2130 (漸層)

中性色：
- Background Light: #F8F9FA
- Border Light: #DEE2E6
- Text Primary: #212529
- Text Secondary: #6C757D

### 1.3 字體系統
品牌字體：
- 標題：Clash Display（英文）/ PingFang TC（中文）
- 內文：Inter（英文）/ PingFang TC（中文）
- 數字：Roboto Mono

字級設計：
- H1: 48px/1.2 (Clash Display Bold)
- H2: 36px/1.25 (Clash Display Medium)
- H3: 28px/1.3 (Clash Display Regular)
- H4: 24px/1.4 (Inter SemiBold)
- 大文本: 18px/1.5 (Inter Regular)
- 內文: 16px/1.5 (Inter Regular)
- 小字: 14px/1.5 (Inter Regular)
- 標註: 12px/1.4 (Inter Regular)

## 2. 視覺元素系統

### 2.1 背景元素
幾何圖形：
- 六邊形網格
- 抽象曲線
- 點陣圖案
- 漸層光暈

材質效果：
- 磨砂玻璃效果：background-blur: 10px
- 暗色紋理：opacity 8%
- 光效：radial-gradient

### 2.2 投資方案卡片
基礎版：
- 純白背景
- 淺灰邊框
- 適中陰影

進階版：
- 白色背景
- 藍色漸層邊框
- 加強陰影
- 懸浮特效

尊榮版：
- 金色紋理背景
- 深金邊框
- 特製陰影
- 光效裝飾

### 2.3 數據視覺化
圖表風格：
- 線條：2px 粗細，圓角端點
- 面積圖：半透明填充
- 標籤：懸浮提示框
- 動畫：緩動效果

顏色應用：
- 上漲：#28A745
- 下跌：#DC3545
- 中性：#6C757D

### 2.4 互動元素
按鈕設計：
- 大：height: 56px, padding: 0 32px
- 中：height: 48px, padding: 0 24px
- 小：height: 40px, padding: 0 16px
- 圓角：border-radius: 8px
- 動畫：0.3s ease-in-out

表單元素：
- 輸入框：height: 48px
- 下拉選單：custom select
- 複選框：自定義樣式
- 單選框：自定義樣式

## 3. 動態效果系統

### 3.1 過渡動畫
頁面切換：
- 進入：fade-in-up, 0.4s
- 退出：fade-out-down, 0.3s

元素載入：
- 卡片：fade-in + scale, 0.3s
- 列表：序列動畫，間隔 0.1s
- 圖表：progressive reveal

### 3.2 微互動
按鈕：
- Hover：scale(1.02) + 亮度提升
- Active：scale(0.98)
- Loading：spinner animation

卡片：
- Hover：上移 4px + 陰影加深
- Active：scale(0.99)

數據更新：
- 數字跳動
- 狀態切換
- 進度指示

### 3.3 載入狀態
Skeleton Screen：
- 背景：#F0F0F0
- 動畫：loading shine
- 圓角：8px

Progress Bar：
- 高度：4px
- 顏色：品牌主色
- 動畫：0.6s linear

## 4. 響應式設計

### 4.1 斷點設定
- 手機：< 576px
- 平板：576px - 991px
- 桌面：992px - 1199px
- 大螢幕：≥ 1200px

### 4.2 版面調整
導航：
- 手機：漢堡選單
- 平板：精簡選單
- 桌面：完整選單

卡片佈局：
- 手機：單欄 100%
- 平板：雙欄 50%
- 桌面：三欄 33.33%

### 4.3 內容調整
字體大小：
- 手機：基準 14px
- 平板：基準 15px
- 桌面：基準 16px

圖表：
- 手機：簡化版
- 平板：基礎版
- 桌面：完整版

## 5. 安全性設計

### 5.1 視覺可信度
- SSL 安全標誌位置
- 支付系統標誌排版
- 合規認證展示
- 用戶評價呈現方式
- 專業夥伴展示區

### 5.2 操作保護
- 敏感操作確認框設計
- 錯誤提示樣式
- 成功提示樣式
- 載入狀態指示
- 超時提醒設計

這個設計系統將持續更新以確保最佳的使用者體驗和轉換率。