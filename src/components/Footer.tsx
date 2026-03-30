import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Shield, ExternalLink, Facebook, Twitter, Instagram } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export const Footer = ({ lang }: { lang: Locale }) => {
  const dict = getDictionary(lang);

  return (
    <footer className="bg-secondary text-white dark:bg-black py-12 mb-0 relative overflow-hidden">
      {/* Abstract Background for Premium Feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary opacity-[0.03] rounded-full -mr-[10%] -mt-[10%] blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div className="flex flex-col gap-10">
          <Link href={`/${lang}`} className="flex items-center gap-4 group">
            <div className="bg-primary p-3 rounded-2xl group-hover:scale-110 transition-all shadow-lg shadow-primary/20">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter leading-none">
                SWISS DIGITAL PACT
              </span>
              <span className="text-xs uppercase font-bold text-gray-500 tracking-[0.2em] mt-1">
                Popular Initiative
              </span>
            </div>
          </Link>
          <p className="text-gray-400 max-w-xs leading-relaxed text-sm font-medium">
            Helping Switzerland maintain its neutrality and sovereignty in a digitized world. We are a citizens' initiative for the future.
          </p>
          <div className="flex gap-6">
            {[Twitter, Instagram, Facebook].map((Icon, idx) => (
              <Link key={idx} href="#" className="p-3 bg-white/5 hover:bg-primary transition-all rounded-2xl group border border-white/5">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-xs uppercase tracking-[4px] mb-10 text-primary">Quick Links</h3>
          <ul className="flex flex-col gap-5 text-gray-400 font-bold">
            <li><Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.nav.home}</Link></li>
            <li><Link href={`/${lang}/initiative`} className="hover:text-white transition-colors">{dict.nav.initiative}</Link></li>
            <li><Link href={`/${lang}/sign`} className="hover:text-white transition-colors">{dict.nav.sign}</Link></li>
            <li><Link href={`/${lang}/support`} className="hover:text-white transition-colors">{dict.nav.support}</Link></li>
            <li><Link href={`/${lang}/contact`} className="hover:text-white transition-colors font-medium opacity-60 hover:opacity-100">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-xs uppercase tracking-[4px] mb-10 text-primary">Resources</h3>
          <ul className="flex flex-col gap-5 text-gray-400 font-bold">
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2">Privacy Policy <ExternalLink className="w-3 h-3 opacity-50"/></Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2">Legal Terms <ExternalLink className="w-3 h-3 opacity-50"/></Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2">Official Portal <ExternalLink className="w-3 h-3 opacity-50"/></Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Media Assets</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-xs uppercase tracking-[4px] mb-10 text-primary">Contact</h3>
          <ul className="flex flex-col gap-6 text-gray-400">
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
              <Mail className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-all" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest mb-1">Email Us</span>
                <span className="text-gray-300 font-bold transition-colors">info@swissdigitalpact.ch</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
              <MapPin className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-all" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest mb-1">Headquarters</span>
                <span className="text-gray-300 font-bold transition-colors">CP 456, 1000 Lausanne</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-[10px] font-black uppercase tracking-[3px]">
        <p>&copy; {new Date().getFullYear()} Swiss Digital Pact Committee</p>
        <p>Made for Switzerland. Built on Technology.</p>
      </div>
    </footer>
  );
};
