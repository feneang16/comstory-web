'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Sliders, 
  Activity, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Building2, 
  CheckCircle2,
  Send,
  Cpu,
  Boxes,
  Database,
  ShieldCheck,
  Check
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

// 圖片載入失敗時的預設備援圖
const fallbackImageUrl = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80';

// ==========================================
// 1. 全站品牌設定
// ==========================================
const siteConfig = {
  name: '資治資訊股份有限公司',
  shortName: '資治資訊',
  englishName: 'Comstory Co., Ltd.',
  establishedYear: 1996,
  contact: {
    address: '41452 台中市烏日區中山路三段 423 號',
    phone: '04-23387523',
    lineId: '@comstory',
    lineUrl: 'https://lin.ee/6Eyy7Fr',
    facebookUrl: 'https://www.facebook.com/zizhi.tech/',
    serviceAreas: ['台灣全區', '大陸廠區支援', '東南亞海外據點'],
  },
};

const mainNavigation = [
  { label: '四大解決方案', href: '/#solutions' },
  { label: '成功案例', href: '/#cases' },
  { label: '關於資治', href: '/#about' },
  { label: '技術諮詢', href: '/contact', badge: '一對一評估' },
];

const footerNavigation = {
  solutions: [
    { label: '工業自動化與儀器設備連通', href: '/#solutions' },
    { label: 'SMT 智慧製造與全流程物料追溯', href: '/#solutions' },
    { label: 'MES / SFCS 製程管控與生管排程', href: '/#solutions' },
    { label: '專用廠務監控與數據視覺化分析', href: '/#solutions' },
  ],
};

// 表單選項清單
const projectTypes = [
  { id: 'connectivity', label: '工業自動化與儀器連通', icon: Cpu },
  { id: 'smt', label: 'SMT 物料追溯與防錯', icon: Boxes },
  { id: 'mes', label: 'MES / SFCS 製程管控', icon: Activity },
  { id: 'factory', label: '廠務監控與數據視覺化', icon: Database },
  { id: 'other', label: '其他 (自行填寫)', icon: Sliders },
];

const interfaceOptions = [
  'GPIB (IEEE-488)', 
  'RS-232 / RS-485', 
  'EtherNet (TCP/IP)', 
  'USB Hub', 
  'Analog I/O', 
  'PLC Bit/Word 交握',
  '其他'
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

// ==========================================
// 2. Header 組件
// ==========================================
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-800/80 bg-[#070d19]/90 backdrop-blur-md fixed top-0 w-full z-50">
      <Container className="h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
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
            href="/contact"
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
        </div>
      )}
    </header>
  );
}

