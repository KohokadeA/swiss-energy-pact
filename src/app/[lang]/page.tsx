import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, ArrowRight, Download, Users, Landmark, Globe, PlayCircle, Scale, Database, Network } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden">
      {/* Hero Section - Premium Large Format */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Swiss Digital Pact Hero" 
            fill 
            priority
            className="object-cover brightness-[0.8] dark:brightness-[0.4] transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-secondary/20 z-0" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center animate-in fade-in zoom-in duration-1000">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              {dict.subtitle}
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white selection:bg-primary selection:text-white mb-10">
            {dict.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? "text-primary" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
            {dict.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={`/${lang}/sign`} className="swiss-button px-12 py-5 text-xl font-black shadow-[0_0_50px_rgba(227,6,19,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center gap-4 group">
              {dict.hero.cta} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth" />
            </Link>
            <Link href={`/${lang}/initiative`} className="px-12 py-5 rounded-2xl font-black text-xl text-white border-2 border-white/30 hover:bg-white/10 active:scale-95 transition-all">
              {dict.hero.learn}
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Features - High Professional Look */}
      <section className="container mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-24 items-end mb-24">
            <div className="flex-1">
               <h2 className="text-5xl md:text-7xl font-black tracking-tight text-secondary dark:text-white leading-[1] mb-8">
                  Built on <span className="text-primary italic">Swiss</span> values.
               </h2>
               <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
                  {dict.initiative.d} Our mission is to integrate digital sovereignty into the Swiss Federal Constitution.
               </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-6 p-8 bg-gray-100 dark:bg-zinc-900 rounded-[3rem] border border-gray-200 dark:border-gray-800 relative overflow-hidden group">
               <Database className="w-12 h-12 text-primary mb-2 group-hover:rotate-12 transition-smooth" />
               <h3 className="text-2xl font-black">Data Sovereignty</h3>
               <p className="text-sm text-gray-500 leading-relaxed italic">"Switzerland must remain the safe haven for global data."</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               { icon: Scale, t: dict.initiative.t, d: dict.initiative.p1 },
               { icon: Network, t: "Infrastructure", d: dict.initiative.p2 },
               { icon: Globe, t: "Independence", d: dict.initiative.p3 },
               { icon: Users, t: "Democracy", d: dict.initiative.p4 }
            ].map((f, i) => (
               <div key={i} className="p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-gray-800/60 hover:border-primary transition-all duration-500 group">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-black group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-all">
                     <f.icon className="w-6 h-6 text-secondary dark:text-white group-hover:text-primary transition-all" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{f.t}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{f.d}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Video Poster */}
      <section className="container mx-auto px-6">
         <div className="relative aspect-video rounded-[4rem] overflow-hidden group cursor-pointer shadow-3xl">
            <Image 
              src="/hero.png" 
              alt="Video Poster" 
              fill 
              className="object-cover brightness-[0.7] group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="p-10 bg-white/20 backdrop-blur-xl rounded-full group-hover:scale-125 transition-all duration-500 group-hover:bg-primary shadow-2xl">
                  <PlayCircle className="w-20 h-20 text-white" />
               </div>
            </div>
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end text-white">
               <div>
                  <h3 className="text-3xl font-black mb-2">{dict.hero.watch}</h3>
                  <p className="text-white/70">Building Switzerland's digital future together.</p>
               </div>
               <span className="px-6 py-2 bg-black/40 rounded-full font-bold text-xs uppercase tracking-widest">FR / DE / IT / EN</span>
            </div>
         </div>
      </section>

      {/* Final CTA Block */}
      <section className="container mx-auto px-6">
         <div className="bg-primary p-12 lg:p-32 rounded-[5rem] text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-primary/30 group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-10 items-center">
               <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20">
                  <Download className="w-12 h-12" />
               </div>
               <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
                  {dict.common.signCta.split(' ').map((w,i) => i === 1 ? <span key={i} className="italic underline decoration-1 decoration-dashed underline-offset-[12px]">{w} </span> : <span key={i}>{w} </span>)}
               </h2>
               <p className="text-white/70 text-xl max-w-2xl mx-auto font-medium">
                  {dict.hero.description}
               </p>
               <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-10">
                  <Link href={`/${lang}/sign`} className="px-16 py-6 bg-white text-primary rounded-[2rem] font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-black/20">
                     {dict.hero.cta.toUpperCase()}
                  </Link>
                  <Link href={`/${lang}/support`} className="px-16 py-6 border-2 border-white/30 hover:bg-white/10 rounded-[2rem] font-black text-2xl transition-all">
                     {dict.common.donateCta.toUpperCase()}
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
