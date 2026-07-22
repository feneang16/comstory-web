'use client';

import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

// 內嵌全站與導覽列預設設定，確保組件獨立運作與編譯順暢
const siteConfig = {
  name: '資治資訊股份有限公司',
  shortName: '資治資訊',
  englishName: 'Comstory Co., Ltd.',
  establishedYear: 1996,
  contact: {
    address: '408 台中市烏日區中山路三段 423 號',
    phone: '04-23387523',
    serviceAreas: ['台灣全區', '大陸廠區支援', '東南亞海外據點'],
  },
};

const footerNavigation = {
  solutions: [
    { label: '工業自動化與儀器設備連通', href: '/solutions/instrumentation-connectivity' },
    { label: 'SMT 智慧製造與全流程物料追溯', href: '/solutions/smt-traceability' },
    { label: 'MES / SFCS 製程管控與生管排程', href: '/solutions/mes-sfcs-scheduling' },
    { label: '專用廠務監控與數據視覺化分析', href: '/solutions/factory-analytics' },
  ],
};

// 內嵌版心 Container 組件
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-16 bg-[#030712] border-t border-slate-800 text-slate-400 text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* 左側公司簡介 */}
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

          {/* 中間快速連結 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">解決方案與服務</h4>
            <ul className="space-y-2">
              {footerNavigation.solutions.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#EA9512] transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側聯絡資訊與服務據點 */}
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
                <Phone className="w-4 h-4 text-[#EA9512]" /> 技術諮詢專線
              </h4>
              <p className="text-slate-300 font-mono text-base font-bold">
                {siteConfig.contact.phone}
              </p>
              <div className="pt-1">
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/-/g, '')}`} 
                  className="inline-flex items-center gap-2 bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg transition text-xs shadow-md shadow-amber-500/10"
                >
                  立即來電諮詢 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}