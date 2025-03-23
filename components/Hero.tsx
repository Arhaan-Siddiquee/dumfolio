"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Alegreya } from "next/font/google";
import { Github, Linkedin, FileUser } from "lucide-react";

const words = [
  "Front-End Developer",
  "Machine Learning Enthusiast",
  "UI/UX Developer",
];

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] });

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {
    currentTarget: HTMLDivElement;
  }

  const handleMouseMove = (e: MouseMoveEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 15;
    const y = ((clientY - top) / height - 0.5) * -15;

    setRotateX(y);
    setRotateY(x);
  };

  const resetTilt = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const currentWord = words[index];
    const typingEffect = setTimeout(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          if (prev.length < currentWord.length) return currentWord.slice(0, prev.length + 1);
          setTimeout(() => setIsDeleting(true), 1000);
          return prev;
        } else {
          if (prev.length > 0) return prev.slice(0, -1);
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          return "";
        }
      });
    }, isDeleting ? 50 : speed);

    return () => clearTimeout(typingEffect);
  }, [displayText, isDeleting, index, speed]);

  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 bg-black/50 backdrop-blur-md"
      id="home"
    >
      <div className="relative z-10 container mx-auto px-1">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h4 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white pt-10 pb-4">
              Arunava Mondal
            </h4>
            <h1 className={`text-xl md:text-2xl font-medium text-gray-300 pb-4 ${alegreya.className}`}>
              {displayText}<span className="text-light">|</span>
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
              {[
                { href: "/resume.pdf", label: "View Resume", Icon: FileUser },
                { href: "https://github.com/arunava-12", label: "GitHub", Icon: Github },
                { href: "https://www.linkedin.com/in/arunava12/", label: "LinkedIn", Icon: Linkedin },
              ].map(({ href, label, Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 
                      bg-white/10 backdrop-blur-lg text-light py-3 px-6 
                      rounded-lg shadow-lg transition-all duration-300 
                      h-[60px] w-[200px] border border-transparent 
                      hover:scale-105 hover:shadow-xl 
                      hover:bg-white/20 hover:border-white/40 
                      hover:text-white hover:ring-2 hover:ring-white/50"
                >
                  <Icon className="transition-transform duration-300 group-hover:rotate-6" />
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] transition-all duration-300"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setScale(1.1)}
              onMouseLeave={() => {
                resetTilt();
                setScale(1);
              }}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <Image
                src="/arunavahuh.png"
                width={400}
                height={400}
                alt="Profile Picture"
                className="rounded-lg shadow-xl w-full h-auto transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
