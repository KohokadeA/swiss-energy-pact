import { getDictionary, Locale } from '@/lib/dictionary';

export default function SupportPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = getDictionary(lang);
  
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-secondary dark:text-white leading-[0.9] tracking-tighter">
        {dict.nav.support.toUpperCase()}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
        Content for the Support page is under construction. Please check back later.
      </p>
    </div>
  );
}
