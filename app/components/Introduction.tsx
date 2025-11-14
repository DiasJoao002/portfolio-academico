import React from 'react';
import { introductionData } from '@/app/lib/data';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 text-center">
      <h1 className="text-4xl font-bold">{introductionData.headline}</h1>
      <h2 className="text-2xl mt-2">{introductionData.subheadline}</h2>
      <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
        {introductionData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default Introduction;