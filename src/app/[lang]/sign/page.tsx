'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Printer, PenTool, Send, AlertTriangle, FileCheck, Landmark, ShieldCheck, ArrowDown, ChevronRight, Scale } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export default function SignPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  const steps = [
    {
      icon: Download,
      title: dict.sign.step1,
      description: dict.sign.step1d,
      color: "bg-red-500",
      link: "/signature_form.pdf"
    },
    {
      icon: Printer,
      title: dict.sign.step2,
      description: dict.sign.step2d,
      color: "bg-orange-500"
    },
    {
      icon: PenTool,
      title: dict.sign.step3,
      description: dict.sign.step3d,
      color: "bg-blue-500"
    },
    {
      icon: Send,
      title: dict.sign.step4,
      description: dict.sign.step4d,
      color: "bg-green-500"
    }
  ];

  const content = {
    en: {
      title: "To sign is to pave the way",
      desc: '"A popular initiative begins with a simple gesture. By signing, you help to include the digital security and sovereignty of Switzerland in the national debate."',
      form1: "Official",
      form2: "Form",
      formDesc: "Download the PDF form now. Remember that only Swiss citizens with the right to vote can participate.",
      download: "DOWNLOAD FORM",
      pdf: "OFFICIAL PDF",
      reminders: "Legal Reminders",
      rule1: "Swiss citizens with voting rights ONLY.",
      rule2: "Handwritten signature in ink REQUIRED.",
      rule3: "Clearly indicate your domicile.",
      mailing: "Mailing Address",
      comm: "Swiss Digital Pact Committee",
      questions: "Questions? Contact us"
    },
    fr: {
      title: "Signer, c'est ouvrir la voie",
      desc: '"Une initiative populaire commence par un geste simple. En signant, vous aidez à inscrire dans le débat national la sécurité et la souveraineté numérique de la Suisse."',
      form1: "Formulaire",
      form2: "Officiel",
      formDesc: "Téléchargez le formulaire PDF maintenant. N'oubliez pas que seuls les citoyens suisses ayant le droit de vote peuvent participer.",
      download: "TÉLÉCHARGER LE FORMULAIRE",
      pdf: "PDF OFFICIEL",
      reminders: "Rappels Légaux",
      rule1: "Citoyens suisses avec droit de vote UNIQUEMENT.",
      rule2: "Signature manuscrite à l'encre OBLIGATOIRE.",
      rule3: "Indiquer clairement le domicile.",
      mailing: "Adresse d'expédition",
      comm: "Comité du Pacte Numérique Suisse",
      questions: "Des questions ? Contactez-nous"
    },
    de: {
      title: "Unterzeichnen heisst den Weg ebnen",
      desc: '"Eine Volksinitiative beginnt mit einer einfachen Geste. Mit Ihrer Unterschrift tragen Sie dazu bei, die digitale Sicherheit und Souveränität der Schweiz in die nationale Debatte einzubringen."',
      form1: "Offizielles",
      form2: "Formular",
      formDesc: "Laden Sie das PDF-Formular jetzt herunter. Denken Sie daran, dass nur stimmberechtigte Schweizer Bürgerinnen und Bürger teilnehmen können.",
      download: "FORMULAR HERUNTERLADEN",
      pdf: "OFFIZIELLES PDF",
      reminders: "Rechtliche Hinweise",
      rule1: "NUR stimmberechtigte Schweizer Bürger.",
      rule2: "Handschriftliche Unterschrift mit Tinte ERFORDERLICH.",
      rule3: "Geben Sie Ihren Wohnort deutlich an.",
      mailing: "Postanschrift",
      comm: "Komitee Schweizer Digital-Pakt",
      questions: "Fragen? Kontaktieren Sie uns"
    },
    it: {
      title: "Firmare è aprire la strada",
      desc: '"Un\'iniziativa popolare inizia con un gesto semplice. Firmando, contribuite a inserire la sicurezza e la sovranità digitale della Svizzera nel dibattito nazionale."',
      form1: "Modulo",
      form2: "Ufficiale",
      formDesc: "Scaricate ora il modulo PDF. Ricordate che solo i cittadini svizzeri con diritto di voto possono partecipare.",
      download: "SCARICA IL MODULO",
      pdf: "PDF UFFICIALE",
      reminders: "Promemoria Legali",
      rule1: "SOLO cittadini svizzeri con diritto di voto.",
      rule2: "Firma autografa a inchiostro OBBLIGATORIA.",
      rule3: "Indicare chiaramente il domicilio.",
      mailing: "Indirizzo postale",
      comm: "Comitato del Patto Digitale Svizzero",
      questions: "Domande? Contattateci"
    }
  };

  const t = content[lang] || content['fr'];

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
      <header className="text-center max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100/50 dark:bg-red-900/20 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          {dict.common.howToSign}
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter italic font-serif">
           {t.title}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-bold leading-relaxed max-w-2xl mx-auto">
          {t.desc}
        </p>
      </header>

      {/* Steps Visualizer */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full mb-24 relative"
      >
        <div className="hidden lg:block absolute top-[20%] left-[10%] right-[10%] h-1 border-t-4 border-dashed border-gray-100 dark:border-gray-800 -z-10" />
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            className="flex flex-col items-center text-center group translate-y-0 hover:-translate-y-4 transition-all duration-700 bg-white dark:bg-zinc-900/40 p-10 rounded-[3rem] border border-gray-50 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-primary/20 relative"
          >
            <div className="absolute top-0 right-0 p-4 font-black text-5xl text-gray-100/30 dark:text-gray-800/20 leading-none select-none group-hover:text-primary/10 transition-all">0{idx + 1}</div>
            <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              <step.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black mb-4 leading-tight">{step.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Action Block */}
      <div className="w-full bg-secondary dark:bg-zinc-900 p-12 lg:p-24 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-16 shadow-3xl relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary opacity-[0.05] rounded-full translate-x-20 translate-y-20 blur-[100px] group-hover:scale-125 transition-all duration-1000" />
        
        <div className="flex-1 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left z-10">
          <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all duration-500">
             <FileCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter">{t.form1} <br /> <span className="text-primary italic underline decoration-4 underline-offset-[12px]">{t.form2}</span>.</h2>
          <p className="text-white/60 text-lg font-bold leading-relaxed max-w-xl">
             {t.formDesc}
          </p>
          <Link href="/signature_form.pdf" download="Swiss_Digital_Pact_Signature_Form.pdf" className="swiss-button py-6 px-12 text-2xl font-black group-hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_-12px_rgba(227,6,19,0.4)] flex items-center gap-4">
            <Download className="w-8 h-8" /> {t.download}
          </Link>
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[3px] text-white/30">
             <ArrowDown className="w-3 h-3" /> {t.pdf} | 16 KB
          </div>
        </div>

        <div className="lg:w-1/3 bg-white/5 border border-white/10 p-10 rounded-[3.5rem] backdrop-blur-xl z-10 relative overflow-hidden group/card shadow-2xl">
           <AlertTriangle className="w-10 h-10 text-amber-500 mb-6" />
           <h4 className="text-xl font-black mb-4">{t.reminders}</h4>
           <ul className="space-y-4 text-white/60 text-xs font-bold">
             <li className="flex items-start gap-4 p-4 rounded-xl bg-black/20 group-hover/card:bg-primary/10 transition-all">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                {t.rule1}
             </li>
             <li className="flex items-start gap-4 p-4 rounded-xl bg-black/20 group-hover/card:bg-primary/10 transition-all">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                {t.rule2}
             </li>
             <li className="flex items-start gap-4 p-4 rounded-xl bg-black/20 group-hover/card:bg-primary/10 transition-all">
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                {t.rule3}
             </li>
           </ul>
        </div>
      </div>
      
      {/* Postal Address Block */}
      <div className="mt-24 flex flex-col items-center">
         <h4 className="text-[9px] font-black uppercase tracking-[5px] text-gray-500 mb-8">{t.mailing}</h4>
         <div className="p-12 rounded-[3.5rem] bg-gray-100 dark:bg-black/60 border-2 border-gray-200 dark:border-gray-900 text-center flex flex-col items-center gap-6 group hover:border-primary transition-all duration-700 shadow-xl shadow-gray-200/50 relative overflow-hidden max-w-4xl w-full">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-all" />
           <div className="w-16 h-16 bg-white dark:bg-zinc-900 text-primary rounded-[1.5rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-gray-100 dark:border-gray-800">
             <Landmark className="w-8 h-8" />
           </div>
           <div className="text-3xl lg:text-4xl font-black text-secondary dark:text-gray-200 tracking-tighter leading-tight italic font-serif">
             {t.comm}<br />
             <span className="not-italic text-gray-400 font-bold">CP 456, 1000 Lausanne</span>
           </div>
           <Link href={`/${lang}/contact`} className="px-8 py-3 bg-gray-200 dark:bg-gray-800 rounded-2xl font-black uppercase text-[9px] tracking-widest hover:bg-primary hover:text-white transition-all transition-smooth">
             {t.questions} <ChevronRight className="w-4 h-4 inline ml-2"/>
           </Link>
         </div>
      </div>
    </div>
  );
}
