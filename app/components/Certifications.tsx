import React from "react";
import { certificationsData } from "@/app/lib/data";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const Certifications = () => {
	return (
		<section id="certifications" className="py-24 bg-zinc-50">
			<div className="container mx-auto px-4 max-w-6xl">
				{/* Cabeçalho da Seção */}
				<div className="flex items-center justify-center gap-3 mb-16">
					<Award className="w-8 h-8 text-blue-600" />
					<h2 className="text-3xl font-bold text-zinc-900">
						Certificações e Cursos
					</h2>
				</div>

				{/* Grid de Cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{certificationsData.map((cert, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
						>
							{/* Informações do Topo */}
							<div className="mb-6 grow">
								<h3 className="text-lg font-bold text-zinc-800 leading-tight mb-2">
									{cert.name}
								</h3>
								<p className="text-blue-600 font-medium text-sm mb-1">
									{cert.institution}
								</p>
								<div className="flex items-center gap-2 text-zinc-400 text-xs">
									<Calendar className="w-3 h-3" />
									<span>{cert.date}</span>
								</div>
							</div>

							{/* Área da Imagem (Thumbnail) */}
							<div className="relative group cursor-pointer rounded-lg overflow-hidden border border-zinc-100 bg-zinc-50 aspect-video">
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full h-full"
								>
									{/* Imagem */}
									<Image
										src={cert.image}
										alt={`Certificado ${cert.name}`}
										fill // Preenche o container pai (aspect-video)
										className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
										// 'sizes' ajuda o navegador a baixar a versão certa para mobile/desktop
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>

									{/* Overlay de "Ver Certificado" (Efeito Moderno) */}
									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-10">
										<span className="bg-white/90 text-zinc-900 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
											<ExternalLink className="w-3 h-3" />
											Ver Credencial
										</span>
									</div>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
