'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldAlert, Fingerprint, Lock, Server, Cpu, Globe2, FileText, ChevronRight, Landmark, Link as LinkIcon, ArrowRight, ShieldCheck, Database, Scale, Network, Target, Users, X, User } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ScrollReveal';

export default function InitiativePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'committee' | 'statuts' | 'join' | null>(null);

  const getCommitteeMembers = (lang: Locale) => [
    { name: "Gérald Vernez", role: lang === 'fr' ? "Président" : lang === 'de' ? "Präsident" : lang === 'it' ? "Presidente" : "President", initials: "GV" },
    { name: "Diego Kuonen", role: lang === 'fr' ? "Vice-Président" : lang === 'de' ? "Vizepräsident" : lang === 'it' ? "Vicepresidente" : "Vice-President", initials: "DK" },
    { name: "Daniel Fasel", role: lang === 'fr' ? "Vice-Président" : lang === 'de' ? "Vizepräsident" : lang === 'it' ? "Vicepresidente" : "Vice-President", initials: "DF" },
    { name: "Reiny Schnyder", role: lang === 'fr' ? "Responsable Communication" : lang === 'de' ? "Kommunikationsmanager" : lang === 'it' ? "Responsabile Comunicazione" : "Communication Manager", initials: "RS" },
    { name: "Massimo Rodella", role: lang === 'fr' ? "Secrétaire général" : lang === 'de' ? "Generalsekretär" : lang === 'it' ? "Segretario Generale" : "Secretary-General", initials: "MR" },
    { name: "Alexandre Dimitrijevic", role: lang === 'fr' ? "Membre du comité d'initiative" : lang === 'de' ? "Mitglied des Initiativkomitees" : lang === 'it' ? "Membro del comitato d'iniziativa" : "Member of the initiative committee", initials: "AD" },
  ];
  const committeeMembers = getCommitteeMembers(lang);

  const assocDict = {
    en: {
      membersLabel: "Members of the initiative:",
      assocTitle: "The Swiss Digital Pact Association",
      assocDesc: "The Association supports the federal popular initiative “For Switzerland’s digital security,” which aims to strengthen the country’s digital security, sovereignty, and resilience.",
      btnCommittee: "Committee",
      btnStatuts: "Statuts",
      btnJoin: "Join as a member",
      committeeTitle: "Committee of the association",
      committeeDesc: "The dedicated team driving the initiative forward.",
      statutsTitle: "Statuts",
      statutsDesc: "The statuts will be provided shortly.",
      joinTitle: "Join as a member",
      joinDesc1: "Become an official part of the association and directly support the Swiss Digital Pact's mission to secure our digital future.",
      joinDesc2: "Membership is subject to an annual fee, which helps fund our activities, public engagement, and the advancement of the initiative.",
      students: "Students / reduced",
      individuals: "Individuals",
      organizations: "Organizations",
      apply: "Apply Now"
    },
    fr: {
      membersLabel: "Membres de l'initiative :",
      assocTitle: "L'Association Swiss Digital Pact",
      assocDesc: "L'Association soutient l'initiative populaire fédérale « Pour la sécurité numérique de la Suisse », qui vise à renforcer la sécurité, la souveraineté et la résilience numériques du pays.",
      btnCommittee: "Comité",
      btnStatuts: "Statuts",
      btnJoin: "Devenir membre",
      committeeTitle: "Comité de l'association",
      committeeDesc: "L'équipe dévouée qui fait avancer l'initiative.",
      statutsTitle: "Statuts",
      statutsDesc: "Les statuts seront fournis prochainement.",
      joinTitle: "Devenir membre",
      joinDesc1: "Devenez officiellement membre de l'association et soutenez directement la mission du Swiss Digital Pact pour sécuriser notre avenir numérique.",
      joinDesc2: "L'adhésion est soumise à une cotisation annuelle, qui permet de financer nos activités, notre engagement public et l'avancement de l'initiative.",
      students: "Étudiants / réduit",
      individuals: "Individus",
      organizations: "Organisations",
      apply: "Postuler maintenant"
    },
    de: {
      membersLabel: "Mitglieder der Initiative:",
      assocTitle: "Der Verein Swiss Digital Pact",
      assocDesc: "Der Verein unterstützt die eidgenössische Volksinitiative „Für die digitale Sicherheit der Schweiz“, die darauf abzielt, die digitale Sicherheit, Souveränität und Widerstandsfähigkeit des Landes zu stärken.",
      btnCommittee: "Komitee",
      btnStatuts: "Statuten",
      btnJoin: "Mitglied werden",
      committeeTitle: "Ausschuss des Vereins",
      committeeDesc: "Das engagierte Team, das die Initiative vorantreibt.",
      statutsTitle: "Statuten",
      statutsDesc: "Die Statuten werden in Kürze zur Verfügung gestellt.",
      joinTitle: "Mitglied werden",
      joinDesc1: "Werden Sie offiziell Teil des Vereins und unterstützen Sie direkt die Mission des Swiss Digital Pact, unsere digitale Zukunft zu sichern.",
      joinDesc2: "Die Mitgliedschaft ist mit einem Jahresbeitrag verbunden, der unsere Aktivitäten, unser öffentliches Engagement und die Förderung der Initiative finanziert.",
      students: "Studierende / ermäßigt",
      individuals: "Einzelpersonen",
      organizations: "Organisationen",
      apply: "Jetzt bewerben"
    },
    it: {
      membersLabel: "Membri dell'iniziativa:",
      assocTitle: "L'Associazione Swiss Digital Pact",
      assocDesc: "L'Associazione sostiene l'iniziativa popolare federale “Per la sicurezza digitale della Svizzera”, che mira a rafforzare la sicurezza digitale, la sovranità e la resilienza del Paese.",
      btnCommittee: "Comitato",
      btnStatuts: "Statuti",
      btnJoin: "Diventa membro",
      committeeTitle: "Comitato dell'associazione",
      committeeDesc: "Il team dedicato che porta avanti l'iniziativa.",
      statutsTitle: "Statuti",
      statutsDesc: "Gli statuti saranno forniti a breve.",
      joinTitle: "Diventa membro",
      joinDesc1: "Diventa ufficialmente parte dell'associazione e sostieni direttamente la missione del Swiss Digital Pact per garantire il nostro futuro digitale.",
      joinDesc2: "L'adesione è soggetta a una quota annuale, che contribuisce a finanziare le nostre attività, l'impegno pubblico e l'avanzamento dell'iniziativa.",
      students: "Studenti / ridotto",
      individuals: "Individui",
      organizations: "Organizzazioni",
      apply: "Candidati ora"
    }
  };

  const articleText = {
    fr: `"Art. 57a : Pour la sécurité numérique de la Suisse\n1 La Confédération détermine les règles de sécurité pour tous les acteurs publics et privés dans l’espace numérique de la Suisse et en assure l’application.\n2 Elle protège ses données et ses infrastructures numériques et soutient subsidiairement les opérateurs d’infrastructures critiques.\n3 Elle garantit la protection des données personnelles et l’intégrité numérique des personnes.\n4 Elle garantit que les infrastructures, les services et les ressources numériques et informationnelles essentiels pour l’État, l’économie et la société soient en toute circonstance indépendants de toute influence contraire à ses intérêts.\n5 Elle encourage le développement de la littératie des données et des compétences numériques de la société.\n6 Elle prend, en coordination avec les acteurs académiques et économiques, des dispositions permettant d’anticiper les risques et les opportunités et ainsi de maintenir la Suisse parmi les nations les plus avancées et sûres dans le domaine numérique."`,
    en: `"Art. 57a: For the digital security of Switzerland\n1 The Confederation determines the security rules for all public and private actors in the Swiss digital space and ensures their application.\n2 It protects its data and digital infrastructures and subsidiarily supports the operators of critical infrastructures.\n3 It guarantees the protection of personal data and the digital integrity of individuals.\n4 It ensures that the infrastructures, services, and digital and informational resources essential for the State, the economy, and society remain in all circumstances independent of any influence contrary to its interests.\n5 It encourages the development of data literacy and digital skills in society.\n6 In coordination with academic and economic actors, it takes measures to anticipate risks and opportunities, thereby keeping Switzerland among the most advanced and secure nations in the digital field."`,
    de: `"Art. 57a: Für die digitale Sicherheit der Schweiz\n1 Der Bund bestimmt die Sicherheitsregeln für alle öffentlichen und privaten Akteure im digitalen Raum der Schweiz und sorgt für deren Durchsetzung.\n2 Er schützt seine Daten und digitalen Infrastrukturen und unterstützt subsidiär die Betreiber kritischer Infrastrukturen.\n3 Er gewährleistet den Schutz personenbezogener Daten und die digitale Integrität der Personen.\n4 Er stellt sicher, dass die für Staat, Wirtschaft und Gesellschaft wesentlichen Infrastrukturen, Dienste, digitalen und informationellen Ressourcen unter allen Umständen unabhängig von Einflüssen bleiben, die seinen Interessen zuwiderlaufen.\n5 Er fördert die Entwicklung der Datenkompetenz und der digitalen Fähigkeiten in der Gesellschaft.\n6 Er ergreift in Abstimmung mit akademischen und wirtschaftlichen Akteuren Massnahmen, um Risiken und Chancen vorauszusehen und die Schweiz so unter den fortschrittlichsten und sichersten Nationen im digitalen Bereich zu halten."`,
    it: `"Art. 57a: Per la sicurezza digitale della Svizzera\n1 La Confederazione determina le regole di sicurezza pour tutti gli attori pubblici e privati nello spazio digitale svizzero e ne garantisce l'applicazione.\n2 Protegge i propri dati e le proprie infrastrutture digitali e sostiene in via sussidiaria gli operatori delle infrastrutture critiche.\n3 Garantisce la protezione dei dati personali e l'integrità digitale delle persone.\n4 Assicura che le infrastrutture, i servizi e le risorse digitali e informazionali essenziali per lo Stato, l'economia e la società siano in ogni circostanza indipendenti da qualsiasi influenza contraria ai propri interessi.\n5 Incoraggia lo sviluppo dell'alfabetizzazione dei dati e delle competenze digitali nella società.\n6 Adotta, in coordinamento con gli attori accademici ed economici, disposizioni che consentono di anticipare i rischi e le opportunità, mantenendo così la Svizzera tra le nazioni più avanzate e sicure nel settore digitale."`
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


  const longPillarsText = {
    en: {
      items: [
        { t: "SECURITY", d: "In every critical domain, clear rules are the norm—the digital space should be no exception. Switzerland must define and enforce minimum cybersecurity standards to protect institutions, businesses, and the population. Without credible and applied rules, there is no lasting trust or security." },
        { t: "INFRASTRUCTURE", d: "Switzerland depends on digital infrastructures that are essential to daily life. When they fail, everything stops. Their protection must be treated as a core mission, with clear responsibilities and the ability to act collectively when needed." },
        { t: "DATA & PEOPLE", d: "Personal data is an extension of the individual. Protecting it means protecting fundamental rights, dignity, and freedom. Switzerland must go beyond basic safeguards to ensure true digital integrity and protect people against misuse and loss of control." },
        { t: "SOVEREIGNTY", d: "Switzerland must remain open, but never lose control over what is essential. Sovereignty means the ability to choose, control, and replace when necessary. Cooperation is key—but dependence must never undermine our capacity to decide." },
        { t: "LITERACY & SKILLS", d: "Digital strength starts with people. Without understanding, there is no real freedom. Switzerland must invest in digital education, data literacy, and digital skills at all levels so that everyone can act with confidence and responsibility." },
        { t: "ANTICIPATION", d: "In a fast-moving digital world, waiting means falling behind. Switzerland must anticipate risks, support innovation, and strengthen collaboration to remain among the leading and most secure nations" }
      ]
    },
    fr: {
      items: [
        { t: "SÉCURITÉ", d: "Dans chaque domaine critique, des règles claires sont la norme – l'espace numérique ne doit pas faire exception. La Suisse doit définir et imposer des normes minimales de cybersécurité pour protéger les institutions, les entreprises et la population. Sans règles crédibles et appliquées, il n'y a ni confiance ni sécurité durables." },
        { t: "INFRASTRUCTURE", d: "La Suisse dépend d'infrastructures numériques essentielles à la vie quotidienne. Lorsqu'elles tombent en panne, tout s'arrête. Leur protection doit être traitée comme une mission centrale, avec des responsabilités claires et la capacité d'agir collectivement en cas de besoin." },
        { t: "DONNÉES & PERSONNES", d: "Les données personnelles sont le prolongement de l'individu. Les protéger signifie protéger les droits fondamentaux, la dignité et la liberté. La Suisse doit aller au-delà des garanties de base pour assurer une véritable intégrité numérique et protéger les personnes contre les abus et la perte de contrôle." },
        { t: "SOUVERAINETÉ", d: "La Suisse doit rester ouverte, mais ne jamais perdre le contrôle sur ce qui est essentiel. Souveraineté signifie la capacité de choisir, de contrôler et de remplacer si nécessaire. La coopération est clé – mais la dépendance ne doit jamais compromettre notre capacité de décision." },
        { t: "LITTÉRATIE & COMPÉTENCES", d: "La force numérique commence avec les personnes. Sans compréhension, il n'y a pas de vraie liberté. La Suisse doit investir dans l'éducation numérique, la littératie des données et les compétences numériques à tous les niveaux pour que chacun puisse agir avec confiance et responsabilité." },
        { t: "ANTICIPATION", d: "Dans un monde numérique qui évolue rapidement, attendre signifie prendre du retard. La Suisse doit anticiper les risques, soutenir l'innovation et renforcer la collaboration pour rester parmi les nations leaders et les plus sûres." }
      ]
    },
    de: {
      items: [
        { t: "SICHERHEIT", d: "In jedem kritischen Bereich sind klare Regeln die Norm – der digitale Raum darf keine Ausnahme sein. Die Schweiz muss minimale Cybersicherheitsstandards definieren und durchsetzen, um Institutionen, Unternehmen und die Bevölkerung zu schützen. Ohne glaubwürdige und angewandte Regeln gibt es kein dauerhaftes Vertrauen und keine Sicherheit." },
        { t: "INFRASTRUKTUR", d: "Die Schweiz hängt von digitalen Infrastrukturen ab, die für das tägliche Leben unerlässlich sind. Wenn sie ausfallen, steht alles still. Ihr Schutz muss als Kernaufgabe behandelt werden, mit klaren Verantwortlichkeiten und der Fähigkeit, bei Bedarf kollektiv zu handeln." },
        { t: "DATEN & MENSCHEN", d: "Persönliche Daten sind eine Erweiterung des Individuums. Sie zu schützen bedeutet, Grundrechte, Würde und Freiheit zu schützen. Die Schweiz muss über grundlegende Massnahmen hinausgehen, um echte digitale Integrität zu gewährleisten und Menschen vor Missbrauch und Kontrollverlust zu schützen." },
        { t: "SOUVERÄNITÄT", d: "Die Schweiz muss offen bleiben, darf aber nie die Kontrolle über das Wesentliche verlieren. Souveränität bedeutet die Fähigkeit zu wählen, zu kontrollieren und bei Bedarf zu ersetzen. Kooperation ist entscheidend – aber Abhängigkeit darf niemals unsere Entscheidungsfähigkeit untergraben." },
        { t: "KOMPETENZ & BILDUNG", d: "Digitale Stärke beginnt bei den Menschen. Ohne Verständnis gibt es keine wahre Freiheit. Die Schweiz muss auf allen Ebenen in die digitale Bildung, Datenkompetenz und digitale Fähigkeiten investieren, damit alle mit Zuversicht und Verantwortung handeln können." },
        { t: "ANTIZIPATION", d: "In einer schnelllebigen digitalen Welt bedeutet Warten, dass man zurückfällt. Die Schweiz muss Risiken antizipieren, Innovationen unterstützen und die Zusammenarbeit stärken, um zu den führenden und sichersten Nationen zu gehören." }
      ]
    },
    it: {
      items: [
        { t: "SICUREZZA", d: "In ogni dominio critico, regole chiare sono la norma – lo spazio digitale non dovrebbe fare eccezione. La Svizzera deve definire e far rispettare standard minimi di cybersicurezza per proteggere istituzioni, aziende e la popolazione. Senza regole credibili e applicate, non c'è fiducia o sicurezza duratura." },
        { t: "INFRASTRUTTURA", d: "La Svizzera dipende da infrastrutture digitali essenziali per la vita quotidiana. Quando si fermano, tutto si ferma. La loro protezione deve essere trattata come una missione fondamentale, con responsabilità chiare e la capacità di agire collettivamente quando necessario." },
        { t: "DATI & PERSONE", d: "I dati personali sono un'estensione dell'individuo. Proteggerli significa proteggere i diritti fondamentali, la dignità e la libertà. La Svizzera deve andare oltre le garanzie di base per assicurare una vera integrità digitale e proteggere le persone contro gli abusi e la perdita di controllo." },
        { t: "SOVRANITÀ", d: "La Svizzera deve rimanere aperta, ma mai perdere il controllo su ciò che è essenziale. Sovranità significa la capacità di scegliere, controllare e sostituire quando necessario. La cooperazione è fondamentale – ma la dipendenza non deve mai minare la nostra capacità di decidere." },
        { t: "ALFABETIZZAZIONE & COMPETENZE", d: "La forza digitale inizia con le persone. Senza comprensione, non c'è vera libertà. La Svizzera deve investire nell'educazione digitale, nell'alfabetizzazione dei dati e nelle competenze digitali a tutti i livelli in modo che tutti possano agire con fiducia e responsabilità." },
        { t: "ANTICIPAZIONE", d: "In un mondo digitale in rapida evoluzione, aspettare significa rimanere indietro. La Svizzera deve anticipare i rischi, sostenere l'innovazione e rafforzare la collaborazione per rimanere tra le nazioni leader e più sicure." }
      ]
    }
  };

  const whyText = {
    en: {
      para1: "Digital is no longer just a technical domain—it shapes our daily lives, our economy, and our security. As our dependence grows, so do the risks and the responsibilities.",
      para2: "This initiative sets a clear direction: to protect what is essential, strengthen trust and resilience, and ensure that Switzerland remains free in its digital choices. It establishes a constitutional foundation to secure critical infrastructure, safeguard people and their data, reinforce national sovereignty, and invest in skills and innovation.",
      para3: "The goal is simple: a Switzerland that is open, secure, and in control of its digital future.",
      boxTitle: "A Swiss Line",
      points: [
        "For an approach that promotes rather than restricts",
        "For an innovative and strong Switzerland that serves everyone",
        "For an informed population that makes the most of digital technologies",
        "For stronger trust and resilience across society"
      ],
      cta: "Download the form"
    },

    fr: {
      para1: "Le numérique n'est plus un simple domaine technique, il façonne notre vie quotidienne, notre économie et notre sécurité. A mesure que notre dépendance s'accroît, les risques et les responsabilités augmentent également.",
      para2: "Cette initiative donne une direction claire : protéger ce qui est essentiel, renforcer la confiance et la résilience, et faire en sorte que la Suisse reste libre de ses choix numériques. Elle établit une base constitutionnelle pour sécuriser les infrastructures critiques, protéger les personnes et leurs données, renforcer la souveraineté nationale, et investir dans les compétences et l'innovation.",
      para3: "L'objectif est simple : une Suisse ouverte, sûre et maîtresse de son avenir numérique.",
      boxTitle: "Une ligne suisse",
      points: [
        "Pour une approche qui favorise plutôt que de restreindre",
        "Pour une Suisse innovante et forte au service de tous",
        "Pour une population informée qui tire le meilleur parti des technologies numériques",
        "Pour une confiance et une résilience accrues à travers toute la société"
      ],
      cta: "Télécharger le formulaire"
    },

    de: {
      para1: "Die Digitalisierung ist längst kein reiner Technikbereich mehr – sie prägt unser tägliches Leben, unsere Wirtschaft und unsere Sicherheit. Mit unserer wachsenden Abhängigkeit steigen auch die Risiken und die Verantwortung.",
      para2: "Diese Initiative gibt eine klare Richtung vor: das Wesentliche zu schützen, das Vertrauen und die Widerstandsfähigkeit zu stärken und sicherzustellen, dass die Schweiz in ihren digitalen Entscheidungen frei bleibt. Sie schafft eine verfassungsmässige Grundlage, um kritische Infrastrukturen zu sichern, Menschen und ihre Daten zu schützen, die nationale Souveränität zu stärken sowie in Fähigkeiten und Innovationen zu investieren.",
      para3: "Das Ziel ist einfach: eine Schweiz, die offen, sicher und Herr über ihre digitale Zukunft ist.",
      boxTitle: "Eine Schweizer Linie",
      points: [
        "Für einen Ansatz, der fördert anstatt einzuschränken",
        "Für eine innovative und starke Schweiz, die allen dient",
        "Für eine informierte Bevölkerung, die digitale Technologien bestmöglich nutzt",
        "Für mehr Vertrauen und Resilienz in der gesamten Gesellschaft"
      ],
      cta: "Formular herunterladen"
    },

    it: {
      para1: "Il digitale non è più solo un dominio tecnico: plasma la nostra vita quotidiana, la nostra economia e la nostra sicurezza. Con la nostra crescente dipendenza aumentano anche i rischi e le responsabilità.",
      para2: "Questa iniziativa stabilisce una direzione chiara: per proteggere ciò che è essenziale, rafforzare la fiducia e la resilienza, e garantire che la Svizzera rimanga libera nelle sue scelte digitali. Essa stabilisce una base costituzionale per proteggere le infrastrutture critiche, salvaguardare le persone e i loro dati, rafforzare la sovranità nazionale e investire in competenze e innovazione.",
      para3: "L'obiettivo è semplice: una Svizzera aperta, sicura e padrona del proprio futuro digitale.",
      boxTitle: "Una linea svizzera",
      points: [
        "Per un approccio que promuove piuttosto che limitare",
        "Per una Svizzera innovativa e forte al servizio di tutti",
        "Per una popolazione informata che sfrutta al meglio le tecnologie digitali",
        "Per una maggiore fiducia e resilienza in tutta la società"
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
    <>
    <div className="container mx-auto px-6 pt-20 pb-6 max-w-7xl overflow-hidden">
      {/* Premium Banner Header */}
      <ScrollReveal>
        <header className="mb-10 relative text-center lg:text-left flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 flex flex-col gap-12">

            <div className="space-y-6 text-xl md:text-2xl text-secondary dark:text-gray-300 max-w-3xl leading-relaxed font-medium">
               <p>{whyText[lang].para1}</p>
               <p>{whyText[lang].para2}</p>
               <p className="font-black text-primary text-2xl md:text-3xl tracking-tight leading-tight mt-10">
                 {whyText[lang].para3}
               </p>
            </div>


          </div>

          <div className="lg:w-1/3 p-10 bg-white border border-gray-200 dark:border-gray-800 rounded-[3rem] flex flex-col gap-6 shadow-2xl relative overflow-hidden group">

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
      </ScrollReveal>

      {/* Impact Highlights */}
      {/* <ScrollReveal>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 group">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Landmark className="w-6 h-6"/>
               </div>
               <h3 className="text-xl font-black text-secondary dark:text-white uppercase tracking-wider">Confederation</h3>
             </div>
             <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed text-left">
               {dict.pactDetails.s3.confederation}
             </p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 group">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Fingerprint className="w-6 h-6"/>
               </div>
               <h3 className="text-xl font-black text-secondary dark:text-white uppercase tracking-wider">Population</h3>
             </div>
             <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed text-left">
               {dict.pactDetails.s3.population}
             </p>
          </div>
       </div>
      </ScrollReveal> */}


      {/* Grid of Content Sections */}
       <ScrollReveal className="relative mb-16 flex flex-col gap-8">
             <h2 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight">
               {structuralText[lang].title}
             </h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {longPillarsText[lang].items.map((item, idx) => {
                  const Icon = [ShieldCheck, Landmark, Database, Globe2, Users, Network][idx];
                  return (
                    <div key={idx} className="flex flex-col gap-4 p-8 rounded-3xl bg-white dark:bg-black/20 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 group h-full">
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
       </ScrollReveal>

      {/* <ScrollReveal>
       <section className="mb-24 p-12 lg:p-20 bg-secondary dark:bg-zinc-900 rounded-[4rem] text-white overflow-hidden relative group shadow-3xl">

          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 transition-all">
              <Scale className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
                 {dict.initiative.whyConstitutional.title}
              </h2>
              <p className="text-white/60 text-xl font-medium leading-relaxed max-w-4xl">
                {dict.initiative.whyConstitutional.description}
              </p>
            </div>
          </div>
       </section>
      </ScrollReveal> */}

      <div className="flex flex-col items-center gap-8 mb-8">
        <section className="w-full flex flex-col gap-4 p-6 rounded-[2rem] bg-white text-secondary transition-all shadow-sm hover:shadow-md border-t-4 border-primary">
          <div className="w-12 h-12 bg-gray-100 text-primary rounded-xl flex items-center justify-center group text-center mx-auto">
            <Scale className="w-6 h-6 group-hover:scale-110 transition-all" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-center text-secondary">{articleTitle[lang]}</h2>
          <div className="p-4 rounded-[1.5rem] bg-white border border-gray-200 font-serif italic text-base leading-relaxed text-gray-700 shadow-sm whitespace-pre-wrap">
             <ScrollReveal>
               {articleText[lang].replace(/^"|"$/g, '').split('\n').map((line, idx) => {
                  const match = idx > 0 ? line.match(/^(\d+)\s+(.*)/) : null;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => idx > 0 && setHoveredPoint(idx - 1)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className={cn(
                        "transition-all duration-500 rounded-xl px-4 py-2 -mx-4",
                        idx > 0 ? "cursor-help" : "mb-4 text-secondary not-italic font-black border-b border-gray-100 pb-4",
                        hoveredPoint === idx - 1 ? "text-primary bg-gray-50 translate-x-4" : "opacity-80 hover:opacity-100"
                      )}
                    >
                      {match ? (
                        <>
                          <span className="text-3xl font-black text-primary not-italic mr-2 align-baseline">{match[1]}</span>
                          <span>{match[2]}</span>
                        </>
                      ) : line}
                    </div>
                  );
                })}
             </ScrollReveal>
          </div>
          <div className="text-center mt-2 mb-2">
            <p className="text-gray-500 text-xs italic">
              {disclaimerText[lang]}
            </p>
          </div>

          <div className="flex justify-center w-full mt-2">
            <a
              href="/non_aux_f35_clear.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary/50 rounded-2xl transition-all duration-300 max-w-2xl w-full shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-110 transition-all flex-shrink-0">
                <img src="/non_aux_f35_clear.png" alt="Document Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {dict.initiative.officialTextLink.title}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {dict.initiative.officialTextLink.description}
                </p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </a>
          </div>


        </section>
      </div>


      {/* Process Section */}
      {/* <section className="mb-24 p-12 bg-white dark:bg-zinc-900 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative group">

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
      <ScrollReveal>
       <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] text-center mb-8">
         {wantsTitleText[lang]}
       </h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-8 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-10 rounded-[3.5rem] group overflow-hidden relative">
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
      </ScrollReveal>

      {/* Association Section migrated from Association Tab */}
      <ScrollReveal delay={0.1} className="mt-2">
        <section className="mb-12 mt-0 p-8 md:p-12 bg-white rounded-[3.5rem] border border-gray-200 shadow-sm overflow-hidden relative group text-center transition-all duration-500">


          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto gap-6">
             <div className="p-3 bg-white border border-gray-200 rounded-xl text-primary mb-2">
                <Target className="w-6 h-6" />
             </div>
             <h2 className="text-3xl md:text-4xl font-black text-secondary">{assocDict[lang].assocTitle}</h2>
             <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
               {assocDict[lang].assocDesc}
             </p>

             <div className="flex flex-wrap justify-center gap-4 mt-6 mb-4">
                <button onClick={() => setActiveTab(activeTab === 'committee' ? null : 'committee')} className={cn("px-8 py-4 rounded-2xl font-bold transition-all border shadow-sm hover:scale-105 active:scale-95", activeTab === 'committee' ? "bg-secondary text-white border-secondary" : "bg-white hover:bg-gray-50 text-secondary border-gray-200")}>
                  {assocDict[lang].btnCommittee}
                </button>
                <button onClick={() => setActiveTab(activeTab === 'statuts' ? null : 'statuts')} className={cn("px-8 py-4 rounded-2xl font-bold transition-all border shadow-sm hover:scale-105 active:scale-95", activeTab === 'statuts' ? "bg-secondary text-white border-secondary" : "bg-white hover:bg-gray-50 text-secondary border-gray-200")}>
                  {assocDict[lang].btnStatuts}
                </button>
                <button onClick={() => setActiveTab(activeTab === 'join' ? null : 'join')} className={cn("px-8 py-4 rounded-2xl font-bold transition-all border shadow-sm hover:scale-105 active:scale-95", activeTab === 'join' ? "bg-primary text-white border-primary shadow-sm" : "bg-primary/90 hover:bg-primary text-white border-primary/50")}>
                  {assocDict[lang].btnJoin}
                </button>
             </div>

             {/* Expandable Tab Content */}
             <div className={cn("w-full transition-all duration-500 overflow-hidden", activeTab ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0")}>
               <div className="p-8 md:p-12 bg-white rounded-[2.5rem] text-left shadow-sm border border-gray-200">
                 {activeTab === 'committee' && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                     <h2 className="text-3xl lg:text-4xl font-black mb-4 text-secondary dark:text-white">{assocDict[lang].committeeTitle}</h2>
                     <p className="text-gray-500 font-medium text-lg mb-10">{assocDict[lang].committeeDesc}</p>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                       {committeeMembers.map((member, i) => (
                         <div key={i} className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-black/40 rounded-[2rem] border border-gray-100 dark:border-white/5 text-center hover:-translate-y-1 transition-transform">
                           <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-zinc-700">
                             <User className="w-8 h-8 opacity-90" />
                           </div>
                           <div>
                             <h3 className="font-black text-sm text-secondary dark:text-white leading-tight">{member.name}</h3>
                             <p className="text-primary font-bold text-[9px] uppercase tracking-widest mt-1">{member.role}</p>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {activeTab === 'statuts' && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-6">
                     <FileText className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                     <h2 className="text-3xl lg:text-4xl font-black mb-4 text-secondary dark:text-white">{assocDict[lang].statutsTitle}</h2>
                     <p className="text-gray-500 font-medium text-lg">{assocDict[lang].statutsDesc}</p>
                   </div>
                 )}

                 {activeTab === 'join' && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center max-w-2xl mx-auto">
                     <h2 className="text-3xl lg:text-4xl font-black mb-6 text-secondary dark:text-white">{assocDict[lang].joinTitle}</h2>
                     <div className="space-y-6">
                       <p className="text-gray-800 dark:text-white text-lg font-bold leading-relaxed">
                         {assocDict[lang].joinDesc1}
                       </p>
                       <p className="text-gray-600 dark:text-white/70 text-base leading-relaxed">
                         {assocDict[lang].joinDesc2}
                       </p>
                       <div className="flex flex-col gap-4 text-left bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10 mt-8">
                         <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-4">
                           <span className="text-xs uppercase tracking-widest text-primary font-bold">{assocDict[lang].students}</span>
                           <span className="text-xl font-black text-secondary dark:text-white">CHF 50</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-4">
                           <span className="text-xs uppercase tracking-widest text-primary font-bold">{assocDict[lang].individuals}</span>
                           <span className="text-xl font-black text-secondary dark:text-white">CHF 100</span>
                         </div>
                         <div className="flex justify-between items-center">
                           <span className="text-xs uppercase tracking-widest text-primary font-bold">{assocDict[lang].organizations}</span>
                           <span className="text-xl font-black text-secondary dark:text-white">CHF 150</span>
                         </div>
                       </div>
                       <Link href={`/${lang}/contact`} className="swiss-button mt-8 w-full py-4 flex items-center justify-center gap-2">
                         {assocDict[lang].apply} <ChevronRight className="w-5 h-5" />
                       </Link>
                     </div>
                   </div>
                 )}
               </div>
             </div>
          </div>
       </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
       <div className="mt-16 text-center p-16 bg-white dark:bg-black/40 rounded-[4rem] border-4 border-gray-100 dark:border-gray-900 shadow-2xl hover:border-primary transition-all duration-1000 group">
         <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tight leading-tight max-w-2xl mx-auto">
           {futureText[lang]}
           <span className="text-primary italic">{anchorText[lang]}</span>
         </h3>
         <Link href={`/${lang}/sign`} className="swiss-button mx-auto inline-flex items-center gap-4 py-4 px-12 text-xl font-black hover:scale-105 active:scale-95 group">
            {signCtaText[lang]} <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth"/>
         </Link>
       </div>
      </ScrollReveal>
    </div>
  </>
  );
}
