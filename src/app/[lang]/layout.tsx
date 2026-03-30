import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { type Locale } from '@/lib/dictionary';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'de' }, { lang: 'it' }];
}

export default function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <Header lang={lang} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
