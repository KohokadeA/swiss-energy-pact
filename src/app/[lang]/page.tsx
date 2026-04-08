'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Download, Users, Database, Network, X, PlayCircle, Globe, Landmark } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import { cn } from '@/lib/utils';

// Vision Story Scenes
const getScenes = (lang: string) => [
  {
    t: "Art. 57a",
    h: lang === 'en' ? "Digital Security" : "Sécurité Numérique",
    d: lang === 'en' ? "The Confederation determines security rules for all public and private actors in the Swiss digital space." : "La Confédération détermine les règles de sécurité pour tous les acteurs publics et privés dans l'espace numérique suisse.",
    icon: Shield
  },
  // {
  //   t: lang === 'en' ? "Infrastructures" : "Infrastructures",
  //   h: lang === 'en' ? "Critical" : "Critiques",
  //   d: lang === 'en' ? "It protects its data and digital infrastructures and subsidiarily supports operators of critical infrastructures." : "Elle protège ses données et ses infrastructures numériques et soutient les opérateurs d'infrastructures critiques.",
  //   icon: Network
  // },
  {
    t: lang === 'en' ? "Integrity" : "Intégrité",
    h: lang === 'en' ? "Digital" : "Numérique",
    d: lang === 'en' ? "It guarantees the protection of personal data and the digital integrity of individuals." : "Elle garantit la protection des données personnelles et l'intégrité numérique des personnes.",
    icon: Database
  },
  {
    t: lang === 'en' ? "Independence" : "Indépendance",
    h: lang === 'en' ? "Strategic" : "Stratégique",
    d: lang === 'en' ? "Infrastructures and services essential to the state remain independent of any foreign influence." : "Les infrastructures et services essentiels à l'Etat restent indépendants de toute influence étrangère.",
    icon: Globe
  },
  {
    t: lang === 'en' ? "Literacy" : "Littératie",
    h: lang === 'en' ? "Digital" : "Numérique",
    d: lang === 'en' ? "It encourages the development of data literacy and digital skills within society." : "Elle encourage le développement de la littératie des données et des compétences numériques au sein de la société.",
    icon: Users
  },
  {
    t: lang === 'en' ? "Anticipating" : "Anticiper",
    h: lang === 'en' ? "Risks" : "Les Risques",
    d: lang === 'en' ? "Maintain Switzerland among the most advanced and secure nations in the digital field." : "Maintenir la Suisse parmi les nations les plus avancées et sûres dans le domaine numérique.",
    icon: Shield
  }
];

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  const scenes = getScenes(lang);
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
            className="object-cover object-center brightness-[0.85] transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
          <div className="absolute inset-0 bg-black/15 z-0" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center animate-in fade-in zoom-in duration-1000">
           <div className="flex justify-center mb-5">
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl"
             >
               <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
               {dict.subtitle}
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
             <Link href={`/${lang}/initiative`} className="swiss-button px-10 py-5 text-xl font-black shadow-[0_0_80px_rgba(227,6,19,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center gap-4 group">
               {dict.hero.cta.toUpperCase()} <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-smooth" />
             </Link>
             <Link href={`/${lang}/sign`} className="px-10 py-5 rounded-2xl font-black text-xl text-white border-2 border-white/30 hover:bg-white/10 active:scale-95 transition-all backdrop-blur-md">
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
                  {lang === 'en' ? "The 6" : "Les 6"} <span className="text-primary italic">{lang === 'en' ? "pillars" : "piliers"}</span> {lang === 'en' ? "of the initiative" : "de l'initiative"}
               </h2>
               <p className="text-base text-gray-400 max-w-2xl leading-relaxed font-bold italic">
                  {lang === 'en' ? "Building a constitutional framework for an independent digital Switzerland." : "Construire un cadre constitutionnel pour une Suisse numérique indépendante."}
               </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 p-5 bg-gray-50 dark:bg-zinc-900/50 rounded-[2rem] border border-gray-200 dark:border-white/5 group">
               <div className="flex items-center gap-3">
                  <Database className="w-7 h-7 text-primary" />
                  <h3 className="text-lg font-black uppercase tracking-tighter">{lang === 'en' ? "Strategic Autonomy" : "Autonomie Stratégique"}</h3>
               </div>
               <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic">{lang === 'en' ? '"Switzerland must remain the global haven for sensitive data."' : '"La Suisse doit rester le havre mondial pour les données sensibles."'}</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
                { icon: Shield, t: lang === 'en' ? "Security" : "Sécurité", d: lang === 'en' ? "Clear rules to protect the Swiss digital space." : "Des règles claires pour protéger l'espace numérique suisse." },
                { icon: Landmark, t: lang === 'en' ? "Infrastructures" : "Infrastructures", d: lang === 'en' ? "What keeps the country running must be protected as such." : "Ce qui fait tenir le pays doit être protégé comme tel." },
                { icon: Database, t: lang === 'en' ? "Data & people" : "Données et personnes", d: lang === 'en' ? "Protecting data means protecting people." : "Protéger les données, c'est protéger les personnes." },
                { icon: Globe, t: lang === 'en' ? "Sovereignty" : "Souveraineté", d: lang === 'en' ? "Open to the world, but never out of our hands." : "Ouverts au monde, mais jamais hors de nous-mêmes." },
                { icon: Users, t: lang === 'en' ? "Skills" : "Compétences", d: lang === 'en' ? "Digital freedom is built through understanding." : "La liberté numérique se construit par la compréhension." },
                { icon: Network, t: lang === 'en' ? "Anticipation" : "Anticipation", d: lang === 'en' ? "Invent here, develop here, make Switzerland shine." : "Inventer ici, développer ici, faire rayonner la Suisse." }
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
                        {lang === 'en' ? "WATCH THE " : "NOTRE "}<span className="text-primary italic">VISION</span>
                     </h2>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
                     <div className="bg-black/40 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/10">
                        <p className="text-white/50 font-black text-[9px] uppercase tracking-[0.3em] mb-1">{lang === 'en' ? "Authenticated narrative" : "Récit authentifié"}</p>
                        <p className="text-white/90 font-black text-lg tracking-tighter">{lang === 'en' ? "Swiss Digital Sovereignty Foundation" : "Fondation pour la Souveraineté Numérique Suisse"}</p>
                     </div>
                     <span className="px-6 py-2.5 bg-primary rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl">{lang === 'en' ? "Explore" : "Explorer"}</span>
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
                  {/* Cinematic Base Layer for Creativity */}
                   <Image
                      src="/swiss_digital_sovereignty_cinematic_1775639965864.png"
                      alt="Cinematic Background"
                      fill
                      className="object-cover opacity-30 mix-blend-overlay"
                   />

                   <video
                      src="/videoes/example_video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover brightness-[0.5] mix-blend-screen"
                   />

                   {/* COMMENTED OUT - Vision overlay captions (DO NOT DELETE)
<div className="absolute inset-0 flex items-end justify-center pb-12 px-12 z-10">
                      <AnimatePresence mode="wait">
                         <motion.div
                            key={visionScene}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl text-center flex flex-col items-center"
                         >
                            <div className="bg-black/80 backdrop-blur-3xl px-8 py-5 rounded-2xl border border-white/10 shadow-3xl">
                               <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                                  {scenes[visionScene]?.t} <span className="text-primary">{scenes[visionScene]?.h || ""}</span>
                               </h3>
                               <p className="text-xs md:text-sm text-white/80 font-bold leading-relaxed max-w-xl">
                                  {scenes[visionScene]?.d}
                                </p>
                            </div>
                         </motion.div>
                      </AnimatePresence>
                   </div>
*/}

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
                         <p className="text-white/30 font-black text-[9px] tracking-[0.3em] uppercase">{lang === 'en' ? "Pillar" : "Pilier"} {visionScene + 1} / {scenes.length}</p>
                         <button onClick={() => setVisionScene((prev) => (prev + 1) % scenes.length)} className="flex items-center gap-3 text-white font-black hover:text-primary transition-all uppercase tracking-[0.2em] text-[10px]">
                            {lang === 'en' ? "Next" : "Suivant"} <ArrowRight className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
         </div>
      </section>
      {/* Notre Vision Section */}
      <section className="container mx-auto px-6 py-12 text-center">
         <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary dark:text-white leading-[1] mb-6">
            {lang === 'en' ? "Our Vision" : "Notre vision"}
         </h2>
         <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto mb-10 italic">
            {lang === 'en' ? '"We want a secure, sovereign, open, human, and ambitious Switzerland."' : '"Nous voulons une Suisse sûre, souveraine, ouverte, humaine et ambitieuse."'}
         </p>
         <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-black uppercase tracking-widest text-primary">
            {(lang === 'en' ? ["secure", "sovereign", "open", "human", "ambitious"] : ["sûre", "souveraine", "ouverte", "humaine", "ambitieuse"]).map((word, i) => (
               <React.Fragment key={word}>
                  <span>{word}</span>
                  {i < 4 && <span className="text-gray-300 dark:text-gray-700 mx-2">•</span>}
               </React.Fragment>
            ))}
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
                  <span>{lang === 'en' ? "JOIN THE" : "REJOIGNEZ"}</span>
                  <span className="italic underline decoration-dashed underline-offset-4">{lang === 'en' ? "INITIATIVE" : "L'INITIATIVE"}</span>
               </h2>
               <p className="text-white/80 text-base max-w-lg mx-auto font-bold leading-relaxed drop-shadow-md">
                  {lang === 'en' ? "This initiative charts a clear course to protect people, strengthen the country, and prepare for the future. Your signature can pave the way." : "Cette initiative trace un cap clair pour protéger les personnes, renforcer le pays et préparer l'avenir. Votre signature peut ouvrir la voie."}
               </p>
               <div className="flex flex-col sm:flex-row gap-5 w-full justify-center mt-4">
                  <Link href={`/${lang}/sign`} className="px-12 py-5 bg-white text-primary rounded-xl font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-xl">
                    {lang === 'en' ? "SIGN THE FORM" : "SIGNER LE FORMULAIRE"}
                  </Link>
                  <Link href={`/${lang}/support`} className="px-12 py-5 border-2 border-white/20 hover:bg-white/10 rounded-xl font-black text-xl transition-all backdrop-blur-2xl">
                    {lang === 'en' ? "SUPPORT US" : "NOUS SOUTENIR"}
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
