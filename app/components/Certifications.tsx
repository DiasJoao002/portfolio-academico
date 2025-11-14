import React from 'react';
import { certificationsData } from '@/app/lib/data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certificações e Reconhecimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="text-lg font-semibold text-gray-800">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;