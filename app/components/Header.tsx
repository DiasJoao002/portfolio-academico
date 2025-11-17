"use client"
import { MenuIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Header = () => {
    // Estado para controlar se a página foi rolada
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Se rolar mais de 10px, ativa o efeito
        setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        // Limpeza do evento ao desmontar o componente (boa prática)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    // Z-50 garante que fique acima de tudo
    // bg-white/80 dá a cor branca mas deixa passar luz para o blur funcionar
    // backdrop-blur-md é um desfoque médio, mais elegante que o -sm
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-zinc-200 shadow-sm" // Estado Rolando (Vidro)
          : "bg-transparent" // Estado Topo (Invisível/Clean)
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo / Nome */}
        <a href="#" className="text-lg font-bold tracking-tight text-blue-600">
          João Vitor Dias
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {/* Links com IDs corretos para as seções que criamos */}
          <a href="#introduction" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Início
          </a>
          <a href="#curriculum" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Jornada
          </a>
          <a href="#projects" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Projetos
          </a>
          <a href="#skills" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Habilidades
          </a>
          <a href="#documents" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Docs
          </a>
          <a href="#certifications" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
            Certificados
          </a>
          
          {/* Botão de Ação (CTA) */}
          <a 
            href="#contact" 
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Contato
          </a>
        </nav>
        <div className="md:hidden">
            <MenuIcon className="h-6 w-6 text-zinc-700" />
        </div>
      </div>
    </header>
  );
};

export default Header;