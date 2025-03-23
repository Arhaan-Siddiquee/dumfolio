"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${
        isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Arunava</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {[
            "Home",
            "About",
            "Education",
            "Experience",
            "Skills",
            "Projects",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} // Adjust this value based on header height
                className={`cursor-pointer glow transition-all ${
                  isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-white-300"
                }`}
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={50} /> : <Menu size={40} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-4 font-medium text-black">
          {[
            "Home",
            "About",
            "Education",
            "Experience",
            "Skills",
            "Projects",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={900}
                spy={true}
                offset={-70} // Adjust for better scrolling experience
                className="cursor-pointer hover:text-white-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
