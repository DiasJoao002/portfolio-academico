import React from 'react';
import { introductionData } from '@/app/lib/data';
import { ArrowDown } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Badge sutil de boas-vindas */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
          Portfólio Acadêmico
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
          {introductionData.headline}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-zinc-500 font-medium mb-10">
          {introductionData.subheadline}
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
          {introductionData.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "font-medium text-zinc-800" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Indicador visual para rolar para baixo */}
        <div className="mt-16 flex justify-center animate-bounce text-blue-600">
          <div className='flex justify-center items-center w-12 h-12 rounded-full bg-blue-50'>
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;