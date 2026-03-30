import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Printer, PenTool, Send, AlertTriangle, FileCheck, Landmark, ShieldCheck, ArrowDown, ChevronRight, Scale } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Sign the Initiative - Swiss Digital Pact',
  description: 'Physical signature process for the Swiss Digital Pact. Follow our 4-step guide to participate.',
};

export default function SignPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  const steps = [
    {
      icon: Download,
      title: dict.sign.step1,
      description: dict.sign.step1d,
      color: "bg-red-500",
      link: "/forms/swiss-digital-pact-form.pdf"
    },
    {
      icon: Printer,
      title: dict.sign.step2,
      description: dict.sign.step2d,
      color: "bg-orange-500"
    },
    {
      icon: PenTool,
      title: dict.sign.step3,
      description: dict.sign.step3d,
      color: "bg-blue-500"
    },
    {
      icon: Send,
      title: dict.sign.step4,
      description: dict.sign.step4d,
      color: "bg-green-500"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl overflow-hidden min-h-screen">
      <header className="text-center max-w-4xl mx-auto mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-100/50 dark:bg-red-900/20 text-primary rounded-full text-[10px] font-black tracking-[4px] uppercase mb-10 shadow-sm border border-primary/5">
          <ShieldCheck className="w-5 h-5 flex-shrink-0" />
          {dict.common.howToSign}
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-12 text-secondary dark:text-white leading-[0.8] tracking-tighter italic italic font-serif">
           {dict.sign.h}
        </h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400 font-bold leading-relaxed max-w-2xl mx-auto">
          Switzerland's direct democracy is built on paper and ink. Every signature counts.
        </p>
      </header>

      {/* Steps Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full mb-48 relative">
        <div className="hidden lg:block absolute top-[20%] left-[10%] right-[10%] h-1 border-t-4 border-dashed border-gray-100 dark:border-gray-800 -z-10" />
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group translate-y-0 hover:-translate-y-6 transition-all duration-700 bg-white dark:bg-zinc-900/40 p-12 rounded-[3.5rem] border border-gray-50 dark:border-gray-800 shadow-xl hover:shadow-3xl hover:border-primary/20 relative">
            <div className="absolute top-0 right-0 p-6 font-black text-6xl text-gray-100/30 dark:text-gray-800/20 leading-none select-none group-hover:text-primary/10 transition-all">0{idx + 1}</div>
            <div className={`w-20 h-20 ${step.color} text-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              <step.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black mb-6 leading-tight">{step.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-bold leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Main Action Block */}
      <div className="w-full bg-secondary dark:bg-zinc-900 p-16 lg:p-32 rounded-[6rem] text-white flex flex-col lg:flex-row items-center gap-20 shadow-4xl relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary opacity-[0.05] rounded-full translate-x-20 translate-y-20 blur-[100px] group-hover:scale-125 transition-all duration-1000" />
        
        <div className="flex-1 flex flex-col gap-10 items-center lg:items-start text-center lg:text-left z-10">
          <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all duration-500">
             <FileCheck className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter">Official <br /> <span className="text-primary italic underline decoration-4 underline-offset-[12px]">Form</span>.</h2>
          <p className="text-white/60 text-xl font-bold leading-relaxed max-w-xl">
             Download the PDF form now. Remember, only Swiss citizens with voting rights can legally participate.
          </p>
          <Link href="#" className="swiss-button py-8 px-16 text-3xl font-black group-hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_-12px_rgba(227,6,19,0.4)] flex items-center gap-6">
            <Download className="w-10 h-10" /> DOWNLOAD FORM
          </Link>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-white/30">
             <ArrowDown className="w-4 h-4" /> OFFICIAL PDF | 1.4 MB
          </div>
        </div>

        <div className="lg:w-1/3 bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl z-10 relative overflow-hidden group/card shadow-2xl">
           <AlertTriangle className="w-12 h-12 text-amber-500 mb-8" />
           <h4 className="text-2xl font-black mb-6">Legal Reminders</h4>
           <ul className="space-y-6 text-white/60 text-sm font-bold">
             <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 group-hover/card:bg-primary/10 transition-all">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                Swiss citizens with voting rights ONLY.
             </li>
             <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 group-hover/card:bg-primary/10 transition-all">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                Hand-written ink signature is REQUIRED.
             </li>
             <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 group-hover/card:bg-primary/10 transition-all">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                State residence clearly.
             </li>
           </ul>
        </div>
      </div>
      
      {/* Postal Address Block */}
      <div className="mt-48 flex flex-col items-center">
         <h4 className="text-[10px] font-black uppercase tracking-[5px] text-gray-500 mb-10">Mailing Destination</h4>
         <div className="p-16 rounded-[4.5rem] bg-gray-100 dark:bg-black/60 border-2 border-gray-200 dark:border-gray-900 text-center flex flex-col items-center gap-8 group hover:border-primary transition-all duration-700 shadow-xl shadow-gray-200/50 relative overflow-hidden max-w-4xl w-full">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-all" />
           <div className="w-20 h-20 bg-white dark:bg-zinc-900 text-primary rounded-[2rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-gray-100 dark:border-gray-800">
             <Landmark className="w-10 h-10" />
           </div>
           <div className="text-4xl lg:text-5xl font-black text-secondary dark:text-gray-200 tracking-tighter leading-tight italic font-serif">
             Swiss Digital Pact Committee<br />
             <span className="not-italic text-gray-400 font-bold">CP 456, 1000 Lausanne</span>
           </div>
           <Link href={`/${lang}/contact`} className="px-8 py-3 bg-gray-200 dark:bg-gray-800 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-primary hover:text-white transition-all transition-smooth">
             Questions? Contact Us <ChevronRight className="w-4 h-4 inline ml-2"/>
           </Link>
         </div>
      </div>
    </div>
  );
}
