import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Send, Landmark, Clock, ExternalLink, MessageCircle, ArrowRight, ShieldCheck, Linkedin, Facebook, Instagram } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact - Swiss Digital Pact',
  description: 'Contact the Swiss Digital Pact committee for questions, media inquiries, or support.',
};

export default function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  const contactText = {
    en: {
      badge: "Direct Access",
      title1: "LET'S ",
      title2: "TALK",
      desc: 'Do you have a question about the text, the collection of signatures, the committee, the campaign or the media? We answer you with clarity, in the spirit of this initiative: seriousness, openness and sense of the common good.',
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
      desc: 'Vous avez une question sur le texte, la récolte de signatures, le comité, la campagne ou les médias? Nous vous répondons avec clarté, dans l\'esprit de cette initiative: sérieux, ouverture et sens du bien commun.',
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
      desc: 'Haben Sie eine Frage zum Text, zur Unterschriftensammlung, zum Komitee, zur Kampagne oder zu den Medien? Wir antworten Ihnen mit Klarheit, ganz im Geist dieser Initiative: Seriosität, Offenheit und Sinn für das Gemeinwohl.',
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
      desc: 'Avete una domanda sul testo, sulla raccolta delle firme, sul comitato, sulla campagna o sui media? Vi rispondiamo con chiarezza, nello spirito di questa iniziativa: serietà, apertura e senso del bene comune.',
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
    <div className="container mx-auto px-6 pt-28 pb-6 lg:pt-32 max-w-7xl overflow-hidden">
      {/* Header Section */}
      <ScrollReveal>
        <div className="text-center max-w-4xl mx-auto mb-10 relative flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-6 shadow-sm border border-primary/5 w-fit">
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-secondary leading-[0.9] tracking-tighter">
             {t.title1}<span className="text-primary not-italic underline decoration-1 decoration-dashed underline-offset-[16px]">{t.title2}</span>.
          </h1>
          <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-2xl text-center mx-auto">
            {t.desc}
          </p>
        </div>
      </ScrollReveal>

      {/* Info Section (Parallel) */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto mb-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Mail, label: t.labelMail, value: "initiative@swissdigitalpact.ch" },
              { icon: MapPin, label: t.labelAddress, value: "Marktgasse 55, 3011 Bern, Switzerland" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary group-hover:bg-primary-dark rounded-[1.5rem] flex items-center justify-center text-white transition-all shadow-xl shadow-primary/20 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-7 h-7 flex-shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[4px] text-gray-600 mb-1">{item.label}</span>
                  <span className="text-xl font-bold text-secondary group-hover:text-primary transition-all break-all tracking-tight leading-none">{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Bottom Section: Form */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-700 hover:border-primary/20 relative">
            <h2 className="text-2xl font-black mb-6 tracking-tight text-secondary">{t.formTitle}</h2>
            <form action="mailto:initiative@swissdigitalpact.ch" method="get" className="space-y-6 group/form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelName}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Muster Peter"
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:text-gray-400 text-sm text-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelEmail}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="p.muster@email.ch"
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:text-gray-400 text-sm text-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelDept}</label>
                <div className="relative group/select">
                   <select name="department" className="w-full px-6 py-4 rounded-[1.5rem] bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold appearance-none text-sm text-gray-900">
                     <option>{t.deptSupport}</option>
                     <option>{t.deptMedia}</option>
                     <option>{t.deptRegional}</option>
                     <option>{t.deptTechnical}</option>
                   </select>
                   <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 rotate-90" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{t.labelMessage}</label>
                <textarea
                  rows={4}
                  name="body"
                  placeholder={t.messagePlaceholder}
                  className="w-full px-6 py-5 rounded-[2rem] bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:text-gray-400 resize-none text-sm text-gray-900"
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
      </ScrollReveal>
    </div>
  );
}
