import React from "react";
import { documentsData } from "@/app/lib/data";
import {
	FileText,
	Presentation,
	Link as LinkIcon,
	BookOpen,
} from "lucide-react";

const Documents = () => {
	return (
		<section id="documents" className="py-24 bg-white">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="flex items-center justify-center gap-3 mb-16">
					<BookOpen className="w-8 h-8 text-blue-600" />
					<h2 className="text-3xl font-bold text-zinc-900">
						Documentos e Publicações
					</h2>
				</div>

				<div className="grid gap-8">
					{documentsData.map((doc, index) => (
						<div
							key={index}
							className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
						>
							<div className="flex flex-col md:flex-row md:items-start gap-6">
								{/* Ícone de Destaque */}
								<div className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
									<FileText className="w-6 h-6" />
								</div>

								<div className="grow">
									<span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
										{doc.category}
									</span>
									<h3 className="text-2xl font-bold text-zinc-900 mb-4">
										{doc.title}
									</h3>
									<p className="text-zinc-600 leading-relaxed mb-6">
										{doc.summary}
									</p>

									{/* Links como Botões Secundários */}
									<div className="flex flex-wrap gap-4">
										{doc.links.map((link, linkIndex) => {
											// Escolha de ícone baseada no label
											let Icon = LinkIcon;
											if (link.label.toLowerCase().includes("deck"))
												Icon = Presentation;
											if (
												link.label.toLowerCase().includes("documentação") ||
												link.label.toLowerCase().includes("artigo")
											)
												Icon = FileText;

											return (
												<a
													key={linkIndex}
													href={link.href}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 rounded-lg hover:bg-zinc-100 hover:border-zinc-300 transition-colors"
												>
													<Icon className="w-4 h-4 text-zinc-500" />
													{link.label}
												</a>
											);
										})}
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

export default Documents;
