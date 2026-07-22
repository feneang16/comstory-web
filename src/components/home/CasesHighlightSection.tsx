'use client';

import React from 'react';
import { 
  FolderCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  Gauge, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';

// 4 大精選實體案例資料 (對接 20+ 份規格書精華)
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
    title: '廠務烤箱與 13 條溫度曲線同步對齊分析系統',
    category: '廠務視覺化分析',
    industry: '精密熱處理 / 實驗室廠務',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    problem: 'PLC 人機匯出的溫度 Excel 資料時間起點不一，多條曲線難以橫向比對，且無法自動計算收斂值與熱量累積面積。',
    solution: '開發專用溫度紀錄查詢系統，支援資料時間位移補償與 13 條曲線同步繪製，並內建數學演算自動計算斜率、面積與收斂區間。',
    hardware: ['PostgreSQL 資料庫', 'PLC 人機介面 Excel 對接', '數據位移對齊演算法'],
    impactHighlight: '分析效率提升 80%',
    impacts: [
      '分析效率提升 80%，取代人工在 Excel 中算圖',
      '支援局部時間放大與即時匯出專業分析報告',
      '提供原始資料表與管理員修訂雙軌紀錄，確保數據嚴謹'
    ]
  }
];

export default function CasesHighlightSection() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-[#030712] text-slate-100 relative overflow-hidden border-b border-slate-800/80">
      
      {/* 背景光暈裝飾 */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#EA9512]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 區塊標題 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-[#EA9512] text-xs font-mono tracking-wide">
              <FolderCheck className="w-3.5 h-3.5 text-[#EA9512]" />
              VERIFIED SUCCESS STORIES
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              產業落地與成功案例實績
            </h2>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
            深耕工業自動化 30 年，資治資訊已協助車用電子、高階 SMT、食品加工與實驗室完成數百項連通與數據化專案。
          </p>
        </div>

        {/* 西門子風格實體案例卡片網格 (Siemens Style Editorial Grid 2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {casesData.map((item) => (
            <div 
              key={item.id}
              className="group bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* 頂部實景圖片與覆蓋層 */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* 分類與產業標籤 */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono bg-slate-950/80 text-cyan-400 border border-cyan-800/50 px-2.5 py-1 rounded backdrop-blur font-semibold">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono bg-[#EA9512] text-slate-950 font-bold px-2.5 py-1 rounded shadow">
                      {item.impactHighlight}
                    </span>
                  </div>

                  {/* 圖片底部產業名稱 */}
                  <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#EA9512]" /> {item.industry}
                  </div>
                </div>

                {/* 案例內容內文 */}
                <div className="p-6 space-y-5">
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#EA9512] transition">
                    {item.title}
                  </h3>

                  {/* 痛點與解決方案 (Problem / Solution) */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="bg-rose-950/20 border border-rose-900/30 p-3 rounded-xl">
                      <span className="font-bold text-[#D9261C] block mb-1">【客戶現場痛點】</span>
                      <p className="text-slate-300">{item.problem}</p>
                    </div>

                    <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                      <span className="font-bold text-cyan-400 block mb-1">【資治解決方案】</span>
                      <p className="text-slate-300">{item.solution}</p>
                    </div>
                  </div>

                  {/* 核心效益點條列 */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                      可量化效益與成果：
                    </span>
                    {item.impacts.map((imp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA9512] flex-shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>

                  {/* 硬體與介面標籤 */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 flex-wrap text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">對接硬體/介面:</span>
                    {item.hardware.map((hw, idx) => (
                      <span key={idx} className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 卡片底端按鈕 */}
              <div className="p-6 pt-0">
                <a 
                  href="/cases" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-4 py-2.5 rounded-xl border border-slate-700 transition text-xs group-hover:border-[#EA9512]/50 group-hover:text-amber-400"
                >
                  檢視完整案例架構與細節 <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 底部按鈕 */}
        <div className="text-center pt-4">
          <a
            href="/cases"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl border border-slate-700 transition text-sm shadow-lg"
          >
            檢視更多工業自動化實績案例 <ArrowRight className="w-4 h-4 text-[#EA9512]" />
          </a>
        </div>

      </div>
    </section>
  );
}