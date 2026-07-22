'use client';

import React, { useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Sliders, 
  Server, 
  Activity, 
  Radio, 
  Factory, 
  Gauge, 
  Database, 
  FileSpreadsheet, 
  AlertOctagon, 
  SearchX, 
  Cpu, 
  Boxes,
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  FolderCheck, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Building2, 
  Headset, 
  Clock, 
  FileCheck2,
  ChevronDown
} from 'lucide-react';

// 自訂 Facebook SVG 圖示組件，避免依賴外部第三方品牌套件
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-4h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ==========================================
// 1. 全站品牌設定與資料集
// ==========================================
const siteConfig = {
  name: '資治資訊股份有限公司',
  shortName: '資治資訊',
  englishName: 'Comstory Co., Ltd.',
  establishedYear: 1996,
  contact: {
    address: '408 台中市烏日區中山路三段 423 號',
    phone: '04-23387523',
    lineId: '@comstory',
    lineUrl: 'https://lin.ee/6Eyy7Fr',
    facebookUrl: 'https://www.facebook.com/zizhi.tech/',
    serviceAreas: ['台灣全區', '大陸廠區支援', '東南亞海外據點'],
  },
};

const mainNavigation = [
  { label: '四大解決方案', href: '#solutions' },
  { label: '成功案例', href: '#cases' },
  { label: '關於資治', href: '#about' },
  { label: '技術諮詢', href: '#contact', badge: '一對一評估' },
];

const footerNavigation = {
  solutions: [
    { label: '工業自動化與儀器設備連通', href: '#solutions' },
    { label: 'SMT 智慧製造與全流程物料追溯', href: '#solutions' },
    { label: 'MES / SFCS 製程管控與生管排程', href: '#solutions' },
    { label: '專用廠務監控與數據視覺化分析', href: '#solutions' },
  ],
};

const heroData = {
  badge: 'EST. 1996 ╳ 台灣工業自動化與儀器設備連通專家',
  titleMain: '打通工業設備數據孤島',
  titleHighlight: '實現 OT 與 IT 系統無縫接軌',
  description: '深耕工業自動化 30 年。提供開放式「萬能儀器驅動開發」與「零限制資料庫對接」。跨越 GPIB、RS-232/485、EtherNet 等介面，為企業打造極致穩定的智慧工廠數據基石。',
  primaryCtaText: '預約技術諮詢',
  primaryCtaHref: '#contact',
  secondaryCtaText: '檢視四大解決方案',
  secondaryCtaHref: '#solutions',
  trustBadges: [
    { icon: Sliders, text: '不限儀器廠牌型號', color: 'text-[#EA9512]' },
    { icon: Server, text: '任意 DB/Log 檔對接', color: 'text-cyan-400' },
    { icon: Activity, text: '毫秒級高頻數據採集', color: 'text-[#D9261C]' },
  ]
};

const painPointsData = {
  badge: 'INDUSTRY PAIN POINTS',
  title: '您真正要解決的，不只是設備問題，而是數據無法連通',
  description: '在邁向智慧工廠的過程中，傳統生產現場常因以下障礙導致數位化停滯不前：',
  items: [
    {
      id: '01',
      icon: Database,
      title: '設備資料分散，無法集中管理',
      desc: '跨廠區、跨世代機台獨立運作，各種通訊介面互相排斥，資訊無法即時匯流至中央管理系統。',
      tag: '數據孤島'
    },
    {
      id: '02',
      icon: FileSpreadsheet,
      title: '儀器數據需人工抄寫，容易出錯',
      desc: '高精密電測與安規數據依賴紙本或 Excel 手動記錄，數據即時性差且極易產生人為抄錯風險。',
      tag: '人為疏失'
    },
    {
      id: '03',
      icon: AlertOctagon,
      title: '製程異常無法即時掌握',
      desc: '欠缺毫秒級的高頻數據監控與 PLC 異常訊號雙向交握，導致不良品大量生產後才被發現。',
      tag: '良率損失'
    },
    {
      id: '04',
      icon: SearchX,
      title: '品質與物料追溯困難',
      desc: 'SMT 上料錯件、錫膏開罐失效或鋼板壽命到達無數據化管制，發生客訴時難以回溯原始履歷。',
      tag: '履歷斷層'
    },
    {
      id: '05',
      icon: Cpu,
      title: '舊型設備難以接入管理系統',
      desc: '原廠已停產或未提供現成 API 介面，導致舊型高價值設備淪為智慧製造轉型中的盲區。',
      tag: '相容障礙'
    },
    {
      id: '06',
      icon: TrendingDown,
      title: '報表與現場脫節，決策不即時',
      desc: '生管 ERP 排程與實際產線稼動率缺乏即時比對，無法進行精準的人力分配與工時最佳化。',
      tag: '管理盲點'
    }
  ]
};

