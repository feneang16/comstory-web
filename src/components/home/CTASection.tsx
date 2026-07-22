'use client';

import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  Headset, 
  Building2,
  FileCheck2,
  Sliders,
  MessageSquare,
  Phone
} from 'lucide-react';

const ctaContent = {
  badge: 'DIRECT ARCHITECT CONSULTATION',
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
      desc: '由專業工業軟體架構師親自為您評估可行性' 
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

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#070d19] text-slate-100 relative overflow-hidden">
      
      {/* 背景光暈與網格裝飾 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#EA9512]/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 西門子風格主 Banner 卡片 (Siemens Industrial Box) */}
        <div className="bg-gradient-to-b from-slate-900/90 to-[#030712]/95 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur relative overflow-hidden">
          
          {/* 頂部質感細線裝飾 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EA9512] to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 左半部：文案與信任背書 */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-amber-500/30 text-[#EA9512] text-xs font-mono tracking-wide">
                <Headset className="w-3.5 h-3.5 text-[#EA9512]" />
                {ctaContent.badge}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {ctaContent.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {ctaContent.description}
              </p>

              {/* 三大安心承諾清單 */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
                {ctaContent.assurances.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <IconComp className="w-4 h-4 text-[#EA9512] flex-shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal pl-6">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 右半部：行動按鈕與客服諮詢區 */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between backdrop-blur">
              
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase block">
                  FAST TRACK CONSULTATION
                </span>
                <h3 className="text-xl font-bold text-white">
                  立即預約一對一技術評估
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  加入資治資訊 LINE 官方帳號或填寫諮詢表單，我們的架構師團隊將第一時間為您分析串接可行性。
                </p>
              </div>

              {/* 行動按鈕組 */}
              <div className="space-y-3 pt-2">
                {/* LINE 官方帳號按鈕 */}
                <a
                  href={ctaContent.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-xl shadow-emerald-950/20 text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  加入 LINE 官方帳號 (ID: {ctaContent.lineId})
                </a>

                {/* 線上諮詢表單按鈕 */}
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl transition shadow-xl shadow-amber-500/20 text-xs"
                >
                  填寫線上技術諮詢表單 <ArrowRight className="w-4 h-4" />
                </a>

                {/* 電話直撥 */}
                <a
                  href={`tel:${ctaContent.phone.replace(/-/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium px-4 py-2.5 rounded-xl transition text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA9512]" /> 電話專線：{ctaContent.phone}
                </a>
              </div>

              {/* 台中烏日總公司地址 */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" /> 台中烏日總公司
                </span>
                <span className="text-slate-500">LINE: {ctaContent.lineId}</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}