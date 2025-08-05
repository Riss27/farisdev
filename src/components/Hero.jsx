import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

// Definisikan varian untuk animasi
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 space-y-12 md:space-y-0 md:space-x-12 bg-gray-900 text-white">
      <motion.div className="md:w-1/2 text-center md:text-left" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" variants={itemVariants}>
          Hai, saya Faris
        </motion.h1>
        <motion.p className="text-lg text-indigo-400 font-semibold mb-6" variants={itemVariants}>
          Web Developer Kreatif
        </motion.p>
        <motion.p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0" variants={itemVariants}>
          Saya membangun situs web dan aplikasi yang indah, responsif, dan ramah pengguna. Mengubah masalah kompleks menjadi solusi elegan adalah hasrat saya.
        </motion.p>
        <motion.a
          href="#projects"
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          variants={itemVariants}
        >
          Lihat Karya Saya
        </motion.a>
      </motion.div>
      <div className="md:w-1/2 flex justify-center">
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-800"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
        >
          <img
            src={profileImg}
            alt="Foto Profil Faris"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x400/1F2937/FFFFFF?text=Foto+Profil";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
