import '@/styles/globals.css';
// import '@/styles/grain.css';
import { Metadata } from 'next';
import AudioPlayer from '@/app/ui/AudioPlayer';
import { NavProvider } from '@/context/NavContext';
import ArticleOverlay from '@/app/ui/ArticleOverlay';
import CustomCursor from '@/app/ui/Common/CustomCursor';

export const metadata: Metadata = {
  title: {
    default: '行者无悔',
    template: '%s | 行者无悔'
  },
  description: '只有失败过的人，才懂得我们为什么需要旅行。',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zhCN" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (hover: hover) {
            * { cursor: none !important; }
            #initial-cursor {
              position: fixed;
              top: 0; left: 0;
              width: 6px; height: 6px;
              background: white; border-radius: 50%;
              transform: translate(-50%, -50%) translate(var(--mx, -20px), var(--my, -20px));
              pointer-events: none; z-index: 1000000;
              mix-blend-mode: difference;
            }
          }
        ` }} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--mx', e.clientX + 'px');
            document.documentElement.style.setProperty('--my', e.clientY + 'px');
          }, { passive: true });
        ` }} />
      </head>
      <body>
        <div id="initial-cursor"></div>
        <NavProvider>
          <CustomCursor />
          <ArticleOverlay />
          <AudioPlayer />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
