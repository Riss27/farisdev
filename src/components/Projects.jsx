import { motion } from 'framer-motion';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // 'once: true' dihapus
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Personal Portfolio Website */}
          <motion.div className="bg-gray-800 p-4 rounded shadow-md flex flex-col" variants={itemVariants}>
            <div className="h-40 bg-gray-700 rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=Portfolio+Website" alt="Portfolio Website" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Personal Portfolio Website</h4>
            <p className="text-gray-300 text-sm mb-4">Portfolio web using Next.js, TypeScript, Tailwind CSS.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a
                href="https://your-live-demo-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Riss27/farisdev.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Mang ToDo */}
          <motion.div className="bg-gray-800 p-4 rounded shadow-md flex flex-col" variants={itemVariants}>
            <div className="h-40 bg-gray-700 rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=Mang+ToDo" alt="Mang ToDo" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Mang ToDo</h4>
            <p className="text-gray-300 text-sm mb-4">Proyek tugas besar kuliah berbasis tim. Bertanggung jawab pada pengembangan antarmuka aplikasi mobile to-do.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a
                href="https://your-mangtodo-demo-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Riss27/FE-MangTodo.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Cosmic Bunny */}
          <motion.div className="bg-gray-800 p-4 rounded shadow-md flex flex-col" variants={itemVariants}>
            <div className="h-40 bg-gray-700 rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=Cosmic+Bunny" alt="Cosmic Bunny" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Cosmic Bunny</h4>
            <p className="text-gray-300 text-sm mb-4">Proyek web e-commerce game sebagai tugas besar tim. Berperan dalam merancang halaman frontend.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a
                href="https://cosmic-bunny.rezaa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Riss27/cosmic-bunny.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* TOURWAVE */}
          <motion.div className="bg-gray-800 p-4 rounded shadow-md flex flex-col" variants={itemVariants}>
            <div className="h-40 bg-gray-700 rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=TOURWAVE" alt="TOURWAVE" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">TOURWAVE</h4>
            <p className="text-gray-300 text-sm mb-4">Membangun website pariwisata dengan PHP, Bootstrap, dan MySQL. Menyediakan fitur pencarian AJAX, login pengguna, dan struktur MVC sederhana.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a
                href="https://your-tourwave-demo-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Riss27/pw2023_223040126.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;