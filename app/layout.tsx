import '@/styles/globals.css';
// import '@/styles/grain.css';
import { Metadata } from 'next';
import AudioPlayer from '@/app/ui/AudioPlayer';
import { NavProvider } from '@/context/NavContext';
import ArticleOverlay from '@/app/ui/ArticleOverlay';

export const metadata: Metadata = {
  title: {
    default: '行者无悔',
    template: '%s | 行者无悔'
  },
  description: '只有失败过的人，才懂得我们为什么需要旅行。'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zhCN" suppressHydrationWarning>
      <head></head>
      <body>
        <NavProvider>
          <ArticleOverlay />
          <AudioPlayer />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
