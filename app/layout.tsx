import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'EASCAPE',
  description: 'EASCAPE，记录旅行的博客。'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zhCN">
      <head></head>
      <body>{children}</body>
      <Script src="/script/mask-loader.js" type="module"></Script>
    </html>
  );
}
