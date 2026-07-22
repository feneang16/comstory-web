export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const mainNavigation: NavItem[] = [
  { label: '四大解決方案', href: '/solutions' },
  { label: '成功案例', href: '/cases' },
  { label: '關於資治', href: '/about' },
  { label: '技術諮詢', href: '/contact', badge: '一對一評估' },
];

export const footerNavigation = {
  solutions: [
    { label: '工業自動化與儀器設備連通', href: '/solutions/instrumentation-connectivity' },
    { label: 'SMT 智慧製造與全流程物料追溯', href: '/solutions/smt-traceability' },
    { label: 'MES / SFCS 製程管控與生管排程', href: '/solutions/mes-sfcs-scheduling' },
    { label: '專用廠務監控與數據視覺化分析', href: '/solutions/factory-analytics' },
  ],
  company: [
    { label: '關於資治資訊', href: '/about' },
    { label: '實績案例總覽', href: '/cases' },
    { label: '預約技術評估', href: '/contact' },
  ],
};