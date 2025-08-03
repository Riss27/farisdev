import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    {
      name: "HTML",
      description:
        "Memahami struktur dasar halaman web dan semantik HTML5.",
    },
    {
      name: "CSS",
      description:
        "Mahir dalam menata elemen web, menggunakan Flexbox, Grid, dan membuat desain responsif.",
    },
    {
      name: "JavaScript",
      description:
        "Mampu menulis logika interaktif, manipulasi DOM, dan bekerja dengan asynchronous programming.",
    },
    {
      name: "React",
      description:
        "Berpengalaman dalam membangun antarmuka pengguna berbasis komponen menggunakan React Hooks, state, dan props.",
    },
    {
      name: "Tailwind",
      description:
        "Efektif dalam membangun UI modern dengan cepat menggunakan utilitas class Tailwind CSS.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const descriptionVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // 'once: true' dihapus
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">Skills</h3>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className={`w-20 h-20 bg-white shadow-md rounded flex items-center justify-center text-sm font-medium cursor-pointer transition-transform duration-200 hover:scale-105 ${
                selectedSkill === skill.name ? "ring-2 ring-blue-500" : ""
              }`}
              variants={itemVariants}
              onClick={() => setSelectedSkill(skill.name)}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {selectedSkill && (
          <motion.div
            className="mt-10 max-w-xl mx-auto p-4 rounded-lg shadow-lg bg-white"
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              {selectedSkill}
            </h4>
            <p className="text-gray-700">
              {
                skillsData.find((skill) => skill.name === selectedSkill)
                  .description
              }
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Skills;