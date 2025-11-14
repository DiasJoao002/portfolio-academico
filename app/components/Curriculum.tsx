import React from 'react';
import { educationData, achievementsData } from '@/app/lib/data';

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Currículo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Formação Acadêmica</h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-xl font-bold">{edu.course}</h4>
                  <p className="text-gray-600">{edu.institution} ({edu.period})</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Principais Conquistas</h3>
            <div className="space-y-4">
              {achievementsData.map((ach, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h4 className="text-xl font-bold">{ach.title}</h4>
                  <p className="text-gray-600">{ach.description}</p>
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