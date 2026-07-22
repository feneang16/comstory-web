'use client';

import React from 'react';
import { 
  Database, 
  FileSpreadsheet, 
  AlertOctagon, 
  SearchX, 
  Cpu, 
  TrendingDown, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

// 6 大痛點資料結構
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

export default function PainPointsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#030712] text-slate-100 relative overflow-hidden border-b border-slate-800/80">
      
      {/* 背景警示微光 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 區塊標題 Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-rose-500/30 text-[#D9261C] text-xs font-mono tracking-wide">
            <AlertTriangle className="w-3.5 h-3.5 text-[#D9261C]" />
            {painPointsData.badge}
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {painPointsData.title}
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {painPointsData.description}
          </p>
        </div>

        {/* 6 大痛點卡片網格 (Grid 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPointsData.items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="group relative bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 p-6 rounded-2xl transition-all duration-300 backdrop-blur hover:shadow-xl hover:shadow-rose-950/20 flex flex-col justify-between"
              >
                <div>
                  {/* 卡片頂部：編號與痛點標籤 */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#EA9512] transition">
                      PAIN POINT {item.id}
                    </span>
                    <span className="text-[10px] font-mono bg-rose-950/60 text-rose-400 border border-rose-900/50 px-2 py-0.5 rounded font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  {/* 卡片圖示與標題 */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-rose-400 group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  {/* 痛點說明 */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-[46px]">
                    {item.desc}
                  </p>
                </div>

                {/* 卡片底端提示線 */}
                <div className="pt-6 mt-4 pl-[46px] flex items-center gap-1.5 text-[11px] font-mono text-slate-500 group-hover:text-amber-400 transition">
                  <span>資治解決方案預備中</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引導橫幅 */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#EA9512] animate-pulse"></div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              這些現場痛點正在影響您的生產良率與稼動率嗎？
            </p>
          </div>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-[#EA9512] font-bold px-4 py-2.5 rounded-xl border border-amber-500/30 text-xs transition whitespace-nowrap"
          >
            檢視資治對應解決方案 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}