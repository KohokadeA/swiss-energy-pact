'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldAlert, Fingerprint, Lock, Server, Cpu, Globe2, FileText, ChevronRight, Landmark, Link as LinkIcon, ArrowRight, ShieldCheck, Database, Scale, Network, Target, Users } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function InitiativePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const articleText = {
    fr: `"Art. 57a : Pour la sécurité numérique de la Suisse\n1 La Confédération détermine les règles de sécurité pour tous les acteurs publics et privés dans l’espace numérique de la Suisse et en assure l’application.\n2 Elle protège ses données et ses infrastructures numériques et soutient subsidiairement les opérateurs d’infrastructures critiques.\n3 Elle garantit la protection des données personnelles et l’intégrité numérique des personnes.\n4 Elle garantit que les infrastructures, les services et les ressources numériques et informationnelles essentiels pour l’État, l’économie et la société soient en toute circonstance indépendants de toute influence contraire à ses intérêts.\n5 Elle encourage le développement de la littératie des données et des compétences numériques de la société.\n6 Elle prend, en coordination avec les acteurs académiques et économiques, des dispositions permettant d’anticiper les risques et les opportunités et ainsi de maintenir la Suisse parmi les nations les plus avancées et sûres dans le domaine numérique."`,
    en: `"Art. 57a: For the digital security of Switzerland\n1 The Confederation determines the security rules for all public and private actors in the Swiss digital space and ensures their application.\n2 It protects its data and digital infrastructures and subsidiarily supports the operators of critical infrastructures.\n3 It guarantees the protection of personal data and the digital integrity of individuals.\n4 It ensures that the infrastructures, services, and digital and informational resources essential for the State, the economy, and society remain in all circumstances independent of any influence contrary to its interests.\n5 It encourages the development of data literacy and digital skills in society.\n6 In coordination with academic and economic actors, it takes measures to anticipate risks and opportunities, thereby keeping Switzerland among the most advanced and secure nations in the digital field."`,
    de: `"Art. 57a: Für die digitale Sicherheit der Schweiz\n1 Der Bund bestimmt die Sicherheitsregeln für alle öffentlichen und privaten Akteure im digitalen Raum der Schweiz und sorgt für deren Durchsetzung.\n2 Er schützt seine Daten und digitalen Infrastrukturen und unterstützt subsidiär die Betreiber kritischer Infrastrukturen.\n3 Er gewährleistet den Schutz personenbezogener Daten und die digitale Integrität der Personen.\n4 Er stellt sicher, dass die für Staat, Wirtschaft und Gesellschaft wesentlichen Infrastrukturen, Dienste, digitalen und informationellen Ressourcen unter allen Umständen unabhängig von Einflüssen bleiben, die seinen Interessen zuwiderlaufen.\n5 Er fördert die Entwicklung der Datenkompetenz und der digitalen Fähigkeiten in der Gesellschaft.\n6 Er ergreift in Abstimmung mit akademischen und wirtschaftlichen Akteuren Massnahmen, um Risiken und Chancen vorauszusehen und die Schweiz so unter den fortschrittlichsten und sichersten Nationen im digitalen Bereich zu halten."`,
    it: `"Art. 57a: Per la sicurezza digitale della Svizzera\n1 La Confederazione determina le regole di sicurezza per tutti gli attori pubblici e privati nello spazio digitale svizzero e ne garantisce l'applicazione.\n2 Protegge i propri dati e le proprie infrastrutture digitali e sostiene in via sussidiaria gli operatori delle infrastrutture critiche.\n3 Garantisce la protezione dei dati personali e l'integrità digitale delle persone.\n4 Assicura che le infrastrutture, i servizi e le risorse digitali e informazionali essenziali per lo Stato, l'economia e la società siano in ogni circostanza indipendenti da qualsiasi influenza contraria ai propri interessi.\n5 Incoraggia lo sviluppo dell'alfabetizzazione dei dati e delle competenze digitali nella società.\n6 Adotta, in coordinamento con gli attori accademici ed economici, disposizioni che consentono di anticipare i rischi e le opportunità, mantenendo così la Svizzera tra le nazioni più avanzate e sicure nel settore digitale."`
  };

  const structuralText = {
    en: {
      title: "Pillars of the initiative",
      items: [
        { t: "Security", d: "Clear rules to protect the Swiss digital space." },
        { t: "Infrastructure", d: "What keeps the country standing must be protected as such." },
        { t: "Data and people", d: "Protecting data means protecting people." },
        { t: "Sovereignty", d: "Open to the world, but never outside ourselves." },
        { t: "Skills", d: "Digital freedom is built through understanding." },
        { t: "Anticipation", d: "Invent here, develop here, make Switzerland shine." }
      ]
    },

    fr: {
      title: "Les piliers de l'initiative",
      items: [
        { t: "Sécurité", d: "Des règles claires pour protéger l'espace numérique suisse." },
        { t: "Infrastructures", d: "Ce qui fait tenir le pays doit être protégé comme tel." },
        { t: "Données et personnes", d: "Protéger les données, c'est protéger les personnes." },
        { t: "Souveraineté", d: "Ouverts au monde, mais jamais hors de nous-mêmes." },
        { t: "Compétences", d: "La liberté numérique se construit par la compréhension." },
        { t: "Anticipation", d: "Inventer ici, développer ici, faire rayonner la Suisse." }
      ]
    },

    de: {
      title: "Die Pfeiler der Initiative",
      items: [
        { t: "Sicherheit", d: "Klare Regeln zum Schutz des digitalen Raums der Schweiz." },
        { t: "Infrastrukturen", d: "Was das Land trägt, muss entsprechend geschützt werden." },
        { t: "Daten und Menschen", d: "Daten zu schützen heißt, Menschen zu schützen." },
        { t: "Souveränität", d: "Offen für die Welt, aber niemals außerhalb unserer selbst." },
        { t: "Kompetenzen", d: "Digitale Freiheit entsteht durch Verständnis." },
        { t: "Voraussicht", d: "Hier erfinden, hier entwickeln, die Schweiz strahlen lassen." }
      ]
    },

    it: {
      title: "I pilastri dell'iniziativa",
      items: [
        { t: "Sicurezza", d: "Regole chiare per proteggere lo spazio digitale svizzero." },
        { t: "Infrastrutture", d: "Ciò che sostiene il Paese deve essere protetto come tale." },
        { t: "Dati e persone", d: "Proteggere i dati significa proteggere le persone." },
        { t: "Sovranità", d: "Aperti al mondo, ma mai fuori da noi stessi." },
        { t: "Competenze", d: "La libertà digitale si costruisce attraverso la comprensione." },
        { t: "Anticipazione", d: "Inventare qui, sviluppare qui, far risplendere la Svizzera." }
      ]
    }
  };

  const impactTitle = {
    en: "Impact",
    fr: "Impact",
    de: "Auswirkung",
    it: "Impatto"
  };

  const longPillarsText = {
    en: {
      items: [
        { t: "Security", d: "Switzerland must set clear cybersecurity rules for public institutions, critical sectors, and private actors operating in its digital space. Trust, resilience, and responsibility require common standards that are effectively enforced." },
        { t: "Infrastructure Protection", d: "Our energy networks, hospitals, transport systems, telecoms, and public services rely on digital infrastructure. These essential systems must be protected against disruption, sabotage, and external dependence." },
        { t: "Data Protection & Digital Integrity", d: "Personal data concerns privacy, identity, and dignity. Switzerland must guarantee strong data protection and defend every person against misuse, manipulation, unauthorized surveillance, and attacks on digital integrity." },
        { t: "Sovereignty", d: "Switzerland should remain open to cooperation while ensuring that essential digital services, infrastructures, and strategic resources stay free from any influence contrary to our national interests." },
        { t: "Literacy and Skills", d: "Digital freedom depends on understanding. Switzerland must strengthen digital education, practical skills, and data literacy across all generations so that everyone can navigate the digital world with confidence." },
        { t: "Anticipation and Collaboration", d: "Technological change moves quickly. Switzerland must anticipate risks, seize opportunities, and work with universities, researchers, startups, and industry to remain among the world's most advanced and secure nations." }
      ]
    },
    fr: {
      items: [
        { t: "Sécurité", d: "La Suisse doit fixer des règles claires de cybersécurité pour les institutions publiques, les secteurs critiques et les acteurs privés opérant dans son espace numérique. La confiance, la résilience et la responsabilité exigent des normes communes efficacement appliquées." },
        { t: "Protection des infrastructures", d: "Nos réseaux énergétiques, hôpitaux, systèmes de transport, télécommunications et services publics reposent sur l'infrastructure numérique. Ces systèmes essentiels doivent être protégés contre les perturbations, les sabotages et la dépendance extérieure." },
        { t: "Protection des données et intégrité", d: "Les données personnelles concernent la vie privée, l'identité et la dignité. La Suisse doit garantir une protection solide des données et défendre chaque personne contre les abus, les manipulations, la surveillance non autorisée et les atteintes à l'intégrité numérique." },
        { t: "Souveraineté", d: "La Suisse doit rester ouverte à la coopération tout en s'assurant que les services numériques essentiels, les infrastructures et les ressources stratégiques restent libres de toute influence contraire à nos intérêts nationaux." },
        { t: "Littératie et compétences", d: "La liberté numérique dépend de la compréhension. La Suisse doit renforcer l'éducation numérique, les compétences pratiques et la culture des données à travers toutes les générations pour que chacun puisse naviguer dans le monde numérique avec confiance." },
        { t: "Anticipation et collaboration", d: "Les changements technologiques sont rapides. La Suisse doit anticiper les risques, saisir les opportunités et collaborer avec les universités, les chercheurs, les startups et l'industrie pour rester parmi les nations les plus avancées et les plus sûres au monde." }
      ]
    },
    de: {
      items: [
        { t: "Sicherheit", d: "Die Schweiz muss klare Cybersicherheitsregeln für öffentliche Institutionen, kritische Sektoren und private Akteure in ihrem digitalen Raum festlegen. Vertrauen, Resilienz und Verantwortung erfordern gemeinsame, wirksam durchgesetzte Standards." },
        { t: "Schutz der Infrastrukturen", d: "Unsere Energienetze, Spitäler, Verkehrssysteme, Telekommunikation und öffentlichen Dienste sind auf digitale Infrastrukturen angewiesen. Diese essenziellen Systeme müssen vor Störungen, Sabotage und externer Abhängigkeit geschützt werden." },
        { t: "Datenschutz und digitale Integrität", d: "Personenbezogene Daten betreffen Privatsphäre, Identität und Würde. Die Schweiz muss einen starken Datenschutz gewährleisten und jede Person vor Missbrauch, Manipulation, unbefugter Überwachung und Angriffen auf die digitale Integrität schützen." },
        { t: "Souveränität", d: "Die Schweiz sollte offen für Zusammenarbeit bleiben und gleichzeitig sicherstellen, dass wesentliche digitale Dienste, Infrastrukturen und strategische Ressourcen frei von Einflüssen bleiben, die unseren nationalen Interessen zuwiderlaufen." },
        { t: "Bildung und Kompetenzen", d: "Digitale Freiheit hängt vom Verständnis ab. Die Schweiz muss die digitale Bildung, praktische Fähigkeiten und Datenkompetenz über alle Generationen hinweg stärken, damit sich jeder selbstbewusst in der digitalen Welt bewegen kann." },
        { t: "Antizipation und Zusammenarbeit", d: "Der technologische Wandel vollzieht sich schnell. Die Schweiz muss Risiken antizipieren, Chancen nutzen und mit Universitäten, Forschern, Start-ups und der Industrie zusammenarbeiten, um zu den fortschrittlichsten und sichersten Nationen der Welt zu gehören." }
      ]
    },
    it: {
      items: [
        { t: "Sicurezza", d: "La Svizzera deve stabilire chiare regole di cybersicurezza per le istituzioni pubbliche, i settori critici e gli attori privati che operano nel suo spazio digitale. La fiducia, la resilienza e la responsabilità richiedono standard comuni applicati efficacemente." },
        { t: "Protezione delle infrastrutture", d: "Le nostre reti energetiche, gli ospedali, i sistemi di trasporto, le telecomunicazioni e i servizi pubblici si basano su infrastrutture digitali. Questi sistemi essenziali devono essere protetti da interruzioni, sabotaggi e dipendenza esterna." },
        { t: "Protezione dei dati e integrità", d: "I dati personali riguardano la privacy, l'identità e la dignità. La Svizzera deve garantire una solida protezione dei dati e difendere ogni persona da abusi, manipolazioni, sorveglianza non autorizzata e attacchi all'integrità digitale." },
        { t: "Sovranità", d: "La Svizzera deve rimanere aperta alla cooperazione garantendo al contempo che i servizi digitali essenziali, le infrastrutture e le risorse strategiche restino liberi da qualsiasi influenza contraria ai nostri interessi nazionali." },
        { t: "Alfabetizzazione e competenze", d: "La libertà digitale dipende dalla comprensione. La Svizzera deve rafforzare l'educazione digitale, le competenze pratiche e l'alfabetizzazione dei dati in tutte le generazioni affinché tutti possano navigare nel mondo digitale con fiducia." },
        { t: "Anticipazione e collaborazione", d: "Il cambiamento tecnologico è rapido. La Svizzera deve anticipare i rischi, cogliere le opportunità e collaborare con università, ricercatori, startup e industria per rimanere tra le nazioni più avanzate e sicure al mondo." }
      ]
    }
  };

  const whyText = {
    en: {
      title1: "Why this",
      title2: "initiative",
      para1: "Digital is no longer a subject reserved for specialists. It now affects everyone\u2019s privacy, our families, our health, our national security and the quality of government services. It also underpins our energy systems, transportation, finance, and the functioning of our economy. Switzerland must therefore set a clear course: protect what matters, remain free in its choices, and prepare for its future.",
      para2: "Switzerland relies increasingly on digital systems. Cyber threats are rising, technological competition is accelerating, and digital innovation is reshaping our lives. Our country needs a clear constitutional foundation to safeguard its autonomy, strengthen its resilience, foster innovation, and remain master of its own future.",
      boxTitle: "A Swiss Line",
      points: [
        "Not against the world.",
        "For a strong Switzerland in the world.",
        "Not a sovereignty of closure.",
        "A sovereignty of mastery."
      ],
      cta: "Download the form"
    },

    fr: {
      title1: "Pourquoi cette",
      title2: "initiative",
      para1: "Le numérique n\u2019est plus un sujet réservé aux spécialistes. Il touche désormais la vie privée de chacun, nos familles, notre santé, notre sécurité nationale et la qualité des services publics. Il sous-tend aussi nos systèmes énergétiques, nos transports, nos finances et le fonctionnement de notre économie. La Suisse doit donc se donner un cap clair\u00a0: protéger ce qui compte, rester libre dans ses choix et préparer son avenir.",
      para2: "La Suisse dépend de plus en plus de systèmes numériques. Les cybermenaces augmentent, la compétition technologique s\u2019accélère et l\u2019innovation numérique transforme nos vies. Notre pays a besoin d\u2019une base constitutionnelle claire pour préserver son autonomie, renforcer sa résilience, favoriser l\u2019innovation et rester maître de son propre avenir.",
      boxTitle: "Une ligne suisse",
      points: [
        "Pas contre le monde.",
        "Pour une Suisse forte dans le monde.",
        "Pas une souveraineté de fermeture.",
        "Une souveraineté de maîtrise."
      ],
      cta: "Télécharger le formulaire"
    },

    de: {
      title1: "Warum diese",
      title2: "Initiative",
      para1: "Digitalisierung ist längst kein Thema mehr nur für Fachleute. Sie betrifft heute die Privatsphäre aller, unsere Familien, unsere Gesundheit, unsere nationale Sicherheit und die Qualität öffentlicher Dienste. Sie trägt auch unsere Energiesysteme, den Verkehr, die Finanzen und das Funktionieren unserer Wirtschaft. Die Schweiz muss daher einen klaren Kurs setzen: schützen, was zählt, frei in ihren Entscheidungen bleiben und sich auf ihre Zukunft vorbereiten.",
      para2: "Die Schweiz ist zunehmend auf digitale Systeme angewiesen. Cyberbedrohungen nehmen zu, der technologische Wettbewerb beschleunigt sich und digitale Innovation verändert unser Leben. Unser Land braucht eine klare verfassungsrechtliche Grundlage, um seine Autonomie zu sichern, seine Resilienz zu stärken, Innovation zu fördern und Herr seiner eigenen Zukunft zu bleiben.",
      boxTitle: "Eine Schweizer Linie",
      points: [
        "Nicht gegen die Welt.",
        "Für eine starke Schweiz in der Welt.",
        "Keine Souveränität der Abschottung.",
        "Eine Souveränität der Kontrolle."
      ],
      cta: "Formular herunterladen"
    },

    it: {
      title1: "Perché questa",
      title2: "iniziativa",
      para1: "Il digitale non è più un argomento riservato agli specialisti. Oggi riguarda la privacy di tutti, le nostre famiglie, la nostra salute, la nostra sicurezza nazionale e la qualità dei servizi pubblici. Sostiene inoltre i nostri sistemi energetici, i trasporti, la finanza e il funzionamento della nostra economia. La Svizzera deve quindi tracciare una rotta chiara: proteggere ciò che conta, restare libera nelle proprie scelte e preparare il proprio futuro.",
      para2: "La Svizzera dipende sempre più dai sistemi digitali. Le minacce informatiche sono in aumento, la competizione tecnologica accelera e l\u2019innovazione digitale sta trasformando le nostre vite. Il nostro Paese ha bisogno di una chiara base costituzionale per salvaguardare la propria autonomia, rafforzare la propria resilienza, promuovere l\u2019innovazione e restare padrone del proprio futuro.",
      boxTitle: "Una linea svizzera",
      points: [
        "Non contro il mondo.",
        "Per una Svizzera forte nel mondo.",
        "Non una sovranità di chiusura.",
        "Una sovranità di controllo."
      ],
      cta: "Scaricare il modulo"
    }
  };

  const articleTitle = {
    en: "The Constitutional Article",
    fr: "L'article Constitutionnel",
    de: "Der Verfassungsartikel",
    it: "L'articolo Costituzionale"
  };

  const disclaimerText = {
    en: '"The French text is the submitted reference text. Other language versions will be aligned with official translations."',
    fr: '"Le texte français est le texte de référence déposé. Les autres versions linguistiques seront alignées sur les traductions officielles."',
    de: '"Der französische Text ist der eingereichte Referenztext. Andere Sprachversionen werden an die offiziellen Übersetzungen angeglichen."',
    it: '"Il testo francese è il testo di riferimento depositato. Le altre versioni linguistiche saranno allineate alle traduzioni ufficiali."'
  };

  const proposalText = {
    en: "Constitutional Proposal v1.0",
    fr: "Proposition Constitutionnelle v1.0",
    de: "Verfassungsvorschlag v1.0",
    it: "Proposta Costituzionale v1.0"
  };

  const downloadText = {
    en: "Download full text",
    fr: "Télécharger le texte intégral",
    de: "Vollständigen Text herunterladen",
    it: "Scarica il testo integrale"
  };

  const wantsTitleText = {
    en: "What this initiative wants",
    fr: "Ce que cette initiative veut",
    de: "Was diese Initiative will",
    it: "Cosa vuole questa iniziativa"
  };

  const futureText = {
    en: "This initiative gives Switzerland a clear course for the years to come. ",
    fr: "Cette initiative donne à la Suisse un cap clair pour les années à venir. ",
    de: "Diese Initiative gibt der Schweiz einen klaren Kurs für die kommenden Jahre. ",
    it: "Questa iniziativa dà alla Svizzera una rotta chiara per gli anni a venire. "
  };

  const anchorText = {
    en: "Help anchor it in the constitution.",
    fr: "Aidez à l’ancrer dans la Constitution.",
    de: "Helfen Sie, sie in der Verfassung zu verankern.",
    it: "Aiutate ad ancorarla nella Costituzione."
  };

  const signCtaText = {
    en: "Sign the initiative now",
    fr: "Signer l'initiative maintenant",
    de: "Initiative jetzt unterzeichnen",
    it: "Firma l'iniziativa ora"
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-16 max-w-7xl overflow-hidden min-h-screen">
      {/* Premium Banner Header */}
      <header className="mb-20 relative text-center lg:text-left flex flex-col lg:flex-row gap-16 items-end">
        <div className="flex-1 animate-in slide-in-from-left duration-1000">

          <h1 className="text-6xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter">
            {whyText[lang].title1}{" "}
            <span className="text-primary italic">
              {whyText[lang].title2}
            </span>
          </h1>

          <div className="space-y-6 text-xl text-gray-400 dark:text-gray-500 max-w-3xl leading-relaxed font-medium">
             <p>{whyText[lang].para1}</p>
             <p>{whyText[lang].para2}</p>
          </div>

        </div>

        <div className="lg:w-1/3 p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-[3rem] flex flex-col gap-6 shadow-2xl relative animate-in slide-in-from-right duration-1000 delay-300 overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-all duration-1000" />
          <div className="absolute inset-0 bg-white/40 dark:bg-black/20 backdrop-blur-xl z-0" />
          <div className="relative z-10 flex flex-col gap-6">
            <ShieldCheck className="w-12 h-12 text-primary group-hover:scale-110 transition-all" />
            <h2 className="text-2xl font-black text-secondary dark:text-white leading-tight">
              {whyText[lang].boxTitle}
            </h2>
            <ul className="text-gray-600 dark:text-white/80 text-sm leading-relaxed font-medium list-disc list-inside space-y-2">
              {whyText[lang].points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <Link
              href={`/${lang}/sign`}
              className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all mt-4"
            >
              {whyText[lang].cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Grid of Content Sections */}
      <div className="relative mb-32 flex flex-col gap-8">
        <section className="flex flex-col gap-8 p-10 rounded-[3rem] bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group">
            <Target className="w-7 h-7 group-hover:rotate-12 transition-all" />
          </div>
          <h2 className="text-3xl font-black tracking-tight">
            {impactTitle[lang]}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="p-8 rounded-3xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-black mb-4 flex items-center gap-2"><Landmark className="text-primary w-5 h-5"/> Confederation</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{dict.pactDetails.s3.confederation}</p>
             </div>
             <div className="p-8 rounded-3xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-black mb-4 flex items-center gap-2"><Fingerprint className="text-primary w-5 h-5"/> Population</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{dict.pactDetails.s3.population}</p>
             </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight">
              {structuralText[lang].title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {longPillarsText[lang].items.map((item, idx) => {
                 const Icon = [ShieldCheck, Landmark, Database, Globe2, Users, Network][idx];
                 return (
                   <div key={idx} className="flex flex-col gap-4 p-8 rounded-3xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 group">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                           <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-black text-secondary dark:text-white uppercase tracking-wider">{item.t}</h3>
                     </div>
                     <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                        {item.d}
                     </p>
                   </div>
                 );
              })}
            </div>
          </div>
        </section>
      </div>

      <section className="mb-24 p-12 lg:p-20 bg-secondary dark:bg-zinc-900 rounded-[4rem] text-white overflow-hidden relative group shadow-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full translate-x-20 -translate-y-20 group-hover:scale-150 transition-all duration-1000" />
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 transition-all">
            <Scale className="w-12 h-12 text-primary" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
               Why a Constitutional Basis?
            </h2>
            <p className="text-white/60 text-xl font-medium leading-relaxed max-w-4xl">
              Unlike temporary laws, the Constitution defines long-term responsibilities independent of political cycles. It provides maximum legal certainty and a clear signal to national and international partners about Switzerland's digital sovereignty.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center gap-8 mb-16">
        <section className="w-full flex flex-col gap-8 p-10 rounded-[3rem] bg-secondary dark:bg-black/40 text-white transition-all shadow-xl hover:shadow-2xl border-t-4 border-primary">
          <div className="w-14 h-14 bg-white/10 text-primary rounded-2xl flex items-center justify-center group text-center mx-auto">
            <Scale className="w-7 h-7 group-hover:scale-110 transition-all" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-center">{articleTitle[lang]}</h2>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 font-serif italic text-xl leading-relaxed text-gray-300 shadow-inner whitespace-pre-wrap">
             {articleText[lang].replace(/^"|"$/g, '').split('\n').map((line, idx) => (
               <div
                 key={idx}
                 onMouseEnter={() => idx > 0 && setHoveredPoint(idx - 1)}
                 onMouseLeave={() => setHoveredPoint(null)}
                 className={cn(
                   "transition-all duration-500 rounded-xl px-4 py-2 -mx-4",
                   idx > 0 ? "cursor-help" : "mb-4 text-white not-italic font-black border-b border-white/5 pb-4",
                   hoveredPoint === idx - 1 ? "text-primary bg-white/5 translate-x-4" : "opacity-80 hover:opacity-100"
                 )}
               >
                 {line}
               </div>
             ))}
          </div>
          <div className="text-center mt-2">
            <p className="text-gray-400 text-xs italic">
              {disclaimerText[lang]}
            </p>
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
             <span className="text-[10px] uppercase font-black tracking-widest text-primary">{proposalText[lang]}</span>
             <Link href="#" className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/40 hover:text-white transition-all">{downloadText[lang]} <LinkIcon className="w-3 h-3"/></Link>
          </div>
        </section>
      </div>

      {/* Process Section */}
      {/* <section className="mb-24 p-12 bg-white dark:bg-zinc-900 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-20 translate-x-20 rounded-full" />
          <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
            <ChevronRight className="w-10 h-10 text-primary" /> {dict.pactDetails.s7.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
             <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-100 dark:bg-gray-800 hidden md:block" />
             {dict.pactDetails.s7.steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="w-6 h-6 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center mb-6 ring-8 ring-white dark:ring-zinc-900">
                      {idx + 1}
                   </div>
                   <h3 className="text-sm font-black mb-2 px-2">{step}</h3>
                </div>
             ))}
          </div>
      </section> */}

      {/* Visual Pillars Section - Changed to Technical Sub-themes */}
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] text-center mb-8">
        {wantsTitleText[lang]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-10 rounded-[3.5rem] group overflow-hidden relative">
         <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-all duration-1000 -z-10" />

         {(lang === 'en' ? [
           { icon: Fingerprint, t: "Protect the people", d: "" },
           { icon: Landmark, t: "Strengthen the country", d: "" },
           { icon: Globe2, t: "Prepare the future", d: "" }
         ] : lang === 'de' ? [
           { icon: Fingerprint, t: "Die Menschen schützen", d: "" },
           { icon: Landmark, t: "Das Land stärken", d: "" },
           { icon: Globe2, t: "Die Zukunft vorbereiten", d: "" }
         ] : lang === 'it' ? [
           { icon: Fingerprint, t: "Proteggere le persone", d: "" },
           { icon: Landmark, t: "Rafforzare il Paese", d: "" },
           { icon: Globe2, t: "Preparare il futuro", d: "" }
         ] : [
           { icon: Fingerprint, t: "Protéger les personnes", d: "" },
           { icon: Landmark, t: "Renforcer le pays", d: "" },
           { icon: Globe2, t: "Préparer l'avenir", d: "" }
         ]).map((p, i) => (
           <div key={i} className="flex flex-col gap-4 text-center items-center py-2 px-4 border-r border-gray-200 dark:border-gray-800 last:border-0 border-dashed">
              <div className="w-10 h-10 text-primary group-hover:scale-125 transition-all duration-500"><p.icon className="w-full h-full" /></div>
              <h3 className="text-xl font-black text-secondary dark:text-white">{p.t}</h3>
           </div>
         ))}
      </div>

      <div className="mt-16 text-center p-16 bg-white dark:bg-black/40 rounded-[4rem] border-4 border-gray-100 dark:border-gray-900 shadow-2xl hover:border-primary transition-all duration-1000 group">
        <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tight leading-tight max-w-2xl mx-auto">
          {futureText[lang]}
          <span className="text-primary italic">{anchorText[lang]}</span>
        </h3>
        <Link href={`/${lang}/sign`} className="swiss-button mx-auto inline-flex items-center gap-4 py-4 px-12 text-xl font-black hover:scale-110 active:scale-95 group shadow-[0_0_80px_rgba(227,6,19,0.2)]">
           {signCtaText[lang]} <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth"/>
        </Link>
      </div>
    </div>
  );
}

