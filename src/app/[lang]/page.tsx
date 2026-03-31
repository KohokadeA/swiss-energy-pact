'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Download, Users, Database, Network, X, PlayCircle, Globe, Landmark } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import { cn } from '@/lib/utils';

// Vision Story Scenes - Moved outside to prevent re-renders and potential hook warnings
const scenes = [
  {
    t: "Strategic Sovereignty",
    d: "Integrating digital security and independence directly into the Swiss Federal Constitution.",
    icon: Shield
  },
  {
    t: "Data Sovereignty",
    d: "Switzerland must become the ultimate safe haven for personal and state data globally.",
    icon: Database
  },
  {
    t: "Independent Infrastructure",
    d: "Securing national power grids and communication from foreign interference.",
    icon: Network
  },
  {
    t: "Digital Neutrality",
    d: "Defending Switzerland's role as a trusted, neutral platform in the global tech landscape.",
    icon: Globe
  },
  {
    t: "Direct Democracy",
    d: "Ensuring all digital governance tools remain under direct public oversight and control.",
    icon: Landmark
  }
];

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  const [isVisionPlaying, setIsVisionPlaying] = useState(false);
  const [visionScene, setVisionScene] = useState(0);

  // Auto-advance scenes when "movie" is playing
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isVisionPlaying) {
      interval = setInterval(() => {
        setVisionScene((prev) => (prev + 1) % scenes.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisionPlaying]);

  return (
    <div className="flex flex-col gap-14 pb-12 overflow-hidden selection:bg-primary selection:text-white">
      {/* Hero Section - Full Viewport & 100% Visibility */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/swiss_digital_pact_hero_v5.png"
            alt="Swiss Digital Pact Hero"
            fill
            priority
            className="object-cover object-center brightness-[0.5] transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-black/40 z-0" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center animate-in fade-in zoom-in duration-1000">
           <div className="flex justify-center mb-5">
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl"
             >
               <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
               Swiss Federal Popular Initiative
             </motion.div>
           </div>

           <motion.h1
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7 }}
             className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white mb-5 drop-shadow-2xl"
           >
             {dict.hero.title.split(' ').map((word, i) => (
               <span key={i} className={word.toLowerCase() === 'sovereignty' || word.toLowerCase() === 'souveraineté' || word.toLowerCase() === 'souveränität' || word.toLowerCase() === 'sovranità' ? "text-primary italic" : ""}>
                 {word}{' '}
               </span>
             ))}
           </motion.h1>

           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 font-bold drop-shadow-xl"
           >
             {dict.hero.description}
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <Link href={`/${lang}/sign`} className="swiss-button px-10 py-5 text-xl font-black shadow-[0_0_80px_rgba(227,6,19,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center gap-4 group">
               {dict.hero.cta.toUpperCase()} <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-smooth" />
             </Link>
             <Link href={`/${lang}/initiative`} className="px-10 py-5 rounded-2xl font-black text-xl text-white border-2 border-white/30 hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md">
               {dict.hero.learn.toUpperCase()}
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Grid Features - High Professional Look */}
      <section className="container mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-10 items-end mb-10">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary dark:text-white leading-[1] mb-5">
                  The <span className="text-primary italic">Pillars</span> of our Pact.
               </h2>
               <p className="text-base text-gray-400 max-w-2xl leading-relaxed font-bold italic">
                  Building a constitutional framework for an independent digital Switzerland.
               </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 p-5 bg-gray-50 dark:bg-zinc-900/50 rounded-[2rem] border border-gray-200 dark:border-white/5 group">
               <div className="flex items-center gap-3">
                  <Database className="w-7 h-7 text-primary" />
                  <h3 className="text-lg font-black uppercase tracking-tighter">Strategic Autonomy</h3>
               </div>
               <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic">"Switzerland must remain the global safe haven for sensitive data."</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
               { icon: Landmark, t: "Infrastructure", d: "Securing national grids from foreign interference." },
               { icon: Network, t: "Independence", d: "Reducing critical dependence on foreign cloud providers." },
               { icon: Globe, t: "Neutrality", d: "Defending Switzerland's role as a trusted, neutral platform." },
               { icon: Users, t: "Democracy", d: "Ensuring digital governance remains under public oversight." }
            ].map((f, i) => (
               <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-zinc-950 border border-gray-100 dark:border-white/5 hover:border-primary transition-all duration-500 group relative overflow-hidden">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 group-hover:bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-all">
                     <f.icon className="w-5 h-5 text-secondary dark:text-white group-hover:text-primary transition-all" />
                  </div>
                  <h4 className="text-lg font-black mb-2 uppercase tracking-tight">{f.t}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-relaxed">{f.d}</p>
               </div>
            ))}
         </div>
      </section>

      {/* The Vision Movie - REFINED SCALE & PREMIUM */}
      <section className="container mx-auto px-6">
         <div className="relative aspect-video max-w-5xl mx-auto rounded-[2rem] overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-zinc-950 border border-white/5">
            <AnimatePresence mode="wait">
              {!isVisionPlaying ? (
                <motion.div
                   key="poster"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="relative w-full h-full cursor-pointer"
                   onClick={() => setIsVisionPlaying(true)}
                >
                  <Image
                    src="/swiss_digital_pact_hero_v5.png"
                    alt="Vision Poster"
                    fill
                    className="object-cover object-center brightness-[0.35] group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <div className="p-10 bg-white/10 backdrop-blur-3xl rounded-full group-hover:scale-110 transition-all duration-500 group-hover:bg-primary shadow-3xl border border-white/20 mb-8">
                        <PlayCircle className="w-20 h-20 text-white" />
                     </div>
                     <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                        WATCH THE <span className="text-primary italic">VISION</span>
                     </h2>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
                     <div className="bg-black/40 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/10">
                        <p className="text-white/50 font-black text-[9px] uppercase tracking-[0.3em] mb-1">Authenticated Narrative</p>
                        <p className="text-white/90 font-black text-lg tracking-tighter">Swiss Digital Sovereignty Foundation</p>
                     </div>
                     <span className="px-6 py-2.5 bg-primary rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl">Explore</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                   key="movie"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="relative w-full h-full bg-zinc-950"
                >
                   <Image
                      src="/swiss_digital_pact_hero_v5.png"
                      alt="Movie Background"
                      fill
                      className="object-cover object-center brightness-[0.15] transition-all duration-1000"
                   />

                   <div className="absolute inset-0 flex items-center justify-center p-12">
                      <AnimatePresence mode="wait">
                         <motion.div
                            key={visionScene}
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl text-center flex flex-col items-center gap-8"
                         >
                            <div className="p-10 bg-primary/20 backdrop-blur-3xl rounded-[2.5rem] border border-primary/30 shadow-[0_0_100px_rgba(227,6,19,0.2)]">
                               {scenes[visionScene] && React.createElement(scenes[visionScene].icon, { className: "w-20 h-20 text-primary" })}
                            </div>
                            <div className="flex flex-col gap-4">
                               <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                  {scenes[visionScene]?.t}
                               </h3>
                               <p className="text-lg md:text-2xl text-white/70 font-bold leading-relaxed max-w-xl">
                                  {scenes[visionScene]?.d}
                                </p>
                            </div>
                         </motion.div>
                      </AnimatePresence>
                   </div>

                   <div className="absolute top-8 right-8 z-40">
                      <button
                        onClick={() => setIsVisionPlaying(false)}
                        className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-3xl rounded-full text-white transition-all border border-white/20 hover:rotate-90"
                      >
                        <X className="w-8 h-8" />
                      </button>
                   </div>

                   <div className="absolute bottom-8 left-10 right-10 flex items-center justify-between z-40">
                      <div className="flex gap-2">
                         {scenes.map((_, i) => (
                            <div key={i} className={cn("h-1.5 transition-all duration-700 rounded-full", visionScene === i ? "w-20 bg-primary" : "w-6 bg-white/10")} />
                         ))}
                      </div>
                      <div className="flex items-center gap-6">
                         <p className="text-white/30 font-black text-[9px] tracking-[0.3em] uppercase">Pillar {visionScene + 1} / {scenes.length}</p>
                         <button onClick={() => setVisionScene((prev) => (prev + 1) % scenes.length)} className="flex items-center gap-3 text-white font-black hover:text-primary transition-all uppercase tracking-[0.2em] text-[10px]">
                            Next <ArrowRight className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
         </div>
      </section>

      {/* FINAL CTA - Refined Scale & High-End Block */}
      <section className="container mx-auto px-6 mb-8">
         <div className="bg-primary p-10 lg:p-14 rounded-[2.5rem] text-white flex flex-col items-center text-center relative overflow-hidden shadow-xl shadow-primary/20 group max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-[0.02] rounded-full -mr-32 -mt-32 blur-3xl transition-all duration-1000 group-hover:scale-110" />
            <div className="relative z-10 flex flex-col gap-5 items-center">
               <div className="p-4 bg-white/10 rounded-xl backdrop-blur-3xl border border-white/20 shadow-xl">
                  <Download className="w-7 h-7" />
               </div>
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] flex flex-col">
                  <span>JOIN THE</span>
                  <span className="italic underline decoration-dashed underline-offset-4">INITIATIVE</span>
               </h2>
               <p className="text-white/80 text-base max-w-lg mx-auto font-bold leading-relaxed drop-shadow-md">
                  Join thousands of Swiss citizens in securing our digital future. Your signature carries the weight of constitutional change.
               </p>
               <div className="flex flex-col sm:flex-row gap-5 w-full justify-center mt-4">
                  <Link href={`/${lang}/sign`} className="px-12 py-5 bg-white text-primary rounded-xl font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-xl">
                    SIGN THE FORM
                  </Link>
                  <Link href={`/${lang}/support`} className="px-12 py-5 border-2 border-white/20 hover:bg-white/10 rounded-xl font-black text-xl transition-all backdrop-blur-2xl">
                    SUPPORT US
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
