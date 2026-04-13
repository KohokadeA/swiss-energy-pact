import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AtmosphericBackground from '@/components/AtmosphericBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swiss Digital Pact - Federal Popular Initiative',
  description: 'A federal popular initiative for digital sovereignty, security, and the protection of Switzerland\'s digital infrastructure. Join the movement for a safer digital Switzerland.',
  keywords: 'Swiss Digital Pact, Popular Initiative, Switzerland, Digital Sovereignty, Digital Security, Constitution, Amendment, Sign current initiative',
  openGraph: {
    title: 'Swiss Digital Pact - Federal Popular Initiative',
    description: 'Join the movement for digital sovereignty and security in Switzerland.',
    url: 'https://www.swissdigitalpact.ch',
    siteName: 'Swiss Digital Pact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiss Digital Pact',
    description: 'Support digital sovereignty and security in Switzerland.',
    creator: '@SwissDigitalPact',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AtmosphericBackground />
        {children}
      </body>
    </html>
  );
}
