import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }} // 'once: true' dihapus
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm a passionate frontend developer based in Indonesia. I love building responsive and interactive user interfaces using React and Tailwind CSS.
        </p>
      </div>
    </motion.section>
  );
}

export default About;