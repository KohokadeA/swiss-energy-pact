'use client';

import React from 'react';
import { Handshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { type Locale } from '@/lib/dictionary';
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function PartnersPage({ params: { lang } }: { params: { lang: Locale } }) {
  const tiers = [
    { 
      name: "Strategic Partners", 
      partners: [
        { name: "Swiss Cyber Defense Group", logo: "/partners/logo1.png" },
        { name: "Helvetia Data Systems", logo: "/partners/logo2.png" },
        { name: "Alpine Secure Cloud", logo: "/partners/logo3.png" }
      ]
    },
    { 
      name: "Supporting Organizations", 
      partners: [
        { name: "Geneva Privacy Trust", logo: "/partners/logo4.png" },
        { name: "Zürich Tech Alliance", logo: "/partners/logo5.png" },
        { name: "Digital Future Foundation", logo: "/partners/logo6.png" },
        { name: "Swiss IT Coalition", logo: "/partners/logo1.png" },
        { name: "Romandie Cyber", logo: "/partners/logo2.png" },
        { name: "National Privacy Network", logo: "/partners/logo3.png" }
      ]
    },
    { 
      name: "Academic & Research", 
      partners: [
        { name: "Swiss Institute of Tech", logo: "/partners/logo4.png" },
        { name: "Bern Data Science Lab", logo: "/partners/logo5.png" },
        { name: "Lausanne Crypto Hub", logo: "/partners/logo6.png" },
        { name: "Cyber Policy Institute", logo: "/partners/logo1.png" }
      ]
    }
  ];

  const getInvolvedData = {
    en: [
      "Join the association and support the mission",
      "Contribute skills, ideas, or professional expertise",
      "Help locally, nationally, or online",
      "Introduce useful contacts and networks",
      "Support communication, events, or outreach",
      "Flexible and voluntary involvement for everyone"
    ],
    fr: [
      "Rejoindre l'association et soutenir la mission",
      "Apporter compétences, idées ou expertise professionnelle",
      "Aider localement, nationalement ou en ligne",
      "Introduire des contacts et réseaux utiles",
      "Soutenir la communication, les événements ou la sensibilisation",
      "Engagement flexible et volontaire pour tous"
    ],
    de: [
      "Dem Verein beitreten und die Mission unterstützen",
      "Fähigkeiten, Ideen oder Fachwissen einbringen",
      "Lokal, national oder online helfen",
      "Nützliche Kontakte und Netzwerke vermitteln",
      "Kommunikation, Veranstaltungen oder Reichweite unterstützen",
      "Flexibles und freiwilliges Engagement für alle"
    ],
    it: [
      "Unirsi all'associazione e sostenere la missione",
      "Contribuire con competenze, idee o esperienza professionale",
      "Aiutare a livello locale, nazionale o online",
      "Presentare contatti e reti utili",
      "Soutenir la comunicazione, gli eventi o la sensibilizzazione",
      "Impegno flessibile e volontario per tutti"
    ]
  };

  const involvementPoints = getInvolvedData[lang] || getInvolvedData.en;

  return (
    <div className="container mx-auto px-6 pt-20 pb-6 lg:pt-24 max-w-7xl">
       <ScrollReveal>
         <header className="text-center max-w-4xl mx-auto mb-8 relative">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
             <Handshake className="w-4 h-4" />
             Our Network
           </div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-secondary dark:text-white leading-[0.9] tracking-tighter">
             Partners
           </h1>
           <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
             A strong coalition committed to Switzerland's digital sovereignty
           </p>
         </header>
       </ScrollReveal>

       <div className="space-y-12 mb-12">
         {tiers.map((tier, idx) => (
           <div key={idx} className="flex flex-col items-center">
             <ScrollReveal>
               <h3 className="text-[10px] font-black uppercase tracking-[5px] text-gray-500 dark:text-gray-400 mb-8">{tier.name}</h3>
             </ScrollReveal>
             <ScrollReveal>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                  {tier.partners.map((partner, i) => (
                    <div key={i} className="group relative flex flex-col items-center h-full">
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none z-20">
                        <div className="bg-[#0A1D37] text-white px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap border border-white/10">
                           <span className="text-sm font-bold tracking-wide">{partner.name}</span>
                        </div>
                        <div className="w-3 h-3 bg-[#0A1D37] rotate-45 mx-auto -mt-1.5 border-r border-b border-white/10" />
                      </div>

                      <div className="w-full h-32 flex items-center justify-center transition-all duration-500 bg-white dark:bg-zinc-900/50 rounded-3xl border border-transparent group-hover:border-gray-100 dark:group-hover:border-white/5 group-hover:shadow-xl p-6">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-full object-contain mix-blend-multiply dark:invert dark:mix-blend-screen scale-90 group-hover:scale-100 transition-transform duration-500" 
                        />
                      </div>
                    </div>
                  ))}
               </div>
             </ScrollReveal>
           </div>
         ))}
       </div>

       {/* Get Involved Section */}
       <section className="p-10 lg:p-16 bg-white rounded-[3rem] border border-gray-200 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center shadow-sm group">
          
          <div className="flex-1 flex flex-col items-start gap-6 relative z-10 w-full">
             <ScrollReveal>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-primary rounded-full text-[10px] font-black tracking-widest uppercase">
                  <Sparkles className="w-4 h-4" /> {lang === 'fr' ? "Rejoignez le mouvement" : lang === 'de' ? 'Werden Sie Teil der Bewegung' : lang === 'it' ? 'Unisciti al movimento' : 'Join the movement'}
               </div>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-black text-secondary tracking-tight">
                  {lang === 'fr' ? "S'engager" : lang === 'de' ? 'Mitmachen' : lang === 'it' ? 'Partecipa' : 'Get Involved'}
               </h2>
             </ScrollReveal>
             
             <ScrollReveal delay={0.2}>
               <p className="text-gray-700 text-lg leading-relaxed max-w-2xl font-medium">
                  {lang === 'fr' ? "Soutenir l'initiative peut prendre de nombreuses formes. Vous pouvez rejoindre l'association, apporter votre temps ou votre expertise, ou aider à diffuser le message selon vos disponibilités et intérêts." : 
                   lang === 'de' ? "Die Unterstützung der Initiative kann viele Formen annehmen. Sie können dem Verein beitreten, Ihre Zeit oder Ihr Fachwissen einbringen oder helfen, die Botschaft entsprechend Ihrer Verfügbarkeit zu verbreiten." : 
                   lang === 'it' ? "Sostenere l'iniziativa può assumere molte forme. Puoi unirti all'associazione, contribuire con il tuo tempo o le tue competenze, o aiutare a diffondere il messaggio in base alla tua disponibilità." : 
                   "Supporting the initiative can take many forms. You may join the association, contribute your time or expertise, or help spread the message according to your availability and interests."}
               </p>
             </ScrollReveal>

             <ScrollReveal>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
                  {involvementPoints.map((text, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-2xl hover:border-primary/30 hover:bg-gray-50 transition-all h-full">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <span className="text-gray-800 text-[13px] font-medium leading-tight">{text}</span>
                    </div>
                  ))}
               </div>
             </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="w-full lg:w-[380px] bg-white rounded-[2.5rem] p-10 border border-gray-200 shrink-0 relative z-10 shadow-sm">
               <h3 className="text-2xl font-black text-secondary italic mb-4 tracking-tight">
                  {lang === 'fr' ? 'Intéressé(e)?' : lang === 'de' ? 'Interessiert?' : lang === 'it' ? 'Interessato/a?' : 'Interested?'}
               </h3>
               <p className="text-gray-600 text-sm mb-10 font-medium leading-relaxed">
                  {lang === 'fr' ? "Contactez-nous pour en savoir plus sur la façon de soutenir le Swiss Digital Pact en tant que partenaire ou membre." : 
                   lang === 'de' ? "Kontaktieren Sie uns, um mehr darüber zu erfahren, wie Sie den Swiss Digital Pact als Partner oder Mitglied unterstützen können." : 
                   lang === 'it' ? "Contattaci per saperne di più su come sostenere lo Swiss Digital Pact come partner o membro." : 
                   "Contact us to learn more about how to support the Swiss Digital Pact as a partner or member."}
               </p>
               <Magnetic>
                 <Link href={`/${lang}/contact`} className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 px-6 rounded-2xl flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95">
                    {lang === 'fr' ? 'Nous contacter' : lang === 'de' ? 'Kontakt' : lang === 'it' ? 'Contattaci' : 'Contact Us'}
                 </Link>
               </Magnetic>
            </div>
          </ScrollReveal>
       </section>
    </div>
  );
}
