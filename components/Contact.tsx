"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FaLinkedin, FaInstagram, FaGithub, FaCode } from "react-icons/fa";

import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "900"] });

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_wxmkpbh",
        "template_vww1xgn",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "CJvFhbWOn_c6kLmDJ"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-20 bg-black/50 backdrop-blur-md" id="contact">
      <div className="container px-16 mx-auto flex flex-col md:flex-row items-start md:space-x-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h1 className={`text-4xl text-white ${alegreya.className}`}>Get in Touch</h1>
          <p className="text-gray-300 max-w-md text-lg mt-4">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <h3 className="text-xl text-white">Phone Number</h3>
              <p className="text-gray-300">+91 79080 36522</p>
            </div>
            <div>
              <h3 className="text-xl text-white">Email</h3>
              <p className="text-gray-300">arunavacr7@gmail.com</p>
              <p className="text-gray-300">am7237@srmist.edu.in</p>
            </div>
            <div>
              <h3 className="text-xl text-white">Social Network</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/arunava12/" target="_blank" className="text-white hover:text-blue-500 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/wtf.arunava/" target="_blank" className="text-white hover:text-pink-500 text-2xl">
                  <FaInstagram />
                </a>
                <a href="https://github.com/arunava-12" target="_blank" className="text-white hover:text-gray-400 text-2xl">
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/arunava1202/" target="_blank" className="text-white hover:text-yellow-500 text-2xl">
                  <FaCode />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input placeholder="Your Name" {...register("name", { required: "Name is required" })} />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" {...register("message", { required: "Message is required" })} />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}