const solutionsList = [
  {
    id: 'instrumentation-connectivity',
    slug: 'instrumentation-connectivity',
    isFlagship: true,
    title: '工業自動化與儀器設備自動化連通',
    subtitle: 'Automation & Instrumentation Connectivity',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    tagline: '萬能驅動開發 ╳ 異質介面串接 ╳ 多通道即時控制',
    description: '專注於各式可程式電源供應器、數位電錶、安規測試儀與訊號產生器之自動化連通。打破舊型設備與異質廠牌藩籬，實現毫秒級數據採集與 PLC 雙向訊號交握。',
    guarantees: [
      '開放式不限儀器廠牌與型號（提供規格經測試即可 100% 串接）',
      '支援多 Channel 獨立控制與高達 48 台設備同步連通',
      '內建 ISO 16750 / VW 80000 / GMW 3172 等 255-Step 複雜波形測試排程',
      '與各大廠牌 PLC (三菱、士林等) 進行 Bit/Word 級交握與異常攔截'
    ],
    verifiedCases: [
      '可程式電源供應器連通（多台自動供電、電流遞增與 Step 測試）',
      '精密電測與電池充放電系統（GPIB / RS232 / USB 跨介面連通）',
      '300 小時連續安規監控與 20 通道測試盒自動化阻值量測',
      '掛鍍機 999-Step 供電 Recipe 與三菱/士林 PLC 訊號交握'
    ],
    protocols: ['GPIB (IEEE-488)', 'RS-232', 'RS-485', 'EtherNet (TCP/IP)', 'USB Hub', 'Analog I/O']
  },
  {
    id: 'smt-traceability',
    slug: 'smt-traceability',
    isFlagship: false,
    title: 'SMT 智慧製造與全流程物料追溯',
    subtitle: 'SMT & Materials Traceability',
    icon: Boxes,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tagline: 'ReelChecker 對料追溯 ╳ 100% 錯件防呆 ╳ 全履歷管控',
    description: '整合LCR 量測儀器、視覺背文檢測設備、X-Ray 點料機、自動倉儲與 SMT 產線。針對錫膏、鋼板、MSL 烘烤元件提供精密防錯與生產履歷追溯。',
    guarantees: [
      'ReelChecker SMT 量測對料系統，徹底防範換料錯件風險',
      '錫膏/紅膠獨一碼 (ID) 管控，自動卡關開罐 7 天失效與回溫時數',
      '鋼板張力測試、清洗履歷與 10 萬次壽命到達自動預警',
      'MSL 濕敏元件烘烤時間/溫度自動帶入與預熱時間計算'
    ],
    verifiedCases: [
      'SMT 產線量測對料追溯系統 (ReelChecker System)',
      '錫膏/紅膠管理系統 (保存、回溫、使用期限...等管理)',
      '鋼板管理系統（對接 BOM 表與產線電子看板）',
      'MSL 濕敏元件烘烤紀錄與 SMT 產線時程防呆整合',
      '料捲管理搭配 X-Ray 點料 (PSA 系統) 自動倉儲進出庫'
    ],
    protocols: ['MES 對接', 'PostgreSQL', 'Oracle', '條碼/二維碼掃描', 'WIFI/藍芽工業槍']
  },
  {
    id: 'mes-sfcs-scheduling',
    slug: 'mes-sfcs-scheduling',
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
    slug: 'factory-analytics',
    isFlagship: false,
    title: '專用廠務監控與數據視覺化分析',
    subtitle: 'Factory Operations & Analytics',
    icon: Database,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tagline: '彈性底層 DB 架構 ╳ 圖像化曲線分析 ╳ 自動預警提示',
    description: '針對廠務環境、電源、烤箱與資產儲位進行全天候監控。提供多曲線對齊分析演算法（自動計算收斂值、斜率與面積）與 Email 自動提示。',
    guarantees: [
      '資料庫架構零限制：PostgreSQL, Oracle, MS SQL, MySQL 或 Log 檔',
      '支援生產數據轉換成生產曲線圖形化分析',
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

const casesData = [
  {
    id: 'power-sequence-testing',
    title: '車用電子與多通道電源自動化 Sequence 測試系統',
    category: '儀器設備連通',
    industry: '車用電源 / 電子測試廠',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    problem: '廠內擁有多台不同時期採購之可程式電源供應器與數位電錶，過去依賴人工手動調整電壓電流與手動抄表，測試耗時且易生人為錯誤。',
    solution: '導入資治資訊「萬能儀器連通控制系統」，透過跨介面 (USB/EtherNet/RS232) 自動化串接所有電源供應器，並內建 ISO 16750 與 VW 80000 國際波形測試規範。',
    hardware: ['固緯 PSW30-36 / PFR-100L', 'GPD-4303S (42 Channel)', 'USB Hub / EtherNet'],
    impactHighlight: '測試時程縮短 70%',
    impacts: [
      '測試過程 100% 完全自動化，測試時程縮短 70%',
      '數據精確度提升至小數點下 3 位',
      '自動產出符合國際標準規範之數據 Log 檔'
    ]
  },
  {
    id: 'smt-reelchecker-traceability',
    title: 'SMT 高精密電子廠全流程物料追溯與 ReelChecker 防錯',
    category: 'SMT 智慧製造',
    industry: '高階 SMT 電子製造廠',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    problem: '產線換料頻繁，舊有人工比對料號容易產生換料錯件風險；且錫膏冷藏回溫與鋼板張力使用次數缺乏數據化管控。',
    solution: '部署資治資訊 ReelChecker SMT 對料防錯系統，結合錫膏 ID 獨一碼冷藏開罐卡關、鋼板 10 萬次壽命預警，並與 X-Ray 點料機及 CIMES MES 系統無縫對接。',
    hardware: ['ReelChecker 對料系統', 'DuraLabel 條碼印表機', 'X-Ray 點料機 (PSA)', 'CIMES MES'],
    impactHighlight: '達成 100% 換料防錯',
    impacts: [
      '達成 100% 換料錯件攔截與生產履歷追溯',
      '產線備料與架料時間縮短 30%',
      '鋼板與錫膏全面無紙化數位管控'
    ]
  },
  {
    id: 'sfcs-recipe-weighing',
    title: '食品與化工多配方自動秤重分料與 SFCS 管控',
    category: 'MES / SFCS 管控',
    industry: '食品加工 / 化工調配廠',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    problem: '大料與微料配方繁複，傳統依靠作業員人工秤重投料，經常發生投錯料號或投料重量不符規格，影響產品批次品質。',
    solution: '建置 SFCS 生產紀錄與配方管控系統，以無線條碼槍引導作業員確認料號，自動讀取磅秤重量並上傳 PLC 控制輸送帶與閥件切換。',
    hardware: ['觸控螢幕工業電腦', 'WIFI/藍芽無線掃描槍', '電子磅秤 (RS232)', '三菱/士林 PLC'],
    impactHighlight: '品質 100% 控管達成',
    impacts: [
      '徹底杜絕投料錯誤，提升批次一致性與品質 100% 達成',
      '自動記錄每批物料投料重量與時間',
      '數據自動存入 PostgreSQL，滿足食品安全追溯規範'
    ]
  },
  {
    id: 'temperature-curve-analytics',
    title: '工業自動化的熱處理管理系統',
    category: '廠務視覺化分析',
    industry: '精密熱處理 / 實驗室廠務',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    problem: '難以精準定位產品瑕疵對應的製程階段與異常溫度條件',
    solution: '當產品發生品質異常時，可透過歷史生產資訊回溯功能，精準調閱該批次生產時的溫度曲線，即時判定製程是否存在偏離，提供科學證據以快速回應客戶訴求。',
    hardware: ['PostgreSQL 資料庫', 'PLC 人機介面 Excel 對接', '數據位移對齊演算法'],
    impactHighlight: '分析效率提升 80%',
    impacts: [
      '分析效率提升 80%，取代人工在 Excel 中算圖',
      '支援局部時間放大與即時匯出專業分析報告',
      '提供原始資料表與管理員修訂雙軌紀錄，確保數據嚴謹'
    ]
  }
];

const ctaContent = {
  badge: 'DIRECT TECHNICAL CONSULTATION',
  title: '先從設備與數據打通開始',
  description: '歡迎與資治資訊討論您的現場整合需求。無論是舊型儀器串接、SMT 物料對料防錯、MES 站點對接或廠務數據分析，我們將協助您評估最適合的導入方式。',
  lineId: '@comstory',
  lineUrl: 'https://lin.ee/6Eyy7Fr',
  phone: '04-23387523',
  address: '408 台中市烏日區中山路三段 423 號',
  assurances: [
    { 
      icon: Clock, 
      title: '24 小時快速回覆', 
      desc: '由專業工業軟體團隊親自為您評估可行性' 
    },
    { 
      icon: Sliders, 
      title: '100% 彈性專案客製', 
      desc: '依據貴廠特殊儀器規格與現場流程量身設計，打造專屬整合架構' 
    },
    { 
      icon: FileCheck2, 
      title: '開放式相容測試', 
      desc: '提供儀器與通訊手冊規格，工程團隊評估測試' 
    },
  ]
};

// 圖片載入失敗時的預設備援圖
const fallbackImageUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80';

// ==========================================
// 2. 輔助版心 Container 組件
// ==========================================
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// ==========================================
// 3. 各區塊組件
// ==========================================

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-800/80 bg-[#070d19]/90 backdrop-blur-md fixed top-0 w-full z-50">
      <Container className="h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative bg-[#2A4343]/80 border border-slate-700 p-2 rounded-lg flex items-center justify-center shadow-md shadow-slate-950 group-hover:border-[#EA9512] transition">
            <span className="text-xl font-black text-white font-serif leading-none italic">C</span>
            <span className="absolute top-1.5 right-1.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-[#D9261C] transform rotate-45"></span>
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-white flex items-center gap-1">
              COMSTORY <span className="text-[#EA9512] font-serif italic text-lg font-bold">{siteConfig.shortName}</span>
            </span>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1">
              Automation & Instrumentation SI
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#EA9512] transition flex items-center gap-1.5"
            >
              {item.label}
              {item.badge && (
                <span className="text-[10px] bg-[#EA9512]/20 text-[#EA9512] border border-[#EA9512]/40 px-1.5 py-0.5 rounded font-mono">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
          >
            預約技術評估 <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="開啟選單"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-[#EA9512] py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#EA9512] text-slate-950 font-bold py-2.5 rounded-lg text-sm mt-2"
          >
            預約技術評估
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-slate-800/80 bg-[#070d19] text-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EA9512]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-[#EA9512] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#D9261C] animate-ping"></span>
            {heroData.badge}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            {heroData.titleMain}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA9512] via-amber-300 to-cyan-400">
              {heroData.titleHighlight}
            </span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {heroData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href={heroData.primaryCtaHref} 
              className="inline-flex items-center justify-center gap-2 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition shadow-xl shadow-amber-500/20 text-sm"
            >
              {heroData.primaryCtaText} <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={heroData.secondaryCtaHref} 
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl transition text-sm"
            >
              {heroData.secondaryCtaText}
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400">
            {heroData.trustBadges.map((badge, idx) => {
              const IconComponent = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  <IconComponent className={`w-4 h-4 ${badge.color}`} />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80" 
              alt="資治資訊工業自動化與儀器設備連通現場"
              onError={(e) => { (e.target as HTMLImageElement).src = fallbackImageUrl; }}
              className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d19] via-[#070d19]/40 to-transparent"></div>

            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <span className="bg-slate-950/80 backdrop-blur text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                <Factory className="w-3.5 h-3.5 text-[#EA9512]" /> SMART FACTORY SITE
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-950/90 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-800/60 backdrop-blur">
                <Radio className="w-3 h-3 animate-pulse" /> LIVE CONNECTED
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-800 rounded-xl p-4 backdrop-blur-md shadow-2xl font-mono text-xs space-y-2.5">
              <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-2 font-bold text-white">
                  <Gauge className="w-4 h-4 text-cyan-400" /> Gateway Node: comstory_gw_01
                </span>
                <span className="text-[#EA9512] font-bold">GPIB / EtherNet</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <div className="bg-[#030712]/80 p-2 rounded border border-slate-800">
                  <div className="text-slate-500 text-[9px]">ACTIVE UNITS</div>
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
      </Container>
    </section>
  );
}

function PainPointsSection() {
  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* 1. 淡淡的電流與電路板脈絡 SVG 線條 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.06] stroke-slate-900" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="current-circuit-pattern" width="160" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 20 h50 l20 20 h90 M160 80 h-40 l-20-20 h-100 M60 0 v30 l15 15 v75 M110 120 v-35 l-15-15 v-70" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M10 100 h35 l15 -15 v-25" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="70" cy="40" r="3" fill="#0284c7" />
              <circle cx="100" cy="60" r="2.5" fill="#d97706" />
              <circle cx="75" cy="45" r="2" fill="#0284c7" />
              <circle cx="95" cy="70" r="2" fill="#0284c7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#current-circuit-pattern)" />
        </svg>

        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full"></div>
      </div>

      <Container className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#D9261C] text-xs font-mono tracking-wide font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-[#D9261C]" />
            {painPointsData.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {painPointsData.title}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {painPointsData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPointsData.items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="group relative bg-white/80 backdrop-blur border border-slate-200/90 hover:border-rose-400 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#EA9512] transition">
                      PAIN POINT {item.id}
                    </span>
                    <span className="text-[10px] font-mono bg-rose-100 text-rose-700 border border-rose-200 px-2 py-0.5 rounded font-bold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-rose-600 group-hover:bg-rose-50 group-hover:border-rose-200 transition flex-shrink-0 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-[46px]">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 pl-[46px] flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 group-hover:text-amber-600 transition">
                  <span>資治解決方案預備中</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/90 border border-slate-200/90 backdrop-blur rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#EA9512] animate-pulse"></div>
            <p className="text-xs sm:text-sm text-slate-700 font-bold">
              這些現場痛點正在影響您的生產良率與稼動率嗎？
            </p>
          </div>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition whitespace-nowrap shadow-md"
          >
            檢視資治對應解決方案 <ArrowRight className="w-3.5 h-3.5 text-[#EA9512]" />
          </a>
        </div>
      </Container>
    </section>
  );
}

function SolutionsOverviewSection() {
  const [activeTab, setActiveTab] = useState('instrumentation-connectivity');
  const selectedSolution = solutionsList.find(s => s.id === activeTab) || solutionsList[0];
  
  // 錨點參考：用於手機模式下平滑滾動至詳細資料區塊
  const detailPanelRef = useRef<HTMLDivElement>(null);

  // 切換方案，且當螢幕寬度屬於行動端 (<1024px) 時自動滑動至下方詳細資料
  const handleSolutionSelect = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024 && detailPanelRef.current) {
      detailPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <Container className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#EA9512] text-xs font-mono tracking-wide font-bold">
            <Zap className="w-3.5 h-3.5 text-[#EA9512]" />
            CORE SOLUTIONS
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            四大核心解決方案
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            以<span className="text-[#EA9512] font-extrabold">「工業自動化與儀器設備連通」</span>為旗艦核心，資治資訊提供開放、彈性且具備真實落地能力的系統整合服務。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-[#EA9512] flex-shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">不限儀器廠牌型號</div>
              <div className="text-[11px] text-slate-500 mt-0.5">提供通訊規格，經測試 100% 串接</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="bg-cyan-50 p-2.5 rounded-lg border border-cyan-200 text-cyan-600 flex-shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">零限制資料庫架構</div>
              <div className="text-[11px] text-slate-500 mt-0.5">支援 PostgreSQL, Oracle, MS SQL, CSV</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="bg-rose-50 p-2.5 rounded-lg border border-rose-200 text-[#D9261C] flex-shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">毫秒級即時監控</div>
              <div className="text-[11px] text-slate-500 mt-0.5">跨介面高頻數據寫入與 PLC 交握</div>
            </div>
          </div>
        </div>

        {/* 四大方案選單卡片網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionsList.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSolutionSelect(item.id)}
                className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 flex flex-col justify-between h-64 shadow-md ${
                  isActive
                    ? 'border-[#EA9512] ring-2 ring-[#EA9512]/60 shadow-xl scale-[1.01]'
                    : 'border-slate-200 opacity-85 hover:opacity-100 hover:border-slate-400'
                }`}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  onError={(e) => { (e.target as HTMLImageElement).src = fallbackImageUrl; }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 transition-opacity ${isActive ? 'bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30' : 'bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50'}`}></div>

                <div className="relative z-10 p-4 flex justify-between items-start">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-[#EA9512] text-slate-950 font-bold' : 'bg-slate-900/80 text-white backdrop-blur'}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {item.isFlagship && (
                    <span className="text-[10px] font-mono bg-[#EA9512] text-slate-950 px-2 py-0.5 rounded font-bold shadow">
                      第一主軸
                    </span>
                  )}
                </div>

                <div className="relative z-10 p-4 space-y-2">
                  <div className="text-[10px] font-mono text-[#EA9512] uppercase tracking-wider font-bold">
                    {item.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* 行動端引導動作列：解決手機觀看無反應疑慮 */}
                  <div className="lg:hidden pt-1 flex items-center gap-1 text-[11px] font-mono text-cyan-300 font-semibold animate-pulse">
                    <span>{isActive ? '即將顯示規格' : '點擊檢視詳細規格'}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 詳細資料卡片面板（附加錨點元件位址：scroll-mt-24 確保頂部導覽列不遮擋） */}
        <div 
          ref={detailPanelRef} 
          className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xl scroll-mt-24"
        >
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div className="lg:w-7/12 space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#EA9512] font-bold tracking-wider uppercase">
                    {selectedSolution.subtitle}
                  </span>
                  {selectedSolution.isFlagship && (
                    <span className="text-[10px] bg-rose-50 text-[#D9261C] border border-rose-200 px-2 py-0.5 rounded font-bold">
                      FLAGSHIP SERVICE
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedSolution.title}
                </h3>
                
                <p className="text-xs font-mono text-cyan-700 mt-2 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-lg inline-block font-semibold">
                  {selectedSolution.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedSolution.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#EA9512]" /> 核心技術優勢與承諾
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSolution.guarantees.map((g, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EA9512] flex-shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono text-slate-500 mr-3 font-bold">支援介面 / 協定:</span>
                <div className="inline-flex flex-wrap gap-1.5 mt-2">
                  {selectedSolution.protocols.map((p, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200 font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 bg-slate-900 text-white border border-slate-800 p-6 rounded-xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-cyan-400" /> 專案實績與驗證模組
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">1996-2026 VERIFIED</span>
                </div>

                <div className="mt-4 space-y-3">
                  {selectedSolution.verifiedCases.map((vc, idx) => (
                    <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-start gap-3">
                      <span className="text-xs font-mono text-[#EA9512] font-bold mt-0.5">0{idx + 1}.</span>
                      <span className="text-xs text-slate-300 leading-normal">{vc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition shadow-lg shadow-amber-500/20 text-xs"
                >
                  預約技術評估 <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CasesHighlightSection() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <Container className="relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#EA9512] text-xs font-mono tracking-wide font-bold">
              <FolderCheck className="w-3.5 h-3.5 text-[#EA9512]" />
              VERIFIED SUCCESS STORIES
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              產業落地與成功案例實績
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
            深耕工業自動化 30 年，資治資訊已協助車用電子、高階 SMT、食品加工與實驗室完成數百項連通與數據化專案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {casesData.map((item) => (
            <div 
              key={item.id}
              className="group bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    onError={(e) => { (e.target as HTMLImageElement).src = fallbackImageUrl; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono bg-slate-900/90 text-cyan-300 border border-cyan-700/50 px-2.5 py-1 rounded backdrop-blur font-semibold">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono bg-[#EA9512] text-slate-950 font-bold px-2.5 py-1 rounded shadow">
                      {item.impactHighlight}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-200 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#EA9512]" /> {item.industry}
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#EA9512] transition">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
                      <span className="font-bold text-[#D9261C] block mb-1">【客戶現場痛點】</span>
                      <p className="text-slate-700">{item.problem}</p>
                    </div>

                    <div className="bg-cyan-50 border border-cyan-200 p-3 rounded-xl">
                      <span className="font-bold text-cyan-800 block mb-1">【資治解決方案】</span>
                      <p className="text-slate-700">{item.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider block">
                      可量化效益與成果：
                    </span>
                    {item.impacts.map((imp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA9512] flex-shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center gap-2 flex-wrap text-[11px] font-mono text-slate-500">
                    <span className="text-slate-400 font-bold">對接硬體/介面:</span>
                    {item.hardware.map((hw, idx) => (
                      <span key={idx} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href="#contact" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl transition text-xs shadow-md"
                >
                  預約評估 <ChevronRight className="w-3.5 h-3.5 text-[#EA9512]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-[#EA9512] to-amber-500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#EA9512] text-xs font-mono font-bold tracking-wide">
                <Headset className="w-3.5 h-3.5 text-[#EA9512]" />
                {ctaContent.badge}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {ctaContent.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {ctaContent.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200">
                {ctaContent.assurances.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <IconComp className="w-4 h-4 text-[#EA9512] flex-shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-normal pl-6">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase block">
                  FAST TRACK CONSULTATION
                </span>
                <h3 className="text-xl font-bold text-white">
                  立即預約一對一技術評估
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  加入資治資訊 LINE 官方帳號或撥打專線，我們的技術團隊將第一時間為您分析串接可行性。
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* LINE 官方帳號 */}
                <a
                  href={ctaContent.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-xl text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  加入 LINE 官方帳號 (ID: {ctaContent.lineId})
                </a>

                {/* 電話專線 */}
                <a
                  href={`tel:${ctaContent.phone.replace(/-/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-4 py-3 rounded-xl transition text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA9512]" /> 電話專線：{ctaContent.phone}
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#EA9512]" /> 台中烏日總公司
                </span>
                <span className="text-slate-400">LINE: {ctaContent.lineId}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 bg-[#030712] border-t border-slate-800 text-slate-400 text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative bg-[#2A4343] p-2 rounded-lg flex items-center justify-center border border-slate-700">
                <span className="text-xl font-black text-white font-serif italic leading-none">C</span>
                <span className="absolute top-1.5 right-1.5 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-[#D9261C] transform rotate-45"></span>
              </div>
              <span className="text-lg font-bold text-white tracking-wider">{siteConfig.name}</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              {siteConfig.shortName}成立於 {siteConfig.establishedYear} 年 10 月，總公司位於台中。專業致力於工業軟體應用設計、異質儀器設備連通、SMT 量測對料追溯與 MES/SFCS 製程管控。
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              © {siteConfig.establishedYear} - {new Date().getFullYear()} {siteConfig.englishName} All Rights Reserved.
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">解決方案與服務</h4>
            <ul className="space-y-2">
              {footerNavigation.solutions.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#EA9512] transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA9512]" /> 總公司地址
              </h4>
              <p className="text-slate-300 leading-normal">
                {siteConfig.contact.address}
              </p>
              <p className="text-slate-500 text-[11px]">
                服務範圍：{siteConfig.contact.serviceAreas.join('、')}
              </p>
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#06C755]" /> 社群與諮詢管道
              </h4>
              <p className="text-slate-300 font-mono text-sm font-bold">
                LINE: {siteConfig.contact.lineId}
              </p>
              <div className="pt-1 flex flex-wrap gap-2">
                <a 
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold px-3 py-1.5 rounded-lg transition text-xs shadow-md"
                >
                  LINE 諮詢 <ArrowRight className="w-3 h-3" />
                </a>
                <a 
                  href={siteConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold px-3 py-1.5 rounded-lg transition text-xs shadow-md"
                >
                  <FacebookIcon className="w-3.5 h-3.5 fill-current" /> FB 粉絲專頁
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// ==========================================
// 4. 主頁面 default export
// ==========================================
export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#EA9512] selection:text-slate-950 overflow-x-hidden">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <SolutionsOverviewSection />
      <CasesHighlightSection />
      <CTASection />
      <Footer />
    </main>
  );
}