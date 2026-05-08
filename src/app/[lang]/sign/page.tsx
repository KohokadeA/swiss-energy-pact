import { getDictionary, Locale } from '@/lib/dictionary';

export default function SignPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter text-center">
        {dict.sign.h.toUpperCase()}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-4xl font-bold text-primary mb-4">01</div>
          <h3 className="text-xl font-bold mb-2 text-secondary dark:text-white">{dict.sign.step1}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{dict.sign.step1d}</p>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-4xl font-bold text-primary mb-4">02</div>
          <h3 className="text-xl font-bold mb-2 text-secondary dark:text-white">{dict.sign.step2}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{dict.sign.step2d}</p>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-4xl font-bold text-primary mb-4">03</div>
          <div className="text-xl font-bold mb-2 text-secondary dark:text-white">{dict.sign.step3}</div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{dict.sign.step3d}</p>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-4xl font-bold text-primary mb-4">04</div>
          <h3 className="text-xl font-bold mb-2 text-secondary dark:text-white">{dict.sign.step4}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{dict.sign.step4d}</p>
        </div>
      </div>
    </div>
  );
}
