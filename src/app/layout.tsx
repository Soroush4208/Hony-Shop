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
      <body className="w-full overflow-x-hidden">
        <div className="w-full min-h-screen flex flex-col justify-between items-center">
          <Header />
          <div className="w-full max-w-[1300px]  mx-auto overflow-x-hidden  h-full flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
