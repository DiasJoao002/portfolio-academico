"use client";
import { MenuIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
	// Estado para controlar se a página foi rolada
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Se rolar mais de 10px, ativa o efeito
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		// Limpeza do evento ao desmontar o componente (boa prática)
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Função para rolar suavemente e fechar o menu
	const handleScrollTo = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string,
	) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
		}
	};

	const navLinks = [
		{ name: "Início", href: "introduction" },
		{ name: "Jornada", href: "curriculum" },
		{ name: "Projetos", href: "projects" },
		{ name: "Habilidades", href: "skills" },
		{ name: "Docs", href: "documents" },
		{ name: "Certificados", href: "certifications" },
	];

	return (
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
				<nav className="hidden md:flex items-center">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={`#${link.href}`}
							onClick={(e) => handleScrollTo(e, link.href)}
							className="text-sm font-medium text-zinc-600 px-5 py-2 rounded-lg transition-colors duration-250 ease-in-out hover:bg-blue-600 hover:text-white"
						>
							{link.name}
						</a>
					))}

					{/* Botão de Ação (CTA) */}
					<a
						href="#contact"
						className="bg-zinc-900 text-white ml-2 px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
					>
						Contato
					</a>
				</nav>

				{/* Navegação Mobile */}
				<button
					type="button"
					className="md:hidden p-2 text-zinc-700 z-50 relative focus:outline-none"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Alternar menu"
				>
					{isMobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>

				{/* Menu Mobile Overlay */}
				{isMobileMenuOpen && (
					<div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center md:hidden animate-in fade-in slide-in-from-top-10 duration-400">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={`#${link.href}`}
								onClick={(e) => handleScrollTo(e, link.href)}
								className="text-md font-medium text-zinc-600 px-5 py-3 my-0.5 rounded-lg transition-colors duration-250 ease-in-out hover:bg-blue-600 hover:text-white"
							>
								{link.name}
							</a>
						))}
						<a
							href="#contact"
							onClick={(e) => handleScrollTo(e, "contact")}
							className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-md font-medium hover:bg-blue-700"
						>
							Contato
						</a>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
