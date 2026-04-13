'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Download, Users, Database, Network, X, PlayCircle, Globe, Landmark } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Magnetic from '@/components/Magnetic';
import { cn } from '@/lib/utils';

// Vision Story Scenes
   const pillers = {
  en: [
    { icon: Shield, t: "Security", d: "Clear rules to protect the Swiss digital space." },
    { icon: Landmark, t: "Infrastructure", d: "What keeps the country running must be protected as such." },
    { icon: Database, t: "Data & People", d: "Protecting data means protecting people." },
    { icon: Globe, t: "Sovereignty", d: "Open to the world, but never out of our hands." },
    { icon: Users, t: "Skills", d: "Digital freedom is built through understanding." },
    { icon: Network, t: "Anticipation", d: "Invent here, develop here, make Switzerland shine." }
  ],

  fr: [
    { icon: Shield, t: "Sécurité", d: "Des règles claires pour protéger l’espace numérique suisse." },
    { icon: Landmark, t: "Infrastructures", d: "Ce qui fait tenir le pays doit être protégé comme tel." },
    { icon: Database, t: "Données et personnes", d: "Protéger les données, c’est protéger les personnes." },
    { icon: Globe, t: "Souveraineté", d: "Ouverts au monde, mais jamais hors de nous-mêmes." },
    { icon: Users, t: "Compétences", d: "La liberté numérique se construit par la compréhension." },
    { icon: Network, t: "Anticipation", d: "Inventer ici, développer ici, faire rayonner la Suisse." }
  ],

  de: [
    { icon: Shield, t: "Sicherheit", d: "Klare Regeln zum Schutz des digitalen Raums der Schweiz." },
    { icon: Landmark, t: "Infrastrukturen", d: "Was das Land am Laufen hält, muss entsprechend geschützt werden." },
    { icon: Database, t: "Daten und Menschen", d: "Daten zu schützen bedeutet, Menschen zu schützen." },
    { icon: Globe, t: "Souveränität", d: "Offen für die Welt, aber niemals außerhalb unserer Kontrolle." },
    { icon: Users, t: "Kompetenzen", d: "Digitale Freiheit entsteht durch Verständnis." },
    { icon: Network, t: "Antizipation", d: "Hier erfinden, hier entwickeln, die Schweiz zum Strahlen bringen." }
  ],

  it: [
    { icon: Shield, t: "Sicurezza", d: "Regole chiare per proteggere lo spazio digitale svizzero." },
    { icon: Landmark, t: "Infrastrutture", d: "Ciò che sostiene il Paese deve essere protetto come tale." },
    { icon: Database, t: "Dati e persone", d: "Proteggere i dati significa proteggere le persone." },
    { icon: Globe, t: "Sovranità", d: "Aperti al mondo, ma mai fuori dal nostro controllo." },
    { icon: Users, t: "Competenze", d: "La libertà digitale si costruisce attraverso la comprensione." },
    { icon: Network, t: "Anticipazione", d: "Inventare qui, sviluppare qui, far brillare la Svizzera." }
  ]
   };

   // translations
const visionText = {
  en: {
    watch: "WATCH THE",
    authenticated: "Authenticated narrative",
    foundation: "Swiss Digital Sovereignty Foundation",
    explore: "Explore",
    pillar: "Pillar",
    next: "Next",
    title: "Our Vision",
    quote: '"We want a secure, sovereign, open, human, and ambitious Switzerland."',
    words: ["secure", "sovereign", "open", "human", "ambitious"]
  },
  fr: {
    watch: "NOTRE",
    authenticated: "Récit authentifié",
    foundation: "Fondation pour la Souveraineté Numérique Suisse",
    explore: "Explorer",
    pillar: "Pilier",
    next: "Suivant",
    title: "Notre vision",
    quote: '"Nous voulons une Suisse sûre, souveraine, ouverte, humaine et ambitieuse."',
    words: ["sûre", "souveraine", "ouverte", "humaine", "ambitieuse"]
  },
  de: {
    watch: "VISION ANSEHEN",
    authenticated: "Authentifizierte Darstellung",
    foundation: "Stiftung für digitale Souveränität der Schweiz",
    explore: "Entdecken",
    pillar: "Pfeiler",
    next: "Weiter",
    title: "Unsere Vision",
    quote: '"Wir wollen eine sichere, souveräne, offene, menschliche und ambitionierte Schweiz."',
    words: ["sicher", "souverän", "offen", "menschlich", "ambitioniert"]
  },
  it: {
    watch: "GUARDA LA",
    authenticated: "Narrazione autenticata",
    foundation: "Fondazione per la Sovranità Digitale Svizzera",
    explore: "Esplora",
    pillar: "Pilastro",
    next: "Avanti",
    title: "La nostra visione",
    quote: '"Vogliamo una Svizzera sicura, sovrana, aperta, umana e ambiziosa."',
    words: ["sicura", "sovrana", "aperta", "umana", "ambiziosa"]
  }
};

