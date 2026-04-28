import React from 'react';
import { Handshake, Building2, Globe } from 'lucide-react';

export default function PartnersPage() {
  const tiers = [
    { 
      name: "Strategic Partners", 
      size: "h-32",
      partners: ["Swiss Cyber Defense Group", "Helvetia Data Systems", "Alpine Secure Cloud"]
    },
    { 
      name: "Supporting Organizations", 
      size: "h-24",
      partners: ["Geneva Privacy Trust", "Zürich Tech Alliance", "Digital Future Foundation", "Swiss IT Coalition", "Romandie Cyber", "National Privacy Network"]
    },
    { 
      name: "Academic & Research", 
      size: "h-20",
      partners: ["Swiss Institute of Tech", "Bern Data Science Lab", "Lausanne Crypto Hub", "Cyber Policy Institute"]
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 max-w-7xl min-h-screen">
       <header className="text-center max-w-4xl mx-auto mb-20 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
           <Handshake className="w-4 h-4" />
           Our Network
         </div>
         <h1 className="text-5xl lg:text-7xl font-black mb-8 text-secondary dark:text-white leading-tight tracking-tight">
           Partners & Sponsors
         </h1>
         <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
           Logos of the partners and sponsors depending on the Tier they are. A strong coalition committed to Switzerland's digital sovereignty.
         </p>
       </header>

       <div className="space-y-24 mb-24">
         {tiers.map((tier, idx) => (
           <div key={idx} className="flex flex-col items-center">
             <h3 className="text-[10px] font-black uppercase tracking-[5px] text-gray-400 mb-8">{tier.name}</h3>
             <div className="flex flex-wrap justify-center gap-6 w-full">
               {tier.partners.map((partnerName, i) => (
                 <div key={i} className={`w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] ${tier.size} bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-3xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group px-4 text-center overflow-hidden relative`}>
                   <img 
                     src={`https://ui-avatars.com/api/?name=${encodeURIComponent(partnerName)}&background=random&color=fff&size=150`} 
                     alt={partnerName}
                     className="w-12 h-12 rounded-xl mb-2 object-cover group-hover:scale-110 transition-transform duration-500 shadow-sm" 
                   />
                   <span className="font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">{partnerName}</span>
                 </div>
               ))}
             </div>
           </div>
         ))}
       </div>

       <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 p-12 rounded-[4rem] text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-6 relative z-10 border border-gray-100 dark:border-gray-800">
             <Globe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-4 relative z-10 text-secondary dark:text-white">Become a Partner</h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto mb-8 relative z-10">
            Join our growing alliance. By becoming a partner, you actively contribute to the framework that secures the digital future of Switzerland.
          </p>
          <button className="relative z-10 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-[0_20px_40px_-10px_rgba(227,6,19,0.4)] hover:scale-105 transition-transform">
            Contact Partnerships Team
          </button>
       </div>
    </div>
  );
}
