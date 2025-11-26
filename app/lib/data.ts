// --- TIPOS (Definições) ---
// (TypeScript nos ajuda a garantir que todos os dados sigam o mesmo formato)

export type IntroductionData = {
  headline: string;
  subheadline: string;
  paragraphs: string[];
};

export type Education = {
  course: string;
  institution: string;
  period: string;
};

export type Achievement = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  problem: string;
  approach: string;
  technologies: string;
  challenge: string;
  results: string;
  links: {
    href: string;
    label: string;
  }[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type DocumentItem = {
  category: string;
  title: string;
  summary: string;
  links: {
    href: string;
    label: string;
  }[];
};

export type Certification = {
  name: string;
  institution: string;
  date: string;
  image: string;
  link: string;
};

export type ContactLink = {
  name: string;
  href: string;
  username?: string; // Opcional, para GitHub por exemplo
};


// Introdução
export const introductionData: IntroductionData = {
  headline: "Olá, eu sou o João Vitor Dias.",
  subheadline: "Eu construo tecnologia com propósito.",
  paragraphs: [
    "Sou um desenvolvedor em formação, atualmente cursando Análise e Desenvolvimento de Sistemas na FATEC-SJC e formado como Técnico em ADS pela Etec, mas também um entusiasta da tecnologia como um todo, buscando me atualizar nas áreas de Cloud, Cybersecurity e Dados.",
    "Minha jornada na tecnologia é movida por uma filosofia simples: servir. Acredito que o maior valor da tecnologia está em sua capacidade de promover o florescimento humano. Minha paixão é usar minha curiosidade na resolução de problemas e minhas habilidades técnicas e interpessoais para criar soluções que resolvam dores reais, aplicando uma mentalidade de 'apaixonar-se pelo problema e não pela solução'.",
    "Meu objetivo é construir uma base sólida em Ciência da Computação para explorar as fronteiras da tecnologia, como Inteligência Artificial e (meu Grande Objetivo Audacioso) Computação Quântica. Busco me tornar um líder de tecnologia capaz de aplicar e difundir conhecimento para promover avanços científicos e educacionais no Brasil."
  ]
};

// Currículo
export const educationData: Education[] = [
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    institution: "FATEC São José dos Campos",
    period: "2025 - Presente"
  },
  {
    course: "Técnico em Análise e Desenvolvimento de Sistemas",
    institution: "Etec de Taboão da Serra",
    period: "2022 - 2024"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Medalha de Bronze",
    description: "1ª Olimpíada Nacional de Inteligência Artificial (ONIA) - 2024"
  },
  {
    title: "Finalista da FETEPS (Feira Tecnológica do Centro Paula Souza)",
    description: "Apresentação do projeto Bluery - 2025"
  }
];

