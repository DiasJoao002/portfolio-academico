import React from 'react';
import { skillsData } from '@/app/lib/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;