"use client";

import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] });

const skills = [
  {
    category: "Languages",
    icon: <span className="solar--programming-outline"></span>,
    items: [
      { name: "Python", icon: <span className="proicons--python"></span> },
      { name: "C", icon: <span className="vscode-icons--file-type-c2"></span> },
      { name: "C++", icon: <span className="vscode-icons--file-type-cpp2"></span>},
      { name: "HTML", icon: <span className="proicons--html"></span> },
      { name: "CSS", icon: <span className="proicons--css"></span> },
      { name: "JavaScript", icon: <span className="proicons--javascript"></span> },
    ],
  },
  {
    category: "Frameworks",
    icon: <span className="bi--cpu"></span>,
    items: [
      { name: "Node.js", icon: <span className="grommet-icons--node"></span> },
      { name: "React.js", icon: <span className="uil--react"></span> },
      { name: "Next.js", icon: <span className="akar-icons--nextjs-fill"></span> },
      { name: "Bootstrap", icon: <span className="hugeicons--bootstrap"></span> },
      { name: "MongoDB", icon: <span className="flowbite--mongo-db-solid"></span> },
      { name: "Keras", icon: <span className="devicon-plain--keras"></span> },
    ],
  },
  {
    category: "Libraries",
    icon: <span className="hugeicons--libraries"></span>,
    items: [
       { name: "Matplotlib", icon: <span className="devicon-plain--matplotlib"></span> },
       { name: "NumPy", icon: <span className="file-icons--numpy"></span> },
       { name: "Pandas", icon: <span className="devicon-plain--pandas"></span> },
       { name: "SciPy", icon: <span className="simple-icons--scipy"></span> },
       { name: "Seaborn", icon: <span className="logos--seaborn-icon"></span> },
      { name: "Scikit-learn", icon: <span className="devicon-plain--scikitlearn"></span> },

    ],
  },
  {
    category: "Tools & Services",
    icon: <span className="mdi--tools"></span>,
    items: [
      { name: "Git", icon: <span className="mdi--git"></span> },
      { name: "GitHub", icon: <span className="mdi--github"></span> },
      { name: "VS Code", icon: <span className="akar-icons--vscode-fill"></span> },
      { name: "Jupyter Notebook", icon: <span className="devicon-plain--jupyter-wordmark"></span> },
      { name: "Replit", icon: <span className="simple-icons--replit"></span> },
      { name: "Supabase", icon: <span className="ri--supabase-fill"></span> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-10 bg-black/50 backdrop-blur-md" id="skill">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
        <h1 className={`text-4xl text-white ${alegreya.className}`}>My Skills</h1>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg"
            >
              {/* Centering the heading and icon in one line */}
              <div className="flex items-center justify-center gap-3 mb-4">
                {skillCategory.icon}
                <h2 className="text-2xl font-bold text-white">{skillCategory.category}</h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {skillCategory.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-4 bg-white/10 rounded-lg shadow-md hover:scale-105 transition-transform"
                  >
                    {skill.icon}
                    <p className="text-white mt-2 text-md">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
