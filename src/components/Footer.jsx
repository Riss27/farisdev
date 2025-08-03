import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer 
      className="bg-white py-4 text-center text-gray-500 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }} // 'once: true' dihapus
    >
      &copy; 2025 Faris Dev. All rights reserved.
    </motion.footer>
  );
}

export default Footer;