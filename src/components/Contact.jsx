import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gray-100"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }} // 'once: true' dihapus
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p className="text-gray-600 mb-6">Email: faris@example.com</p>
        <a
          href="mailto:faris@example.com"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Send Email
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;