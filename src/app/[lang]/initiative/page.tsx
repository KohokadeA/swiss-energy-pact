import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldAlert, Fingerprint, Lock, Server, Cpu, Globe2, FileText, ChevronRight, Landmark, Link as LinkIcon, ArrowRight, ShieldCheck, Database, Scale, Network } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Initiative - Swiss Digital Pact',
  description: 'Specific proposals and the constitutional amendment in the Swiss Digital Pact initiative.',
};

export default function InitiativePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl overflow-hidden min-h-screen">
      {/* Premium Banner Header */}
      <header className="mb-32 relative text-center lg:text-left flex flex-col lg:flex-row gap-20 items-end">
        <div className="flex-1 animate-in slide-in-from-left duration-1000">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black tracking-[4px] uppercase mb-10 shadow-sm border border-primary/5">
             <FileText className="w-4 h-4" />
             {dict.nav.initiative}
           </div>
           <h1 className="text-6xl lg:text-9xl font-black mb-12 text-secondary dark:text-white leading-[0.8] tracking-tighter">
             Transforming <br />
             Our <span className="text-primary italic">Constitution</span>.
           </h1>
           <p className="text-2xl text-gray-400 dark:text-gray-500 max-w-2xl leading-relaxed font-medium">
             {dict.initiative.d} Digital sovereignty is a necessity for Switzerland.
           </p>
        </div>
        <div className="lg:w-1/3 p-12 bg-secondary dark:bg-zinc-900 rounded-[4rem] text-white flex flex-col gap-8 shadow-3xl shadow-secondary/20 relative animate-in slide-in-from-right duration-1000 delay-300 overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-all duration-1000" />
           <ShieldCheck className="w-16 h-16 text-primary group-hover:scale-110 transition-all" />
           <h2 className="text-3xl font-black leading-tight">{dict.subtitle}</h2>
           <p className="text-white/50 leading-relaxed font-medium">This initiative is neutral, non-partisan, and purely technical in its goals.</p>
           <Link href={`/${lang}/sign`} className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">{dict.hero.cta} <ArrowRight className="w-4 h-4"/></Link>
        </div>
      </header>

      {/* Grid of Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <section className="flex flex-col gap-10 p-12 rounded-[3.5rem] bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
          <div className="w-16 h-16 bg-red-100/50 dark:bg-red-900/20 text-primary rounded-2xl flex items-center justify-center group">
            <Lock className="w-8 h-8 group-hover:rotate-12 transition-all" />
          </div>
          <h2 className="text-4xl font-black tracking-tight">{dict.initiative.h}</h2>
          <div className="space-y-6">
            {[
              dict.initiative.p1,
              dict.initiative.p2,
              dict.initiative.p3,
              dict.initiative.p4
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50/50 dark:bg-black/20 border border-gray-50 dark:border-gray-800 transition-all hover:bg-white group cursor-default">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-all" />
                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-10 p-12 rounded-[3.5rem] bg-secondary dark:bg-black/40 text-white transition-all shadow-xl hover:shadow-2xl border-t-4 border-primary">
          <div className="w-16 h-16 bg-white/10 text-primary rounded-2xl flex items-center justify-center group">
            <Scale className="w-8 h-8 group-hover:scale-110 transition-all" />
          </div>
          <h2 className="text-4xl font-black tracking-tight">{dict.initiative.t}</h2>
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 font-serif italic text-2xl leading-relaxed text-gray-300 shadow-inner">
             "Article 10a (Digital Sovereignty and Security) - 1. The Confederation shall maintain the sovereignty and security of the digital space in Switzerland. 2. It shall protect critical digital infrastructure and ensure the integrity, confidentiality, and availability of data. 3. It shall promote the development of autonomous Swiss digital systems independently of foreign interests..."
          </div>
          <div className="flex justify-between items-center px-4">
             <span className="text-[10px] uppercase font-black tracking-widest text-primary">Constitutional Amendment Text</span>
             <Link href="#" className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/40 hover:text-white transition-all">Download Full Text <LinkIcon className="w-3 h-3"/></Link>
          </div>
        </section>

        {/* Visual Pillars Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-12 rounded-[4rem] group overflow-hidden relative">
           <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-all duration-1000 -z-10" />
           
           {[
             { icon: Cpu, t: "Sovereignty", d: "Switzerland must not rely solely on external providers for critical services." },
             { icon: Globe2, t: "Infrastructure", d: "Protecting the national network from foreign state interference." },
             { icon: Network, t: "Neutrality", d: "Maintaining Switzerland's stance as a neutral digital platform." }
           ].map((p, i) => (
             <div key={i} className="flex flex-col gap-6 text-center items-center py-4 px-6 border-r border-gray-200 dark:border-gray-800 last:border-0 border-dashed">
                <div className="w-12 h-12 text-primary group-hover:scale-125 transition-all duration-500"><p.icon className="w-full h-full" /></div>
                <h3 className="text-2xl font-black text-secondary dark:text-white">{p.t}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold leading-relaxed">{p.d}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="mt-32 text-center p-24 bg-white dark:bg-black/40 rounded-[5rem] border-4 border-gray-100 dark:border-gray-900 shadow-3xl hover:border-primary transition-all duration-1000 group">
        <h3 className="text-5xl font-black mb-10 tracking-tight leading-tight">This future is yours <br /> <span className="text-primary italic">to build</span>.</h3>
        <Link href={`/${lang}/sign`} className="swiss-button mx-auto inline-flex items-center gap-6 py-6 px-16 text-2xl font-black hover:scale-110 active:scale-95 group shadow-[0_0_80px_rgba(227,6,19,0.2)]">
           {dict.common.signCta} <ChevronRight className="w-8 h-8 group-hover:translate-x-3 transition-smooth"/>
        </Link>
      </div>
    </div>
  );
}
