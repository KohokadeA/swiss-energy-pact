import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Send, Landmark, Clock, ExternalLink, MessageCircle, ArrowRight, ShieldCheck, Twitter, Facebook, Instagram } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Swiss Digital Pact',
  description: 'Reach out to the Swiss Digital Pact committee for inquiries, media requests, or support.',
};

export default function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl overflow-hidden min-h-screen">
      <header className="mb-32 text-center max-w-4xl mx-auto relative animate-in fade-in duration-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black tracking-[4px] uppercase mb-10 shadow-sm border border-primary/5">
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          Direct Access
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-12 text-secondary dark:text-white leading-[0.8] tracking-tighter italic font-serif">
           LET'S <span className="text-primary not-italic underline decoration-1 decoration-dashed underline-offset-[16px]">TALK</span>.
        </h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
          Our committee represents all 26 cantons. We communicate in all four Swiss national languages.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-start relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        {/* Contact Form Section - Premium Design */}
        <section className="animate-in slide-in-from-left duration-1000">
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-12 lg:p-20 rounded-[4rem] shadow-4xl shadow-gray-200/50 dark:shadow-none transition-all duration-700 hover:-translate-y-6 hover:shadow-5xl hover:border-primary/20 relative">
            <h2 className="text-4xl font-black mb-12 tracking-tight">Send an Inquiry</h2>
            <form className="space-y-10 group/form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Muster Peter" 
                    className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="p.muster@email.ch" 
                    className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-1">Select Department</label>
                <div className="relative group/select">
                   <select className="w-full px-8 py-5 rounded-[2rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold appearance-none">
                     <option>General Support</option>
                     <option>Media & Press Relations</option>
                     <option>Regional Committees</option>
                     <option>Technical Inquiries</option>
                   </select>
                   <ArrowRight className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-1">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can our committee assist you?" 
                  className="w-full px-8 py-6 rounded-[2.5rem] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:opacity-50 resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="swiss-button w-full flex items-center justify-center gap-4 py-8 text-2xl font-black group-hover/form:bg-primary transition-all shadow-xl active:scale-95"
              >
                Send Message <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-smooth" />
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Content Section */}
        <section className="flex flex-col gap-20 animate-in slide-in-from-right duration-1000 py-10 lg:py-20 lg:sticky top-32">
          <div className="flex flex-col gap-20">
            <div>
               <h2 className="text-4xl font-black mb-16 tracking-tight">Technical Office</h2>
               <ul className="space-y-12">
                 {[
                   { icon: Mail, label: "Official Email", value: "info@swissdigitalpact.ch" },
                   { icon: Phone, label: "Media Line", value: "+41 22 000 00 00" },
                   { icon: MapPin, label: "Committee Address", value: "Swiss Digital Pact, CP 456, 1000 Lausanne" },
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-8 group">
                     <div className="w-16 h-16 bg-primary group-hover:bg-primary-dark rounded-[2rem] flex items-center justify-center text-white transition-all shadow-2xl shadow-primary/20 group-hover:scale-110 group-hover:rotate-6">
                       <item.icon className="w-8 h-8 flex-shrink-0" />
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-[4px] text-gray-400 mb-2">{item.label}</span>
                       <span className="text-2xl font-bold text-secondary dark:text-white group-hover:text-primary transition-all break-all tracking-tight leading-none">{item.value}</span>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="pt-20 border-t border-gray-100 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="flex flex-col gap-4 p-8 bg-gray-100 dark:bg-black/60 rounded-[3rem] border border-gray-200 dark:border-gray-900 group hover:border-primary transition-all">
                  <div className="flex items-center gap-3 text-primary">
                    <Clock className="w-6 h-6" />
                    <span className="font-black uppercase text-[10px] tracking-[4px]">Accessibility</span>
                  </div>
                  <p className="text-gray-500 font-bold leading-relaxed">Mon-Fri: 09:00 - 18:00 (Swiss Time)</p>
               </div>
               <div className="flex flex-col gap-4 p-8 bg-gray-100 dark:bg-black/60 rounded-[3rem] border border-gray-200 dark:border-gray-900 group hover:border-primary transition-all">
                  <div className="flex items-center gap-3 text-primary">
                    <ExternalLink className="w-6 h-6" />
                    <span className="font-black uppercase text-[10px] tracking-[4px]">Media Kit</span>
                  </div>
                  <p className="text-gray-500 font-bold">Download official assets &rarr;</p>
               </div>
            </div>

            <div className="flex gap-8 p-10 bg-secondary dark:bg-black rounded-[3.5rem] text-white items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-all duration-1000 -z-10" />
               <ShieldCheck className="w-16 h-16 text-primary flex-shrink-0" />
               <div className="flex flex-col">
                  <h4 className="text-xl font-black">Secure Inquiries</h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">All data is encrypted and stored according to Swiss federal protection laws.</p>
               </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-48 py-24 border-t border-gray-100 dark:border-gray-800 text-center flex flex-col items-center gap-10">
         <h3 className="text-4xl font-black">Social Sovereignty</h3>
         <div className="flex gap-10">
            {[Twitter, Instagram, Facebook].map((Icon, idx) => (
              <Link key={idx} href="#" className="p-8 bg-gray-100 dark:bg-zinc-900 hover:bg-primary transition-all duration-500 rounded-[2.5rem] group border border-gray-200 dark:border-gray-800">
                <Icon className="w-10 h-10 text-gray-400 group-hover:text-white transition-all transform group-hover:scale-125" />
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
