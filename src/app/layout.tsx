import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SessionWrapper from '@/components/SessionWrapper';

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' });

export const metadata: Metadata = {
  title: 'Gastric Cancer Hub — Research, Awareness & Innovation',
  description: 'Comprehensive hub for Gastric Cancer research, epidemiology, early detection, prevention, treatment, and innovation by researchers Badal Gupta & Nandini Tak from LPU.',
  keywords: 'gastric cancer, stomach cancer, cancer research, early detection, India cancer, H. pylori, oncology, LPU research, Badal Gupta, Nandini Tak',
  openGraph: {
    title: 'Gastric Cancer Hub — Global Research & India Awareness',
    description: 'Medical-grade portal covering global and India gastric cancer data, early detection, treatment, and LPU student research by Badal Gupta & Nandini Tak.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔬</text></svg>" />
      </head>
      <body>
        <SessionWrapper>
          <Navbar />
          <main className="page-wrapper">{children}</main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
