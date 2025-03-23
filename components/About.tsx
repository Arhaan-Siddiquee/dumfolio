'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] }); 

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8 } 
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
  return (
    <section className="bg-white/1 backdrop-blur-md overflow-hidden py-16 px-6" id="about">
      <div className="container mx-auto flex justify-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl bg-black/50 backdrop-blur-lg shadow-lg rounded-2xl px-8 py-10 text-center border border-white/20"
        >
          <motion.h2 
            variants={childVariants} 
            className={`text-4xl font-bold text-white ${alegreya.className}`}
          >
            About Me
          </motion.h2>

          <motion.p 
            variants={childVariants} 
            className="mt-4 text-lg text-white/80 leading-relaxed border-l-4 border-[#46DFB1] pl-4 inline-block"
          >
            | 👨‍🎓 College Student | 💻 Aspiring Software Developer | 🚀 Passionate about Coding |
          </motion.p>

          <motion.div variants={childVariants} className="mt-6 text-lg text-white leading-relaxed">
            <p className="mb-4">
              Hello! 👋 I&apos;m currently pursuing a <strong>B.Tech in CSE Core</strong> at <strong>S.R.M. IST, Kattankulathur</strong>. 
              I have a strong foundation in <strong>C, C++, and Python</strong> and am always eager to expand my knowledge.
            </p>

            <p className="mb-4">
              As an aspiring software developer, I strive to continuously learn, build impactful projects, and embrace new challenges. 
              I enjoy working on innovative solutions and collaborating with like-minded individuals. Let&apos;s connect and grow together!
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="mt-8">
            <Image 
              src="/signature.png" 
              height="100" 
              width="400" 
              alt="Signature" 
              className="mx-auto opacity-90"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
