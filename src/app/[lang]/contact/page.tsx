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

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
      <header className="mb-20 text-center max-w-4xl mx-auto relative animate-in fade-in duration-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm border border-primary/5">
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          {lang === 'en' ? "Direct Access" : "Accès Direct"}
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter italic font-serif">
           {lang === 'en' ? "LET'S " : "PARLONS-"}<span className="text-primary not-italic underline decoration-1 decoration-dashed underline-offset-[16px]">{lang === 'en' ? "TALK" : "EN"}</span>.
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          {lang === 'en' ? '"Do you have a question about the text, the collection of signatures, the committee, the campaign or the media? We answer you with clarity, in the spirit of this initiative: seriousness, openness and sense of the common good."' : '"Vous avez une question sur le texte, la récolte de signatures, le comité, la campagne ou les médias? Nous vous répondons avec clarté, dans l’esprit de cette initiative: sérieux, ouverture et sens du bien commun."'}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        {/* Contact Form Section - Premium Design */}
        <section className="animate-in slide-in-from-left duration-1000">
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-10 lg:p-16 rounded-[3rem] shadow-xl shadow-gray-200/50 dark:shadow-none transition-all duration-700 hover:-translate-y-4 hover:shadow-4xl hover:border-primary/20 relative">
            <h2 className="text-3xl font-black mb-10 tracking-tight">{lang === 'en' ? "Send a Request" : "Envoyer une Demande"}</h2>
            <form className="space-y-8 group/form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{lang === 'en' ? "Full Name" : "Nom Complet"}</label>
                  <input 
                    type="text" 
                    placeholder="Muster Peter" 
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{lang === 'en' ? "Email Address" : "Adresse Email"}</label>
                  <input 
                    type="email" 
                    placeholder="p.muster@email.ch" 
                    className="w-full px-6 py-4 rounded-[1.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{lang === 'en' ? "Select Department" : "Sélectionner le Département"}</label>
                <div className="relative group/select">
                   <select className="w-full px-6 py-4 rounded-[1.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold appearance-none text-sm">
                     <option>{lang === 'en' ? "General Support" : "Support Général"}</option>
                     <option>{lang === 'en' ? "Media and Press Relations" : "Relations Médias et Presse"}</option>
                     <option>{lang === 'en' ? "Regional Committees" : "Comités Régionaux"}</option>
                     <option>{lang === 'en' ? "Technical Requests" : "Demandes Techniques"}</option>
                   </select>
                   <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-500 ml-1">{lang === 'en' ? "Your Message" : "Votre Message"}</label>
                <textarea 
                  rows={4} 
                  placeholder={lang === 'en' ? "How can our committee help you?" : "Comment notre comité peut-il vous aider ?"} 
                  className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 resize-none text-sm"
                />
              </div>
              <button 
                type="submit" 
                className="swiss-button w-full flex items-center justify-center gap-3 py-6 text-xl font-black group-hover/form:bg-primary transition-all shadow-lg active:scale-95"
              >
                {lang === 'en' ? "Send Message" : "Envoyer le Message"} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth" />
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Content Section */}
        <section className="flex flex-col gap-16 animate-in slide-in-from-right duration-1000 lg:sticky top-24">
          <div className="flex flex-col gap-16">
            <div>
               <h2 className="text-3xl font-black mb-12 tracking-tight">{lang === 'en' ? "Technical Office" : "Bureau Technique"}</h2>
               <ul className="space-y-10">
                 {[
                   { icon: Mail, label: lang === 'en' ? "Official Email" : "Email Officiel", value: "info@swissdigitalpact.ch" },
                   { icon: Phone, label: lang === 'en' ? "Media Line" : "Ligne Média", value: "+41 22 000 00 00" },
                   { icon: MapPin, label: lang === 'en' ? "Committee Address" : "Adresse du Comité", value: "CP 456, 1000 Lausanne" },
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
                    <span className="font-black uppercase text-[9px] tracking-[4px]">{lang === 'en' ? "Accessibility" : "Accessibilité"}</span>
                  </div>
                  <p className="text-gray-500 font-bold text-xs leading-relaxed">{lang === 'en' ? "Mon-Fri: 09:00 - 18:00 (Swiss Time)" : "Lun-Ven: 09:00 - 18:00 (Heure Suisse)"}</p>
               </div>
               <div className="flex flex-col gap-3 p-6 bg-gray-100 dark:bg-black/60 rounded-[2.5rem] border border-gray-200 dark:border-gray-900 group hover:border-primary transition-all">
                  <div className="flex items-center gap-3 text-primary">
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-black uppercase text-[9px] tracking-[4px]">{lang === 'en' ? "Media Kit" : "Kit Média"}</span>
                  </div>
                  <p className="text-gray-500 font-bold text-xs">{lang === 'en' ? "Download resources" : "Télécharger les ressources"} &rarr;</p>
               </div>
            </div>

            <div className="flex gap-6 p-8 bg-secondary dark:bg-black rounded-[3rem] text-white items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-all duration-1000 -z-10" />
               <ShieldCheck className="w-12 h-12 text-primary flex-shrink-0" />
               <div className="flex flex-col">
                  <h4 className="text-lg font-black">{lang === 'en' ? "Secure Requests" : "Demandes Sécurisées"}</h4>
                  <p className="text-white/40 text-xs font-medium leading-relaxed">{lang === 'en' ? "Data is encrypted according to Swiss protection laws." : "Les données sont chiffrées selon les lois suisses de protection."}</p>
               </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20 py-16 border-t border-gray-100 dark:border-gray-800 text-center flex flex-col items-center gap-8">
         <h3 className="text-3xl font-black">{lang === 'en' ? "Social Sovereignty" : "Souveraineté Sociale"}</h3>
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
