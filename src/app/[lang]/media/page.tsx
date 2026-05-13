import React from 'react';
import { Newspaper, ExternalLink, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { type Locale } from '@/lib/dictionary';

const mediaText = {
  en: {
    badge: "Press & Media",
    title: "Media Center",
    desc: "Stay updated with shared content from outside regarding the Swiss Digital Pact.",
    sectionTitle: "Shared Content from Outside",
    articles: [
      { title: "NZZ: Switzerland's Push for Digital Autonomy", date: "Nov 20, 2026", desc: "Coverage of the Swiss Digital Pact by the national press." },
      { title: "Le Temps: The Cybersecurity Debate", date: "Oct 25, 2026", desc: "Op-ed from leading cybersecurity experts supporting the initiative." }
    ],
    mediaKit: {
      title: "Official Media Kit",
      desc: "Download high-resolution logos, press releases, and campaign materials to use in your coverage.",
      btn: "Download Resources"
    }
  },
  fr: {
    badge: "Presse & Médias",
    title: "Centre Médias",
    desc: "Restez informé des contenus partagés de l'extérieur concernant Swiss Digital Pact.",
    sectionTitle: "Contenus Partagés de l'Extérieur",
    articles: [
      { title: "NZZ: La poussée de la Suisse pour l'autonomie numérique", date: "20 nov. 2026", desc: "Couverture de Swiss Digital Pact par la presse nationale." },
      { title: "Le Temps: Le débat sur la cybersécurité", date: "25 oct. 2026", desc: "Tribune d'experts de premier plan en cybersécurité soutenant l'initiative." }
    ],
    mediaKit: {
      title: "Kit Médias Officiel",
      desc: "Téléchargez les logos haute résolution, les communiqués de presse et le matériel de campagne.",
      btn: "Télécharger les Ressources"
    }
  },
  de: {
    badge: "Presse & Medien",
    title: "Medienzentrum",
    desc: "Bleiben Sie auf dem Laufenden mit geteilten Inhalten von ausserhalb zum Swiss Digital Pact.",
    sectionTitle: "Geteilte Inhalte von ausserhalb",
    articles: [
      { title: "NZZ: Schweiz drängt auf digitale Autonomie", date: "20. Nov. 2026", desc: "Berichterstattung über den Swiss Digital Pact durch die nationale Presse." },
      { title: "Le Temps: Die Cybersicherheitsdebatte", date: "25. Okt. 2026", desc: "Gastkommentar führender Cybersicherheitsexperten zur Unterstützung der Initiative." }
    ],
    mediaKit: {
      title: "Offizielles Media-Kit",
      desc: "Laden Sie hochauflösende Logos, Pressemitteilungen und Kampagnenmaterial herunter.",
      btn: "Ressourcen herunterladen"
    }
  },
  it: {
    badge: "Stampa & Media",
    title: "Centro Media",
    desc: "Resta aggiornato sui contenuti condivisi dall'esterno riguardanti il Swiss Digital Pact.",
    sectionTitle: "Contenuti Condivisi dall'Esterno",
    articles: [
      { title: "NZZ: La spinta della Svizzera per l'autonomia digitale", date: "20 nov 2026", desc: "Copertura del Swiss Digital Pact da parte della stampa nazionale." },
      { title: "Le Temps: Il dibattito sulla sicurezza informatica", date: "25 ott 2026", desc: "Editoriale di importanti esperti di sicurezza informatica a sostegno dell'iniziativa." }
    ],
    mediaKit: {
      title: "Kit Media Ufficiale",
      desc: "Scarica loghi ad alta risoluzione, comunicati stampa e materiali della campagna.",
      btn: "Scarica le Risorse"
    }
  }
};

export default function MediaPage({ params: { lang } }: { params: { lang: Locale } }) {
  const t = mediaText[lang] || mediaText.fr;

  const sections = [
    {
      title: t.sectionTitle,
      icon: ExternalLink,
      items: t.articles
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-20 pb-6 lg:pt-24 max-w-7xl">
       <ScrollReveal>
         <header className="text-center max-w-4xl mx-auto mb-10 relative">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
             <Newspaper className="w-4 h-4" />
             {t.badge}
           </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter">
             {t.title}
           </h1>
           <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
             {t.desc}
           </p>
         </header>
       </ScrollReveal>

       <div className="space-y-16 mb-10">
         {sections.map((section, idx) => (
           <div className="flex flex-col" key={idx}>
             <ScrollReveal>
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-3 bg-white border border-gray-200 rounded-xl text-primary">
                   <section.icon className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl font-black text-secondary dark:text-white">{section.title}</h2>
               </div>
             </ScrollReveal>
             
             <ScrollReveal>
               <div className={`grid grid-cols-1 md:grid-cols-2 ${section.items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
                 {section.items.map((item, i) => (
                    <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-1">
                     <span className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 block">{item.date}</span>
                     <h3 className="text-xl font-black leading-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                     <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </ScrollReveal>
           </div>
         ))}

         {/* Media Kit Section */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-8 bg-white rounded-[3rem] p-10 lg:p-16 text-secondary relative overflow-hidden group shadow-sm border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm group-hover:scale-110 transition-all flex-shrink-0">
                  <ExternalLink className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl font-black mb-4 tracking-tight text-secondary">{t.mediaKit.title}</h2>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-3xl">
                    {t.mediaKit.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="swiss-button flex items-center gap-3 py-4 px-8 text-lg font-black shadow-sm hover:shadow-md transition-all flex-shrink-0"
                >
                  {t.mediaKit.btn} <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
       </div>
    </div>
  );
}
