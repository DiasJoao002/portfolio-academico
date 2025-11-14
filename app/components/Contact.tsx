import React from 'react';
import { contactData } from '@/app/lib/data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <div className="flex justify-center space-x-4">
        {contactData.map((link, index) => (
           <a 
            key={index}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;