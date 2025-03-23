"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] });

export default function Education() {
  const educationData = [
    {
      year: "2023 - Present",
      institution: "S.R.M. Institute of Science and Technology",
      degree: "B.Tech in CSE Core",
      details: "Current CGPA: 8.5",
    },
    {
      year: "2007 - 2022",
      institution: "Hem Sheela Model School",
      degree: "Higher Secondary School Certificate",
      details: "Class X: 96% | Class XII: 90%",
    },
  ];

  return (
    <section className="bg-black/50 backdrop-blur-md overflow-hidden py-12" id="education">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className={`text-4xl text-white ${alegreya.className}`}>Education</h1>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Center Timeline Line (Updated to White) */}
          <div className="absolute left-2 h-full w-1 bg-white rounded-full" />

          {educationData.map((edu, index) => (
            <HoverEffectCard key={index} edu={edu} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Hover Effect Component
function HoverEffectCard({ edu, delay }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative flex items-center mb-12"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Timeline Dot (Updated Hover Effect) */}
      <motion.div
        animate={{
          backgroundColor: hover ? "#ffffff" : "#111111",
          borderColor: hover ? "#111111" : "#ffffff",
          scale: hover ? 1.1 : 1,
          opacity: hover ? 1 : 0.8,
        }}
        className="absolute left-5 w-[20px] h-[20px] bg-black/70 border-4 rounded-lg shadow-xl"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="ml-16 w-full">
        <motion.div
          className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          {/* Updated Year Label with Hover Effect */}
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
            {edu.year}
          </motion.span>

          <h3 className="text-2xl font-semibold text-white mt-2">{edu.institution}</h3>
          <h4 className="text-lg text-gray-300">{edu.degree}</h4>
          <p className="mt-2 text-gray-300">{edu.details}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
