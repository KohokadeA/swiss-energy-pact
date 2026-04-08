import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldAlert, Fingerprint, Lock, Server, Cpu, Globe2, FileText, ChevronRight, Landmark, Link as LinkIcon, ArrowRight, ShieldCheck, Database, Scale, Network } from 'lucide-react';
import { type Locale, getDictionary } from '@/lib/dictionary';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'L\'Initiative - Pacte Numérique Suisse',
  description: 'Propositions spécifiques et modification constitutionnelle dans l\'initiative du Pacte Numérique Suisse.',
};

export default function InitiativePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);

  const articleText = {
    fr: `"Art. 57a : Pour la sécurité numérique de la Suisse\n1 La Confédération détermine les règles de sécurité pour tous les acteurs publics et privés dans l’espace numérique de la Suisse et en assure l’application.\n2 Elle protège ses données et ses infrastructures numériques et soutient subsidiairement les opérateurs d’infrastructures critiques.\n3 Elle garantit la protection des données personnelles et l’intégrité numérique des personnes.\n4 Elle garantit que les infrastructures, les services et les ressources numériques et informationnelles essentiels pour l’État, l’économie et la société soient en toute circonstance indépendants de toute influence contraire à ses intérêts.\n5 Elle encourage le développement de la littératie des données et des compétences numériques de la société.\n6 Elle prend, en coordination avec les acteurs académiques et économiques, des dispositions permettant d’anticiper les risques et les opportunités et ainsi de maintenir la Suisse parmi les nations les plus avancées et sûres dans el domaine numérique."`,
    en: `"Art. 57a: For the digital security of Switzerland\n1 The Confederation determines the security rules for all public and private actors in the Swiss digital space and ensures their application.\n2 It protects its data and digital infrastructures and subsidiarily supports the operators of critical infrastructures.\n3 It guarantees the protection of personal data and the digital integrity of individuals.\n4 It ensures that the infrastructures, services, and digital and informational resources essential for the State, the economy, and society remain in all circumstances independent of any influence contrary to its interests.\n5 It encourages the development of data literacy and digital skills in society.\n6 In coordination with academic and economic actors, it takes measures to anticipate risks and opportunities, thereby keeping Switzerland among the most advanced and secure nations in the digital field."`
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl overflow-hidden min-h-screen">
      {/* Premium Banner Header */}
      <header className="mb-20 relative text-center lg:text-left flex flex-col lg:flex-row gap-16 items-end">
        <div className="flex-1 animate-in slide-in-from-left duration-1000">
           <h1 className="text-6xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.8] tracking-tighter">
             {lang === 'en' ? "Why this " : "Pourquoi cette "}<span className="text-primary italic">initiative</span>
           </h1>
           <p className="text-xl text-gray-400 dark:text-gray-500 max-w-3xl leading-relaxed font-medium">
             {lang === 'en' ? '"Digital is no longer a subject reserved for specialists. It affects health, schools, energy, transport, municipalities, businesses, and families. Switzerland must therefore set a clear course: protect what matters, remain free in its choices, and prepare for its future."' : '"Le numérique n’est plus un sujet réservé aux spécialistes. Il touche la santé, l’école, l’énergie, les transports, les communes, les entreprises et les familles. La Suisse doit donc se donner un cap clair: protéger ce qui compte, rester libre de ses choix et préparer son avenir."'}
           </p>
        </div>
        <div className="lg:w-1/3 p-10 bg-secondary dark:bg-zinc-900 rounded-[3rem] text-white flex flex-col gap-6 shadow-2xl shadow-secondary/10 relative animate-in slide-in-from-right duration-1000 delay-300 overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-all duration-1000" />
           <ShieldCheck className="w-12 h-12 text-primary group-hover:scale-110 transition-all" />
           <h2 className="text-2xl font-black leading-tight">{lang === 'en' ? 'A Swiss Line' : 'Une ligne suisse'}</h2>
           <ul className="text-white/80 text-sm leading-relaxed font-medium list-disc list-inside space-y-2">
             <li>{lang === 'en' ? 'Not against the world.' : 'Pas contre le monde.'}</li>
             <li>{lang === 'en' ? 'For a strong Switzerland in the world.' : 'Pour une Suisse forte dans le monde.'}</li>
             <li>{lang === 'en' ? 'Not a sovereignty of closure.' : 'Pas une souveraineté de fermeture.'}</li>
             <li>{lang === 'en' ? 'A sovereignty of mastery.' : 'Une souveraineté de maîtrise.'}</li>
           </ul>
           <Link href={`/${lang}/sign`} className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">{lang === 'en' ? 'Download the form' : 'Télécharger le formulaire'} <ArrowRight className="w-4 h-4"/></Link>
        </div>
      </header>

      {/* Grid of Content Sections */}
      <div className="relative mb-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <section className="flex flex-col gap-8 p-10 rounded-[3rem] bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group">
            <Lock className="w-7 h-7 group-hover:rotate-12 transition-all" />
          </div>
          <h2 className="text-3xl font-black tracking-tight">{lang === 'en' ? 'Structural Change' : 'Changement Structurel'}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {(lang === 'en' ? [
              { t: "Security", d: "In the digital world too, a serious country sets serious rules." },
              { t: "Infrastructure Protection", d: "The vital is not left to chance." },
              { t: "Data protection & digital integrity", d: "Our data are not faceless commodities." },
              { t: "Sovereignty", d: "Cooperate with all, depend on no one against our interests." },
              { t: "Literacy and skills", d: "Digital freedom is built through understanding." },
              { t: "Anticipation and collaboration", d: "Invent here, develop here, make Switzerland shine." }
            ] : [
              { t: "Sécurité", d: "Dans le numérique aussi, un pays sérieux fixe des règles sérieuses." },
              { t: "Protection des infrastructures", d: "Le vital ne se laisse pas au hasard." },
              { t: "Protection des données et intégrité numérique", d: "Nos données ne sont pas des marchandises sans visage." },
              { t: "Souveraineté", d: "Coopérer avec tous, dépendre de personne contre nos intérêts." },
              { t: "Littératie et compétences", d: "La liberté numérique se construit par la compréhension." },
              { t: "Anticipation et collaboration", d: "Inventer ici, développer ici, faire rayonner la Suisse." }
            ]).map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1 p-5 rounded-2xl bg-gray-50/50 dark:bg-black/20 border border-gray-50 dark:border-gray-800 transition-all hover:bg-white dark:hover:bg-zinc-900 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-all" />
                  <span className="text-lg font-black text-secondary dark:text-white">{item.t}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-bold text-xs ml-5">"{item.d}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center gap-8 mb-16">
        <section className="w-full flex flex-col gap-8 p-10 rounded-[3rem] bg-secondary dark:bg-black/40 text-white transition-all shadow-xl hover:shadow-2xl border-t-4 border-primary">
          <div className="w-14 h-14 bg-white/10 text-primary rounded-2xl flex items-center justify-center group text-center mx-auto">
            <Scale className="w-7 h-7 group-hover:scale-110 transition-all" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-center">{lang === 'en' ? 'The Constitutional Article' : 'L\'article Constitutionnel'}</h2>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 font-serif italic text-xl leading-relaxed text-gray-300 shadow-inner whitespace-pre-wrap">
             {lang === 'en' ? articleText.en : articleText.fr}
          </div>
          <div className="text-center mt-2">
            <p className="text-gray-400 text-xs italic">
              {lang === 'en' ? '"The French text is the submitted reference text. Other language versions will be aligned with official translations."' : '"Le texte français est le texte de référence déposé. Les autres versions linguistiques seront alignées sur les traductions officielles."'}
            </p>
          </div>
          <div className="flex justify-between items-center px-4 mt-4">
             <span className="text-[10px] uppercase font-black tracking-widest text-primary">{lang === 'en' ? 'Constitutional Proposal v1.0' : 'Proposition Constitutionnelle v1.0'}</span>
             <Link href="#" className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/40 hover:text-white transition-all">{lang === 'en' ? 'Download full text' : 'Télécharger le texte intégral'} <LinkIcon className="w-3 h-3"/></Link>
          </div>
        </section>
      </div>

      {/* Visual Pillars Section - Changed to Technical Sub-themes */}
      {/* Visual Pillars Section - Changed to Technical Sub-themes */}
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] text-center mb-8">
        {lang === 'en' ? 'What this initiative wants' : 'Ce que cette initiative veut'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-10 rounded-[3.5rem] group overflow-hidden relative">
         <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.02] transition-all duration-1000 -z-10" />
         
         {(lang === 'en' ? [
           { icon: Fingerprint, t: "Protect the people", d: "" },
           { icon: Landmark, t: "Strengthen the country", d: "" },
           { icon: Globe2, t: "Prepare the future", d: "" }
         ] : [
           { icon: Fingerprint, t: "Protéger les personnes", d: "" },
           { icon: Landmark, t: "Renforcer le pays", d: "" },
           { icon: Globe2, t: "Préparer l'avenir", d: "" }
         ]).map((p, i) => (
           <div key={i} className="flex flex-col gap-4 text-center items-center py-2 px-4 border-r border-gray-200 dark:border-gray-800 last:border-0 border-dashed">
              <div className="w-10 h-10 text-primary group-hover:scale-125 transition-all duration-500"><p.icon className="w-full h-full" /></div>
              <h3 className="text-xl font-black text-secondary dark:text-white">{p.t}</h3>
           </div>
         ))}
      </div>

      <div className="mt-16 text-center p-16 bg-white dark:bg-black/40 rounded-[4rem] border-4 border-gray-100 dark:border-gray-900 shadow-2xl hover:border-primary transition-all duration-1000 group">
        <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tight leading-tight max-w-2xl mx-auto">
          {lang === 'en' ? "This initiative gives Switzerland a clear course for the years to come. " : "Cette initiative donne à la Suisse un cap clair pour les années à venir. "}
          <span className="text-primary italic">{lang === 'en' ? "Help anchor it in the constitution." : "Aidez à l’ancrer dans la Constitution."}</span>
        </h3>
        <Link href={`/${lang}/sign`} className="swiss-button mx-auto inline-flex items-center gap-4 py-4 px-12 text-xl font-black hover:scale-110 active:scale-95 group shadow-[0_0_80px_rgba(227,6,19,0.2)]">
           {lang === 'en' ? "Sign the initiative now" : "Signer l'initiative maintenant"} <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-smooth"/>
        </Link>
      </div>
    </div>
  );
}
