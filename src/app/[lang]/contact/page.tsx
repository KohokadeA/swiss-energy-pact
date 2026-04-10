import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Send, Landmark, Clock, ExternalLink, MessageCircle, ArrowRight, ShieldCheck, Twitter, Facebook, Instagram } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contactez-nous - Pacte Numérique Suisse',
  description: 'Contacter le comité du Pacte Numérique Suisse pour des questions, des demandes des médias ou du soutien.',
};

export default function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  const contactText = {
    en: {
      badge: "Direct Access",
      title1: "LET'S ",
      title2: "TALK",
      desc: '"Do you have a question about the text, the collection of signatures, the committee, the campaign or the media? We answer you with clarity, in the spirit of this initiative: seriousness, openness and sense of the common good."',
      formTitle: "Send a Request",
      labelName: "Full Name",
      labelEmail: "Email Address",
      labelDept: "Select Department",
      deptSupport: "General Support",
      deptMedia: "Media and Press Relations",
      deptRegional: "Regional Committees",
      deptTechnical: "Technical Requests",
      labelMessage: "Your Message",
      messagePlaceholder: "How can our committee help you?",
      sendBtn: "Send Message",
      officeTitle: "Technical Office",
      labelMail: "Official Email",
      labelPhone: "Media Line",
      labelAddress: "Committee Address",
      labelAccess: "Accessibility",
      accessHours: "Mon-Fri: 09:00 - 18:00 (Swiss Time)",
      labelMediaKit: "Media Kit",
      mediaKitDesc: "Download resources",
      secureTitle: "Secure Requests",
      secureDesc: "Data is encrypted according to Swiss protection laws.",
      socialTitle: "Social Sovereignty"
    },
    fr: {
      badge: "Accès Direct",
      title1: "PARLONS-",
      title2: "EN",
      desc: '"Vous avez une question sur le texte, la récolte de signatures, le comité, la campagne ou les médias? Nous vous répondons avec clarté, dans l’esprit de cette initiative: sérieux, ouverture et sens du bien commun."',
      formTitle: "Envoyer une Demande",
      labelName: "Nom Complet",
      labelEmail: "Adresse Email",
      labelDept: "Sélectionner le Département",
      deptSupport: "Support Général",
      deptMedia: "Relations Médias et Presse",
      deptRegional: "Comités Régionaux",
      deptTechnical: "Demandes Techniques",
      labelMessage: "Votre Message",
      messagePlaceholder: "Comment notre comité peut-il vous aider ?",
      sendBtn: "Envoyer le Message",
      officeTitle: "Bureau Technique",
      labelMail: "Email Officiel",
      labelPhone: "Ligne Média",
      labelAddress: "Adresse du Comité",
      labelAccess: "Accessibilité",
      accessHours: "Lun-Ven: 09:00 - 18:00 (Heure Suisse)",
      labelMediaKit: "Kit Média",
      mediaKitDesc: "Télécharger les ressources",
      secureTitle: "Demandes Sécurisées",
      secureDesc: "Les données sont chiffrées selon les lois suisses de protection.",
      socialTitle: "Souveraineté Sociale"
    },
    de: {
      badge: "Direkter Zugang",
      title1: "SPRECHEN WIR ",
      title2: "DARÜBER",
      desc: '"Haben Sie eine Frage zum Text, zur Unterschriftensammlung, zum Komitee, zur Kampagne oder zu den Medien? Wir antworten Ihnen mit Klarheit, ganz im Geist dieser Initiative: Seriosität, Offenheit und Sinn für das Gemeinwohl."',
      formTitle: "Anfrage senden",
      labelName: "Vollständiger Name",
      labelEmail: "E-Mail-Adresse",
      labelDept: "Abteilung auswählen",
      deptSupport: "Allgemeine Unterstützung",
      deptMedia: "Medien- und Pressearbeit",
      deptRegional: "Regionalkomitees",
      deptTechnical: "Technische Anfragen",
      labelMessage: "Ihre Nachricht",
      messagePlaceholder: "Wie kann unser Komitee Ihnen helfen?",
      sendBtn: "Nachricht senden",
      officeTitle: "Technisches Büro",
      labelMail: "Offizielle E-Mail",
      labelPhone: "Medien-Hotline",
      labelAddress: "Adresse des Komitees",
      labelAccess: "Erreichbarkeit",
      accessHours: "Mo-Fr: 09:00 - 18:00 (Schweizer Zeit)",
      labelMediaKit: "Media-Kit",
      mediaKitDesc: "Ressourcen herunterladen",
      secureTitle: "Sichere Anfragen",
      secureDesc: "Daten werden gemäss den Schweizer Datenschutzgesetzen verschlüsselt.",
      socialTitle: "Soziale Souveränität"
    },
    it: {
      badge: "Accesso Diretto",
      title1: "PARLIAMONE",
      title2: "ORA",
      desc: '"Avete una domanda sul testo, sulla raccolta delle firme, sul comitato, sulla campagna o sui media? Vi rispondiamo con chiarezza, nello spirito di questa iniziativa: serietà, apertura e senso del bene comune."',
      formTitle: "Invia una richiesta",
      labelName: "Nome completo",
      labelEmail: "Indirizzo e-mail",
      labelDept: "Seleziona dipartimento",
      deptSupport: "Supporto generale",
      deptMedia: "Relazioni con i media e la stampa",
      deptRegional: "Comitati regionali",
      deptTechnical: "Richieste tecniche",
      labelMessage: "Il tuo messaggio",
      messagePlaceholder: "Come può aiutarvi il nostro comitato?",
      sendBtn: "Invia messaggio",
      officeTitle: "Ufficio Tecnico",
      labelMail: "E-mail ufficiale",
      labelPhone: "Linea media",
      labelAddress: "Indirizzo del Comitato",
      labelAccess: "Accessibilità",
      accessHours: "Lun-Ven: 09:00 - 18:00 (Ora svizzera)",
      labelMediaKit: "Kit Media",
      mediaKitDesc: "Scarica le risorse",
      secureTitle: "Richieste sicure",
      secureDesc: "I dati sono crittografati secondo le leggi svizzere sulla protezione.",
      socialTitle: "Sovranità sociale"
    }
  };

  const t = contactText[lang] || contactText.fr;

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
      <header className="mb-20 text-center max-w-4xl mx-auto relative animate-in fade-in duration-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          {t.badge}
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter italic font-serif">
           {t.title1}<span className="text-primary not-italic underline decoration-1 decoration-dashed underline-offset-[16px]">{t.title2}</span>.
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          {t.desc}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        {/* Contact Form Section - Premium Design */}
        <section className="animate-in slide-in-from-left duration-1000">
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-10 lg:p-16 rounded-[3rem] shadow-xl shadow-gray-200/50 dark:shadow-none transition-all duration-700 hover:-translate-y-4 hover:shadow-4xl hover:border-primary/20 relative">
            <h2 className="text-3xl font-black mb-10 tracking-tight">{t.formTitle}</h2>
            <form className="space-y-8 group/form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelName}</label>
                  <input 
                    type="text" 
                    placeholder="Muster Peter" 
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelEmail}</label>
                  <input 
                    type="email" 
                    placeholder="p.muster@email.ch" 
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelDept}</label>
                <div className="relative group/select">
                   <select className="w-full px-6 py-4 rounded-[1.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold appearance-none text-sm">
                     <option>{t.deptSupport}</option>
                     <option>{t.deptMedia}</option>
                     <option>{t.deptRegional}</option>
                     <option>{t.deptTechnical}</option>
                   </select>
                   <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelMessage}</label>
                <textarea 
                  rows={4} 
                  placeholder={t.messagePlaceholder} 
                  className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 resize-none text-sm"
                />
              </div>
              <button 
                type="submit" 
                className="swiss-button w-full flex items-center justify-center gap-3 py-6 text-xl font-black group-hover/form:bg-primary transition-all shadow-lg active:scale-95"
              >
                {t.sendBtn} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth" />
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Content Section */}
        <section className="flex flex-col gap-16 animate-in slide-in-from-right duration-1000 lg:sticky top-24">
          <div className="flex flex-col gap-16">
            <div>
               <h2 className="text-3xl font-black mb-12 tracking-tight">{t.officeTitle}</h2>
               <ul className="space-y-10">
                 {[
                   { icon: Mail, label: t.labelMail, value: "info@swissdigitalpact.ch" },
                   { icon: Phone, label: t.labelPhone, value: "+41 22 000 00 00" },
                   { icon: MapPin, label: t.labelAddress, value: "CP 456, 1000 Lausanne" },
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-6 group">
                     <div className="w-14 h-14 bg-primary group-hover:bg-primary-dark rounded-[1.5rem] flex items-center justify-center text-white transition-all shadow-xl shadow-primary/20 group-hover:scale-110 group-hover:rotate-6">
                       <item.icon className="w-7 h-7 flex-shrink-0" />
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[9px] font-black uppercase tracking-[4px] text-gray-400 mb-1">{item.label}</span>
                       <span className="text-xl font-bold text-secondary dark:text-white group-hover:text-primary transition-all break-all tracking-tight leading-none">{item.value}</span>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="pt-12 border-t border-gray-100 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-3 p-6 bg-gray-100 dark:bg-black/60 rounded-[2.5rem] border border-gray-200 dark:border-gray-900 group hover:border-primary transition-all">
                  <div className="flex items-center gap-3 text-primary">
                    <Clock className="w-5 h-5" />
                    <span className="font-black uppercase text-[9px] tracking-[4px]">{t.labelAccess}</span>
                  </div>
                  <p className="text-gray-500 font-bold text-xs leading-relaxed">{t.accessHours}</p>
               </div>
               <div className="flex flex-col gap-3 p-6 bg-gray-100 dark:bg-black/60 rounded-[2.5rem] border border-gray-200 dark:border-gray-900 group hover:border-primary transition-all">
                  <div className="flex items-center gap-3 text-primary">
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-black uppercase text-[9px] tracking-[4px]">{t.labelMediaKit}</span>
                  </div>
                  <p className="text-gray-500 font-bold text-xs">{t.mediaKitDesc} &rarr;</p>
               </div>
            </div>

            <div className="flex gap-6 p-8 bg-secondary dark:bg-black rounded-[3rem] text-white items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-all duration-1000 -z-10" />
               <ShieldCheck className="w-12 h-12 text-primary flex-shrink-0" />
               <div className="flex flex-col">
                  <h4 className="text-lg font-black">{t.secureTitle}</h4>
                  <p className="text-white/40 text-xs font-medium leading-relaxed">{t.secureDesc}</p>
               </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20 py-16 border-t border-gray-100 dark:border-gray-800 text-center flex flex-col items-center gap-8">
         <h3 className="text-3xl font-black">{t.socialTitle}</h3>
         <div className="flex gap-6">
            {[Twitter, Instagram, Facebook].map((Icon, idx) => (
              <Link key={idx} href="#" className="p-6 bg-gray-100 dark:bg-zinc-900 hover:bg-primary transition-all duration-500 rounded-[2rem] group border border-gray-200 dark:border-gray-800">
                <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-all transform group-hover:scale-125" />
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
