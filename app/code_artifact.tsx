'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Boxes, 
  Activity, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Server, 
  ShieldCheck, 
  Sliders, 
  Radio, 
  FileSpreadsheet,
  Layers
} from 'lucide-react';

// 四大解決方案資料結構
const solutionsData = [
  {
    id: 'connectivity',
    isFlagship: true,
    title: '工業自動化與儀器設備自動化連通',
    subtitle: 'Automation & Instrumentation Connectivity',
    icon: Cpu,
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

export default function SolutionsGrid() {
  const [activeTab, setActiveTab] = useState('connectivity');
  const selectedSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];

  return (
    <section id="solutions" className="py-24 bg-[#070d19] text-slate-100 relative overflow-hidden border-b border-slate-800/80">
      
      {/* 背景裝飾光暈 */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 區塊標題 Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-wide">
            <Zap className="w-3.5 h-3.5 text-[#EA9512]" />
            CORE SOLUTION PILLARS
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            四大核心解決方案矩陣
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            以<span className="text-amber-400 font-semibold">「工業自動化與儀器連通」</span>為核心，資治資訊提供開放、彈性且極具穩定度的系統整合服務。
          </p>
        </div>

        {/* 資治資訊三大技術承諾橫幅 (Three Guarantees Banner) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
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

        {/* 頁籤選單 Tabs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {solutionsData.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-amber-500/80 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                {item.isFlagship && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-amber-500/20 text-[#EA9512] px-2 py-0.5 rounded border border-amber-500/40 font-bold">
                    第一主軸
                  </span>
                )}
                <div>
                  <div className={`p-2.5 rounded-lg w-fit ${isActive ? 'bg-[#EA9512] text-slate-950' : 'bg-slate-800/80 text-slate-300'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-sm font-bold mt-3 leading-snug ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* 選中方案的細節展現卡片 Detail Card */}
        <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-2xl">
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
  );
}