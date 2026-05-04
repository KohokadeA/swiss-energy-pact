'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowRight, Download, Users, Database, X, PlayCircle, Globe, Quote } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Magnetic from '@/components/Magnetic';
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

const endorsementsData = {
  en: {
    sectionTitle: "They support the initiative",
    endorsements: [
      { name: "Dr. Anna Meier", title: "Digital Policy Expert", picture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", text: "This initiative is a vital step for our digital future. It protects critical infrastructures from foreign influence and secures our fundamental privacy rights, ensuring Switzerland remains resilient and fully independent." },
      { name: "Marco Bernasconi", title: "IT Entrepreneur, Zürich", picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", text: "This initiative is essential for economic resilience. By establishing clear rules to safeguard our autonomy, it fosters local innovation and ensures Switzerland confidently leads by example in global digital sovereignty." },
      { name: "Prof. Sophie Durand", title: "University of Lausanne", picture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200", text: "This initiative provides a robust framework to counter cyber threats. It empowers citizens through digital literacy and effectively protects our society in an increasingly complex and interconnected digital world." },
      { name: "Lukas Weber", title: "Cybersecurity Analyst, Bern", picture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200", text: "Protecting our digital borders is as critical as our physical ones. This initiative provides the constitutional mandate needed to ensure our national security networks remain invulnerable to external digital threats." },
      { name: "Elena Rossi", title: "Data Privacy Advocate", picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200", text: "Our personal data is our most valuable digital asset. This initiative ensures that the right to digital integrity is firmly protected, setting a gold standard for citizen privacy in our deeply interconnected era." },
      { name: "Dr. Thomas Keller", title: "Energy Systems Engineer", picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", text: "Modern society runs on digital infrastructure. By securing these critical networks at the constitutional level, this initiative guarantees the uninterrupted functioning of our energy, transport, and financial sectors." },
      { name: "Isabelle Blanc", title: "Tech Education Lead", picture: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200", text: "A sovereign digital nation requires an educated public. This pact emphasizes the critical need for comprehensive digital literacy, empowering every citizen to navigate the technological landscape safely and confidently." },
    ]
  },
  fr: {
    sectionTitle: "Ils soutiennent l'initiative",
    endorsements: [
      { name: "Dr. Anna Meier", title: "Experte en politique numérique", picture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", text: "Cette initiative est une étape vitale pour notre avenir numérique. Elle protège les infrastructures critiques de l'influence étrangère et sécurise nos droits fondamentaux, garantissant la résilience de la Suisse." },
      { name: "Marco Bernasconi", title: "Entrepreneur IT, Zurich", picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", text: "Cette initiative est essentielle à la résilience économique. En établissant des règles claires, elle favorise l'innovation locale et assure que la Suisse montre l'exemple en souveraineté numérique." },
      { name: "Prof. Sophie Durand", title: "Université de Lausanne", picture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200", text: "Cette initiative fournit un cadre solide pour contrer les cybermenaces. Elle autonomise les citoyens grâce à la littératie numérique et protège efficacement notre société dans un monde numérique de plus en plus complexe." },
      { name: "Lukas Weber", title: "Analyste en cybersécurité, Berne", picture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200", text: "Protéger nos frontières numériques est aussi critique que nos frontières physiques. Cette initiative fournit le mandat constitutionnel nécessaire pour assurer l'invulnérabilité de nos réseaux de sécurité nationale." },
      { name: "Elena Rossi", title: "Défenseure de la vie privée", picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200", text: "Nos données personnelles sont notre atout numérique le plus précieux. Cette initiative garantit que le droit à l'intégrité numérique est fermement protégé, établissant une norme d'excellence pour la vie privée." },
      { name: "Dr. Thomas Keller", title: "Ingénieur en systèmes énergétiques", picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", text: "La société moderne repose sur l'infrastructure numérique. En sécurisant ces réseaux critiques au niveau constitutionnel, cette initiative garantit le fonctionnement ininterrompu de nos secteurs clés." },
      { name: "Isabelle Blanc", title: "Responsable de l'éducation technologique", picture: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200", text: "Une nation numérique souveraine exige un public éduqué. Ce pacte souligne le besoin critique d'une littératie numérique complète, permettant à chaque citoyen de naviguer dans le paysage technologique en toute sécurité." },
    ]
  },
  de: {
    sectionTitle: "Sie unterstützen die Initiative",
    endorsements: [
      { name: "Dr. Anna Meier", title: "Expertin für Digitalpolitik", picture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", text: "Diese Initiative ist ein wichtiger Schritt für unsere digitale Zukunft. Sie schützt kritische Infrastrukturen vor ausländischem Einfluss und sichert unsere grundlegenden Datenschutzrechte, damit die Schweiz widerstandsfähig bleibt." },
      { name: "Marco Bernasconi", title: "IT-Unternehmer, Zürich", picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", text: "Diese Initiative ist wichtig für die wirtschaftliche Resilienz. Indem sie klare Regeln aufstellt, fördert sie lokale Innovationen und stellt sicher, dass die Schweiz in der digitalen Souveränität mit gutem Beispiel vorangeht." },
      { name: "Prof. Sophie Durand", title: "Universität Lausanne", picture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200", text: "Diese Initiative bietet einen soliden Rahmen zur Abwehr von Cyberbedrohungen. Sie stärkt die Bürger durch digitale Kompetenz und schützt unsere Gesellschaft effektiv in einer zunehmend vernetzten digitalen Welt." },
      { name: "Lukas Weber", title: "Cybersicherheitsanalyst, Bern", picture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200", text: "Der Schutz unserer digitalen Grenzen ist so wichtig wie der unserer physischen. Diese Initiative bietet das verfassungsmäßige Mandat, um sicherzustellen, dass unsere nationalen Sicherheitsnetzwerke unverwundbar bleiben." },
      { name: "Elena Rossi", title: "Verfechterin des Datenschutzes", picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200", text: "Unsere persönlichen Daten sind unser wertvollstes digitales Gut. Diese Initiative stellt sicher, dass das Recht auf digitale Integrität fest geschützt wird und setzt einen Goldstandard für die Privatsphäre." },
      { name: "Dr. Thomas Keller", title: "Ingenieur für Energiesysteme", picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", text: "Die moderne Gesellschaft beruht auf digitaler Infrastruktur. Durch die Absicherung dieser kritischen Netzwerke auf Verfassungsebene garantiert diese Initiative das ununterbrochene Funktionieren unserer Schlüsselsektoren." },
      { name: "Isabelle Blanc", title: "Leiterin für Technologiebildung", picture: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200", text: "Eine souveräne digitale Nation erfordert eine gebildete Öffentlichkeit. Dieser Pakt betont die kritische Notwendigkeit umfassender digitaler Kompetenz und befähigt jeden Bürger, sich sicher in der Technologielandschaft zu bewegen." },
    ]
  },
  it: {
    sectionTitle: "Sostengono l'iniziativa",
    endorsements: [
      { name: "Dr. Anna Meier", title: "Esperta di politica digitale", picture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", text: "Questa iniziativa è un passo vitale per il nostro futuro digitale. Protegge le infrastrutture critiche dall'influenza straniera e garantisce i nostri diritti fondamentali, assicurando che la Svizzera resti resiliente." },
      { name: "Marco Bernasconi", title: "Imprenditore IT, Zurigo", picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", text: "Questa iniziativa è essenziale per la resilienza economica. Stabilendo regole chiare, promuove l'innovazione locale e assicura che la Svizzera dia l'esempio nella sovranità digitale a livello globale." },
      { name: "Prof. Sophie Durand", title: "Università di Losanna", picture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200", text: "Questa iniziativa fornisce un solido quadro per contrastare le minacce informatiche. Dà potere ai cittadini attraverso l'alfabetizzazione digitale e protegge efficacemente la nostra società in un mondo sempre più complesso." },
      { name: "Lukas Weber", title: "Analista di sicurezza informatica, Berna", picture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200", text: "Proteggere i nostri confini digitali è critico quanto quelli fisici. Questa iniziativa fornisce il mandato costituzionale necessario per garantire che le nostre reti di sicurezza nazionale restino invulnerabili." },
      { name: "Elena Rossi", title: "Sostenitrice della privacy dei dati", picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200", text: "I nostri dati personali sono la nostra risorsa digitale più preziosa. Questa iniziativa assicura che il diritto all'integrità digitale sia fermamente protetto, stabilendo uno standard d'eccellenza per la privacy." },
      { name: "Dr. Thomas Keller", title: "Ingegnere di sistemi energetici", picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", text: "La società moderna si basa sull'infrastruttura digitale. Assicurando queste reti critiche a livello costituzionale, questa iniziativa garantisce il funzionamento ininterrotto dei nostri settori chiave." },
      { name: "Isabelle Blanc", title: "Responsabile dell'istruzione tecnologica", picture: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200&h=200", text: "Una nazione digitale sovrana richiede un pubblico istruito. Questo patto sottolinea la necessità critica di un'alfabetizzazione digitale completa, consentendo a ogni cittadino di navigare con sicurezza nel panorama tecnologico." },
    ]
  }
};

function EndorsementsSection({ lang }: { lang: Locale }) {
  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const data = endorsementsData[lang] || endorsementsData.fr;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setIdx(p => (p + 1) % data.endorsements.length), 5000);
    return () => clearInterval(timer);
  }, [data.endorsements.length, isPaused]);

  return (
    <section className="container mx-auto px-6 py-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-secondary dark:text-white text-center mb-16">
        {data.sectionTitle}
      </h2>
      <div
        className="max-w-7xl mx-auto relative h-[500px] md:h-[450px] lg:h-[400px] cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {data.endorsements.map((e, i) => {
          const len = data.endorsements.length;

          let diff = i - idx;
          if (diff < -len / 2) diff += len;
          if (diff > len / 2) diff -= len;

          const isVisible = Math.abs(diff) <= 1;

          const xPos = diff === 0 ? "0%" : diff === -1 ? "-105%" : diff === 1 ? "105%" : diff < -1 ? "-200%" : "200%";
          const scale = diff === 0 ? 1 : 0.95;
          const opacity = isVisible ? (diff === 0 ? 1 : 0.7) : 0;
          const zIndex = diff === 0 ? 30 : isVisible ? 10 : 0;

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: xPos,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={cn(
                "absolute top-0 left-0 right-0 mx-auto w-full max-w-[320px] lg:max-w-[380px] bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-2xl text-center",
                !isVisible && "pointer-events-none"
              )}
              onClick={() => {
                if (diff === -1) setIdx((idx - 1 + len) % len);
                if (diff === 1) setIdx((idx + 1) % len);
              }}
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-8 left-10" />
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.1)] relative z-10">
                {e.picture ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={e.picture} alt={e.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-black text-primary">{e.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium italic mb-6 leading-relaxed">"{e.text}"</p>
              <p className="font-black text-secondary dark:text-white text-base md:text-lg">{e.name}</p>
              <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">{e.title}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {data.endorsements.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={cn("h-2 rounded-full transition-all", idx === i ? "w-8 bg-primary" : "w-2 bg-gray-200 dark:bg-gray-700")}
          />
        ))}
      </div>
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
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-16 pb-6">
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

        <div className="container mx-auto px-4 lg:px-6 relative z-20 text-center animate-in fade-in zoom-in duration-1000">
           {/* Logo added above the title for a sober, institutional look */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex justify-center mb-2"
           >
             <div className="h-32 w-[250px] md:h-40 md:w-[350px] lg:h-[200px] lg:w-[450px] relative overflow-hidden">
                <Image
                  src="/swiss_digital_pact_logo.png"
                  alt="Swiss Digital Pact Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
             </div>
           </motion.div>

           <div className="flex justify-center mb-3">
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-4 text-white text-sm md:text-base lg:text-xl font-black tracking-[0.2em] uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
             >
               <span className="flex h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(227,6,19,1)] animate-pulse" />
               <span>{dict.subtitle}</span>
             </motion.div>
           </div>

           <motion.h1
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="text-4xl md:text-5xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] text-white mb-4 drop-shadow-2xl max-w-[90vw] xl:max-w-7xl mx-auto"
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
             className="text-base md:text-xl text-white/90 leading-relaxed max-w-5xl mx-auto mb-6 font-bold drop-shadow-xl"
           >
             {dict.hero.description}
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4"
           >
             <Link href={`/${lang}/initiative`} className="swiss-button px-12 py-6 text-2xl font-black shadow-[0_0_80px_rgba(227,6,19,0.3)] group inline-flex items-center justify-center gap-2">
               {dict.hero.cta.toUpperCase()} <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-smooth" />
             </Link>
             <Link href={`/${lang}/sign`} className="px-12 py-6 rounded-[2rem] font-black text-xl text-white border-2 border-white/40 hover:bg-white hover:text-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95 duration-300">
               {dict.hero.learn.toUpperCase()}
             </Link>
           </motion.div>
        </div>
      </section>

      {/* Why This Initiative - Premium Text Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-secondary dark:text-white leading-[1.05]">
              {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).title1}{' '}
              <span className="text-primary italic">
                {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).titleHighlight}
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/30" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-300/90 leading-[1.9] md:leading-[2] font-medium mb-10"
          >
            {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-300/90 leading-[1.9] md:leading-[2] font-medium mb-10"
          >
            {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para2}
          </motion.p>

          {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para3 && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-300/90 leading-[1.9] md:leading-[2] font-medium"
            >
              {(whyInitiativeText[lang as keyof typeof whyInitiativeText] || whyInitiativeText['fr']).para3}
            </motion.p>
          )}
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


      </section>

      {/* Rotating Endorsements */}
      <EndorsementsSection lang={lang} />

      {/* FINAL CTA - Refined Scale & High-End Block */}
      <section className="container mx-auto px-6 mb-8">
         <div className="bg-primary p-10 lg:p-14 rounded-[2.5rem] text-white flex flex-col items-center text-center relative overflow-hidden shadow-xl shadow-primary/20 group max-w-5xl mx-auto">

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-[0.02] rounded-full -mr-32 -mt-32 blur-3xl transition-all duration-1000 group-hover:scale-110" />

            <div className="relative z-10 flex flex-col gap-5 items-center">

               <div className="p-4 bg-white/10 rounded-xl backdrop-blur-3xl border border-white/20 shadow-xl">
               <Download className="w-7 h-7" />
               </div>

               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] max-w-3xl mx-auto drop-shadow-md mb-2">
               {ctaText[lang].desc}
               </h2>

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
