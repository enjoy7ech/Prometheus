import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from './ui/Header';

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
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
