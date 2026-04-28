import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Mail, MapPin, Phone, Shield, ExternalLink, Facebook, Linkedin, Instagram } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';

export const Footer = ({ lang }: { lang: Locale }) => {
  const dict = getDictionary(lang);

  const footerTextsMap = {
    en: {
      description: "Ensuring Switzerland's digital sovereignty through direct democracy. Neutral, citizen-funded, and essential for our future.",
      explore: "Explore",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      mediaKit: "Press & Media Kit",
      copyright: `© ${new Date().getFullYear()} Swiss Digital Pact Committee`,
      madeFor: "Designed for Switzerland"
    },
    de: {
      description: "Die digitale Souveränität der Schweiz durch direkte Demokratie sichern. Neutral, bürgerfinanziert und für unsere Zukunft unverzichtbar.",
      explore: "Entdecken",
      legal: "Rechtliches",
      privacy: "Datenschutzrichtlinie",
      terms: "Allgemeine Geschäftsbedingungen",
      mediaKit: "Presse- und Medienkit",
      copyright: `© ${new Date().getFullYear()} Komitee des Schweizer Digital-Pakts`,
      madeFor: "Für die Schweiz gemacht"
    },
    it: {
      description: "Garantire la sovranità digitale della Svizzera attraverso la democrazia diretta. Neutrale, finanziato dai cittadini e essenziale per il nostro futuro.",
      explore: "Esplora",
      legal: "Legale",
      privacy: "Politica sulla privacy",
      terms: "Termini e condizioni",
      mediaKit: "Kit Stampa e Media",
      copyright: `© ${new Date().getFullYear()} Comitato del Patto Digitale Svizzero`,
      madeFor: "Progettato per la Svizzera"
    },
    fr: {
      description: "Garantir la souveraineté numérique de la Suisse par la démocratie directe. Neutre, financée par les citoyens et essentielle pour notre avenir.",
      explore: "Explorer",
      legal: "Légal",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      mediaKit: "Kit Presse et Média",
      copyright: `© ${new Date().getFullYear()} Comité du Pacte Numérique Suisse`,
      madeFor: "Conçu pour la Suisse"
    }
  };

  const footerTexts = footerTextsMap[lang] || footerTextsMap.fr;

  return (
    <footer className="bg-secondary text-white dark:bg-black py-8 mb-0 relative overflow-hidden border-t border-white/5">
      {/* Abstract Background for Premium Feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-[0.02] rounded-full -mr-[10%] -mt-[10%] blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="flex flex-col gap-6">
          <Link href={`/${lang}`} className="flex items-center gap-3 group">

          {/* Logo container */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-300">
            <img
              src="/new_logo.png"
              alt="Swiss Digital Pact Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span className="font-bold text-lg lg:text-xl tracking-tight leading-none group-hover:text-primary transition-colors whitespace-nowrap">
              {dict.title.toUpperCase()}
            </span>
            <span className="text-[9px] uppercase font-medium text-gray-500 tracking-[0.1em] leading-snug mt-1 max-w-[250px]">
              {dict.subtitle.split(':').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part.trim()}{i < arr.length - 1 ? ':' : ''}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </div>

        </Link>
          <p className="text-gray-400 max-w-xs leading-relaxed text-xs font-medium">
            {footerTexts.description}
          </p>
          <div className="flex gap-4">
            {[Linkedin, Instagram, Facebook].map((Icon, idx) => (
              <Link key={idx} href="#" className="p-2.5 bg-white/5 hover:bg-primary transition-all rounded-xl group border border-white/5">
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:pl-12">
          <h3 className="font-black text-[10px] uppercase tracking-widest mb-4 text-primary">{footerTexts.explore}</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <li><Link href={`/${lang}`} className="hover:text-white transition-colors">{dict.nav.home}</Link></li>
            <li><Link href={`/${lang}/initiative`} className="hover:text-white transition-colors">{dict.nav.initiative}</Link></li>
            <li><Link href={`/${lang}/sign`} className="hover:text-white transition-colors">{dict.nav.sign}</Link></li>
            <li><Link href={`/${lang}/support`} className="hover:text-white transition-colors">{dict.nav.support}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-[10px] uppercase tracking-widest mb-4 text-primary">{footerTexts.legal}</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-xs font-bold">
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2">{footerTexts.privacy} <ExternalLink className="w-3 h-3 opacity-50"/></Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2">{footerTexts.terms} <ExternalLink className="w-3 h-3 opacity-50"/></Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">{footerTexts.mediaKit}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-[10px] uppercase tracking-widest mb-4 text-primary">Contact</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="flex items-center gap-4 group cursor-pointer">
              <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-all" />
              <span className="text-gray-300 font-bold text-xs break-all tracking-tight">info@swissdigitalpact.ch</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <MapPin className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-all" />
              <span className="text-gray-300 font-bold text-xs">CP 456, 1000 Lausanne</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-black uppercase tracking-[3px]">
        <p>{footerTexts.copyright}</p>
        <p className="flex items-center gap-2">{footerTexts.madeFor} <span className="text-primary w-2 h-2 rounded-full bg-primary" /></p>
      </div>
    </footer>
  );
};