const ctaText = {
  en: {
    join: "JOIN THE",
    initiative: "INITIATIVE",
    desc: "This initiative charts a clear course to protect people, strengthen the country, and prepare for the future. Your signature can pave the way.",
    sign: "SIGN THE FORM",
    support: "SUPPORT US"
  },
  fr: {
    join: "REJOIGNEZ",
    initiative: "L'INITIATIVE",
    desc: "Cette initiative trace un cap clair pour protéger les personnes, renforcer le pays et préparer l'avenir. Votre signature peut ouvrir la voie.",
    sign: "SIGNER LE FORMULAIRE",
    support: "NOUS SOUTENIR"
  },
  de: {
    join: "MACHEN SIE MIT BEI DER",
    initiative: "INITIATIVE",
    desc: "Diese Initiative zeigt einen klaren Weg auf, um Menschen zu schützen, das Land zu stärken und die Zukunft vorzubereiten. Ihre Unterschrift kann den Weg ebnen.",
    sign: "FORMULAR UNTERZEICHNEN",
    support: "UNTERSTÜTZEN SIE UNS"
  },
  it: {
    join: "UNISCITI ALL'",
    initiative: "INIZIATIVA",
    desc: "Questa iniziativa traccia una rotta chiara per proteggere le persone, rafforzare il Paese e preparare il futuro. La tua firma può aprire la strada.",
    sign: "FIRMA IL MODULO",
    support: "SOSTIENICI"
  }
};

const scenesData = {
  en: [
    { t: "Art. 57a", h: "Digital Security", d: "The Confederation determines security rules for all public and private actors in the Swiss digital space.", icon: Shield },
    { t: "Integrity", h: "Digital", d: "It guarantees the protection of personal data and the digital integrity of individuals.", icon: Database },
    { t: "Independence", h: "Strategic", d: "Infrastructures and services essential to the state remain independent of any foreign influence.", icon: Globe },
    { t: "Literacy", h: "Digital", d: "It encourages the development of data literacy and digital skills within society.", icon: Users },
    { t: "Anticipating", h: "Risks", d: "Maintain Switzerland among the most advanced and secure nations in the digital field.", icon: Shield }
  ],
  fr: [
    { t: "Art. 57a", h: "Sécurité Numérique", d: "La Confédération détermine les règles de sécurité pour tous les acteurs publics et privés dans l'espace numérique suisse.", icon: Shield },
    { t: "Intégrité", h: "Numérique", d: "Elle garantit la protection des données personnelles et l'intégrité numérique des personnes.", icon: Database },
    { t: "Indépendance", h: "Stratégique", d: "Les infrastructures et services essentiels à l'Etat restent indépendants de toute influence étrangère.", icon: Globe },
    { t: "Littératie", h: "Numérique", d: "Elle encourage le développement de la littératie des données et des compétences numériques au sein de la société.", icon: Users },
    { t: "Anticiper", h: "Les Risques", d: "Maintenir la Suisse parmi les nations les plus avancées et sûres dans le domaine numérique.", icon: Shield }
  ],
  de: [
    { t: "Art. 57a", h: "Digitale Sicherheit", d: "Der Bund bestimmt die Sicherheitsregeln für alle öffentlichen und privaten Akteure im digitalen Raum der Schweiz.", icon: Shield },
    { t: "Integrität", h: "Digital", d: "Er gewährleistet den Schutz personenbezogener Daten und die digitale Integrität der Personen.", icon: Database },
    { t: "Unabhängigkeit", h: "Strategisch", d: "Infrastrukturen und Dienste, die für den Staat essenziell sind, bleiben unabhängig von jeglichem ausländischen Einfluss.", icon: Globe },
    { t: "Kompetenz", h: "Digital", d: "Er fördert die Entwicklung der Datenkompetenz und der digitalen Fähigkeiten auf breiter Ebene.", icon: Users },
    { t: "Antizipieren", h: "von Risiken", d: "Die Schweiz unter den fortschrittlichsten und sichersten Nationen im digitalen Bereich halten.", icon: Shield }
  ],
  it: [
    { t: "Art. 57a", h: "Sicurezza Digitale", d: "La Confederazione determina le regole di sicurezza per tutti gli attori pubblici e privati nello spazio digitale svizzero.", icon: Shield },
    { t: "Integrità", h: "Digitale", d: "Garantisce la protezione dei dati personali e l'integrità digitale delle persone.", icon: Database },
    { t: "Indipendenza", h: "Strategica", d: "Le infrastrutture e i servizi essenziali per lo Stato rimangono indipendenti da qualsiasi influenza straniera.", icon: Globe },
    { t: "Alfabetizzazione", h: "Digitale", d: "Incoraggia lo sviluppo dell'alfabetizzazione dei dati e delle competenze digitali nell'ambito della popolazione.", icon: Users },
    { t: "Anticipare", h: "I Rischi", d: "Mantenere la Svizzera tra le nazioni più avanzate e sicure nel settore digitale.", icon: Shield }
  ]
};

