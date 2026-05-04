import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

export default function MediaPage() {
  const sections = [
    {
      title: "Shared Content from Outside",
      icon: ExternalLink,
      items: [
        { title: "NZZ: Switzerland's Push for Digital Autonomy", date: "Nov 20, 2026", desc: "Coverage of the Swiss Digital Pact by the national press.", videoId: undefined },
        { title: "Le Temps: The Cybersecurity Debate", date: "Oct 25, 2026", desc: "Op-ed from leading cybersecurity experts supporting the initiative.", videoId: undefined }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 max-w-7xl min-h-screen">
       <header className="text-center max-w-4xl mx-auto mb-20 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
           <Newspaper className="w-4 h-4" />
           Press & Media
         </div>
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter">
           Media Center
         </h1>
         <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
           Stay updated with shared content from outside regarding the Swiss Digital Pact.
         </p>
       </header>

       <div className="space-y-16 mb-20">
         {sections.map((section, idx) => (
           <div key={idx} className="flex flex-col">
             <div className="flex items-center gap-3 mb-8">
               <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-primary">
                 <section.icon className="w-6 h-6" />
               </div>
               <h2 className="text-3xl font-black text-secondary dark:text-white">{section.title}</h2>
             </div>
             
             <div className={`grid grid-cols-1 md:grid-cols-2 ${section.items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
               {section.items.map((item, i) => (
                 <div key={i} className="group p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-1">
                   <span className="text-xs font-bold text-gray-400 mb-3 block">{item.date}</span>
                   <h3 className="text-xl font-black leading-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                   <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">{item.desc}</p>
                 </div>
               ))}
             </div>
           </div>
         ))}
       </div>
    </div>
  );
}
