import React from 'react';
import { certificationsData } from '@/app/lib/data';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Award className="w-8 h-8 text-yellow-500" />
          <h2 className="text-3xl font-bold text-zinc-900">Certificações e Reconhecimentos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Área da Imagem com efeito de zoom sutil */}
              <div className="relative h-48 overflow-hidden bg-zinc-200">
                {/* Usamos img normal aqui, mas em produção real recomendamos o componente Image do Next.js */}
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <p className="text-base font-semibold text-zinc-800 leading-snug group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;