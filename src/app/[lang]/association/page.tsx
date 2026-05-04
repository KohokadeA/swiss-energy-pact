import React from 'react';
import { Users, Target, ChevronRight } from 'lucide-react';

export default function AssociationPage() {
  const members = [
    { name: "Gérald Vernez", role: "President", initials: "GV" },
    { name: "Diego Kuonen", role: "Vice-President", initials: "DK" },
    { name: "Daniel Fasel", role: "Vice-President", initials: "DF" },
    { name: "Reiny Schnyder", role: "Communication Manager", initials: "RS" },
    { name: "Massimo Rodella", role: "Secretary-General", initials: "MR" },
    { name: "Alexandre Dimitrijevic", role: "Member of the initiative committee", initials: "AD" },
  ];

  return (
    <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-40 max-w-7xl min-h-screen">
       <header className="text-center max-w-4xl mx-auto mb-20 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-[0.05] rounded-full blur-[100px] -z-10" />
         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
           <Users className="w-4 h-4" />
           The Committee
         </div>
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter">
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
             <p>The Association supports the federal popular initiative “For Switzerland’s digital security,” which aims to strengthen the country’s digital security, sovereignty, and resilience.</p>
             <p>The Association may also contribute to public debate, supports the development of data literacy and digital skills, and helps shape institutional proposals related to digital security.</p>
           </div>
         </section>

         {/* Committee Members */}
         <section className="mt-12">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-5xl font-black mb-6 text-secondary dark:text-white">Committee Members</h2>
             <p className="text-gray-500 font-medium text-lg">The dedicated team driving the initiative forward.</p>
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
             {members.map((member, i) => (
               <div key={i} className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/80 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-105 transition-transform border-2 border-white dark:border-zinc-700">
                   {member.initials}
                 </div>
                 <div>
                   <h3 className="font-black text-sm text-secondary dark:text-white leading-tight">{member.name}</h3>
                   <p className="text-primary font-bold text-[9px] uppercase tracking-widest mt-1">{member.role}</p>
                 </div>
               </div>
             ))}
           </div>
         </section>

         {/* Advisory Committee */}
         <section className="mt-24">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-5xl font-black mb-6 text-secondary dark:text-white">Advisory Committee</h2>
             <p className="text-primary font-bold text-lg uppercase tracking-[0.3em] animate-pulse">Currently being formed</p>
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 opacity-20 grayscale pointer-events-none">
              {[1,2,3,4,5].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-4 p-6 bg-gray-50 dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 text-center">
                   <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center" />
                   <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-800 rounded mx-auto" />
                </div>
              ))}
           </div>
         </section>

         {/* Join as a member box */}
         <section className="mt-12 p-12 lg:p-16 rounded-[4rem] bg-secondary dark:bg-black text-white text-center shadow-2xl relative overflow-hidden group border border-white/5">
           <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
           <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
             <h2 className="text-4xl lg:text-5xl font-black">Join as a member</h2>
             <div className="space-y-6">
               <p className="text-white text-lg font-bold leading-relaxed">
                 Become an official part of the association and directly support the Swiss Digital Pact's mission to secure our digital future.
               </p>
               <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
                 Membership is subject to an annual fee, which helps fund our activities, public engagement, and the advancement of the initiative.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-white/90 font-bold bg-white/5 p-6 rounded-3xl border border-white/10">
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-widest text-primary mb-1">Students / reduced</span>
                   <span className="text-xl text-white">CHF 50</span>
                 </div>
                 <div className="hidden sm:block w-px h-10 bg-white/10" />
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-widest text-primary mb-1">Individuals</span>
                   <span className="text-xl text-white">CHF 100</span>
                 </div>
                 <div className="hidden sm:block w-px h-10 bg-white/10" />
                 <div className="flex flex-col">
                   <span className="text-[10px] uppercase tracking-widest text-primary mb-1">Organizations</span>
                   <span className="text-xl text-white">CHF 150</span>
                 </div>
               </div>
             </div>
             <button className="mt-6 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(227,6,19,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
               Apply Now <ChevronRight className="w-5 h-5" />
             </button>
           </div>
         </section>
       </div>
    </div>
  );
}
