import React from 'react';
import { Cpu, ArrowRight, Activity, ShieldCheck, Database, Radio } from 'lucide-react';

export default function Home() {
  return (
    <main class="min-h-screen bg-[#070d19] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 頂部導覽列 */}
      <nav class="border-b border-slate-800/80 bg-[#070d19]/80 backdrop-blur-md fixed top-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-lg text-cyan-400">
              <Cpu class="w-6 h-6" />
            </div>
            <span class="text-lg font-bold tracking-wider text-white">COMSTORY <span class="text-xs text-cyan-400 font-mono font-normal">資治資訊</span></span>
          </div>
          <div class="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#solutions" class="hover:text-cyan-400 transition">解決方案</a>
            <a href="#protocols" class="hover:text-cyan-400 transition">支援協定</a>
            <a href="#cases" class="hover:text-cyan-400 transition">成功案例</a>
          </div>
          <a href="#contact" class="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition shadow-lg shadow-cyan-500/20">
            技術諮詢
          </a>
        </div>
      </nav>

      {/* Hero Section 主視覺 */}
      <section class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-slate-800/50">
        {/* 背景幾何發光網格 */}
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 左側：強效 B2B 核心文案 */}
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              OT/IT 數據連通與邊緣整合專家
            </div>
            
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              打通工業設備數據孤島<br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                實現 OT 與 IT 系統無縫接軌
              </span>
            </h1>
            
            <p class="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              專注於工業自動化、儀器通訊串接與數據採集整合。支援 Modbus、OPC UA、MQTT 等主流協定，協助企業構建穩定可靠的智慧工廠數據基石。
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" class="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition shadow-xl shadow-cyan-500/25">
                預約架構師評估 <ArrowRight class="w-4 h-4" />
              </a>
              <a href="#protocols" class="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl transition">
                檢視支援協定矩陣
              </a>
            </div>

            {/* 信賴指標標籤 */}
            <div class="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
              <div class="flex items-center gap-2">
                <ShieldCheck class="w-4 h-4 text-cyan-400" /> 工業級高穩定度
              </div>
              <div class="flex items-center gap-2">
                <Activity class="w-4 h-4 text-emerald-400" /> 毫秒級數據採集
              </div>
              <div class="flex items-center gap-2">
                <Database class="w-4 h-4 text-blue-400" /> 異質系統雙向串接
              </div>
            </div>
          </div>

          {/* 右側：程式碼設計的工業數據儀表板視覺 */}
          <div class="lg:col-span-5">
            <div class="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl shadow-cyan-950/50 backdrop-blur">
              {/* 視窗頂部狀態列 */}
              <div class="flex items-center justify-between pb-4 border-b border-slate-800">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span class="text-xs font-mono text-slate-500 ml-2">gateway_node_01.sys</span>
                </div>
                <span class="inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-950/80 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-800/50">
                  <Radio class="w-3 h-3 animate-pulse" /> ONLINE
                </span>
              </div>

              {/* 實體數據模擬卡片 */}
              <div class="mt-4 space-y-3 font-mono text-xs">
                <div class="bg-[#030712] p-3 rounded-lg border border-slate-800/80 flex justify-between items-center">
                  <span class="text-slate-400">Protocol: OPC UA / Modbus TCP</span>
                  <span class="text-cyan-400">Syncing (10ms)</span>
                </div>
                <div class="bg-[#030712] p-3 rounded-lg border border-slate-800/80 space-y-2">
                  <div class="flex justify-between text-slate-400">
                    <span>PLC Data Ingestion</span>
                    <span class="text-emerald-400">99.98% Rate</span>
                  </div>
                  <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[88%]"></div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-[#030712] p-3 rounded-lg border border-slate-800/80">
                    <div class="text-slate-500 text-[10px]">ACTIVE I/O POINTS</div>
                    <div class="text-lg font-bold text-white mt-1">1,024 Node</div>
                  </div>
                  <div class="bg-[#030712] p-3 rounded-lg border border-slate-800/80">
                    <div class="text-slate-500 text-[10px]">PACKET LOSS</div>
                    <div class="text-lg font-bold text-emerald-400 mt-1">0.000 %</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </main>
      import SolutionsGrid from '@/components/SolutionsGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070d19] text-slate-100">
      {/* 1. Navbar */}
      {/* 2. HeroSection */}
      
      {/* 3. 四大核心解決方案矩陣 */}
      <SolutionsGrid />
      
      {/* 4. 下一步：通訊協定矩陣 / 成功案例 */}
    </main>
  );
}
  );
}