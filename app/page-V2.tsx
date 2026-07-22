'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Database, 
  Radio, 
  Boxes, 
  CheckCircle2, 
  Zap, 
  Server, 
  Sliders, 
  FileSpreadsheet, 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X,
  ChevronRight,
  Layers,
  ExternalLink,
  Factory,
  Gauge
} from 'lucide-react';

// ==========================================
// 1. 四大核心解決方案資料結構 (附高畫質工業圖庫)
// ==========================================
const solutionsData = [
  {
    id: 'connectivity',
    isFlagship: true,
    title: '工業自動化與儀器設備自動化連通',
    subtitle: 'Automation & Instrumentation Connectivity',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    tagline: '萬能驅動開發 ╳ 異質介面串接 ╳ 多通道即時控制',
    description: '專注於各式可程式電源供應器、數位電錶、安規測試儀與訊號產生器之自動化連通。打破舊型設備與異質廠牌藩籬，實現毫秒級數據採集與 PLC 雙向訊號交握。',
    guarantees: [
      '開放式不限儀器廠牌與型號（提供規格經測試即可串接）',
      '支援多 Channel 獨立控制與高達 48 台設備同步連通',
      '內建 ISO 16750 / VW 80000 / GMW 3172 等 255-Step 複雜波形測試排程',
      '與各大廠牌 PLC (三菱、士林等) 進行 Bit/Word 級交握與異常攔截'
    ],
    verifiedCases: [
      '可程式電源供應器連通（多台自動供電、電流遞增與 Step 測試）',
      '精密電測與電池充放電系統（GPIB / RS232 / USB 跨介面連通）',
      '300 小時連續安規監控與 20 通道測試盒自動化阻值量測',
      '烤箱與恆溫恆濕環境實驗室自動化連通與數據自動 Log 寫入'
    ],
    protocols: ['GPIB', 'RS-232', 'RS-485', 'EtherNet (TCP/IP)', 'USB Hub', 'Analog I/O']
  },
  {
    id: 'smt-traceability',
    isFlagship: false,
    title: 'SMT 智慧製造與全流程物料追溯',
    subtitle: 'SMT & Materials Traceability',
    icon: Boxes,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tagline: 'ReelChecker 對料追溯 ╳ 100% 錯件防呆 ╳ 全履歷管控',
    description: '整合條碼槍、標籤印表機、X-Ray 點料機、自動倉儲與 SMT 產線。針對錫膏、鋼板、MSL 烘烤元件提供精密防錯與生產履歷追溯。',
    guarantees: [
      'ReelChecker SMT 量測對料系統，徹底防範換料錯件風險',
      '錫膏/紅膠獨一碼 (ID) 管控，自動卡關開罐 7 天失效與回溫時數',
      '鋼板張力測試、清洗履歷與 10 萬次壽命到達自動預警',
      'MSL 濕敏元件烘烤時間/溫度自動帶入與預熱時間計算'
    ],
    verifiedCases: [
      'SMT 產線量測對料追溯系統 (ReelChecker System)',
      '錫膏/紅膠管理系統與對料 1-0 站自動比對',
      '鋼板管理系統（對接 BOM 表與產線電子看板）',
      'MSL 濕敏元件烘烤紀錄與 SMT 產線時程防呆整合',
      '料捲管理搭配 X-Ray 點料 (PSA 系統) 自動倉儲進出庫'
    ],
    protocols: ['CIMES MES 對接', 'PostgreSQL', 'Oracle', '條碼/二維碼掃描', 'WIFI/藍芽工業槍']
  },
  {
    id: 'mes-scheduling',
    isFlagship: false,
    title: 'MES / SFCS 製程管控與生管排程分析',
    subtitle: 'MES / SFCS & Production Scheduling',
    icon: Activity,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tagline: '貫穿生管 ERP 排程 ╳ 現場 PLC 觸控站 ╳ 人力優化',
    description: '銜接生管 ERP 排程與現場生產站點。提供 WIP 投產控制、機台運作紀錄、配方自動切換與 SMT/後段人力分配優化演算法。',
    guarantees: [
      '雙 EtherNet 埠工業電腦，安全對接機台 PLC 與客戶 MES/TGCE 系統',
      '自動化大料/小料秤重分料與配方混料 (如食品業 SFCS)',
      'SMT 換線架料工時與 ICP/Power 後段 5 站人力最佳化分析',
      '齊料/缺料生產時數統計與 SMT 標準稼動率報表自動產出'
    ],
    verifiedCases: [
      '機台運作紀錄系統（自動/手動模式 WIP 投產與 Log 紀錄）',
      '食品業/化工配方與自動秤重分料 SFCS 製程管控',
      '人力分配產能分析系統（DIP/焊修/組裝/測試/包裝 5 站）',
      'SMT 排程效能統計與預計斷線區段分析'
    ],
    protocols: ['EtherNet/IP', 'Modbus TCP', 'WIP 上報', 'Oracle/MS SQL', 'CIMES 製令']
  },
  {
    id: 'factory-analytics',
    isFlagship: false,
    title: '專用廠務監控與數據視覺化分析',
    subtitle: 'Factory Operations & Analytics',
    icon: Database,
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    tagline: '彈性底層 DB 架構 ╳ 圖像化曲線分析 ╳ 自動預警提示',
    description: '針對廠務環境、電源、烤箱與資產儲位進行全天候監控。提供多曲線對齊分析演算法（自動計算收斂值、斜率與面積）與 Email 自動提示。',
    guarantees: [
      '資料庫架構零限制：PostgreSQL, Oracle, MS SQL, MySQL 或 Log 檔',
      '支援高達 13 條溫度曲線同步位移對齊與區域放大分析',
      '單一工業電腦串接 48 台電源與 14 台烤箱，精度達小數點下 3 位',
      '廠區 樓層/區域 儲位地圖管理與設備保養/校驗提前通知'
    ],
    verifiedCases: [
      'PLC 溫度紀錄查詢系統（自動計算收斂值、斜率與面積）',
      '廠務烤箱與電源監控系統（每 5 秒高頻數據寫入）',
      '物品儲位紀錄與設備保養/校驗 Email 自動提示系統'
    ],
    protocols: ['PostgreSQL', 'MS SQL Server', 'CSV/Log 導出', 'SMTP Mail', 'Excel 報表']
  }
];

