import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, CreditCard, QrCode, Heart, Coffee, ShieldCheck, ExternalLink, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Support - Swiss Digital Pact',
  description: 'Contribute to the Swiss Digital Pact movement. Your donations help us secure Switzerland\'s digital future.',
};

export default function SupportPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  const donationOptions = [
    {
      icon: BankIcon,
      title: "Bank Transfer",
      description: "Directly support via official IBAN. The most efficient way for larger contributions without platform fees.",
      details: "IBAN: CH00 0000 0000 0000 0000 0",
      cta: "Copy IBAN"
    },
    {
      icon: PlatformIcon,
      title: "Donation Platform",
      description: "Secure online payment with Credit Card, Twint, or Apple Pay. Quick and automated receipts.",
      details: "Powered by RaiseNow / Twint",
      cta: "Donate Online",
      external: true
    },
    {
      icon: QrIcon,
      title: "QR Code Payment",
      description: "Scan our official QR code with your banking app or Twint to make a secure 1-click contribution.",
      details: "Twint or Mobile Banking",
      cta: "View QR Code"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl overflow-hidden min-h-screen">
      <header className="text-center max-w-4xl mx-auto mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black tracking-[4px] uppercase mb-10 shadow-sm border border-primary/5">
          <Heart className="w-5 h-5 flex-shrink-0" />
          Join the Mission
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-12 text-secondary dark:text-white leading-[0.8] tracking-tighter">
           EVERY FRANC <br /> <span className="text-primary italic">MATTERS</span>.
        </h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          We are 100% funded by citizens. Your support helps print forms, organize events, and protect Swiss digital rights.
        </p>
      </header>

      {/* Main Donation Grid - Premium Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-48 relative">
        {donationOptions.map((option, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 flex flex-col p-12 rounded-[5rem] border border-gray-100 dark:border-gray-800 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:-translate-y-6 group">
             <div className="w-24 h-24 bg-gray-50 dark:bg-black rounded-[3rem] flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <option.icon className="w-12 h-12 text-secondary dark:text-white group-hover:text-primary transition-all" />
             </div>
             <h3 className="text-3xl font-black mb-6">{option.title}</h3>
             <p className="text-gray-500 dark:text-gray-400 mb-12 font-bold leading-relaxed flex-grow">{option.description}</p>
             <div className="bg-gray-100 dark:bg-black p-6 rounded-3xl mb-10 font-mono text-[10px] uppercase font-black tracking-widest border-2 border-dashed border-gray-200 dark:border-gray-800 break-words group-hover:border-primary/20 transition-all">
                {option.details}
             </div>
             <button className="swiss-button w-full py-6 flex items-center justify-center gap-4 text-lg font-black group-hover:bg-primary shadow-xl">
               {option.cta} {option.external ? <ExternalLink className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
             </button>
          </div>
        ))}
      </div>

      {/* Large Featured Transparency CTA */}
      <section className="bg-secondary dark:bg-zinc-900 rounded-[6rem] p-16 lg:p-32 text-white relative overflow-hidden group shadow-4xl mb-48">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-[0.05] rounded-full translate-x-20 -translate-y-20 blur-[100px] group-hover:scale-150 transition-all duration-1000" />
         
         <div className="flex flex-col lg:flex-row gap-20 items-center z-10 relative">
            <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border-4 border-primary/20 group-hover:scale-110 transition-all duration-700 shrink-0">
               <ShieldCheck className="w-24 h-24 text-primary" />
            </div>
            <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
               <h2 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter italic">Total <span className="text-primary not-italic underline decoration-4 underline-offset-[16px]">Transparency</span>.</h2>
               <p className="text-white/60 text-2xl font-medium leading-relaxed max-w-2xl">
                  As a Swiss federal initiative, we are subject to strict financial disclosure laws. 100% of your donation is used for the advancement of the digital pact.
               </p>
               <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-white/40">
                     <CheckCircle2 className="w-6 h-6 text-primary" /> Verified Non-Profit
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-white/40">
                     <CheckCircle2 className="w-6 h-6 text-primary" /> Tax-Deductible (CH)
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-white/40">
                     <CheckCircle2 className="w-6 h-6 text-primary" /> Audited Reports
                  </div>
               </div>
               <Link href="#" className="flex items-center gap-3 text-lg font-black text-primary hover:gap-6 underline underline-offset-8 transition-all">
                  Read Financial Report <ExternalLink className="w-5 h-5"/>
               </Link>
            </div>
         </div>
      </section>

      {/* Final Footer CTA */}
      <div className="flex flex-col items-center mt-32">
         <h4 className="text-4xl md:text-5xl font-bold italic mb-12 text-center text-secondary dark:text-white max-w-5xl leading-tight">
            "A secure digital future for Switzerland requires the commitment of all citizens."
         </h4>
         <Link href={`/${lang}/sign`} className="swiss-button px-12 py-5 font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center gap-4 group">
            {dict.common.signCta} <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-smooth" />
         </Link>
      </div>
    </div>
  );
}

// Custom Icons for Premium Look
function BankIcon(props: any) { return <Landmark {...props} />; }
function PlatformIcon(props: any) { return <CreditCard {...props} />; }
function QrIcon(props: any) { return <QrCode {...props} />; }
