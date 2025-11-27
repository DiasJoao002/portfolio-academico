/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import React from "react";
import { projectsData } from "@/app/lib/data";
import {
	Github,
	ExternalLink,
	FolderGit2,
	ArrowRight,
	Layers,
	Target,
	CheckCircle2,
} from "lucide-react";

const Projects = () => {
	return (
		<section id="projects" className="py-24 bg-white">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="flex items-center justify-center gap-3 mb-16">
					<FolderGit2 className="w-8 h-8 text-blue-600" />
					<h2 className="text-3xl font-bold text-zinc-900">
						Principais Projetos
					</h2>
				</div>

				<div className="flex flex-col gap-10">
					{projectsData.map((project, index) => (
						<div
							key={index}
							className="group bg-zinc-50 border border-zinc-100 rounded-2xl p-8 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300"
						>
							<div className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
								{/* Coluna Esquerda: Identidade e Links */}
								<div className="md:w-1/3 flex flex-col shrink-0">
									<div className="mb-6">
										<span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
											Projeto {index + 1}
										</span>
										<h3 className="text-2xl font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">
											{project.title}
										</h3>
									</div>

									{/* Tecnologias (Tags) */}
									<div className="flex flex-wrap gap-2 mb-8">
										{project.technologies.split(",").map((tech, i) => (
											<span
												key={i}
												className="text-xs font-medium px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-md border border-zinc-200/50"
											>
												{tech.trim()}
											</span>
										))}
									</div>

									{/* Links (Rodapé da esquerda) */}
									<div className="mt-auto flex flex-col gap-3">
										{project.links.map((link, linkIndex) => {
											const Icon = link.href.includes("github")
												? Github
												: ExternalLink;
											return (
												<a
													key={linkIndex}
													href={link.href}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors"
												>
													<Icon className="w-4 h-4" />
													{link.label}
													<ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
												</a>
											);
										})}
									</div>
								</div>

								{/* Divisor Vertical (apenas desktop) */}
								<div className="hidden md:block w-px bg-zinc-100 self-stretch"></div>

								{/* Coluna Direita: Detalhes (Storytelling) */}
								<div className="md:w-2/3 space-y-6">
									{/* O Problema */}
									<div className="flex gap-4 items-start">
										<div className="mt-1 p-1.5 bg-red-50 rounded-lg text-red-500 shrink-0">
											<Target className="w-4 h-4" />
										</div>
										<div>
											<h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-1">
												Desafio
											</h4>
											<p className="text-zinc-600 text-sm leading-relaxed text-justify">
												{project.problem}
											</p>
										</div>
									</div>

									{/* A Abordagem */}
									<div className="flex gap-4 items-start">
										<div className="mt-1 p-1.5 bg-amber-50 rounded-lg text-amber-500 shrink-0">
											<Layers className="w-4 h-4" />
										</div>
										<div>
											<h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-1">
												Abordagem
											</h4>
											<p className="text-zinc-600 text-sm leading-relaxed italic border-l-2 border-zinc-100 pl-3 text-justify">
												"{project.approach}"
											</p>
										</div>
									</div>

									{/* Resultados */}
									<div className="flex gap-4 items-start">
										<div className="mt-1 p-1.5 bg-green-50 rounded-lg text-green-600 shrink-0">
											<CheckCircle2 className="w-4 h-4" />
										</div>
										<div>
											<h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-1">
												Resultados
											</h4>
											<p className="text-zinc-600 text-sm leading-relaxed text-justify">
												{project.results}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
