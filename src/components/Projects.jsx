import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('projects').select('*');

        if (error) {
          throw error;
        }
        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

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

  // Tampilkan pesan loading jika data sedang diambil
  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Mapping data dari state 'projects' yang diambil dari Supabase */}
          {projects.map((project) => (
            <motion.div className="bg-gray-800 p-4 rounded shadow-md flex flex-col" variants={itemVariants} key={project.id}>
              <div className="h-40 bg-gray-700 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img src={project.image_url} alt={project.name} className="object-cover h-full w-full" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="mt-auto flex justify-center gap-3">
                <a
                  href={project.live_demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;