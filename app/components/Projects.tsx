import React from 'react';
import { projectsData } from '@/app/lib/data';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Principais Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4"><strong>O Problema:</strong> {project.problem}</p>
              <p className="text-gray-700 mb-4"><strong>Minha Abordagem:</strong> {project.approach}</p>
              <p className="text-gray-700 mb-4"><strong>Tecnologias:</strong> {project.technologies}</p>
              <p className="text-gray-700 mb-4"><strong>Desafio:</strong> {project.challenge}</p>
              <p className="text-gray-700 mb-4"><strong>Resultados:</strong> {project.results}</p>
              {project.links.map((link, linkIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;