// ==========================================
// 3. 主頁面內容
// ==========================================
export default function ContactPage() {
  // 表單 State
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['connectivity']);
  const [otherTypeInput, setOtherTypeInput] = useState('');
  
  const [selectedInterfaces, setSelectedInterface] = useState<string[]>(['GPIB (IEEE-488)', 'EtherNet (TCP/IP)']);
  const [otherInterfaceInput, setOtherInterfaceInput] = useState('');

  const [submitted, setSubmitted] = useState(false);

  // 切換複選框
  const toggleType = (id: string) => {
    setSelectedTypes(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleInterface = (item: string) => {
    setSelectedInterface(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#EA9512] selection:text-slate-950">
      <Header />

      {/* 西門子滿版底圖風格 Hero 標題區塊 */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 text-white relative overflow-hidden border-b border-slate-800 min-h-[440px] flex items-center">
        
        {/* (1) 全版高畫質實景底圖 */}
        <img 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80" 
          alt="資治資訊工業軟體與儀器設備整合現場"
          onError={(e) => { (e.target as HTMLImageElement).src = fallbackImageUrl; }}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* (2) 西門子招牌暗色漸層遮罩 (確保高對比閱讀) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#0f172a]/90 to-[#1e293b] z-10"></div>
        
        {/* (3) 幾何微光科技網格 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 pointer-events-none opacity-50"></div>
        
        <Container className="relative z-20 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-[#EA9512] text-xs font-mono backdrop-blur shadow-lg">
            <Sliders className="w-3.5 h-3.5 text-[#EA9512]" />
            DIRECT TECHNICAL CONSULTATION
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
            預約一對一<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA9512] via-amber-300 to-cyan-400">技術評估與串接諮詢</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto drop-shadow">
            深耕工業自動化 30 年。請填寫您的現場需求或設備介面，資治資訊專業技術團隊將第一時間為您評估串接可行性與專案架構。
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300 max-w-2xl mx-auto">
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-center justify-center gap-2 backdrop-blur shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 快速聯絡評估
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-center justify-center gap-2 backdrop-blur shadow-md">
              <Sliders className="w-4 h-4 text-cyan-400" /> 100% 彈性專案客製
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-center justify-center gap-2 backdrop-blur shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#D9261C]" /> 開放式相容測試
            </div>
          </div>
        </Container>
      </section>

      {/* 主要內容區：左側技術表單 ╳ 右側聯絡管道與地圖 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* 左側：技術評估互動表單 (8 欄) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-[#EA9512]" /> 現場需求與技術規格評估表
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  勾選越詳細，技術團隊越能為您提供具體的解決方案與經驗參考。
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">技術評估需求已成功送出！</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                    感謝您的諮詢。資治資訊團隊已收到您的資料，我們會在第一時間安排專業工程人員與您聯繫。
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#EA9512] font-bold underline hover:text-amber-600 transition"
                  >
                    再次填寫其他專案需求
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                  
                  {/* 1. 需求類型多選 + 其他自填 */}
                  <div className="space-y-2.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">
                      1. 預計整合的專案領域（可複選）:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectTypes.map((type) => {
                        const IconComp = type.icon;
                        const isChecked = selectedTypes.includes(type.id);
                        return (
                          <div
                            key={type.id}
                            onClick={() => toggleType(type.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                              isChecked 
                                ? 'bg-amber-50/60 border-[#EA9512] text-slate-900 font-bold shadow-sm' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <IconComp className={`w-4 h-4 ${isChecked ? 'text-[#EA9512]' : 'text-slate-400'}`} />
                              <span>{type.label}</span>
                            </div>
                            <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-[#EA9512] border-[#EA9512] text-slate-950' : 'border-slate-300 bg-white'}`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* 勾選「其他」時顯示輸入框 */}
                    {selectedTypes.includes('other') && (
                      <div className="pt-2 animate-fadeIn">
                        <input
                          type="text"
                          value={otherTypeInput}
                          onChange={(e) => setOtherTypeInput(e.target.value)}
                          placeholder="請說明您的其他專案需求領域..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-amber-400 bg-amber-50/30 focus:bg-white focus:ring-1 focus:ring-[#EA9512] outline-none transition text-slate-800"
                        />
                      </div>
                    )}
                  </div>

                  {/* 2. 通訊介面勾選 + 其他自填 */}
                  <div className="space-y-2.5">
                    <label className="font-bold text-slate-900 uppercase tracking-wider block">
                      2. 現場設備通訊介面（可複選）:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {interfaceOptions.map((item) => {
                        const isChecked = selectedInterfaces.includes(item);
                        return (
                          <div
                            key={item}
                            onClick={() => toggleInterface(item)}
                            className={`p-2.5 rounded-lg border text-center font-mono cursor-pointer transition ${
                              isChecked 
                                ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-bold shadow-sm' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>

                    {/* 勾選「其他介面」時顯示輸入框 */}
                    {selectedInterfaces.includes('其他') && (
                      <div className="pt-2 animate-fadeIn">
                        <input
                          type="text"
                          value={otherInterfaceInput}
                          onChange={(e) => setOtherInterfaceInput(e.target.value)}
                          placeholder="請輸入您現場採用的其他通訊介面 (例如：Modbus RTU, CAN bus...)"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-cyan-400 bg-cyan-50/30 focus:bg-white focus:ring-1 focus:ring-cyan-500 outline-none transition text-slate-800"
                        />
                      </div>
                    )}
                  </div>

                  {/* 聯絡基本資料 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 block">公司名稱 <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        required 
                        placeholder="例如：資治科技股份有限公司" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#EA9512] focus:ring-1 focus:ring-[#EA9512] outline-none transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 block">聯絡人姓名 / 職稱 <span className="text-rose-500">*</span></label>
                      <input 
                        type="text" 
                        required 
                        placeholder="例如：王經理 (製造部)" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#EA9512] focus:ring-1 focus:ring-[#EA9512] outline-none transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 block">聯絡電話 <span className="text-rose-500">*</span></label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="例如：04-23387523 或 0912-345678" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#EA9512] focus:ring-1 focus:ring-[#EA9512] outline-none transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 block">電子郵件 Email <span className="text-rose-500">*</span></label>
                      <input 
                        type="email" 
                        required 
                        placeholder="service@comstory.com.tw" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#EA9512] focus:ring-1 focus:ring-[#EA9512] outline-none transition"
                      />
                    </div>
                  </div>

                  {/* 現場狀況補充描述 */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 block">現場設備狀況或欲解決問題簡述（選填）:</label>
                    <textarea 
                      rows={3} 
                      placeholder="例如：廠內有 12 台舊型固緯電源供應器，希望透過 GPIB 轉 EtherNet 匯入 PostgreSQL 資料庫..." 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#EA9512] focus:ring-1 focus:ring-[#EA9512] outline-none transition leading-relaxed"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-extrabold py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> 立即送出技術評估表單
                  </button>
                </form>
              )}
            </div>

            {/* 右側：直接與團隊溝通 (順序：1.電話 2.LINE 3.FB) ╳ 總公司資訊 ╳ 地圖 (5 欄) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 快速直達管道 (電話 -> LINE -> FB) */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-xl">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#EA9512] uppercase font-bold tracking-wider">
                    FAST CONTACT PIPELINE
                  </span>
                  <h3 className="text-xl font-bold text-white">直接與團隊溝通</h3>
                  <p className="text-xs text-slate-400">
                    若您有緊急專案需求，歡迎透過以下管道直接聯繫：
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {/* 1. 電話專線 (第一順位) */}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/-/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-[#EA9512] border border-amber-500/40 font-bold px-4 py-3 rounded-xl transition text-xs shadow-md"
                  >
                    <Phone className="w-4 h-4 text-[#EA9512]" /> 電話專線：{siteConfig.contact.phone}
                  </a>

                  {/* 2. LINE 官方帳號 (第二順位) */}
                  <a
                    href={siteConfig.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold px-6 py-3 rounded-xl transition shadow-lg text-xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    加入 LINE 官方帳號 ({siteConfig.contact.lineId})
                  </a>

                  {/* 3. FB 粉絲專頁 (第三順位) */}
                  <a
                    href={siteConfig.contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold px-4 py-2.5 rounded-xl transition text-xs shadow"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 fill-current" /> 關注 FB 粉絲專頁
                  </a>
                </div>
              </div>

              {/* 總公司地址與地圖 (郵遞區號 41452，不列出工作時間) */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[#EA9512]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">資治資訊總公司</h3>
                    <p className="text-xs text-slate-500 font-mono">EST. 1996</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#EA9512] flex-shrink-0 mt-0.5" />
                    <span>{siteConfig.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EA9512] flex-shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                </div>

                {/* Google 地圖嵌入 */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 relative shadow-inner">
                  <iframe 
                    title="資治資訊總公司地圖"
                    src="https://maps.google.com/maps?q=台中市烏日區中山路三段423號&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Footer 頁尾 */}
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
                {siteConfig.shortName}成立於 {siteConfig.establishedYear} 年 10 月，總公司位於台中。專業致力於工業軟體應用設計、儀器設備連通、SMT 量測對料追溯與 MES/SFCS 製程管控。
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
                  <MessageSquare className="w-4 h-4 text-[#06C755]" /> 諮詢
                </h4>
                <div className="text-slate-300 font-mono text-xs space-y-1 font-bold">
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#EA9512]" />
                    <span>電話：<a href={`tel:${siteConfig.contact.phone.replace(/-/g, '')}`} className="hover:text-[#EA9512] transition">{siteConfig.contact.phone}</a></span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#06C755]" />
                    <span>LINE：{siteConfig.contact.lineId}</span>
                  </p>
                </div>
                <div className="pt-1 grid grid-cols-2 gap-2">
                  <a 
                    href={siteConfig.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold px-3 py-2 rounded-lg transition text-xs shadow-md whitespace-nowrap"
                  >
                    LINE 諮詢 <ChevronRight className="w-3 h-3" />
                  </a>
                  <a 
                    href={siteConfig.contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold px-3 py-2 rounded-lg transition text-xs shadow-md whitespace-nowrap"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 fill-current" /> FB 粉絲專頁
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}