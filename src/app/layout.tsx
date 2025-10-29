import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'عسل ظبیعی ریاوکو',
  description: 'عسل طبیعی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="w-full min-h-screen flex flex-col justify-content-between">
          <Header />
          <div className="w-full h-full flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
