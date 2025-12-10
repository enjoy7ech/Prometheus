import './globals.css';
import type { Metadata } from 'next';
import Header from './ui/Header';
import Footer from './ui/Footer';

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
        <div className="grain"></div>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
