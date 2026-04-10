'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Database, Network, Lock, UserCheck, Globe } from 'lucide-react';
import Image from 'next/image';

export default function VideoPage({ params: { lang = 'fr' } }: { params: { lang?: string } }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = {
    en: [
        {
          title: "The Digital Age",
          subtitle: "A New Frontier for Switzerland",
          text: "Switzerland relies on digital systems for state, economy, and society. Our critical infrastructure must remain secure.",
          icon: Globe,
        },
        {
          title: "Art. 57a",
          subtitle: "Digital Security in the Constitution",
          text: "The Confederation determines security rules for all public and private actors in Switzerland's digital space.",
          icon: Shield,
        },
        {
          title: "Protect & Support",
          subtitle: "Infrastructure Resilience",
          text: "It protects its data and digital infrastructure and provides subsidiary support to operators of critical infrastructures.",
          icon: Network,
        },
        {
          title: "Digital Integrity",
          subtitle: "Protecting Citizens",
          text: "It guarantees the protection of personal data and the digital integrity of all individuals.",
          icon: UserCheck,
        },
        {
          title: "Sovereignty",
          subtitle: "Independence Guaranteed",
          text: "Our digital and informational infrastructure remains independent from any influence contrary to its interests.",
          icon: Lock,
        },
        {
          title: "Data Literacy",
          subtitle: "Empowering Society",
          text: "It encourages the development of data literacy and digital skills within society.",
          icon: Database,
        }
    ],
    fr: [
        {
          title: "L'Ère Numérique",
          subtitle: "Une Nouvelle Frontière pour la Suisse",
          text: "La Suisse dépend des systèmes numériques pour l'État, l'économie et la société. Nos infrastructures critiques doivent rester sûres.",
          icon: Globe,
        },
        {
          title: "Art. 57a",
          subtitle: "La Sécurité Numérique dans la Constitution",
          text: "La Confédération détermine les règles de sécurité pour tous les acteurs publics et privés dans l'espace numérique suisse.",
          icon: Shield,
        },
        {
          title: "Protéger & Soutenir",
          subtitle: "Résilience des Infrastructures",
          text: "Elle protège ses données et son infrastructure numérique et apporte un soutien subsidiaire aux opérateurs d'infrastructures critiques.",
          icon: Network,
        },
        {
          title: "Intégrité Numérique",
          subtitle: "Protéger les Citoyens",
          text: "Elle garantit la protection des données personnelles et l'intégrité numérique de tous les individus.",
          icon: UserCheck,
        },
        {
          title: "Souveraineté",
          subtitle: "Indépendance Garantie",
          text: "Notre infrastructure numérique et informationnelle reste indépendante de toute influence contraire à ses intérêts.",
          icon: Lock,
        },
        {
          title: "Littératie des Données",
          subtitle: "Renforcer la Société",
          text: "Elle encourage le développement de la littératie des données et des compétences numériques au sein de la société.",
          icon: Database,
        }
    ],
    de: [
        {
          title: "Das digitale Zeitalter",
          subtitle: "Eine neue Grenze für die Schweiz",
          text: "Die Schweiz ist für Staat, Wirtschaft und Gesellschaft auf digitale Systeme angewiesen. Unsere kritischen Infrastrukturen müssen sicher bleiben.",
          icon: Globe,
        },
        {
          title: "Art. 57a",
          subtitle: "Digitale Sicherheit in der Verfassung",
          text: "Der Bund bestimmt die Sicherheitsregeln für alle öffentlichen und privaten Akteure im digitalen Raum der Schweiz.",
          icon: Shield,
        },
        {
          title: "Schützen & Unterstützen",
          subtitle: "Resilienz der Infrastrukturen",
          text: "Er schützt seine Daten und digitalen Infrastrukturen und unterstützt subsidiär die Betreiber kritischer Infrastrukturen.",
          icon: Network,
        },
        {
          title: "Digitale Integrität",
          subtitle: "Schutz der Bürger",
          text: "Er gewährleistet den Schutz personenbezogener Daten und die digitale Integrität aller Personen.",
          icon: UserCheck,
        },
        {
          title: "Souveränität",
          subtitle: "Garantierte Unabhängigkeit",
          text: "Unsere digitale und informationelle Infrastruktur bleibt von Einflüssen unabhängig, die unseren Interessen zuwiderlaufen.",
          icon: Lock,
        },
        {
          title: "Datenkompetenz",
          subtitle: "Stärkung der Gesellschaft",
          text: "Er fördert die Entwicklung der Datenkompetenz und der digitalen Fähigkeiten auf breiter Ebene.",
          icon: Database,
        }
    ],
    it: [
        {
          title: "L'era digitale",
          subtitle: "Una nuova frontiera per la Svizzera",
          text: "La Svizzera dipende dai sistemi digitali per lo Stato, l'economia e la società. Le nostre infrastrutture critiche devono rimanere sicure.",
          icon: Globe,
        },
        {
          title: "Art. 57a",
          subtitle: "La sicurezza digitale nella Costituzione",
          text: "La Confederazione determina le regole di sicurezza per tutti gli attori pubblici e privati nello spazio digitale svizzero.",
          icon: Shield,
        },
        {
          title: "Proteggere e Sostenere",
          subtitle: "Resilienza delle infrastrutture",
          text: "Protegge i propri dati e le proprie infrastrutture digitali e sostiene in via sussidiaria gli operatori delle infrastrutture critiche.",
          icon: Network,
        },
        {
          title: "Integrità Digitale",
          subtitle: "Proteggere i cittadini",
          text: "Garantisce la protezione dei dati personali e l'integrità digitale di tutti gli individui.",
          icon: UserCheck,
        },
        {
          title: "Sovranità",
          subtitle: "Indipendenza Garantita",
          text: "La nostra infrastruttura digitale e informazionale rimane indipendente da qualsiasi influenza contraria ai propri interessi.",
          icon: Lock,
        },
        {
          title: "Alfabetizzazione dei Dati",
          subtitle: "Responsabilizzare la società",
          text: "Incoraggia lo sviluppo dell'alfabetizzazione dei dati e delle competenze digitali nell'ambito della popolazione.",
          icon: Database,
        }
    ]
  };

  const slides = slidesData[lang as keyof typeof slidesData] || slidesData['fr'];

  const pactText = {
      en: { title: "SWISS DIGITAL PACT", sub: "Federal Initiative" },
      fr: { title: "PACTE NUMÉRIQUE SUISSE", sub: "Initiative Fédérale" },
      de: { title: "SCHWEIZER DIGITAL-PAKT", sub: "Eidgenössische Initiative" },
      it: { title: "PATTO DIGITALE SVIZZERO", sub: "Iniziativa Federale" }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center font-sans tracking-tight">
      <div className="absolute inset-0 z-0">
        <Image
          src="/swiss_digital_pact_hero_v5.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center brightness-[0.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-10 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 5, 0] }}
              transition={{ duration: 1, delay: 0.3 }}
              className="p-8 bg-[#e30613]/20 rounded-full border border-[#e30613]/40 shadow-[0_0_60px_rgba(227,6,19,0.4)] mb-8"
            >
              {React.createElement(slides[currentSlide].icon, { className: "w-24 h-24 text-[#e30613]" })}
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#e30613] tracking-[0.3em] uppercase mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8 drop-shadow-2xl"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-2xl md:text-4xl text-white/80 font-semibold leading-relaxed max-w-4xl"
            >
              {slides[currentSlide].text}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-10 right-10 flex gap-4 z-20">
        {slides.map((_, i) => (
          <div key={i} className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
            {i === currentSlide && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-[#e30613]"
              />
            )}
            {i < currentSlide && <div className="h-full w-full bg-[#e30613]/50" />}
          </div>
        ))}
      </div>

      <div className="absolute top-10 left-10 z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#e30613] rounded-lg flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-white font-black text-xl leading-none">{(pactText[lang as keyof typeof pactText] || pactText['fr']).title}</p>
            <p className="text-white/50 font-bold text-xs uppercase tracking-widest mt-1">{(pactText[lang as keyof typeof pactText] || pactText['fr']).sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
