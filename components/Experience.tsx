"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] });

export default function Experience() {
  const experiences = [
    {
      year: "April 2023 - Jul 2024",
      company: "Quick IsCool",
      role: "Quantum, Artificial, and Biological Intelligence R&D",
      description: [
        "Gained valuable insights into industry operations through hands-on learning, enhancing understanding of business processes, technologies, and strategies.",
        "Contributed to the successful execution of two distinct projects, involving problem-solving and teamwork.",
        "Developed a user-friendly document scanning solution using EasyOCR and front-end frameworks, creating an efficient OCR tool for document processing.",
      ],
    },
    {
      year: "Dec 2023",
      company: "CINTEL's Next-Gen AI",
      role: "Member",
      description: [
        'Created a "Natural Language Processing (NLP) for Sentiment" project, applying cutting-edge NLP algorithms.',
        "Implemented text pre-processing, feature extraction, and machine learning models to analyze sentiments in textual data.",
        "Generated visual insights using Matplotlib and saved sentiment analysis data to a CSV file.",
      ],
    },
    {
      year: "Dec 2023",
      company: "Alexa Developers SRM",
      role: "Member",
      description: [
        "Developed a login and registration page for an event hosted by the club, ensuring a smooth user experience.",
    "Conducted introductory sessions on React and Next.js for club members, covering key concepts and best practices.",
    "Collaborated with the team to build a chatbot using AWS Lex, enhancing user engagement for club events.",
    "Contributed to open-source projects related to voice AI, helping improve accessibility features in club initiatives."
      ],
    },
  ];

  return (
    <section className="bg-white/1 backdrop-blur-md overflow-hidden py-16" id="experience">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl text-white ${alegreya.className}`}>Experience</h1>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white rounded-full" />
          {experiences.map((exp, index) => (
            <HoverEffectCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Hover Effect Component
function HoverEffectCard({ exp, index }: { exp: any; index: number }) {
  const [hover, setHover] = useState(false);
  const isLeft = index % 2 === 0; // Alternate sides

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative flex items-center mb-16 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

<motion.div
  animate={{
    backgroundColor: hover ? "#ffffff" : "#111111",
    borderColor: hover ? "#111111" : "#ffffff",
    scale: hover ? 1.1 : 1,
    opacity: hover ? 1 : 0.8,
  }}
  className="absolute left-1/2 -translate-x-[55%] w-[16px] h-[16px] bg-black/70 border-[3px] border-white rounded-full shadow-xl transition-all duration-300 ease-in-out"
  transition={{ duration: 0.3, ease: "easeInOut" }}
/>




      {/* Year Label */}
      <div
        className={`w-1/2 transition-all duration-300 ease-in-out ${
          isLeft ? "text-right pr-10" : "text-left pl-10"
        }`}
      >
        <motion.span
          animate={{
            backgroundColor: hover ? "#ffffff" : "#111111",
            color: hover ? "#111111" : "#ffffff",
            scale: hover ? 1.1 : 1,
            opacity: hover ? 1 : 0.9,
          }}
          className="inline-block bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md border-2 border-transparent"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {exp.year}
        </motion.span>
      </div>

      {/* Experience Card (Now Closer to the Timeline) */}
      <div className={`w-1/2 ${isLeft ? "pl-10" : "pr-10"}`}>
        <motion.div
          className="p-6 bg-black/50 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
          <h4 className="text-lg text-white">{exp.role}</h4>
          <ul className="mt-2 text-white list-disc list-inside">
            {exp.description.map((point: string, idx: number) => (
              <li key={idx} className="mb-1">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
