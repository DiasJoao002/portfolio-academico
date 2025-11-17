import React from 'react';
import { educationData, achievementsData } from '@/app/lib/data';
import { GraduationCap, Trophy } from 'lucide-react';

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-zinc-900">Minha Jornada</h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Coluna Acadêmica */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-blue-600"/>
              <h3 className="text-2xl font-bold text-zinc-800">Formação</h3>
            </div>
            <div className="space-y-8 border-l-2 border-zinc-300 ml-3 pl-8 py-2">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Bolinha da timeline */}
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-zinc-300 bg-white" />
                  
                  <h4 className="text-lg font-bold text-zinc-900">{edu.course}</h4>
                  <p className="text-blue-500 font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-zinc-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Conquistas */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-zinc-800">Conquistas</h3>
            </div>
            <div className="space-y-6">
              {achievementsData.map((ach, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">{ach.title}</h4>
                  <p className="text-zinc-600 text-sm">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;