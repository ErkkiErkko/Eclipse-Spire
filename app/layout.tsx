import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '月蚀尖塔 · Eclipse Spire', description: '月光为刃，命运为牌。与月之剑姬莉雅一起，踏上原创卡牌构筑冒险。' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
return <html lang="zh-CN" className="dark"><body>{children}</body></html>;
}
