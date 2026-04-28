'use client';

import React from 'react';
import Link from 'next/link';
import { Landmark, CreditCard, QrCode, Heart, Coffee, ShieldCheck, ExternalLink, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Magnetic from '@/components/Magnetic';

export default function SupportPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  const donationOptions = {
    en: [
      {
        icon: Landmark,
        title: "Bank Transfer",
        description: "Support the initiative directly via our association's bank account. Ideal for fee-free contributions.",
        details: "IBAN: CH76 0000 0000 0000 0000 0",
        cta: "Copy IBAN"
      },
      {
        icon: CreditCard,
        title: "Digital Payment",
        description: "Secure one-click donation via Credit Card, Twint, or Apple Pay.",
        details: "Twint / Visa / Mastercard",
        cta: "Donate online",
        external: true
      },
      {
        icon: QrCode,
        title: "QR Bill",
        description: "Receive a physical QR bill by mail or download it digitally.",
        details: "Generate QR bill",
        cta: "Get QR code"
      }
    ],
    fr: [
      {
        icon: Landmark,
        title: "Virement Bancaire",
        description: "Soutenez l'initiative directement via le compte bancaire de notre association. Idéal pour des contributions sans frais.",
        details: "IBAN: CH76 0000 0000 0000 0000 0",
        cta: "Copier l'IBAN"
      },
      {
        icon: CreditCard,
        title: "Paiement Numérique",
        description: "Don sécurisé en un clic via Carte de Crédit, Twint ou Apple Pay.",
        details: "Twint / Visa / Mastercard",
        cta: "Faire un don en ligne",
        external: true
      },
      {
        icon: QrCode,
        title: "Facture QR",
        description: "Recevez une facture QR physique par courrier ou téléchargez-la numériquement.",
        details: "Générer la facture QR",
        cta: "Obtenir le code QR"
      }
    ],
    de: [
      {
        icon: Landmark,
        title: "Banküberweisung",
        description: "Unterstützen Sie die Initiative direkt über das Bankkonto unseres Vereins. Ideal für gebührenfreie Beiträge.",
        details: "IBAN: CH76 0000 0000 0000 0000 0",
        cta: "IBAN kopieren"
      },
      {
        icon: CreditCard,
        title: "Digitale Zahlung",
        description: "Sichere Ein-Klick-Spende per Kreditkarte, Twint oder Apple Pay.",
        details: "Twint / Visa / Mastercard",
        cta: "Online spenden",
        external: true
      },
      {
        icon: QrCode,
        title: "QR-Rechnung",
        description: "Erhalten Sie eine physische QR-Rechnung per Post oder laden Sie sie digital herunter.",
        details: "QR-Rechnung generieren",
        cta: "QR-Code erhalten"
      }
    ],
    it: [
      {
        icon: Landmark,
        title: "Bonifico Bancario",
        description: "Sostenga l'iniziativa direttamente tramite il conto bancario della nostra associazione. Ideale per contributi senza commissioni.",
        details: "IBAN: CH76 0000 0000 0000 0000 0",
        cta: "Copia IBAN"
      },
      {
        icon: CreditCard,
        title: "Pagamento Digitale",
        description: "Donazione sicura in un clic tramite Carta di Credito, Twint o Apple Pay.",
        details: "Twint / Visa / Mastercard",
        cta: "Dona online",
        external: true
      },
      {
        icon: QrCode,
        title: "Fattura QR",
        description: "Riceva una fattura QR fisica per posta o la scarichi digitalmente.",
        details: "Genera fattura QR",
        cta: "Ottieni codice QR"
      }
    ]
  };

  const supportText = {
    en: "Support the movement",
    fr: "Soutenir le mouvement",
    de: "Die Bewegung unterstützen",
    it: "Sostenere il movimento"
  };

  const titleParts = {
    en: { p1: "Support a ", p2: "Swiss", p3: " path" },
    fr: { p1: "Soutenir une voie ", p2: "suisse", p3: "" },
    de: { p1: "Einen ", p2: "Schweizer", p3: " Weg unterstützen" },
    it: { p1: "Sostenere una via ", p2: "svizzera", p3: "" }
  };

  const supportDesc = {
    en: '"This initiative champions smart security and smart sovereignty: open, demanding, and human. Your support helps bring this vision to the public debate."',
    fr: '"Cette initiative défend une sécurité smart et une souveraineté smart: ouvertes, exigeantes et humaines. Votre soutien permet de porter cette vision dans le débat public."',
    de: '"Diese Initiative setzt sich für eine kluge Sicherheit und eine kluge Souveränität ein: offen, anspruchsvoll und menschlich. Ihre Unterstützung hilft, diese Vision in die öffentliche Debatte zu bringen."',
    it: '"Questa iniziativa difende una sicurezza smart e una sovranità smart: aperte, esigenti e umane. Il suo sostegno permette di portare questa visione nel dibattito pubblico."'
  };

  const transparency = {
    en: {
      t1: "Total",
      t2: "transparency",
      quote: "“A societal project must also be exemplary in its governance.”",
      badge1: "Registered Association",
      badge2: "Swiss Bank Accounts",
      badge3: "Annual Audit (FINMA)",
      link: "Financial Records (PDF)"
    },
    fr: {
      t1: "Une transparence",
      t2: "totale",
      quote: "“Un projet de société doit aussi être exemplaire dans sa gouvernance.”",
      badge1: "Association Enregistrée",
      badge2: "Comptes Bancaires Suisses",
      badge3: "Audit Annuel (FINMA)",
      link: "Dossiers Financiers (PDF)"
    },
    de: {
      t1: "Völlige",
      t2: "Transparenz",
      quote: "„Ein gesellschaftliches Projekt muss auch in seiner Führung vorbildlich sein.“",
      badge1: "Eingetragener Verein",
      badge2: "Schweizer Bankkonten",
      badge3: "Jährliches Audit (FINMA)",
      link: "Finanzunterlagen (PDF)"
    },
    it: {
      t1: "Una trasparenza",
      t2: "totale",
      quote: "“Un progetto di società deve essere esemplare anche nella sua governance.”",
      badge1: "Associazione Registrata",
      badge2: "Conti Bancari Svizzeri",
      badge3: "Audit Annuale (FINMA)",
      link: "Documenti Finanziari (PDF)"
    }
  };

  const finalCta = {
      en: {
          title: '"A sovereign digital future is a collective responsibility."',
          btn: "Sign the initiative now"
      },
      fr: {
           title: '"Un avenir numérique souverain est une responsabilité collective."',
           btn: "Signer l'initiative maintenant"
      },
      de: {
           title: '"Eine souveräne digitale Zukunft ist eine kollektive Verantwortung."',
           btn: "Initiative jetzt unterzeichnen"
      },
      it: {
           title: '"Un futuro digitale sovrano è una responsabilità collettiva."',
           btn: "Firma l'iniziativa ora"
      }
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 max-w-7xl overflow-hidden min-h-screen">
      <header className="text-center max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
          <Heart className="w-4 h-4 flex-shrink-0" />
          {supportText[lang]}
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter">
           {titleParts[lang].p1}<span className="text-primary italic underline decoration-1 decoration-dashed underline-offset-[16px]">{titleParts[lang].p2}</span>{titleParts[lang].p3}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          {supportDesc[lang]}
        </p>
      </header>

      {/* Main Donation Grid - Premium Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24 relative">
        {donationOptions[lang].map((option, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 flex flex-col p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 group">
             <div className="w-20 h-20 bg-gray-50 dark:bg-black rounded-[2.5rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <option.icon className="w-10 h-10 text-secondary dark:text-white group-hover:text-primary transition-all" />
             </div>
             <h3 className="text-2xl font-black mb-4">{option.title}</h3>
             <p className="text-gray-500 dark:text-gray-400 mb-8 font-bold text-sm leading-relaxed flex-grow">{option.description}</p>
             <div className="bg-gray-100 dark:bg-black p-5 rounded-2xl mb-8 font-mono text-[9px] uppercase font-black tracking-widest border-2 border-dashed border-gray-200 dark:border-gray-800 break-words group-hover:border-primary/20 transition-all">
                {option.details}
             </div>
             <Magnetic>
               <button className="swiss-button w-full py-5 flex items-center justify-center gap-3 text-base font-black group-hover:bg-primary shadow-lg active:scale-95 transition-all">
                 {option.cta} {option.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
               </button>
             </Magnetic>
          </div>
        ))}
      </div>

      {/* Get Involved Section */}
      <section className="mb-24 p-10 lg:p-16 bg-[#161618] rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center shadow-2xl group">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-all duration-1000 pointer-events-none" />
         
         <div className="flex-1 flex flex-col items-start gap-6 relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-primary rounded-full text-[10px] font-black tracking-widest uppercase">
               <Sparkles className="w-4 h-4" /> {lang === 'fr' ? "Rejoignez le mouvement" : lang === 'de' ? 'Werden Sie Teil der Bewegung' : lang === 'it' ? 'Unisciti al movimento' : 'Join the movement'}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
               {lang === 'fr' ? "S'engager" : lang === 'de' ? 'Mitmachen' : lang === 'it' ? 'Partecipa' : 'Get Involved'}
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl font-medium">
               {lang === 'fr' ? "Soutenir l'initiative peut prendre de nombreuses formes. Vous pouvez rejoindre l'association, apporter votre temps ou votre expertise, ou aider à diffuser le message selon vos disponibilités et intérêts. Chaque contribution renforce le mouvement." : 
                lang === 'de' ? "Die Unterstützung der Initiative kann viele Formen annehmen. Sie können dem Verein beitreten, Ihre Zeit oder Ihr Fachwissen einbringen oder helfen, die Botschaft entsprechend Ihrer Verfügbarkeit und Ihren Interessen zu verbreiten. Jeder Beitrag stärkt die Bewegung." : 
                lang === 'it' ? "Sostenere l'iniziativa può assumere molte forme. Puoi unirti all'associazione, contribuire con il tuo tempo o le tue competenze, o aiutare a diffondere il messaggio in base alla tua disponibilità e ai tuoi interessi. Ogni contributo rafforza il movimento." : 
                "Supporting the initiative can take many forms. You may join the association, contribute your time or expertise, or help spread the message according to your availability and interests. Every contribution strengthens the movement."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
               {(lang === 'fr' ? [
                 "Rejoindre l'association et soutenir la mission",
                 "Apporter compétences, idées ou expertise professionnelle",
                 "Aider localement, nationalement ou en ligne",
                 "Introduire des contacts et réseaux utiles",
                 "Soutenir la communication, les événements ou la sensibilisation",
                 "Engagement flexible et volontaire pour tous"
               ] : lang === 'de' ? [
                 "Dem Verein beitreten und die Mission unterstützen",
                 "Fähigkeiten, Ideen oder Fachwissen einbringen",
                 "Lokal, national oder online helfen",
                 "Nützliche Kontakte und Netzwerke vermitteln",
                 "Kommunikation, Veranstaltungen oder Reichweite unterstützen",
                 "Flexibles und freiwilliges Engagement für alle"
               ] : lang === 'it' ? [
                 "Unirsi all'associazione e sostenere la missione",
                 "Contribuire con competenze, idee o esperienza professionale",
                 "Aiutare a livello locale, nazionale o online",
                 "Presentare contatti e reti utili",
                 "Sostenere la comunicazione, gli eventi o la sensibilizzazione",
                 "Impegno flessibile e volontario per tutti"
               ] : [
                 "Join the association and support the mission",
                 "Contribute skills, ideas, or professional expertise",
                 "Help locally, nationally, or online",
                 "Introduce useful contacts and networks",
                 "Support communication, events, or outreach",
                 "Flexible and voluntary involvement for everyone"
               ]).map((text, i) => (
                 <div key={i} className="flex items-center gap-3 bg-[#1c1c1f] border border-white/5 p-4 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white/90 text-xs font-bold uppercase tracking-wide leading-tight">{text}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="w-full lg:w-[380px] bg-[#222225] rounded-[2.5rem] p-10 border border-white/5 shrink-0 relative z-10 shadow-2xl">
            <h3 className="text-3xl font-black text-white italic mb-4 tracking-tight">
               {lang === 'fr' ? 'Intéressé(e)?' : lang === 'de' ? 'Interessiert?' : lang === 'it' ? 'Interessato/a?' : 'Interested?'}
            </h3>
            <p className="text-white/60 text-sm mb-10 font-medium leading-relaxed">
               {lang === 'fr' ? "Contactez-nous pour en savoir plus sur la façon de soutenir le Swiss Digital Pact en tant que membre du comité." : 
                lang === 'de' ? "Kontaktieren Sie uns, um mehr darüber zu erfahren, wie Sie den Swiss Digital Pact als Komiteemitglied unterstützen können." : 
                lang === 'it' ? "Contattaci per saperne di più su come sostenere lo Swiss Digital Pact come membro del comitato." : 
                "Contact us to learn more about how to support the Swiss Digital Pact as a committee member."}
            </p>
            <Magnetic>
              <Link href={`/${lang}/contact`} className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 px-6 rounded-2xl flex items-center justify-center transition-all shadow-[0_0_40px_rgba(227,6,19,0.3)] hover:shadow-[0_0_60px_rgba(227,6,19,0.4)] hover:scale-105 active:scale-95">
                 {lang === 'fr' ? 'Nous contacter' : lang === 'de' ? 'Kontakt' : lang === 'it' ? 'Contattaci' : 'Contact Us'}
              </Link>
            </Magnetic>
         </div>
      </section>

      {/* Large Featured Transparency CTA */}
      <section className="bg-secondary dark:bg-zinc-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden group shadow-3xl mb-24">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-[0.05] rounded-full translate-x-20 -translate-y-20 blur-[100px] group-hover:scale-150 transition-all duration-1000" />
         
         <div className="flex flex-col lg:flex-row gap-16 items-center z-10 relative">
            <div className="w-40 h-40 bg-white/5 rounded-full flex items-center justify-center border-4 border-primary/20 group-hover:scale-110 transition-all duration-700 shrink-0">
               <ShieldCheck className="w-20 h-20 text-primary" />
            </div>
            <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
               <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter italic">{transparency[lang].t1} <span className="text-primary not-italic underline decoration-4 underline-offset-[16px]">{transparency[lang].t2}</span>.</h2>
               <p className="text-white/60 text-xl font-medium leading-relaxed max-w-2xl">
                  {transparency[lang].quote}
               </p>
               <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[2px] text-white/40">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {transparency[lang].badge1}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[2px] text-white/40">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {transparency[lang].badge2}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[2px] text-white/40">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {transparency[lang].badge3}
                  </div>
               </div>
               <Link href="#" className="flex items-center gap-3 text-base font-black text-primary hover:gap-6 underline underline-offset-8 transition-all">
                  {transparency[lang].link} <ExternalLink className="w-4 h-4"/>
               </Link>
            </div>
         </div>
      </section>

      {/* Final Footer CTA */}
      <div className="flex flex-col items-center mt-20">
         <h4 className="text-3xl md:text-4xl font-black italic mb-10 text-center text-secondary dark:text-white max-w-4xl leading-tight">
            {finalCta[lang].title}
         </h4>
         <Magnetic>
           <Link href={`/${lang}/sign`} className="swiss-button px-12 py-6 font-black text-2xl shadow-[0_20px_50px_rgba(227,6,19,0.3)] group">
              {finalCta[lang].btn} <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-smooth" />
           </Link>
         </Magnetic>
      </div>
    </div>
  );
}

// Custom Icons for Premium Look
function BankIcon(props: any) { return <Landmark {...props} />; }
function PlatformIcon(props: any) { return <CreditCard {...props} />; }
function QrIcon(props: any) { return <QrCode {...props} />; }
