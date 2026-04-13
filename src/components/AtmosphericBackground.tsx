'use client';

import React from 'react';

export default function AtmosphericBackground() {
  return (
    <>
      {/* Cinematic Noise Texture */}
      <div className="noise-overlay" />

      {/* Floating Ambient Orbs */}
      <div 
        className="ambient-orb w-[600px] h-[600px] bg-primary/20 top-[-100px] left-[-100px]" 
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="ambient-orb w-[500px] h-[500px] bg-blue-500/10 bottom-[-100px] right-[-100px]" 
        style={{ animationDelay: '-5s' }}
      />
      <div 
        className="ambient-orb w-[400px] h-[400px] bg-white/10 top-[40%] right-[10%]" 
        style={{ animationDelay: '-10s' }}
      />
    </>
  );
}
