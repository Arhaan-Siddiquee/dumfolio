"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] });

export default function Projects() {
  const projects = [
    {
      title: "FinSync",
      description: "A modern Finance Tracker platform built with Next.js and Stripe.",
      details:
        "FinSync allows users to track their financial transactions, manage budgets, and analyze spending patterns. It integrates Stripe for secure payments, features an intuitive dashboard, and supports user authentication.",
      image: "/finsync.png",
      technologies: ["Next.js", "TailwindCSS", "Stripe", "Prisma"],
      link: "https://fin-sync-delta.vercel.app/",
    },
    {
      title: "Brain Tumor Detection using Machine Learning",
      description: "A deep learning-based approach for brain tumor detection.",
      details:
        "This project uses convolutional neural networks (CNNs) to classify MRI scans as tumor-positive or tumor-negative. It features data preprocessing, model training, and visualization of results using heatmaps.",
      image: "/brain.png",
      technologies: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
      link: "https://github.com/arunava-12/Cancer_Detection",
    },
    {
      title: "Crypto-Crafty",
      description: "A real-time analytics dashboard for cryptocurrency insights.",
      details:
        "Crypto-Crafty provides live price tracking, market trends, and historical data visualization for cryptocurrencies and NFTs. It integrates APIs for real-time data and displays insights using interactive charts.",
      image: "/crypto.png",
      technologies: ["Vue.js", "Chart.js", "Node.js", "MongoDB"],
      link: "https://crypto-app-pi-gold.vercel.app/",
    },
    {
      title: "Snake Game in 8086 Processor",
      description: "A classic Snake game implemented in Assembly for 8086 processors.",
      details:
        "This project recreates the Snake game using low-level Assembly language, running on an 8086 microprocessor. It includes keyboard input handling, simple graphics, and game logic for movement and scoring.",
      image: "/snake.png",
      technologies: ["Assembly (x86)", "EMU8086", "DOSBox"],
      link: "https://github.com/arunava-12/Snake_in_8086",
    },
    {
      title: "Sentiment Analysis using Amazon Reviews",
      description: "A machine learning model for sentiment analysis on Amazon product reviews.",
      details:
        "This project analyzes Amazon product reviews using NLP techniques to classify sentiments as positive, neutral, or negative. It includes data preprocessing, feature extraction, and model deployment via Flask.",
      image: "/amazon.png",
      technologies: ["Python", "TensorFlow", "Flask", "NLTK"],
      link: "https://drive.google.com/drive/folders/1zcbqysl11AcLrbLmwAwTIIQZYoqRHR2G",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-10 bg-white/5 backdrop-blur-md" id="projects">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className={`text-4xl text-white ${alegreya.className}`}>
            Projects
          </h1>
        </div>

        {/* Project Carousel */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1].map((offset) => {
              const project = projects[(index + offset) % projects.length];
              return (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    className="shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden rounded-xl p-6 transform transition-transform"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                    {/* Expand on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-300 mt-2">{project.details}</p>
                      <div className="mt-4">
                        <h4 className="text-white font-semibold">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-sm bg-white/20 text-white px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </a>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
