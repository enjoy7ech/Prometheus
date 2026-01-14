import '@/styles/globals.css';
import '@/styles/grain.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zhCN">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
