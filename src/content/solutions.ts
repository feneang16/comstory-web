export interface SolutionDetail {
  id: string;
  slug: string;
  isFlagship: boolean;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  imageUrl: string;
  guarantees: string[];
  features: {
    title: string;
    desc: string;
  }[];
  verifiedCases: string[];
  protocols: string[];
}

export const solutionsData: SolutionDetail[] = [
  {
    id: 'instrumentation-connectivity',
    slug: 'instrumentation-connectivity',
    isFlagship: true,
    title: '工業自動化與儀器設備自動化連通',
    subtitle: 'Automation & Instrumentation Connectivity',
    tagline: '萬能驅動開發 ╳ 異質介面串接 ╳ 多通道即時控制',
    description: '專注於各式可程式電源供應器、數位電錶、安規測試儀與訊號產生器之自動化連通。打破舊型設備與異質廠牌藩籬，實現毫秒級數據採集與 PLC 雙向訊號交握。',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    guarantees: [
      '開放式不限儀器廠牌與型號（提供規格經測試即可 100% 串接）',
      '支援多 Channel 獨立控制與高達 48 台設備同步連通',
      '內建 ISO 16750 / VW 80000 / GMW 3172 等 255-Step 複雜波形測試排程',
      '與各大廠牌 PLC (三菱、士林等) 進行 Bit/Word 級交握與異常攔截',
    ],
    features: [
      {
        title: '電源供應器自動化連通',
        desc: '支援單一工業電腦控制高達 48 台電源供應器與 42 通道獨立設定，自動執行 Step 供電與電壓電流 Log 寫入。',
      },
      {
        title: '300 小時連續安規監控',
        desc: '串接安規測試儀與 20 通道測試盒，於恆溫恆濕環境下進行高壓與阻值監控，超過門檻自動判定 NG。',
      },
      {
        title: '精密電測與充放電模組',
        desc: '整合 HP 3458A GPIB 萬用電錶、AFG 訊號產生器與電子負載，自動執行 CV/CC 充放電波形測試。',
      },
    ],
    verifiedCases: [
      '可程式電源供應器連通（多台自動供電、電流遞增與 Step 測試）',
      '精密電測與電池充放電系統（GPIB / RS232 / USB 跨介面連通）',
      '300 小時連續安規監控與 20 通道測試盒自動化阻值量測',
      '掛鍍機 999-Step 供電 Recipe 與三菱/士林 PLC 訊號交握',
    ],
    protocols: ['GPIB (IEEE-488)', 'RS-232', 'RS-485', 'EtherNet (TCP/IP)', 'USB Hub', 'Analog I/O'],
  },
  {
    id: 'smt-traceability',
    slug: 'smt-traceability',
    isFlagship: false,
    title: 'SMT 智慧製造與全流程物料追溯',
    subtitle: 'SMT & Materials Traceability',
    tagline: 'ReelChecker 對料追溯 ╳ 100% 錯件防呆 ╳ 全履歷管控',
    description: '整合條碼槍、標籤印表機、X-Ray 點料機、自動倉儲與 SMT 產線。針對錫膏、鋼板、MSL 烘烤元件提供精密防錯與生產履歷追溯。',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    guarantees: [
      'ReelChecker SMT 量測對料系統，徹底防範換料錯件風險',
      '錫膏/紅膠獨一碼 (ID) 管控，自動卡關開罐 7 天失效與回溫時數',
      '鋼板張力測試、清洗履歷與 10 萬次壽命到達自動預警',
      'MSL 濕敏元件烘烤時間/溫度自動帶入與預熱時間計算',
    ],
    features: [
      {
        title: 'ReelChecker 對料防錯',
        desc: 'SMT 換線架料與上料 1-0 站自動比對，發現料號不符立刻停機警示，達 100% 防錯件。',
      },
      {
        title: '錫膏與鋼板精細化管控',
        desc: '錫膏 ID 冷藏回溫時數控管；鋼板紀錄 5 點張力與 10 萬次使用次數，自動對接 BOM 表。',
      },
      {
        title: 'PSA 料捲搭配 X-Ray 點料',
        desc: '自動對接 CIMES 製令領料單，SMT 餘料經過 X-Ray 自動點料與自動倉儲入庫。',
      },
    ],
    verifiedCases: [
      'SMT 產線量測對料追溯系統 (ReelChecker System)',
      '錫膏/紅膠管理系統與對料 1-0 站自動比對',
      '鋼板管理系統（對接 BOM 表與產線電子看板）',
      'MSL 濕敏元件烘烤紀錄與 SMT 產線時程防呆整合',
      '料捲管理搭配 X-Ray 點料 (PSA 系統) 自動倉儲進出庫',
    ],
    protocols: ['CIMES MES 對接', 'PostgreSQL', 'Oracle', '條碼/二維碼掃描', 'WIFI/藍芽工業槍'],
  },
  {
    id: 'mes-sfcs-scheduling',
    slug: 'mes-sfcs-scheduling',
    isFlagship: false,
    title: 'MES / SFCS 製程管控與生管排程分析',
    subtitle: 'MES / SFCS & Production Scheduling',
    tagline: '貫穿生管 ERP 排程 ╳ 現場 PLC 觸控站 ╳ 人力優化',
    description: '銜接生管 ERP 排程與現場生產站點。提供 WIP 投產控制、機台運作紀錄、配方自動切換與 SMT/後段人力分配優化演算法。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    guarantees: [
      '雙 EtherNet 埠工業電腦，安全對接機台 PLC 與客戶 MES/TGCE 系統',
      '自動化大料/小料秤重分料與配方混料 (如食品業 SFCS)',
      'SMT 換線架料工時與 ICP/Power 後段 5 站人力最佳化分析',
      '齊料/缺料生產時數統計與 SMT 標準稼動率報表自動產出',
    ],
    features: [
      {
        title: '機台運作與 WIP 投產管控',
        desc: '支援自動/手動投產模式，雙網埠隔離實行參數上傳 PLC 與異常 Log 自動記錄。',
      },
      {
        title: '食品/化工 SFCS 配方控制',
        desc: '無線掃描槍引導大料/微料入料秤重，上傳 PLC 驅動閥件切換與混料攪拌監控。',
      },
      {
        title: '人力分配與產能分析',
        desc: '計算 DIP/焊修/組裝/測試/包裝 5 站最佳化配置，精算齊料與缺料斷線區段。',
      },
    ],
    verifiedCases: [
      '機台運作紀錄系統（自動/手動模式 WIP 投產與 Log 紀錄）',
      '食品業/化工配方與自動秤重分料 SFCS 製程管控',
      '人力分配產能分析系統（DIP/焊修/組裝/測試/包裝 5 站）',
      'SMT 排程效能統計與預計斷線區段分析',
    ],
    protocols: ['EtherNet/IP', 'Modbus TCP', 'WIP 上報', 'Oracle/MS SQL', 'CIMES 製令'],
  },
  {
    id: 'factory-analytics',
    slug: 'factory-analytics',
    isFlagship: false,
    title: '專用廠務監控與數據視覺化分析',
    subtitle: 'Factory Operations & Analytics',
    tagline: '彈性底層 DB 架構 ╳ 圖像化曲線分析 ╳ 自動預警提示',
    description: '針對廠務環境、電源、烤箱與資產儲位進行全天候監控。提供多曲線對齊分析演算法（自動計算收斂值、斜率與面積）與 Email 自動提示。',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    guarantees: [
      '資料庫架構零限制：PostgreSQL, Oracle, MS SQL, MySQL 或 Log 檔',
      '支援高達 13 條溫度曲線同步位移對齊與區域放大分析',
      '單一工業電腦串接 48 台電源與 14 台烤箱，精度達小數點下 3 位',
      '廠區 樓層/區域 儲位地圖管理與設備保養/校驗提前通知',
    ],
    features: [
      {
        title: '13 條溫度曲線同步比對',
        desc: '自動補償時間位移，演算法自動計算最大/最小收斂值、平均值、斜率與積分面積。',
      },
      {
        title: '廠務電源與烤箱監控',
        desc: '每 5 秒高頻抓取電壓電流與溫度數據，支援小數點下 3 位精準度與異常警報。',
      },
      {
        title: '資產儲位與校驗提示',
        desc: '廠區 3D 樓層儲位管理，設備定期保養與儀器校驗提前 30 天/7 天 Email 自動通知。',
      },
    ],
    verifiedCases: [
      'PLC 溫度紀錄查詢系統（自動計算收斂值、斜率與面積）',
      '廠務烤箱與電源監控系統（每 5 秒高頻數據寫入）',
      '物品儲位紀錄與設備保養/校驗 Email 自動提示系統',
    ],
    protocols: ['PostgreSQL', 'MS SQL Server', 'CSV/Log 導出', 'SMTP Mail', 'Excel 報表'],
  },
];