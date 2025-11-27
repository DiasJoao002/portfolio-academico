import React from "react";
import { skillsData } from "@/app/lib/data";
import { Code2, Cpu, Sparkles } from "lucide-react";

// Importação dos Ícones (Padronizado para Simple Icons para marcas)
import {
	SiPython,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiGit,
	SiGithub,
	SiLinux,
	SiScikitlearn,
	SiArduino,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { AiOutlineSecurityScan } from "react-icons/ai";
import {
	FaHandsHelping,
	FaComments,
	FaLightbulb,
	FaHeart,
	FaAws,
} from "react-icons/fa";

// Mapeamento: Nome do Ícone -> Componente React
const iconMap: { [key: string]: React.ElementType } = {
	SiPython,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiGit,
	SiGithub,
	SiLinux,
	SiScikitlearn,
	AiOutlineSecurityScan,
	DiScrum,
	FaHandsHelping,
	FaComments,
	FaLightbulb,
	FaHeart,
	FaAws,
	SiArduino,
};

// Mapeamento: Nome do Ícone -> Cor Original (Brand Color)
const iconColorMap: { [key: string]: string } = {
	SiPython: "#3776AB",
	SiJavascript: "#F7DF1E",
	SiReact: "#61DAFB",
	SiNextdotjs: "#000000",
	SiTailwindcss: "#06B6D4",
	SiHtml5: "#E34F26",
	SiCss3: "#1572B6",
	SiNodedotjs: "#339933",
	SiGit: "#F05032",
	SiGithub: "#181717",
	FaAws: "#FF9900",
	SiKalilinux: "#557C94",
	DiScrum: "#0052CC",
	FaHandsHelping: "#10B981",
	FaComments: "#3B82F6",
	FaLightbulb: "#F59E0B",
	FaHeart: "#EF4444",
	SiArduino: "#005C5F",
};

const Skills = () => {
	return (
		<section id="skills" className="py-20 bg-zinc-50">
			<div className="container mx-auto px-4 max-w-5xl">
				{/* Cabeçalho */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-lg mb-3">
						<Cpu className="w-5 h-5 text-blue-600" />
					</div>
					<h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
						Minhas Habilidades
					</h2>
					<p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto">
						Ferramentas que domino e tecnologias que exploro.
					</p>
				</div>

				<div className="grid gap-10">
					{skillsData.map((category, catIndex) => {
						return (
							<div key={catIndex}>
								{/* Título da Categoria */}
								<div className="flex items-center gap-2 mb-6 pl-1">
									<h3 className="text-lg font-bold text-zinc-800">
										{category.title}
									</h3>
								</div>

								{/* Grid */}
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
									{category.skills.map((skill, skillIndex) => {
										const IconComponent = iconMap[skill.icon] || Code2;
										const brandColor = iconColorMap[skill.icon] || "#52525B";

										return (
											<div
												key={skillIndex}
												style={
													{ "--brand-color": brandColor } as React.CSSProperties
												}
												className="group bg-white border border-zinc-100 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 hover:shadow-lg hover:border-zinc-200 transition-all duration-500 cursor-default"
											>
												{/* Container do Ícone */}
												<div className="py-5 rounded-lg bg-transparent transition-colors duration-200">
													<IconComponent
														size={30}
														className="text-zinc-400 group-hover:text-(--brand-color) transition-colors duration-300 transform"
													/>
												</div>

												{/* Nome da Skill */}
												<span className="text-sm font-semibold text-zinc-500 text-center group-hover:text-zinc-900 transition-colors">
													{skill.name}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
