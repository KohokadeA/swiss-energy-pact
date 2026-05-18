'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Download, Users, Database, X, PlayCircle, Globe, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Magnetic from '@/components/Magnetic';
import ScrollReveal from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

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
    quote: 'We want a secure, sovereign, open, human, and ambitious Switzerland.',
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
    quote: 'Nous voulons une Suisse sûre, souveraine, ouverte, humaine et ambitieuse.',
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
    quote: 'Wir wollen eine sichere, souveräne, offene, menschliche und ambitionierte Schweiz.',
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
    quote: 'Vogliamo una Svizzera sicura, sovrana, aperta, umana e ambiziosa.',
    words: ["sicura", "sovrana", "aperta", "umana", "ambiziosa"]
  }
};

const ctaText = {
  en: {
    join: "SIGN TODAY",
    initiative: "THE SWISS DIGITAL PACT",
    desc: "Sign today the Swiss Digital Pact to enact digital sovereignty in the Swiss Federal Constitution.",
    sign: "SIGN THE FORM",
    support: "SUPPORT US"
  },
  fr: {
    join: "SIGNEZ AUJOURD'HUI",
    initiative: "LE PACTE NUMÉRIQUE SUISSE",
    desc: "Signez aujourd'hui le Pacte Numérique Suisse pour inscrire la souveraineté numérique dans la Constitution fédérale suisse.",
    sign: "SIGNER LE FORMULAIRE",
    support: "NOUS SOUTENIR"
  },
  de: {
    join: "UNTERZEICHNEN SIE HEUTE",
    initiative: "DEN SCHWEIZER DIGITALPAKT",
    desc: "Unterzeichnen Sie heute den Schweizer Digitalpakt, um die digitale Souveränität in der Schweizerischen Bundesverfassung zu verankern.",
    sign: "FORMULAR UNTERZEICHNEN",
    support: "UNTERSTÜTZEN SIE UNS"
  },
  it: {
    join: "FIRMA OGGI",
    initiative: "IL PATTO DIGITALE SVIZZERO",
    desc: "Firma oggi il Patto Digitale Svizzero per sancire la sovranità digitale nella Costituzione federale svizzera.",
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

const whyInitiativeText = {
  en: {
    title1: "Why this",
    titleHighlight: "initiative",
    para1: "Digital is at the heart of our daily lives. It affects our privacy, our health, our economy, and our national security.",
    para2: "As our dependence grows, so do the risks. Cyber threats are increasing, technological competition is intensifying, and key systems are becoming more exposed.",
    para3: "Switzerland must act with clarity and purpose: to protect what is essential, strengthen trust, and remain free in its choices. This initiative provides the foundation to do so—ensuring that our country stays secure, resilient, and in control of its digital future."
  },
  fr: {
    title1: "Pourquoi cette",
    titleHighlight: "initiative",
    para1: "Le numérique est au cœur de notre vie quotidienne. Il affecte notre vie privée, notre santé, notre économie et notre sécurité nationale.",
    para2: "A mesure que notre dépendance s'accroît, les risques augmentent également. Les cybermenaces se multiplient, la concurrence technologique s'intensifie et les systèmes clés sont de plus en plus exposés.",
    para3: "La Suisse doit agir avec clarté et détermination : protéger ce qui est essentiel, renforcer la confiance et rester libre de ses choix. Cette initiative en jette les bases, afin que notre pays reste sûr, résilient et maître de son avenir numérique."
  },
  de: {
    title1: "Warum diese",
    titleHighlight: "Initiative",
    para1: "Die Digitalisierung steht im Mittelpunkt unseres täglichen Lebens. Sie betrifft unsere Privatsphäre, unsere Gesundheit, unsere Wirtschaft und unsere nationale Sicherheit.",
    para2: "Mit unserer wachsenden Abhängigkeit steigen auch die Risiken. Cyberbedrohungen nehmen zu, der technologische Wettbewerb verschärft sich und wichtige Systeme sind zunehmend exponiert.",
    para3: "Die Schweiz muss klar und zielgerichtet handeln: das Wesentliche schützen, das Vertrauen stärken und in ihren Entscheidungen frei bleiben. Diese Initiative schafft die Grundlage dafür und stellt sicher, dass unser Land sicher, widerstandsfähig und Herr über seine digitale Zukunft bleibt."
  },
  it: {
    title1: "Perché questa",
    titleHighlight: "iniziativa",
    para1: "Il digitale è al centro della nostra vita quotidiana. Riguarda la nostra privacy, la nostra salute, la nostra economia e la nostra sicurezza nazionale.",
    para2: "Con la nostra crescente dipendenza aumentano anche i rischi. Le minacce informatiche sono in aumento, la concorrenza tecnologica si intensifica e i sistemi chiave sono sempre più esposti.",
    para3: "La Svizzera deve agire con chiarezza e determinazione: per proteggere ciò che è essenziale, rafforzare la fiducia e rimanere libera nelle sue scelte. Questa iniziativa fornisce le basi per farlo, assicurando che il nostro Paese rimanga sicuro, resiliente e padrone del proprio futuro digitale."
  }
};

const endorsementsList = [
  {
    name: "Gérald Vernez",
    picture: "endorsements/Gérald Vernez.png",
    title: "Founder of digiVolution Foundation, Former Chief Cyber Defense Swiss Federal Ministry of Defence",
    text: {
      en: "Data and the digital world are no longer mere conveniences. Mastering them and understanding our interests in order to protect them and benefit from their contributions is vital for our society, our democracy, and our companies. Without security, there is no sovereignty. And therefore, no freedom.",
      fr: "La donnée et le monde numérique ne sont plus de simples commodités. Les maîtriser, comprendre nos intérêts afin de les préserver et de bénéficier de leur apports est vital pour notre société, notre démocratie et nos entreprises. Sans sécurité, pas de souveraineté. Et donc pas de liberté.",
      de: "Daten und die digitale Welt sind längst mehr als nur Commodities. Sie zu beherrschen, unsere Interessen zu verstehen, um sie zu wahren und von ihren Vorteilen zu profitieren, ist für unsere Gesellschaft, unsere Demokratie und unsere Unternehmen von entscheidender Bedeutung. Ohne Sicherheit gibt es keine Souveränität. Und somit auch keine Freiheit.",
      it: "I dati e il mondo digitale non sono più semplici strumenti. Padroneggiarli, capire i nostri interessi per tutelarli e trarne vantaggio è fondamentale per la nostra società, la nostra democrazia e le nostre imprese. Senza sicurezza, non c'è sovranità. E quindi non c'è libertà."
    }
  },
  {
    name: "Daniel Fasel",
    picture: "endorsements/Daniel Fasel.png",
    title: "Founder & CEO of Navique",
    text: {
      en: "Switzerland has never relied on vast natural resources. Its strength has always been rooted in knowledge, quality, precision, and discipline. These are exactly the values we must carry into the digital age. We must prevent digitalization from remaining reserved for a digital elite and make it a fundamental asset for all citizens. Only then can Switzerland become a sovereign and globally leading digital nation.",
      fr: "La Suisse n’a jamais eu de grandes ressources naturelles. Sa force a toujours résidé dans le savoir, la qualité, la précision et la discipline. Ce sont précisément ces valeurs que nous devons transposer dans l’ère numérique. Nous devons empêcher que la numérisation reste réservée à une élite numérique et en faire un bien fondamental pour toutes les citoyennes et tous les citoyens. C’est ainsi seulement que la Suisse pourra devenir une nation numérique souveraine et de référence à l’échelle mondiale.",
      de: "Die Schweiz hatte nie grosse Rohstoffe. Ihre Stärke lag immer schon in Wissen, Qualität, Präzision und Disziplin. Genau diese Werte müssen wir ins digitale Zeitalter übertragen. Wir müssen verhindern, dass Digitalisierung einer digitalen Elite vorbehalten bleibt, und sie zu einem Grundgut für alle Bürgerinnen und Bürger machen. Nur so kann die Schweiz zu einer souveränen und weltweit führenden digitalen Nation werden.",
      it: "La Svizzera non ha mai avuto grandi risorse naturali. La sua forza è sempre stata il sapere, la qualità, la precisione e la disciplina. Sono proprio questi i valori che dobbiamo portare nell’era digitale. Dobbiamo impedire che la digitalizzazione resti riservata a un’élite digitale e farne un bene fondamentale per tutte le cittadine e tutti i cittadini. Solo così la Svizzera potrà diventare una nazione digitale sovrana e leader a livello mondiale."
    }
  },
  {
    name: "Diego Kuonen",
    picture: "endorsements/Diego Kuonen.png",
    title: "Professor at UNIGE and Founder & CEO at Statoo Consulting",
    text: {
      en: "We learned how to read and write. But we never learned data. That is exactly what this initiative aims to change: in future, the Confederation should promote data literacy across society. Because knowing how to deal with data is more important today than ever before. Those who do not understand data move through the digital world a bit like a tourist without a map.",
      fr: "Nous avons appris à lire et à écrire. Mais nous n’avons jamais appris à comprendre les données. C’est précisément ce que cette initiative veut changer : à l’avenir, la Confédération devra promouvoir la littératie des données au sein de la société. Car savoir utiliser les données est aujourd’hui plus important que jamais. Celui qui ne comprend pas les données avance dans le monde numérique un peu comme un touriste sans plan de ville.",
      de: "Wir haben Lesen und Schreiben gelernt. Aber wir haben nie Daten gelernt. Genau das soll sich ändern: Der Bund soll künftig die Datengrundbildung fördern. Denn zu wissen, wie man mit Daten umgeht, braucht es heute mehr denn je. Wer Daten nicht versteht, lebt digital ein bisschen wie ein Tourist ohne Stadtplan.",
      it: "Abbiamo imparato a leggere e a scrivere. Ma non abbiamo mai imparato a capire i dati. È proprio questo che questa iniziativa vuole cambiare: in futuro, la Confederazione dovrà promuovere l’alfabetizzazione ai dati nella società. Perché sapere come utilizzare i dati è oggi più importante che mai. Chi non comprende i dati si muove nel mondo digitale un po’ come un turista senza una cartina."
    }
  }
];

const endorsementsSectionTitle = {
  en: "They support the initiative",
  fr: "Ils soutiennent l'initiative",
  de: "Sie unterstützen die Initiative",
  it: "Sostengono l'iniziativa"
};

function EndorsementsSection({ lang }: { lang: Locale }) {
  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionTitle = endorsementsSectionTitle[lang as keyof typeof endorsementsSectionTitle] || endorsementsSectionTitle.fr;
  const [selectedEndorser, setSelectedEndorser] = useState<typeof endorsementsList[0] | null>(null);
  const len = endorsementsList.length;

  const goPrev = () => setIdx((idx - 1 + len) % len);
  const goNext = () => setIdx((idx + 1) % len);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setIdx(p => (p + 1) % len), 5000);
    return () => clearInterval(timer);
  }, [len, isPaused]);

  // Get 3 visible endorsers starting from idx, wrapping around
  const visible = [0, 1, 2].map(offset => endorsementsList[(idx + offset) % len]);

  return (
    <section className="w-full mx-auto px-2 sm:px-4 md:px-8 lg:px-12 pt-0 pb-2 overflow-hidden">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-secondary dark:text-white text-center mb-8">
          {sectionTitle}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div
          className="w-full max-w-[100rem] mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-40 p-2 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 shadow-xl hover:bg-primary hover:border-primary hover:text-white text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Previous endorsement"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-40 p-2 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 shadow-xl hover:bg-primary hover:border-primary hover:text-white text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Next endorsement"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* 3-card grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8"
          >
            {visible.map((e, vi) => (
              <div
                key={`${idx}-${vi}`}
                onClick={() => setSelectedEndorser(e)}
                className={cn(
                  "bg-white dark:bg-zinc-900 rounded-[1.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden flex flex-col cursor-pointer group/card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300",
                  vi === 1 && "hidden md:flex",
                  vi === 2 && "hidden lg:flex"
                )}
              >
                {/* Top row: Photo + Text side by side */}
                <div className="flex flex-row flex-1">
                  {/* Photo — left, full height */}
                  <div className="w-32 md:w-40 xl:w-48 flex-shrink-0 relative overflow-hidden bg-gray-100 dark:bg-zinc-800/50 border-r border-gray-100 dark:border-gray-800">
                    {e.picture ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={e.picture} alt={e.name} className="absolute inset-0 w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 dark:bg-zinc-700">
                        <span className="text-4xl font-black text-primary/20">{e.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Text — right */}
                  <div className="flex-1 p-5 min-w-0">
                    <Quote className="w-6 h-6 text-primary/20 mb-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium italic leading-relaxed">
                      {e.text[lang as keyof typeof e.text]}
                    </p>
                  </div>
                </div>

                {/* Name & title — bottom, full width */}
                <div className="px-5 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-zinc-800/10">
                  <p className="font-black text-secondary dark:text-white text-base">{e.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">{e.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
     </ScrollReveal>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {endorsementsList.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn("h-2 rounded-full transition-all", idx === i ? "w-8 bg-primary" : "w-2 bg-gray-200 dark:bg-gray-700")}
          />
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedEndorser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedEndorser(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(ev) => ev.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedEndorser(null)}
                className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 hover:bg-primary hover:border-primary hover:text-white text-gray-500 transition-all duration-300 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Photo — left */}
                <div className="md:w-[280px] lg:w-[320px] flex-shrink-0 relative">
                  <div className="aspect-[3/4] md:aspect-auto md:h-full w-full relative bg-gray-100 dark:bg-zinc-800 rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none overflow-hidden">
                    {selectedEndorser.picture ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={selectedEndorser.picture} alt={selectedEndorser.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-7xl font-black text-primary/20">{selectedEndorser.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content — right */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <Quote className="w-10 h-10 text-primary/15 mb-4" />
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-medium italic leading-relaxed">
                      &ldquo;{selectedEndorser.text[lang as keyof typeof selectedEndorser.text]}&rdquo;
                    </p>
                  </div>

                  {/* Name & title — bottom */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <p className="font-black text-secondary dark:text-white text-lg md:text-xl">{selectedEndorser.name}</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">{selectedEndorser.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

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
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-20 text-center animate-in fade-in zoom-in duration-1000">
           {/* Logo added above the title for a sober, institutional look */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex justify-center mb-6"
           >
             <div className="h-28 w-[22rem] md:h-36 md:w-[30rem] lg:h-40 lg:w-[36rem] relative overflow-hidden mx-auto">
                <Image
                  src="/swiss_digital_pact_logo_new.png"
                  alt="Swiss Digital Pact Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
             </div>
           </motion.div>

           <div className="flex justify-center mb-6">
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-4 text-gray-600 text-sm md:text-base lg:text-xl font-black tracking-[0.2em] uppercase"
             >
               <span className="flex h-3 w-3 rounded-full bg-primary animate-pulse" />
               <span>{dict.subtitle}</span>
             </motion.div>
           </div>

           <motion.h1
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-secondary mb-8 max-w-[90vw] xl:max-w-7xl mx-auto"
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
             className="text-base md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto mb-10 font-bold"
           >
             {dict.hero.description}
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2"
           >
             <Link href={`/${lang}/initiative`} className="swiss-button px-12 py-6 text-2xl font-black group inline-flex items-center justify-center gap-2">
               {dict.hero.cta.toUpperCase()} <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-smooth" />
             </Link>
             <Link href={`/${lang}/sign`} className="px-12 py-6 rounded-[2rem] font-black text-xl text-secondary border-2 border-secondary/40 hover:bg-primary hover:text-white hover:border-primary transition-all hover:shadow-lg active:scale-95 duration-300">
               {dict.hero.learn.toUpperCase()}
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Why This Initiative - Premium Text Section */}
      <section className="container mx-auto px-6 py-4 md:py-6">
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-secondary dark:text-white leading-[1.05]">
              {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).title1}{' '}
              <span className="text-primary italic">
                {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).titleHighlight}
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/30" />
          </div>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300/90 leading-[1.9] md:leading-[2] font-medium mb-4">
            {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para1}
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300/90 leading-[1.9] md:leading-[2] font-medium mb-4">
            {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para2}
          </p>

          {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para3 && (
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300/90 leading-[1.9] md:leading-[2] font-medium">
              {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para3}
            </p>
          )}
        </ScrollReveal>
      </section>

      {/* The Vision Movie - REFINED SCALE & PREMIUM */}
      <section className="container mx-auto px-6">
        <ScrollReveal>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-[2rem] overflow-hidden group shadow-xl bg-gray-100 border border-gray-200">
            <AnimatePresence mode="wait">
               {!isVisionPlaying ? (
               <motion.div
                  key="poster"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full cursor-pointer bg-gray-100"
                  onClick={() => setIsVisionPlaying(true)}
               >
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <div className="p-10 bg-white rounded-full group-hover:scale-110 transition-all duration-500 group-hover:bg-primary shadow-lg border border-gray-200 mb-8">
                     <PlayCircle className="w-20 h-20 text-secondary group-hover:text-white" />
                     </div>

                     <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase tracking-tighter">
                     {visionText[lang].watch}{" "}
                     <span className="text-primary italic">VISION</span>
                     </h2>
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


               </motion.div>
               )}
            </AnimatePresence>
         </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-6 pt-2 pb-0 text-center">
        <ScrollReveal>
         <h2 className="text-3xl md:text-4xl font-black tracking-tight text-secondary dark:text-white leading-[1] mb-2">
            {visionText[lang].title}
         </h2>

         <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto mb-2 italic">
            {visionText[lang].quote}
         </p>
        </ScrollReveal>
      </section>

      <EndorsementsSection lang={lang} />

      {/* Partners Section */}
      <section className="container mx-auto px-6 py-6">
       <ScrollReveal>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-secondary dark:text-white mb-4">
            {lang === 'fr' ? 'Partenaires' : lang === 'de' ? 'Partner' : lang === 'it' ? 'Partner' : 'Partners'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            {lang === 'fr' ? "Une coalition solide engagée pour la souveraineté numérique de la Suisse" :
             lang === 'de' ? "Eine starke Koalition für die digitale Souveränität der Schweiz" :
             lang === 'it' ? "Una coalizione forte impegnata per la sovranità digitale della Svizzera" :
             "A strong coalition committed to Switzerland's digital sovereignty"}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Swiss Cyber Defense Group", logo: "/partners/logo1.png" },
            { name: "Helvetia Data Systems", logo: "/partners/logo2.png" },
            { name: "Alpine Secure Cloud", logo: "/partners/logo3.png" },
            { name: "Geneva Privacy Trust", logo: "/partners/logo4.png" },
            { name: "Zürich Tech Alliance", logo: "/partners/logo5.png" },
            { name: "Digital Future Foundation", logo: "/partners/logo6.png" },
            { name: "Swiss IT Coalition", logo: "/partners/logo1.png" },
            { name: "Romandie Cyber", logo: "/partners/logo2.png" },
            { name: "National Privacy Network", logo: "/partners/logo3.png" },
            { name: "Swiss Institute of Tech", logo: "/partners/logo4.png" },
            { name: "Bern Data Science Lab", logo: "/partners/logo5.png" },
            { name: "Lausanne Crypto Hub", logo: "/partners/logo6.png" },
            { name: "Cyber Policy Institute", logo: "/partners/logo1.png" },
          ].map((partner, i) => (
            <div key={i} className="group relative flex items-center justify-center">
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none z-20">
                <div className="bg-white text-secondary px-5 py-2.5 rounded-xl shadow-2xl whitespace-nowrap border border-gray-200">
                  <span className="text-xs font-bold tracking-wide">{partner.name}</span>
                </div>
                <div className="w-2.5 h-2.5 bg-white rotate-45 mx-auto -mt-1.5 border-r border-b border-gray-200" />
              </div>

              <div className="w-full h-32 flex items-center justify-center transition-all duration-500 p-2 group-hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain mix-blend-multiply dark:invert dark:mix-blend-screen scale-110 group-hover:scale-125 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
       </ScrollReveal>
      </section>

      {/* FINAL CTA - Refined Scale & High-End Block */}
      <section className="container mx-auto px-6 mb-8">
       <ScrollReveal>
         <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] text-secondary flex flex-col items-center text-center relative overflow-hidden shadow-sm border border-gray-200 group max-w-5xl mx-auto">

            <div className="relative z-10 flex flex-col gap-5 items-center">

               <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
               <Download className="w-7 h-7 text-primary" />
               </div>

               <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-[1.1] max-w-3xl mx-auto mb-2 text-secondary">
               {ctaText[lang].desc}
               </h2>

               <div className="flex flex-col sm:flex-row gap-5 w-full justify-center mt-4">

               <Link
                  href={`/${lang}/sign`}
                  className="px-12 py-5 bg-primary text-white rounded-xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-sm"
               >
                  {ctaText[lang].sign}
               </Link>

               <Link
                  href={`/${lang}/support`}
                  className="px-12 py-5 border-2 border-secondary/20 hover:bg-secondary hover:text-white rounded-xl font-black text-xl transition-all text-secondary"
               >
                  {ctaText[lang].support}
               </Link>

               </div>
            </div>
         </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
