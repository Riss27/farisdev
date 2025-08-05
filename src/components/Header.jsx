import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`py-4 px-6 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-white/80 shadow-md" : "bg-white"}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-black"}`}>FarisDev</h1>
        <nav className="space-x-4">
          <a href="#hero" className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"}`}>
            Home
          </a>
          <a href="#about" className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"}`}>
            About
          </a>
          <a href="#skills" className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"}`}>
            Skills
          </a>
          <a href="#projects" className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"}`}>
            Projects
          </a>
          <a href="#contact" className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"}`}>
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
