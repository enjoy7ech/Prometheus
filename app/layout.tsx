import '@/styles/globals.css';
import '@/styles/grain.css';
import NormalLayout from '@/app/ui/Layout/NormalLayout';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zhCN">
      <head></head>
      <body>
        <NormalLayout>{children}</NormalLayout>
      </body>
    </html>
  );
}
