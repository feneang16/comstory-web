'use client';

import React from 'react';
import { 
  ArrowRight, 
  Sliders, 
  Server, 
  Activity, 
  Radio, 
  Factory, 
  Gauge 
} from 'lucide-react';

// 首頁 Hero 預設文案資料
const heroData = {
  badge: 'EST. 1996 ╳ 台灣工業自動化與儀器設備連通專家',
  titleMain: '打通工業設備數據孤島',
  titleHighlight: '實現 OT 與 IT 系統無縫接軌',
  description: '深耕工業自動化 30 年。提供開放式「萬能儀器驅動開發」與「零限制資料庫對接」。跨越 GPIB、RS-232/485、EtherNet 等介面，為企業打造極致穩定的智慧工廠數據基石。',
  primaryCtaText: '預約架構師諮詢',
  primaryCtaHref: '/contact',
  secondaryCtaText: '檢視四大解決方案',
  secondaryCtaHref: '#solutions',
  trustBadges: [
    { icon: Sliders, text: '不限儀器廠牌型號', color: 'text-[#EA9512]' },
    { icon: Server, text: '任意 DB/Log 檔對接', color: 'text-cyan-400' },
    { icon: Activity, text: '毫秒級高頻數據採集', color: 'text-[#D9261C]' },
  ]
};

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-slate-800/80 bg-[#070d19] text-slate-100">
      
      {/* 背景幾何網格與高科技極光 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EA9512]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* 左側：核心文案 (Siemens-Style 大膽排版) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* 歷史里程碑與標籤 Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-[#EA9512] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#D9261C] animate-ping"></span>
            {heroData.badge}
          </div>
          
          {/* 主標題 H1 */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            {heroData.titleMain}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA9512] via-amber-300 to-cyan-400">
              {heroData.titleHighlight}
            </span>
          </h1>
          
          {/* 副標題 P */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {heroData.description}
          </p>

          {/* 雙 CTA 按鈕 */}
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

          {/* 三大信任指標 */}
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

        {/* 右側：西門子風格「工業產線實景 ╳ 數據動態 Overlay 儀表板」 */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
            
            {/* 高畫質工業自動化實景背景圖 */}
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80" 
              alt="資治資訊工業自動化與儀器設備連通現場"
              className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d19] via-[#070d19]/40 to-transparent"></div>

            {/* 頂部科技狀態列 */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <span className="bg-slate-950/80 backdrop-blur text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                <Factory className="w-3.5 h-3.5 text-[#EA9512]" /> SMART FACTORY SITE
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-950/90 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-800/60 backdrop-blur">
                <Radio className="w-3 h-3 animate-pulse" /> LIVE CONNECTED
              </span>
            </div>

            {/* 懸浮數據看板 (Visual Overlay Widget) */}
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

      </div>
    </section>
  );
}