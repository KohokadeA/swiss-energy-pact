import React from 'react';
import { Newspaper, Play, FileText, Download, ArrowRight, Video, Mail, ExternalLink } from 'lucide-react';

export default function MediaPage() {
  const sections = [
    {
      title: "Our Newsletter",
      icon: Mail,
      items: [
        { title: "Monthly Digest: October 2026", date: "Oct 31, 2026", desc: "A roundup of our activities, new signatures, and committee updates.", videoId: undefined },
        { title: "Quarterly Report: Q3 2026", date: "Sep 30, 2026", desc: "Detailed breakdown of the initiative's progress across cantons.", videoId: undefined }
      ]
    },
    {
      title: "Videos",
      icon: Video,
      items: [
        { title: "Swiss Digital Initiative Introduction", date: "Recent", desc: "An overview of our goals and the path to digital sovereignty.", videoId: "31L6YgUu-j0" },
        { title: "Why We Need a Digital Pact", date: "Recent", desc: "Understanding the challenges and opportunities for Switzerland.", videoId: "vWyEw-vVXKs" },
        { title: "Expert Discussion on Cyber Security", date: "Recent", desc: "Insights from leading figures in the Swiss digital space.", videoId: "mqCJixX--yM" }
      ]
    },
    {
      title: "Articles",
      icon: FileText,
      items: [
        { title: "Federal Initiative reaches 50,000 signatures", date: "Dec 01, 2026", desc: "Halfway to our goal, the public response has been overwhelming.", videoId: undefined },
        { title: "Why Cloud Neutrality is the Next Frontier", date: "Nov 15, 2026", desc: "An in-depth look at data residency in Switzerland.", videoId: undefined }
      ]
    },
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
         <h1 className="text-5xl lg:text-7xl font-black mb-8 text-secondary dark:text-white leading-tight tracking-tight">
           Media Center
         </h1>
         <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
           Stay updated with our newsletter, videos, articles, and shared content from outside regarding the Swiss Digital Pact.
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
                   {item.videoId ? (
                     <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-black relative">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${item.videoId}`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                     </div>
                   ) : (
                     <span className="text-xs font-bold text-gray-400 mb-3 block">{item.date}</span>
                   )}
                   <h3 className="text-xl font-black leading-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                   <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 flex-grow">{item.desc}</p>
                   {!item.videoId && (
                     <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-primary transition-colors">
                       Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                     </div>
                   )}
                 </div>
               ))}
             </div>
             
             {section.title === "Videos" && (
               <div className="mt-8 flex justify-center">
                 <a href="https://www.youtube.com/@swissdigitalinitiative5615" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                   <Play className="w-5 h-5" fill="currentColor" /> Subscribe to our YouTube Channel
                 </a>
               </div>
             )}
           </div>
         ))}
       </div>
    </div>
  );
}
