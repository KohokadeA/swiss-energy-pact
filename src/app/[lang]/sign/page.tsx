'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Printer, PenTool, Send, AlertTriangle, FileCheck, Landmark, ShieldCheck, ArrowDown, ChevronRight, Scale } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export default function SignPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  const stepsContent = {
    en: [
      { icon: Download, title: "Download PDF", description: "Save the official Swiss Digital Pact signature form.", color: "bg-red-500", link: "/signature_form.pdf" },
      { icon: Printer, title: "Print A4", description: "The signature must be on a physical paper sheet.", color: "bg-orange-500" },
      { icon: PenTool, title: "Sign Ink", description: "Sign manually with a pen (blue or black ink).", color: "bg-blue-500",
        reminders: ["Swiss citizens with voting rights ONLY.", "Handwritten signature in ink REQUIRED.", "Clearly indicate your domicile."]
      },
      { icon: Send, title: "Mail it", description: "Send by post to our office in Berne (no stamp needed).", color: "bg-green-500",
        address: "Marktgasse 55, 3011 Berne"
      }
    ],
    fr: [
      { icon: Download, title: "Télécharger le PDF", description: "Enregistrez le formulaire officiel de signature du Pacte Numérique Suisse.", color: "bg-red-500", link: "/signature_form.pdf" },
      { icon: Printer, title: "Imprimer A4", description: "La signature doit figurer sur une feuille de papier physique.", color: "bg-orange-500" },
      { icon: PenTool, title: "Signer à l'encre", description: "Signez manuellement au stylo (encre bleue ou noire).", color: "bg-blue-500",
        reminders: ["Citoyens suisses avec droit de vote UNIQUEMENT.", "Signature manuscrite à l'encre OBLIGATOIRE.", "Indiquer clairement le domicile."]
      },
      { icon: Send, title: "Envoyer", description: "Envoyez par la poste à notre bureau à Berne (pas de timbre nécessaire).", color: "bg-green-500",
        address: "Marktgasse 55, 3011 Berne"
      }
    ],
    de: [
      { icon: Download, title: "PDF herunterladen", description: "Speichern Sie das offizielle Unterschriftenformular des Schweizer Digital-Pakts.", color: "bg-red-500", link: "/signature_form.pdf" },
      { icon: Printer, title: "A4 drucken", description: "Die Unterschrift muss auf einem physischen Papierblatt sein.", color: "bg-orange-500" },
      { icon: PenTool, title: "Mit Tinte unterschreiben", description: "Unterschreiben Sie handschriftlich mit einem Kugelschreiber (blaue oder schwarze Tinte).", color: "bg-blue-500",
        reminders: ["NUR stimmberechtigte Schweizer Bürger.", "Handschriftliche Unterschrift mit Tinte ERFORDERLICH.", "Geben Sie Ihren Wohnort deutlich an."]
      },
      { icon: Send, title: "Abschicken", description: "Per Post an unser Büro in Bern senden (kein Porto erforderlich).", color: "bg-green-500",
        address: "Marktgasse 55, 3011 Berne"
      }
    ],
    it: [
      { icon: Download, title: "Scarica PDF", description: "Salvate il modulo ufficiale di firma del Patto Digitale Svizzero.", color: "bg-red-500", link: "/signature_form.pdf" },
      { icon: Printer, title: "Stampa A4", description: "La firma deve essere su un foglio di carta fisico.", color: "bg-orange-500" },
      { icon: PenTool, title: "Firma a inchiostro", description: "Firmate manualmente con una penna (inchiostro blu o nero).", color: "bg-blue-500",
        reminders: ["SOLO cittadini svizzeri con diritto di voto.", "Firma autografa a inchiostro OBBLIGATORIA.", "Indicare chiaramente il domicilio."]
      },
      { icon: Send, title: "Spedire", description: "Inviate per posta al nostro ufficio a Berna (nessun francobollo necessario).", color: "bg-green-500",
        address: "Marktgasse 55, 3011 Berne"
      }
    ]
  };

  const steps = stepsContent[lang] || stepsContent['fr'];

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
    <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 max-w-7xl overflow-hidden min-h-screen">
      <header className="text-center max-w-4xl mx-auto mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100/50 dark:bg-red-900/20 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          {dict.common.howToSign}
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter">
           {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
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
            className="flex flex-col items-center text-center group translate-y-0 hover:-translate-y-4 transition-all duration-700 bg-white dark:bg-zinc-900/40 p-8 rounded-[3rem] border border-gray-50 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-primary/20 relative"
          >
            <div className="absolute top-0 right-0 p-4 font-black text-5xl text-gray-100/30 dark:text-gray-800/20 leading-none select-none group-hover:text-primary/10 transition-all">0{idx + 1}</div>
            <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              <step.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black mb-3 leading-tight">{step.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-relaxed">{step.description}</p>

            {/* Legal Reminders integrated into Step 3 */}
            {step.reminders && (
              <div className="mt-5 w-full space-y-2">
                {step.reminders.map((rule, ri) => (
                  <div key={ri} className="flex items-start gap-2 text-left p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/30">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                    <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 leading-snug">{rule}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Mailing Address integrated into Step 4 */}
            {step.address && (
              <div className="mt-5 w-full p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200/50 dark:border-green-800/30 text-center">
                <p className="text-[10px] font-black text-green-800 dark:text-green-300 uppercase tracking-wider">{step.address}</p>
              </div>
            )}
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
      </div>
    </div>
  );
}
