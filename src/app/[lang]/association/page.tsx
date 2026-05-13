import React from 'react';
import { Users, Target, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';


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
    <div className="container mx-auto px-6 pt-20 pb-6 lg:pt-24 max-w-7xl">
       <ScrollReveal>
         <header className="text-center max-w-4xl mx-auto mb-10 relative">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-[9px] font-black tracking-[4px] uppercase mb-8 shadow-sm">
             <Users className="w-4 h-4" />
             The Committee
           </div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter">
             Swiss Digital Pact Association
           </h1>
         </header>
       </ScrollReveal>

       <div className="flex flex-col gap-12">
         {/* Mission Statement */}
         <ScrollReveal>
            <section className="p-12 rounded-[3.5rem] bg-white border border-gray-200 shadow-sm relative overflow-hidden group">
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="p-3 bg-white border border-gray-200 rounded-xl text-primary">
                  <Target className="w-6 h-6" />
               </div>
               <h2 className="text-3xl font-black text-secondary dark:text-white">Mission of the association</h2>
             </div>
             <div className="space-y-6 text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed relative z-10 max-w-4xl">
               <p>The Association supports the federal popular initiative “For Switzerland’s digital security,” which aims to strengthen the country’s digital security, sovereignty, and resilience.</p>
               <p>The Association may also contribute to public debate, supports the development of data literacy and digital skills, and helps shape institutional proposals related to digital security.</p>
             </div>
           </section>
         </ScrollReveal>

         {/* Committee Members */}
         <section className="mt-12">
           <ScrollReveal>
             <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-4xl font-black mb-6 text-secondary dark:text-white">Committee Members</h2>
               <p className="text-gray-500 font-medium text-lg">The dedicated team driving the initiative forward.</p>
             </div>
           </ScrollReveal>

           <ScrollReveal>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
               {members.map((member, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 p-6 bg-white rounded-[2rem] border border-gray-200 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group h-full">
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
           </ScrollReveal>
         </section>

         {/* Advisory Committee */}
         <section className="mt-24">
           <ScrollReveal>
             <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-4xl font-black mb-6 text-secondary dark:text-white">Advisory Committee</h2>
               <p className="text-primary font-bold text-lg uppercase tracking-[0.3em] animate-pulse">Currently being formed</p>
             </div>
           </ScrollReveal>
           
           <ScrollReveal>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 opacity-20 grayscale pointer-events-none">
                {[1,2,3,4,5].map((_, i) => (
                     <div key={i} className="flex flex-col items-center gap-4 p-6 bg-white rounded-[2rem] border border-gray-200 text-center h-full">
                       <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center" />
                       <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-800 rounded mx-auto mt-4" />
                    </div>
                ))}
             </div>
           </ScrollReveal>
         </section>

         {/* Join as a member box */}
         <ScrollReveal>
            <section className="mt-12 p-12 lg:p-16 rounded-[4rem] bg-white text-secondary text-center shadow-sm relative overflow-hidden group border border-gray-200">
              <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-black text-secondary">Join as a member</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-bold leading-relaxed">
                    Become an official part of the association and directly support the Swiss Digital Pact's mission to secure our digital future.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                    Membership is subject to an annual fee, which helps fund our activities, public engagement, and the advancement of the initiative.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-secondary font-bold bg-white p-6 rounded-3xl border border-gray-200">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-primary mb-1">Students / reduced</span>
                      <span className="text-xl text-secondary">CHF 50</span>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-gray-200" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-primary mb-1">Individuals</span>
                      <span className="text-xl text-secondary">CHF 100</span>
                    </div>
                    <div className="hidden sm:block w-px h-10 bg-gray-200" />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-primary mb-1">Organizations</span>
                      <span className="text-xl text-secondary">CHF 150</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                  Apply Now <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>
         </ScrollReveal>
       </div>
    </div>
  );
}
