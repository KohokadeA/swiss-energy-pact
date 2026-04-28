import React from 'react';
import { Users, Target, CheckCircle2, ChevronRight, UserCircle2 } from 'lucide-react';

export default function AssociationPage() {
  const members = [
    { 
      name: "Dr. Sarah Keller", 
      role: "President", 
      desc: "Expert in Cybersecurity Law",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      name: "Marc Dubois", 
      role: "Vice President", 
      desc: "Former Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      name: "Elena Romano", 
      role: "Secretary General", 
      desc: "Digital Policy Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      name: "Thomas Weber", 
      role: "Treasurer", 
      desc: "Financial Auditor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 max-w-7xl min-h-screen">
       <header className="text-center max-w-4xl mx-auto mb-20 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
           <Users className="w-4 h-4" />
           The Committee
         </div>
         <h1 className="text-5xl lg:text-7xl font-black mb-8 text-secondary dark:text-white leading-tight tracking-tight">
           Swiss Digital Pact Association
         </h1>
       </header>
       
       <div className="flex flex-col gap-12">
         {/* Mission Statement */}
         <section className="p-12 rounded-[3.5rem] bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden group">
           <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-1000" />
           <div className="flex items-center gap-4 mb-8 relative z-10">
             <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-primary">
                <Target className="w-6 h-6" />
             </div>
             <h2 className="text-3xl font-black text-secondary dark:text-white">Mission of the association</h2>
           </div>
           <div className="space-y-6 text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed relative z-10 max-w-4xl">
             <p>The Association aims to promote Switzerland's digital security, sovereignty, and resilience.</p>
             <p className="flex items-start gap-4">
               <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
               <span>In particular, it supports the federal popular initiative entitled "For Switzerland's digital security," as well as any action aimed at strengthening trust, security, and digital sovereignty of Switzerland.</span>
             </p>
           </div>
         </section>

         {/* Committee Members */}
         <section className="mt-12">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-5xl font-black mb-6 text-secondary dark:text-white">Committee Members</h2>
             <p className="text-gray-500 font-medium text-lg">The dedicated team driving the initiative forward.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {members.map((member, i) => (
               <div key={i} className="flex flex-col items-center gap-6 p-8 bg-gray-50 dark:bg-zinc-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                 <div className="w-32 h-32 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-gray-800 group-hover:scale-105 transition-transform overflow-hidden relative">
                   <img 
                     src={member.image} 
                     alt={member.name}
                     className="w-full h-full object-cover" 
                   />
                 </div>
                 <div>
                   <h3 className="font-black text-xl mb-1 text-secondary dark:text-white">{member.name}</h3>
                   <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3">{member.role}</p>
                   <p className="text-sm text-gray-500 font-medium">{member.desc}</p>
                 </div>
               </div>
             ))}
           </div>
         </section>

         {/* Join as a member box */}
         <section className="mt-12 p-12 lg:p-16 rounded-[4rem] bg-secondary dark:bg-black text-white text-center shadow-2xl relative overflow-hidden group border border-white/5">
           <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
           <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
             <h2 className="text-4xl lg:text-5xl font-black">Join as a member</h2>
             <p className="text-white/70 text-lg font-medium leading-relaxed">Become an official part of the association and directly support the Swiss Digital Pact's mission to secure our digital future.</p>
             <button className="mt-6 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(227,6,19,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
               Apply Now <ChevronRight className="w-5 h-5" />
             </button>
           </div>
         </section>
       </div>
    </div>
  );
}
