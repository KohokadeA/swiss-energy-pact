import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, CreditCard, QrCode, Heart, Coffee, ShieldCheck, ExternalLink, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Soutenir - Pacte Numérique Suisse',
  description: 'Contribuez au mouvement du Pacte Numérique Suisse. Vos dons nous aident à assurer l\'avenir numérique de la Suisse.',
};

export default function SupportPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  const donationOptions = lang === 'en' ? [
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
  ] : [
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
  ];

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
      <header className="text-center max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
          <Heart className="w-4 h-4 flex-shrink-0" />
          {lang === 'en' ? "Support the movement" : "Soutenir le mouvement"}
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter">
           {lang === 'en' ? "Support a " : "Soutenir une voie "}<span className="text-primary italic underline decoration-1 decoration-dashed underline-offset-[16px]">suisse</span>{lang === 'en' ? " path" : ""}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          {lang === 'en' ? '"This initiative champions smart security and smart sovereignty: open, demanding, and human. Your support helps bring this vision to the public debate."' : '"Cette initiative défend une sécurité smart et une souveraineté smart: ouvertes, exigeantes et humaines. Votre soutien permet de porter cette vision dans le débat public."'}
        </p>
      </header>

      {/* Main Donation Grid - Premium Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24 relative">
        {donationOptions.map((option, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 flex flex-col p-10 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 group">
             <div className="w-20 h-20 bg-gray-50 dark:bg-black rounded-[2.5rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <option.icon className="w-10 h-10 text-secondary dark:text-white group-hover:text-primary transition-all" />
             </div>
             <h3 className="text-2xl font-black mb-4">{option.title}</h3>
             <p className="text-gray-500 dark:text-gray-400 mb-8 font-bold text-sm leading-relaxed flex-grow">{option.description}</p>
             <div className="bg-gray-100 dark:bg-black p-5 rounded-2xl mb-8 font-mono text-[9px] uppercase font-black tracking-widest border-2 border-dashed border-gray-200 dark:border-gray-800 break-words group-hover:border-primary/20 transition-all">
                {option.details}
             </div>
             <button className="swiss-button w-full py-5 flex items-center justify-center gap-3 text-base font-black group-hover:bg-primary shadow-lg group-hover:scale-105 active:scale-95 transition-all">
               {option.cta} {option.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
             </button>
          </div>
        ))}
      </div>

      {/* Large Featured Transparency CTA */}
      <section className="bg-secondary dark:bg-zinc-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden group shadow-3xl mb-24">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-[0.05] rounded-full translate-x-20 -translate-y-20 blur-[100px] group-hover:scale-150 transition-all duration-1000" />
         
         <div className="flex flex-col lg:flex-row gap-16 items-center z-10 relative">
            <div className="w-40 h-40 bg-white/5 rounded-full flex items-center justify-center border-4 border-primary/20 group-hover:scale-110 transition-all duration-700 shrink-0">
               <ShieldCheck className="w-20 h-20 text-primary" />
            </div>
            <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
               <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter italic">{lang === 'en' ? "Total" : "Une transparence"} <span className="text-primary not-italic underline decoration-4 underline-offset-[16px]">{lang === 'en' ? "transparency" : "totale"}</span>.</h2>
               <p className="text-white/60 text-xl font-medium leading-relaxed max-w-2xl">
                  {lang === 'en' ? '“A societal project must also be exemplary in its governance.”' : '“Un projet de société doit aussi être exemplaire dans sa gouvernance.”'}
               </p>
               <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[2px] text-white/40">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {lang === 'en' ? 'Registered Association' : 'Association Enregistrée'}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[2px] text-white/40">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {lang === 'en' ? 'Swiss Bank Accounts' : 'Comptes Bancaires Suisses'}
                  </div>
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[2px] text-white/40">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {lang === 'en' ? 'Annual Audit (FINMA)' : 'Audit Annuel (FINMA)'}
                  </div>
               </div>
               <Link href="#" className="flex items-center gap-3 text-base font-black text-primary hover:gap-6 underline underline-offset-8 transition-all">
                  {lang === 'en' ? 'Financial Records (PDF)' : 'Dossiers Financiers (PDF)'} <ExternalLink className="w-4 h-4"/>
               </Link>
            </div>
         </div>
      </section>

      {/* Final Footer CTA */}
      <div className="flex flex-col items-center mt-20">
         <h4 className="text-3xl md:text-4xl font-black italic mb-10 text-center text-secondary dark:text-white max-w-4xl leading-tight">
            {lang === 'en' ? '"A sovereign digital future is a collective responsibility."' : '"Un avenir numérique souverain est une responsabilité collective."'}
         </h4>
         <Link href={`/${lang}/sign`} className="swiss-button px-10 py-4 font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-xl flex items-center gap-4 group">
            {lang === 'en' ? "Sign the initiative now" : "Signer l'initiative maintenant"} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth" />
         </Link>
      </div>
    </div>
  );
}

// Custom Icons for Premium Look
function BankIcon(props: any) { return <Landmark {...props} />; }
function PlatformIcon(props: any) { return <CreditCard {...props} />; }
function QrIcon(props: any) { return <QrCode {...props} />; }