const getScenes = (lang: string) => scenesData[lang as keyof typeof scenesData] || scenesData.fr;

const pillarsHeader = {
  en: {
    title1: "The 6",
    titlePillar: "pillars",
    title2: "of the initiative",
    desc: "Building a constitutional framework for an independent digital Switzerland.",
    boxTitle: "Strategic Autonomy",
    boxQuote: '"Switzerland must remain the global haven for sensitive data."'
  },
  fr: {
    title1: "Les 6",
    titlePillar: "piliers",
    title2: "de l'initiative",
    desc: "Construire un cadre constitutionnel pour une Suisse numérique indépendante.",
    boxTitle: "Autonomie Stratégique",
    boxQuote: '"La Suisse doit rester le havre mondial pour les données sensibles."'
  },
  de: {
    title1: "Die 6",
    titlePillar: "Pfeiler",
    title2: "der Initiative",
    desc: "Schaffung eines verfassungsrechtlichen Rahmens für eine unabhängige digitale Schweiz.",
    boxTitle: "Strategische Autonomie",
    boxQuote: '"Die Schweiz muss der weltweite Hafen für sensible Daten bleiben."'
  },
  it: {
    title1: "I 6",
    titlePillar: "pilastri",
    title2: "dell'iniziativa",
    desc: "Costruire un quadro costituzionale per una Svizzera digitale indipendente.",
    boxTitle: "Autonomia Strategica",
    boxQuote: '"La Svizzera deve rimanere il rifugio globale per i dati sensibili."'
  }
};

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
             className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-12"
           >
             <Magnetic>
               <Link href={`/${lang}/initiative`} className="swiss-button px-12 py-6 text-2xl font-black shadow-[0_0_80px_rgba(227,6,19,0.3)] group">
                 {dict.hero.cta.toUpperCase()} <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-smooth" />
               </Link>
             </Magnetic>
             <Magnetic>
               <Link href={`/${lang}/sign`} className="px-12 py-6 rounded-[2rem] font-black text-xl text-white border-2 border-white/20 hover:bg-white/10 hover:border-white transition-all backdrop-blur-xl">
                 {dict.hero.learn.toUpperCase()}
               </Link>
             </Magnetic>
           </motion.div>
        </div>
      </section>

      {/* Grid Features - High Professional Look */}
      <section className="container mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-10 items-end mb-10">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary dark:text-white leading-[1] mb-5">
                  {(pillarsHeader[lang as keyof typeof pillarsHeader] || pillarsHeader['fr']).title1} <span className="text-primary italic">{(pillarsHeader[lang as keyof typeof pillarsHeader] || pillarsHeader['fr']).titlePillar}</span> {(pillarsHeader[lang as keyof typeof pillarsHeader] || pillarsHeader['fr']).title2}
               </h2>
               <p className="text-base text-gray-400 max-w-2xl leading-relaxed font-bold italic">
                  {(pillarsHeader[lang as keyof typeof pillarsHeader] || pillarsHeader['fr']).desc}
               </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 p-5 bg-gray-50 dark:bg-zinc-900/50 rounded-[2rem] border border-gray-200 dark:border-white/5 group">
               <div className="flex items-center gap-3">
                  <Database className="w-7 h-7 text-primary" />
                  <h3 className="text-lg font-black uppercase tracking-tighter">{(pillarsHeader[lang as keyof typeof pillarsHeader] || pillarsHeader['fr']).boxTitle}</h3>
               </div>
               <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic">{(pillarsHeader[lang as keyof typeof pillarsHeader] || pillarsHeader['fr']).boxQuote}</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillers[lang]?.map((f, i) => (
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
                     {visionText[lang].watch}{" "}
                     <span className="text-primary italic">VISION</span>
                     </h2>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-white">
                     <div className="bg-black/40 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/10">
                     <p className="text-white/50 font-black text-[9px] uppercase tracking-[0.3em] mb-1">
                        {visionText[lang].authenticated}
                     </p>
                     <p className="text-white/90 font-black text-lg tracking-tighter">
                        {visionText[lang].foundation}
                     </p>
                     </div>

                     <span className="px-6 py-2.5 bg-primary rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl">
                     {visionText[lang].explore}
                     </span>
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
                        <div
                           key={i}
                           className={cn(
                           "h-1.5 transition-all duration-700 rounded-full",
                           visionScene === i
                              ? "w-20 bg-primary"
                              : "w-6 bg-white/10"
                           )}
                        />
                     ))}
                     </div>

                     <div className="flex items-center gap-6">
                     <p className="text-white/30 font-black text-[9px] tracking-[0.3em] uppercase">
                        {visionText[lang].pillar} {visionScene + 1} / {scenes.length}
                     </p>

                     <button
                        onClick={() =>
                           setVisionScene((prev) => (prev + 1) % scenes.length)
                        }
                        className="flex items-center gap-3 text-white font-black hover:text-primary transition-all uppercase tracking-[0.2em] text-[10px]"
                     >
                        {visionText[lang].next}
                        <ArrowRight className="w-5 h-5" />
                     </button>
                     </div>
                  </div>
               </motion.div>
               )}
            </AnimatePresence>
         </div>
      </section>

      <section className="container mx-auto px-6 py-12 text-center">
         <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary dark:text-white leading-[1] mb-6">
            {visionText[lang].title}
         </h2>

         <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto mb-10 italic">
            {visionText[lang].quote}
         </p>

         <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-black uppercase tracking-widest text-primary">
            {visionText[lang].words.map((word, i) => (
               <React.Fragment key={word}>
               <span>{word}</span>
               {i < visionText[lang].words.length - 1 && (
                  <span className="text-gray-300 dark:text-gray-700 mx-2">•</span>
               )}
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
               <span>{ctaText[lang].join}</span>
               <span className="italic underline decoration-dashed underline-offset-4">
                  {ctaText[lang].initiative}
               </span>
               </h2>

               <p className="text-white/80 text-base max-w-lg mx-auto font-bold leading-relaxed drop-shadow-md">
               {ctaText[lang].desc}
               </p>

               <div className="flex flex-col sm:flex-row gap-5 w-full justify-center mt-4">

               <Link
                  href={`/${lang}/sign`}
                  className="px-12 py-5 bg-white text-primary rounded-xl font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-xl"
               >
                  {ctaText[lang].sign}
               </Link>

               <Link
                  href={`/${lang}/support`}
                  className="px-12 py-5 border-2 border-white/20 hover:bg-white/10 rounded-xl font-black text-xl transition-all backdrop-blur-2xl"
               >
                  {ctaText[lang].support}
               </Link>

               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