// Principais Projetos
export const projectsData: Project[] = [
  {
    title: "Bluery: O Diário do Seu Mundo Azul",
    problem: "Cuidadores e famílias de pessoas com Transtorno do Espectro Autista (TEA) enfrentam uma imensa sobrecarga na gestão de rotinas, terapias e informações de saúde, que ficam espalhadas em cadernos e aplicativos de mensagem, gerando fadiga mental e ansiedade.",
    approach: "O Bluery nasceu como um TCC técnico... Em 2025, movido por um novo propósito e pela minha experiência pessoal (vendo a luta da minha tia, mãe de uma criança com TEA), decidi reviver o projeto. Adotei uma postura de Liderança Servidora e Escuta Ativa, e fui a campo ouvir mais cuidadores reais para refinar a solução com foco na dor do usuário e garantir uma melhor proposta de valor.",
    technologies: "React Native (JS), Google Firebase, Node.Js, Expo, Figma",
    challenge: "O maior desafio não foi o código, mas sim transformar um 'projeto de nota' em um 'produto de impacto', engajando a equipe e aprendendo na prática conceitos de Liderança de Produto e Gestão Ágil.",
    results: "Versão 'Bluery 2.0' funcional, apresentada e validada como finalista na FETEPS 2025. Versão Beta atualmente em fase de testes de usabilidade com um grupo real de cuidadores.",
    links: [
      { href: "#", label: "Ver mais (em breve)" } // Link do seu plano era "Imagens Bluery"
    ]
  },
  {
    title: "Missão Astro Júnior - Classificação de Planetas com Machine Learning",
    problem: "O desafio, elaborado para a 1ª ONIA, era desenvolver um modelo de machine learning capaz de classificar planetas em cinco categorias distintas... O dataset apresentava um desequilíbrio de classes significativo...",
    approach: "Este projeto foi um mergulho prático em fundamentos de IA... Tracei a seguinte abordagem: Análise Exploratória de Dados (EDA), Modelagem Baseline e Otimização (RandomizedSearchCV, GridSearchCV e Optuna)...",
    technologies: "Python, Pandas, NumPy, Matplotlib/Seaborn(EDA e visualização), Sckit-learn (modelos de classificação), XGBoost e Optuna (otimização de parâmetros)",
    challenge: "O principal desafio foi lidar com o desequilíbrio de classes... Além disso, o processo de testar e otimizar múltiplos modelos exigiu uma abordagem metódica para comparar seus desempenhos (usando f1-score) e evitar o overfitting.",
    results: "O modelo baseline mais forte foi o XGBoost (76.2% de acurácia). Após uma otimização com GridSearchCV, o modelo XGBoost final alcançou uma acurácia de 78% e um F1-score ponderado de 0.77... enviado para a comissão avaliadora da olimpíada.",
    links: [
      { href: "https://github.com/DiasJoao002/missao-astro-junior", label: "Ver Repositório no GitHub" }
    ]
  },
  {
    title: "EcoVaso: mais tempo para você, mais vida para a sua horta",
    problem: "O cultivo de plantas em casa... sofre com desafios de manutenção. O principal é a irrigação inadequada... causando o desperdício de recursos hídricos.",
    approach: "Alinhado à filosofia de 'tecnologia com propósito'... desenvolver um sistema de irrigação inteligente e automatizado. O núcleo do sistema é um microcontrolador Arduino que lê dados em tempo real de um sensor de umidade...",
    technologies: "Hardware: Arduino Uno R3, Sensor de umidade do solo (HD38), Mini bomba d'água, Display LCD I2C... Software: Linguagem C/C++ (Arduino IDE), Tinkercad. Web: HTML, CSS, JavaScript, Bootstrap.",
    challenge: "O maior desafio técnico foi a calibração do sensor de umidade. A leitura 'crua' do sensor não é universal; ela depende do tipo de solo. Foi preciso realizar um experimento de 'Capacidade de Retenção do Solo'...",
    results: "O projeto resultou em um protótipo funcional, tanto virtual quanto físico... O projeto foi documentado em um artigo científico e apresentado em um pitch deck.",
    links: [
      { href: "https://drive.google.com/drive/folders/10DMF3h5IOPtCrvcZI5XtmVWP_zjd_0Mq?usp=sharing", label: "Ver Materiais no Drive" }
    ]
  },
  {
    title: "Portfólio Pessoal com Next.js",
    problem: "Consolidar minha jornada acadêmica, projetos e filosofia em uma plataforma web profissional, moderna e de alta performance.",
    approach: "Utilização de um stack JAMstack moderno para garantir performance, SEO e uma excelente experiência de desenvolvimento (DX), aplicando os conceitos de layout aprendidos.",
    technologies: "Next.js, React, TypeScript, Tailwind CSS e Vercel",
    challenge: "Estruturar a informação de forma lógica e contar minha história (storytelling) de maneira coesa, indo além de uma simples lista de projetos.",
    results: "O site que você está navegando agora.",
    links: [
      { href: "https://github.com/DiasJoao002/portfolio-academico", label: "Ver Repositório no GitHub" }
    ]
  }
];

// Habilidades
export const skillsData: SkillCategory[] = [
  {
    title: "Habilidades Técnicas (Hard Skills)",
    skills: [
      "Linguagens: Python, JavaScript.",
      "Front-End: React, Next.js, HTML5, CSS3, Tailwind CSS.",
      "Back-End (Básico): Node.Js, Flask (Python).",
      "Conceitos: Lógica de Programação, Estrutura de Dados, Princípios Ágeis (Scrum, OKRs).",
      "Atualmente Explorando: Fundamentos de Cibersegurança (TryHackMe), Álgebra Linear, Cloud (AWS EC2)."
    ]
  },
  {
    title: "Habilidades Interpessoais (Soft Skills)",
    skills: [
      "Liderança Servidora: Foco em remover impedimentos e servir às necessidades da equipe e dos usuários.",
      "Escuta Ativa e Empatia: Habilidade de \"apaixonar-se pelo problema\" e construir soluções centradas no usuário.",
      "Disciplina e Gestão de Foco: Aplicação de metodologias como \"Getting Things Done\".",
      "Resiliência e Propósito: Capacidade de revisitar projetos, aprender com falhas e realinhar o trabalho a um propósito maior."
    ]
  }
];

