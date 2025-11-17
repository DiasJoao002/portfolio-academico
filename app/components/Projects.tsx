import React from 'react';
import { projectsData } from '@/app/lib/data';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-16">
          <FolderGit2 className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-zinc-900">Principais Projetos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-zinc-50 border border-zinc-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-zinc-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Descrições com hierarquia visual */}
              <div className="space-y-4 grow text-zinc-600 mb-8">
                <p><strong className="text-zinc-900">O Problema:</strong> {project.problem}</p>
                <p className="text-sm bg-white p-4 rounded-lg border border-zinc-100 italic">
                  "{project.approach}"
                </p>
                {/* Ocultamos detalhes técnicos extensos aqui para limpar o visual, mas mantemos o resultado */}
                <p><strong className="text-zinc-900">Resultados:</strong> {project.results}</p>
              </div>

              {/* Tecnologias como Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(',').map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-zinc-200/50 text-zinc-600 rounded-md">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rodapé do Card com Links e Ícones */}
              <div className="pt-6 mt-auto border-t border-zinc-200 flex gap-4">
                {project.links.map((link, linkIndex) => {
                  // Lógica simples para escolher ícone
                  const Icon = link.href.includes('github') ? Github : ExternalLink;
                  
                  return (
                    <a 
                      key={linkIndex}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;