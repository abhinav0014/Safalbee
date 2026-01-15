import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Honey Hive - Pure Natural Honey from the Hive',
  description: 'Experience premium, sustainably-harvested honey. From our bees to your table, every jar tells a story of purity and care.',
  keywords: 'honey, natural honey, organic honey, raw honey, beekeeping, sustainable',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-amber-50 dark:bg-zinc-950 
                       text-stone-900 dark:text-amber-100 
                       transition-colors duration-300`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}