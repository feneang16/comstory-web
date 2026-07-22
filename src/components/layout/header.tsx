'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

// 內嵌全站與導覽列預設設定，確保組件獨立運作與編譯順暢
const siteConfig = {
  shortName: '資治',
};

const mainNavigation = [
  { label: '四大解決方案', href: '/solutions' },
  { label: '成功案例', href: '/cases' },
  { label: '關於資治', href: '/about' },
  { label: '技術諮詢', href: '/contact', badge: '一對一評估' },
];

// 內嵌版心 Container 組件
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-800/80 bg-[#070d19]/90 backdrop-blur-md fixed top-0 w-full z-50">
      <Container className="h-16 flex items-center justify-between">
        
        {/* Logo 標誌區域 */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative bg-[#2A4343]/80 border border-slate-700 p-2 rounded-lg flex items-center justify-center shadow-md shadow-slate-950 group-hover:border-[#EA9512] transition">
            <span className="text-xl font-black text-white font-serif leading-none italic">C</span>
            {/* 精準指標紅三角 */}
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

        {/* 桌機版選單 */}
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

        {/* 右側預約諮詢按鈕 */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/contact"
            className="bg-[#EA9512] hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
          >
            預約架構評估 <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 手機版選單開關 */}
        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="開啟選單"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* 手機版下拉選單 */}
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
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#EA9512] text-slate-950 font-bold py-2.5 rounded-lg text-sm mt-2"
          >
            預約架構評估
          </a>
        </div>
      )}
    </header>
  );
}