// Documentos e Trabalhos
export const documentsData: DocumentItem[] = [
  {
    category: "Trabalho de Conclusão de Curso (Técnico ADS)",
    title: "Bluery: O Diário do Seu Mundo Azul",
    summary: "O projeto Bluery consiste no desenvolvimento de um aplicativo móvel criado especificamente para auxiliar cuidadores de pessoas com Transtorno do Espectro Autista (TEA). O aplicativo foi idealizado para ser uma ferramenta integrada e personalizada que ajuda na gestão de informações cruciais e na organização das rotinas diárias... O desenvolvimento utilizou o método ágil SCRUM... Preliminarmente, o Bluery demonstra grande potencial para facilitar a gestão de dados, reduzir a carga mental, otimizar a comunicação entre os envolvidos e... promover um cuidado mais organizado e humanizado...",
    links: [
      { href: "https://drive.google.com/file/d/1fPFv7v0jXQKXqBFOmnZJmrR_hg59SqX8/view?usp=sharing", label: "Documentação Resumida" },
      { href: "https://www.canva.com/design/DAGzvBhWC9E/SKWO89NOGjsoQfkC4cAiGw/view?utm_content=DAGzvBhWC9E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8dfca7d324", label: "Pitch Deck" },
      { href: "https://linktr.ee/bluerydiary", label: "Materiais Adicionais" }
    ]
  },
  {
    category: "Projeto Interdisciplinar (Técnico ADS)",
    title: "EcoVaso: mais tempo para você, mais vida para a sua horta",
    summary: "O projeto trata da criação de um vaso irrigador inteligente usando um microcontrolador Arduino. A ideia principal é tornar o cultivo de plantas em casa mais fácil e sustentável, evitando o desperdício de água. Funciona da seguinte maneira: o vaso possui um sensor que mede a umidade do solo em tempo real. O Arduino processa essa informação e só liga o sistema de irrigação quando a planta realmente precisa de água... O objetivo final é incentivar a produção de alimentos orgânicos em casa...",
    links: [
      { href: "#", label: "Artigo Científico (em breve)" }, // Link "Vaso Irrigador - Artigo (1)" do plano
      { href: "https://app.presentations.ai/view/EPG5vP", label: "Pitch Deck" }
    ]
  }
];

// Certificações
export const certificationsData: Certification[] = [
  {
    name: "IT Essentials",
    institution: "Cisco Networking Academy",
    date: '2025',
    image: '/assets/cisco.png',
    link: 'https://drive.google.com/file/d/1VqyrQj6zD8UdLUpKrMxVOkASWMfszNUn/view?usp=sharing'
  },
  { 
    name: "Medalha de Bronze - 1ª ONIA", 
    institution: "Olimpíada Nacional de Inteligência Artificial",
    date: "2024",
    image: "/assets/onia.png",
    link: "https://drive.google.com/file/d/1AZK5IOoM0M3mRqSYj2V6f4RD2Pfbnm1z/view?usp=sharing" 
  },
  { 
    name: "Finalista FETEPS", 
    institution: "Centro Paula Souza",
    date: "2025",
    image: "/assets/feteps.png",
    link: "https://drive.google.com/file/d/1BAg7OaBN0-xYvL5voQQ27x7kfx5R5vQJ/view?usp=sharing" 
  },
  { 
    name: "Linux Unhatched", 
    institution: "Cisco Networking Academy",
    date: "2025",
    image: "/assets/linux.png",
    link: "https://drive.google.com/file/d/1KWKBckFL_ePvDC2XFsf7Z9kI1dCYfiRb/view?usp=sharing" 
  },
  { 
    name: "Proficiência Inglesa", 
    institution: "TOEIC Bridge",
    date: "2023",
    image: "/assets/toeic.png",
    link: "https://drive.google.com/file/d/1DafESPHcLmHJUxfH0E46dLYmrjcl0x8u/view?usp=sharing" 
  },
  { 
    name: "Álgebra Linear", 
    institution: "Khan Academy",
    date: "Em andamento",
    image: "/assets/khan.png",
    link: "https://drive.google.com/file/d/1YDej8jWUKo4SI6qyIo9txr6wuPDy15ee/view?usp=sharing" 
  },
];

// Contato
export const contactData: ContactLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joão-vitor-dias-24b0a324a",
    username: "joão-vitor-dias-24b0a324a"
  },
  {
    name: "GitHub",
    href: "https://github.com/DiasJoao002",
    username: "DiasJoao002"
  },
  {
    name: "E-mail",
    href: "mailto:joao.vd.conrado@gmail.com",
    username: "joao.vd.conrado@gmail.com"
  }
];