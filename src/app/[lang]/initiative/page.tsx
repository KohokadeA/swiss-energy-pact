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

  const articleText = {
    en: `"Art. 10a (Digital Sovereignty) – 1. The Confederation and the Cantons shall ensure the digital sovereignty of Switzerland and protect its critical digital infrastructure. 2. Every person has the right to their digital integrity and self-determination over their data. 3. The Confederation shall ensure the technological independence of systems essential to state functions from foreign influence."`,
    fr: `"Art. 10a (Souveraineté numérique) – 1. La Confédération et les cantons veillent à la souveraineté numérique de la Suisse et protègent ses infrastructures critiques. 2. Toute personne a droit à son intégrité numérique et à l'autodétermination de ses données. 3. La Confédération garantit l'indépendance technologique des systèmes essentiels aux fonctions de l'État vis-à-vis des influences étrangères."`,
    de: `"Art. 10a (Digitale Souveränität) – 1. Bund und Kantone fördern die digitale Souveränität der Schweiz und schützen ihre kritischen Infrastrukturen. 2. Jede Person hat ein Recht auf ihre digitale Integrität und informationelle Selbstbestimmung. 3. Der Bund gewährleistet die technologische Unabhängigkeit der für die Staatsfunktionen wesentlichen Systeme von ausländischen Einflüssen."`,
    it: `"Art. 10a (Sovranità digitale) – 1. La Confederazione e i Cantoni promuovono la sovranità digitale della Svizzera e proteggono le sue infrastrutture critiche. 2. Ogni persona ha diritto alla propria integrità digitale e all'autodeterminazione dei propri dati. 3. La Confederazione garantisce l'indipendenza tecnologica dei sistemi essenziali alle funzioni dello Stato da influenze estere."`
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
      {/* Premium Banner Header */}
      <header className="mb-20 relative text-center lg:text-left flex flex-col lg:flex-row gap-16 items-end">
        <div className="flex-1 animate-in slide-in-from-left duration-1000">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
             <ShieldAlert className="w-4 h-4" />
             Strategic Mission
           </div>
           <h1 className="text-6xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter">
             Protecting <br />
             Swiss <span className="text-primary italic">Sovereignty</span>.
           </h1>
           <p className="text-xl text-gray-400 dark:text-gray-500 max-w-3xl leading-relaxed font-medium">
             Digital dependence is the greatest threat to our neutrality in the 21st century. The Swiss Digital Pact provides the constitutional bedrock for our independence.
           </p>
        </div>
        <div className="lg:w-1/3 p-10 bg-secondary dark:bg-zinc-900 rounded-[3rem] text-white flex flex-col gap-6 shadow-2xl shadow-secondary/10 relative animate-in slide-in-from-right duration-1000 delay-300 overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-all duration-1000" />
           <ShieldCheck className="w-12 h-12 text-primary group-hover:scale-110 transition-all" />
           <h2 className="text-2xl font-black leading-tight">Neutral. Secure. Independent.</h2>
           <p className="text-white/50 text-sm leading-relaxed font-medium">This initiative is non-partisan. It is a technical necessity to safeguard Swiss digital infrastructure.</p>
           <Link href={`/${lang}/sign`} className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">{dict.hero.cta} <ArrowRight className="w-4 h-4"/></Link>
        </div>
      </header>

      {/* Grid of Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <section className="flex flex-col gap-8 p-10 rounded-[3rem] bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group">
            <Lock className="w-7 h-7 group-hover:rotate-12 transition-all" />
          </div>
          <h2 className="text-3xl font-black tracking-tight">{dict.initiative.h}</h2>
          <div className="space-y-4">
            {[
              { t: "Digital Integrity", d: dict.initiative.p1 },
              { t: "Critical Infrastructure", d: dict.initiative.p2 },
              { t: "Technological Independence", d: dict.initiative.p3 },
              { t: "Democratic Oversight", d: dict.initiative.p4 }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 p-5 rounded-2xl bg-gray-50/50 dark:bg-black/20 border border-gray-50 dark:border-gray-800 transition-all hover:bg-white dark:hover:bg-zinc-900 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-all" />
                  <span className="text-lg font-black text-secondary dark:text-white">{item.t}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-bold text-xs ml-5">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 p-10 rounded-[3rem] bg-secondary dark:bg-black/40 text-white transition-all shadow-xl hover:shadow-2xl border-t-4 border-primary">
          <div className="w-14 h-14 bg-white/10 text-primary rounded-2xl flex items-center justify-center group">
            <Scale className="w-7 h-7 group-hover:scale-110 transition-all" />
          </div>
          <h2 className="text-3xl font-black tracking-tight">{dict.initiative.t}</h2>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 font-serif italic text-xl leading-relaxed text-gray-300 shadow-inner">
             {articleText[lang as keyof typeof articleText]}
          </div>
          <div className="flex justify-between items-center px-4">
             <span className="text-[10px] uppercase font-black tracking-widest text-primary">Constitutional Proposal v1.0</span>
             <Link href="#" className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/40 hover:text-white transition-all">Download Full Text <LinkIcon className="w-3 h-3"/></Link>
          </div>
        </section>

        {/* Visual Pillars Section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-10 rounded-[3.5rem] group overflow-hidden relative">
           <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-all duration-1000 -z-10" />
           
           {[
             { icon: Cpu, t: "Sovereign AI", d: "Switzerland requires local compute power and algorithms to remain independent." },
             { icon: Network, t: "Secure Cloud", d: "Hardening national storage against foreign access through Swiss legal frameworks." },
             { icon: Landmark, t: "e-ID Control", d: "Ensuring individual digital identity remains under direct public oversight." }
           ].map((p, i) => (
             <div key={i} className="flex flex-col gap-4 text-center items-center py-2 px-4 border-r border-gray-200 dark:border-gray-800 last:border-0 border-dashed">
                <div className="w-10 h-10 text-primary group-hover:scale-125 transition-all duration-500"><p.icon className="w-full h-full" /></div>
                <h3 className="text-xl font-black text-secondary dark:text-white">{p.t}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-relaxed">{p.d}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="mt-16 text-center p-16 bg-white dark:bg-black/40 rounded-[4rem] border-4 border-gray-100 dark:border-gray-900 shadow-2xl hover:border-primary transition-all duration-1000 group">
        <h3 className="text-4xl font-black mb-8 tracking-tight leading-tight">Securing the future <br /> <span className="text-primary italic">together</span>.</h3>
        <Link href={`/${lang}/sign`} className="swiss-button mx-auto inline-flex items-center gap-4 py-4 px-12 text-xl font-black hover:scale-110 active:scale-95 group shadow-[0_0_80px_rgba(227,6,19,0.2)]">
           {dict.common.signCta} <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth"/>
        </Link>
      </div>
    </div>
  );
}
