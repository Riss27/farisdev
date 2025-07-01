function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col">
            <div className="h-40 bg-white rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=Portfolio+Website" alt="Portfolio Website" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
            <p className="text-gray-600 text-sm mb-4">Website portfolio pribadi menggunakan React dan TailwindCSS.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm">
                Live Demo
              </a>
              <a href="https://github.com/Riss27/farisdev" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition text-sm">
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col">
            <div className="h-40 bg-white rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=Todo+App" alt="Todo App" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Todo App</h4>
            <p className="text-gray-600 text-sm mb-4">Aplikasi to-do list sederhana menggunakan React hooks dan local storage.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm">
                Live Demo
              </a>
              <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition text-sm">
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col">
            <div className="h-40 bg-white rounded mb-4 overflow-hidden flex items-center justify-center">
              <img src="https://via.placeholder.com/300x160.png?text=Weather+App" alt="Weather App" className="object-cover h-full w-full" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Weather App</h4>
            <p className="text-gray-600 text-sm mb-4">Aplikasi cuaca real-time menggunakan API dan fetch data dari OpenWeather.</p>
            <div className="mt-auto flex justify-center gap-3">
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm">
                Live Demo
              </a>
              <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
