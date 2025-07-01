function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <div className="h-40 bg-white rounded mb-4 flex items-center justify-center text-gray-500">Image</div>
            <h4 className="text-xl font-semibold mb-2">Project 1</h4>
            <p className="text-gray-600 text-sm">Brief description about the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;