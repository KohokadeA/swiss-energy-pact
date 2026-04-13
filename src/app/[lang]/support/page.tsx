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
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
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

      {/* Committee Membership Section */}
      <section className="mb-24 p-12 lg:p-20 bg-white dark:bg-zinc-900 rounded-[4rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden group">
         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary text-primary rounded-full text-[9px] font-black tracking-[3px] uppercase mb-8 shadow-sm">
                  <Sparkles className="w-4 h-4" /> Join the Movement
               </div>
               <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                  {dict.pactDetails.s6.title}
               </h2>
               <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed mb-8">
                  {dict.pactDetails.s6.text}
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "No operational responsibilities",
                    "No financial commitment",
                    "No partisan engagement",
                    "National representation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-gray-800">
                       <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                       <span className="text-xs font-black uppercase tracking-wider text-secondary dark:text-gray-300">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="w-full lg:w-1/3">
               <div className="p-10 bg-secondary rounded-[3rem] text-white flex flex-col gap-8 shadow-2xl relative overflow-hidden">
                  <h3 className="text-2xl font-black italic">Interested?</h3>
                  <p className="text-white/60 text-sm font-medium">Contact us to learn more about how to support the Swiss Digital Pact as a committee member.</p>
                  <Link href={`/${lang}/contact`} className="swiss-button w-full py-5 text-center font-black">
                     Contact Us
                  </Link>
               </div>
            </div>
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
