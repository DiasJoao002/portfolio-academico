import React from "react";
import { Linkedin, Github, Mail, User } from "lucide-react";
import { contactData } from "@/app/lib/data";

const Contact = () => {
	// função auxiliar para mapear o nome do link ao ícone certo
	const getIcon = (name: string) => {
		switch (name.toLowerCase()) {
			case "linkedin":
				return <Linkedin className="w-6 h-6" />;
			case "github":
				return <Github className="w-6 h-6" />;
			case "e-mail":
				return <Mail className="w-6 h-6" />;
			default:
				return <User className="w-6 h-6" />;
		}
	};

	return (
		<section id="contact" className="py-24 bg-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-8 text-zinc-800">
					Vamos conversar?
				</h2>
				<p className="text-zinc-600 mb-12 max-w-xl mx-auto">
					Estou sempre aberto a trocar ideias sobre tecnologia, parcerias ou
					oportunidades.
				</p>

				<div className="flex justify-center gap-8 flex-wrap">
					{contactData.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-zinc-50 transition-all duration-300 min-w-[100px]"
						>
							<div className="p-3 bg-zinc-100 text-zinc-700 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
								{getIcon(link.name)}
							</div>
							<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">
								{link.name}
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
