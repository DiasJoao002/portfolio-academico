import React from 'react';
import { documentsData } from '@/app/lib/data';

const Documents = () => {
  return (
    <section id="documents" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Documentos e Trabalhos</h2>
        <div className="space-y-8">
          {documentsData.map((doc, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{doc.category}</h3>
              <h4 className="text-lg font-semibold">{doc.title}</h4>
              <p className="text-gray-700 mt-2">{doc.summary}</p>
              <div className="mt-4">
                {doc.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline mr-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;