// ==========================================
// 2. 西門子風格應用場景 Showcases
// ==========================================
const applicationShowcases = [
  {
    title: '車用電子與多通道電源自動化測試',
    category: 'INSTRUMENTATION CONNECTIVITY',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    desc: '單一系統串接 48 台電源供應器與數位電錶，自動執行 ISO 16750 標準波形，數據毫秒級寫入資料庫。'
  },
  {
    title: 'SMT 高精密電子廠全物料追溯',
    category: 'SMT TRACEABILITY',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    desc: '結合 ReelChecker 換料防錯、錫膏開罐冷藏卡關與 X-Ray 點料，達成 100% 錯件攔截與追溯。'
  },
  {
    title: '食品與化工多配方自動秤重分料',
    category: 'SFCS & MES INTEGRATION',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    desc: '貫穿生管排程與 PLC 閥件控制，大料/小料精確秤重，徹底防範人為投料錯誤。'
  },
  {
    title: '廠務烤箱與 13 條溫度曲線同步對齊',
    category: 'FACTORY ANALYTICS',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    desc: '自動計算收斂值、斜率與面積，即時匯出專業分析報表，確保實驗品質無死角。'
  }
];

// ==========================================
// 3. 主頁面 Main Component
// ==========================================
export default function Home() {
  const [activeTab, setActiveTab] = useState('connectivity');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const selectedSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];

  return (
    <main className="min-h-screen bg-[#070d19] text-slate-100 font-sans selection:bg-[#EA9512] selection:text-slate-950">
      
      {/* ------------------------------------------------------------------ */}
      {/* 頂部導覽列 Navbar (融合 Siemens 現代科技極簡風 + Comstory Logo) */}
      {/* ------------------------------------------------------------------ */}
      <nav className="border-b border-slate-800/80 bg-[#070d19]/90 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo 標誌區塊 */}
          <div className="flex items-center gap-3">
            <div className="relative bg-[#2A4343]/80 border border-slate-700 p-2 rounded-lg flex items-center justify-center shadow-md shadow-slate-950">
              <span className="text-xl font-black text-white font-serif leading-none italic">C</span>
              {/* Logo 指標紅精確三角號 */}
              <span className="absolute top-1.5 right-1.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-[#D9261C] transform rotate-45"></span>
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white flex items-center gap-1">
                COMSTORY <span className="text-[#EA9512] font-serif italic text-lg font-bold">資治</span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1">
                Automation & Instrumentation SI
              </p>
            </div>
          </div>

          {/* 桌機選單 */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <a href="#solutions" className="hover:text-[#EA9512] transition">四大解決方案</a>
            <a href="#showcase" className="hover:text-[#EA9512] transition">應用場景</a>
            <a href="#guarantees" className="hover:text-[#EA9512] transition">技術優勢</a>
            <a href="#contact" className="hover:text-[#EA9512] transition">聯絡資治</a>
          </div>

          {/* 右側 CTA 按鈕 */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
            >
              預約架構評估 <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* 行動端選單開關 */}
          <button 
            className="md:hidden text-slate-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 行動端下拉選單 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-[#EA9512]">四大解決方案</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-[#EA9512]">應用場景</a>
            <a href="#guarantees" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-[#EA9512]">技術優勢</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-300 hover:text-[#EA9512]">聯絡資治</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#EA9512] text-slate-950 font-bold py-2.5 rounded-lg text-sm"
            >
              預約架構評估
            </a>
          </div>
        )}
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Siemens-Style Hero Section (實景大圖 ╳ 工業連線數據 Widget) */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-slate-800/80">
        
        {/* 背景網格與極光 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EA9512]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 左側：核心文案 (Siemens-Style 大膽排版) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 標籤 Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-[#EA9512] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#D9261C] animate-ping"></span>
              EST. 1996 ╳ 工業自動化與儀器設備連通整合專家
            </div>
            
            {/* 主標題 H1 */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              打通工業設備數據孤島<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA9512] via-amber-300 to-cyan-400">
                實現 OT 與 IT 系統無縫接轨
              </span>
            </h1>
            
            {/* 副標題 P */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              深耕工業自動化 30 年。提供開放式<strong className="text-white">「萬能儀器驅動開發」</strong>與<strong className="text-white">「零限制資料庫對接」</strong>。跨越 GPIB、RS-232/485、EtherNet 等介面，為企業打造極致穩定的智慧工廠數據基石。
            </p>

            {/* 雙 CTA 按鈕 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition shadow-xl shadow-amber-500/20 text-sm"
              >
                預約架構師諮詢 <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#solutions" 
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl transition text-sm"
              >
                檢視四大解決方案
              </a>
            </div>

            {/* 三大信任指標 */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <Sliders className="w-4 h-4 text-[#EA9512]" /> 不限儀器廠牌型號
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <Server className="w-4 h-4 text-cyan-400" /> 任意 DB/Log 檔對接
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <Activity className="w-4 h-4 text-[#D9261C]" /> 毫秒級高頻數據採集
              </div>
            </div>

          </div>

          {/* 右側：西門子風格「工業產線實景 ╳ 數據疊加視覺」 */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              
              {/* 高畫質工業自動化實景背景圖 */}
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80" 
                alt="資治資訊工業自動化與儀器連通現場"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d19] via-[#070d19]/40 to-transparent"></div>

              {/* 頂部科技標籤 */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="bg-slate-950/80 backdrop-blur text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-[#EA9512]" /> SMART FACTORY SITE
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-950/90 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-800/60 backdrop-blur">
                  <Radio className="w-3 h-3 animate-pulse" /> LIVE CONNECTED
                </span>
              </div>

              {/* 浮動的西門子式數據看板 (Visual Overlay Widget) */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-800 rounded-xl p-4 backdrop-blur-md shadow-2xl font-mono text-xs space-y-2.5">
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-2 font-bold text-white">
                    <Gauge className="w-4 h-4 text-cyan-400" /> Gateway Node: comstory_gw_01
                  </span>
                  <span className="text-[#EA9512] font-bold">GPIB / EtherNet</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="bg-[#030712]/80 p-2 rounded border border-slate-800">
                    <div className="text-slate-500 text-[9px]">DEVICES</div>
                    <div className="text-sm font-bold text-white mt-0.5">48 Units</div>
                  </div>
                  <div className="bg-[#030712]/80 p-2 rounded border border-slate-800">
                    <div className="text-slate-500 text-[9px]">SAMPLING</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">10 ms</div>
                  </div>
                  <div className="bg-[#030712]/80 p-2 rounded border border-slate-800">
                    <div className="text-slate-500 text-[9px]">DB SYNC</div>
                    <div className="text-sm font-bold text-cyan-400 mt-0.5">PostgreSQL</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. 西門子風格四大解決方案 (Siemens Solutions Cards Grid with Imagery) */}
      {/* ------------------------------------------------------------------ */}
      <section id="solutions" className="py-24 bg-[#070d19] text-slate-100 relative overflow-hidden border-b border-slate-800/80">
        
        {/* 背景裝飾 */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
          
          {/* 區塊標題 Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-[#EA9512] text-xs font-mono tracking-wide">
              <Zap className="w-3.5 h-3.5 text-[#EA9512]" />
              CORE SOLUTIONS MATRIX
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              四大核心解決方案矩陣
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              以<span className="text-[#EA9512] font-semibold">「工業自動化與儀器設備連通」</span>為核心，資治資訊提供具備真實落地能力的系統整合服務。
            </p>
          </div>

          {/* 資治資訊三大技術承諾橫幅 */}
          <div id="guarantees" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3 backdrop-blur">
              <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/30 text-[#EA9512] flex-shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">不限儀器廠牌型號</div>
                <div className="text-[11px] text-slate-400 mt-0.5">提供通訊規格，經測試 100% 串接</div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3 backdrop-blur">
              <div className="bg-cyan-500/10 p-2.5 rounded-lg border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">零限制資料庫架構</div>
                <div className="text-[11px] text-slate-400 mt-0.5">支援 PostgreSQL, Oracle, MS SQL, CSV</div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3 backdrop-blur">
              <div className="bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/30 text-[#D9261C] flex-shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">毫秒級即時監控</div>
                <div className="text-[11px] text-slate-400 mt-0.5">跨介面高頻數據寫入與 PLC 交握</div>
              </div>
            </div>
          </div>

          {/* 圖片選單卡片 (Siemens Visual Cards Row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutionsData.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`group relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-500 flex flex-col justify-between h-64 ${
                    isActive
                      ? 'border-[#EA9512] shadow-2xl ring-2 ring-[#EA9512]/50'
                      : 'border-slate-800 opacity-80 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  {/* 背景實景圖 */}
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 transition-opacity ${isActive ? 'bg-gradient-to-t from-[#070d19] via-[#070d19]/80 to-[#070d19]/40' : 'bg-gradient-to-t from-[#070d19] via-[#070d19]/90 to-[#070d19]/60'}`}></div>

                  {/* 頂部 Badge */}
                  <div className="relative z-10 p-4 flex justify-between items-start">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-[#EA9512] text-slate-950 font-bold' : 'bg-slate-900/80 text-slate-300 backdrop-blur'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.isFlagship && (
                      <span className="text-[10px] font-mono bg-[#EA9512] text-slate-950 px-2 py-0.5 rounded font-bold shadow">
                        第一主軸
                      </span>
                    )}
                  </div>

                  {/* 底部內文 */}
                  <div className="relative z-10 p-4 space-y-1">
                    <div className="text-[10px] font-mono text-[#EA9512] uppercase tracking-wider">
                      {item.subtitle}
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 選中方案的細節展現卡片 Detail Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              
              {/* 左半部：說明與獨家優勢 */}
              <div className="lg:w-7/12 space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#EA9512] font-bold tracking-wider uppercase">
                      {selectedSolution.subtitle}
                    </span>
                    {selectedSolution.isFlagship && (
                      <span className="text-[10px] bg-rose-500/10 text-[#D9261C] border border-rose-500/30 px-2 py-0.5 rounded font-bold">
                        FLAGSHIP SERVICE
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedSolution.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-cyan-400 mt-2 bg-cyan-950/30 border border-cyan-900/40 px-3 py-1.5 rounded-lg inline-block">
                    {selectedSolution.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedSolution.description}
                </p>

                {/* 核心技術保證特點 */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#EA9512]" /> 核心技術優勢與承諾
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSolution.guarantees.map((g, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA9512] flex-shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 通訊協定與介面標籤 */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400 mr-3">支援介面 / 協定:</span>
                  <div className="inline-flex flex-wrap gap-1.5 mt-2">
                    {selectedSolution.protocols.map((p, idx) => (
                      <span key={idx} className="text-[11px] font-mono bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右半部：實體規格驗證實績 (Verified Case Studies) */}
              <div className="lg:w-5/12 bg-[#030712] border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-cyan-400" /> 專案實績與驗證模組
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">1996-2026 VERIFIED</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {selectedSolution.verifiedCases.map((vc, idx) => (
                      <div key={idx} className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex items-start gap-3">
                        <span className="text-xs font-mono text-[#EA9512] font-bold mt-0.5">0{idx + 1}.</span>
                        <span className="text-xs text-slate-300 leading-normal">{vc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 預約技術諮詢按鈕 */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-3 rounded-xl transition shadow-lg shadow-amber-500/20 text-xs"
                  >
                    針對此方案預約技術評估 <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. 西門子風格「產業應用落地故事網格 (Application Showcase Grid)」 */}
      {/* ------------------------------------------------------------------ */}
      <section id="showcase" className="py-24 bg-[#030712] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <div className="text-xs font-mono text-[#EA9512] tracking-wider uppercase mb-2">
                APPLICATION SCENARIOS
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                產業應用與工業 4.0 落地實績
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              資治資訊技術團隊已協助半導體、車用電子、食品加工與實驗室完成數百項連通專案。
            </p>
          </div>

          {/* Siemens-Style Editorial Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationShowcases.map((item, idx) => (
              <div 
                key={idx}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-600 transition duration-300"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 text-[9px] font-mono bg-slate-950/80 text-cyan-400 border border-cyan-800/50 px-2.5 py-1 rounded backdrop-blur">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#EA9512] transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA9512] hover:text-amber-400 transition">
                    了解成功架構 <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. 關於資治資訊與聯絡頁尾 Section (About & Contact Footer) */}
      {/* ------------------------------------------------------------------ */}
      <footer id="contact" className="py-16 bg-[#070d19] border-t border-slate-800 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* 左側公司簡介 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative bg-[#2A4343] p-2 rounded-lg flex items-center justify-center border border-slate-700">
                <span className="text-xl font-black text-white font-serif italic leading-none">C</span>
                <span className="absolute top-1.5 right-1.5 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-[#D9261C] transform rotate-45"></span>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">資治資訊股份有限公司</span>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              資治資訊成立於 1996 年 10 月，總公司位於台中。專業致力於工業軟體應用設計、異質儀器設備連通、SMT 量測對料追溯與 MES/SFCS 製程管控，協助台灣與跨國製造業客戶達成品質 100% 控管與自動化升級。
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              © 1996 - 2026 Comstory Co., Ltd. All Rights Reserved.
            </div>
          </div>

          {/* 右側聯絡資訊與服務據點 */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA9512]" /> 總公司地址
              </h4>
              <p className="text-slate-300 leading-normal">
                408 台中市烏日區中山路三段 423 號
              </p>
              <p className="text-slate-400 text-[11px]">
                服務範圍：台灣全區、大陸及東南亞廠區海外支援
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EA9512]" /> 技術諮詢專線
              </h4>
              <p className="text-slate-300 font-mono text-sm">
                04-23387523
              </p>
              <div className="pt-1">
                <a 
                  href="tel:0423387523" 
                  className="inline-flex items-center gap-2 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg transition text-xs shadow-md shadow-amber-500/10"
                >
                  立即來電諮詢 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}