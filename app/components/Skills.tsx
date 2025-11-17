import React from 'react';
import { skillsData } from '@/app/lib/data';
import { Code2, Users } from 'lucide-react';

const Skills = () => {
  // return (
  //   <section id="skills" className="py-20 bg-gray-50">
  //     <div className="container mx-auto px-4">
  //       <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
  //       <div className="grid md:grid-cols-2 gap-8">
  //         {skillsData.map((category, index) => (
  //           <div key={index}>
  //             <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
  //             <ul className="list-disc list-inside space-y-2">
  //               {category.skills.map((skill, skillIndex) => (
  //                 <li key={skillIndex}>{skill}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section id="skills" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-zinc-800">Minhas Habilidades</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
              <div className="flex items-center gap-3 mb-6">
                {/* Ícone condicional baseado no título (Hard vs Soft) */}
                {index === 0 ? <Code2 className="text-blue-600" /> : <Users className="text-green-600" />}
                <h3 className="text-xl font-bold text-zinc-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors cursor-default
                      ${index === 0 
                        ? 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-200' // Hard Skills (Azul)
                        : 'bg-green-50 text-green-700 border-green-100 hover:border-green-200' // Soft Skills (Verde)
                      }
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;