export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  imageUrl: string;
  problem: string;
  solution: string;
  hardwareAndInterfaces: string[];
  impacts: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'power-sequence-testing',
    title: '車用電子與多通道電源自動化 Sequence 測試系統',
    category: '儀器設備連通',
    clientIndustry: '車用電源 / 電子測試廠',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    problem: '廠內擁有多台不同時期採購之可程式電源供應器與數位電錶，過去依賴人工手動調整電壓電流與手動抄表，測試過程耗時且數據容易出現人為抄錯。',
    solution: '導入資治資訊「萬能儀器連通控制系統」，透過跨介面 (USB / EtherNet / RS232) 自動化串接所有電源供應器，並內建 ISO 16750 與 VW 80000 國際波形測試規範。',
    hardwareAndInterfaces: ['固緯 PSW30-36 / PFR-100L 電源', 'GPD-4303S (42 Channel)', 'USB Hub 串接', 'EtherNet / RS-232'],
    impacts: ['測試過程 100% 完全自動化，測試時程縮短 70%', '數據精確度提升至小數點下 3 位', '自動產出符合國際標準規範之數據分析 Log 檔'],
  },
  {
    id: 'smt-reelchecker-traceability',
    title: 'SMT 高精密電子廠全流程物料追溯與 ReelChecker 防錯',
    category: 'SMT 智慧製造',
    clientIndustry: '高階 SMT 電子製造廠',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    problem: '產線換料頻繁，舊有人工比對料號容易產生換料錯件風險；且錫膏冷藏回溫與鋼板張力使用次數缺乏數據化管控。',
    solution: '部署資治資訊 ReelChecker SMT 對料防錯系統，結合錫膏 ID 獨一碼冷藏開罐卡關、鋼板 10 萬次壽命預警，並與 X-Ray 點料機及 CIMES MES 系統無縫對接。',
    hardwareAndInterfaces: ['ReelChecker 對料系統', 'DuraLabel 條碼列印機', 'X-Ray 點料機 (PSA 系統)', 'CIMES MES 對接'],
    impacts: ['達成 100% 換料錯件攔截與生產履歷追溯', '產線備料與架料時間縮短 30%', '鋼板與錫膏全面無紙化數位管控'],
  },
  {
    id: 'sfcs-recipe-weighing',
    title: '食品與化工多配方自動秤重分料與 SFCS 管控',
    category: 'MES / SFCS 管控',
    clientIndustry: '食品加工 / 化工調配廠',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    problem: '大料與微料配方繁複，傳統依靠作業員人工秤重投料，經常發生投錯料號或投料重量不符規格，影響產品批次品質。',
    solution: '建置 SFCS 生產紀錄與配方管控系統，以無線條碼槍引導作業員確認料號，自動讀取磅秤重量並上傳 PLC 控制輸送帶與閥件切換。',
    hardwareAndInterfaces: ['觸控螢幕工業電腦', 'WIFI/藍芽無線掃描槍', '電子磅秤 (RS232)', '三菱/士林 PLC EtherNet 交握'],
    impacts: ['徹底杜絕投料錯誤，提升批次一致性與品質 100% 達成', '自動記錄每批物料投料重量與時間', '數據自動存入 PostgreSQL，滿足食品安全追溯規範'],
  },
  {
    id: 'temperature-curve-analytics',
    title: '廠務烤箱與 13 條溫度曲線同步對齊分析系統',
    category: '廠務視覺化分析',
    clientIndustry: '精密熱處理 / 實驗室廠務',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    problem: 'PLC 人機匯出的溫度 Excel 資料時間起點不一，多條曲線難以橫向比對，且無法自動計算收斂值與熱量累積面積。',
    solution: '開發專用溫度紀錄查詢系統，支援資料時間位移補償與 13 條曲線同步繪製，並內建數學演算自動計算斜率、面積與收斂區間。',
    hardwareAndInterfaces: ['PostgreSQL 資料庫', 'PLC 人機介面 Excel 對接', '數據位移對齊演算法'],
    impacts: ['分析效率提升 80%，取代人工在 Excel 中算圖', '支援局部時間放大與即時匯出專業分析報告', '提供原始資料表與管理員修訂雙軌紀錄，確保數據嚴謹性'],
  },
];