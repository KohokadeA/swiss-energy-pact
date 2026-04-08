'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Database, Network, Lock, UserCheck, Globe } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    title: "The Digital Age",
    subtitle: "A New Frontier for Switzerland",
    text: "Switzerland relies on digital systems for state, economy, and society. Our critical infrastructure must remain secure.",
    icon: Globe,
  },
  {
    title: "Art. 57a",
    subtitle: "Digital Security in the Constitution",
    text: "The Confederation determines security rules for all public and private actors in Switzerland's digital space.",
    icon: Shield,
  },
  {
    title: "Protect & Support",
    subtitle: "Infrastructure Resilience",
    text: "It protects its data and digital infrastructure and provides subsidiary support to operators of critical infrastructures.",
    icon: Network,
  },
  {
    title: "Digital Integrity",
    subtitle: "Protecting Citizens",
    text: "It guarantees the protection of personal data and the digital integrity of all individuals.",
    icon: UserCheck,
  },
  {
    title: "Sovereignty",
    subtitle: "Independence Guaranteed",
    text: "Our digital and informational infrastructure remains independent from any influence contrary to its interests.",
    icon: Lock,
  },
  {
    title: "Data Literacy",
    subtitle: "Empowering Society",
    text: "It encourages the development of data literacy and digital skills within society.",
    icon: Database,
  }
];

export default function VideoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center font-sans tracking-tight">
      <div className="absolute inset-0 z-0">
        <Image
          src="/swiss_digital_pact_hero_v5.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center brightness-[0.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-10 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, y: -30, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 5, 0] }}
              transition={{ duration: 1, delay: 0.3 }}
              className="p-8 bg-[#e30613]/20 rounded-full border border-[#e30613]/40 shadow-[0_0_60px_rgba(227,6,19,0.4)] mb-8"
            >
              {React.createElement(slides[currentSlide].icon, { className: "w-24 h-24 text-[#e30613]" })}
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#e30613] tracking-[0.3em] uppercase mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8 drop-shadow-2xl"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-2xl md:text-4xl text-white/80 font-semibold leading-relaxed max-w-4xl"
            >
              {slides[currentSlide].text}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-10 right-10 flex gap-4 z-20">
        {slides.map((_, i) => (
          <div key={i} className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
            {i === currentSlide && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-[#e30613]"
              />
            )}
            {i < currentSlide && <div className="h-full w-full bg-[#e30613]/50" />}
          </div>
        ))}
      </div>

      <div className="absolute top-10 left-10 z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#e30613] rounded-lg flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <p className="text-white font-black text-xl leading-none">SWISS DIGITAL PACT</p>
            <p className="text-white/50 font-bold text-xs uppercase tracking-widest mt-1">Federal Initiative</p>
          </div>
        </div>
      </div>
    </div>
  );
}
