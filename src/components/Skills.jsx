function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-10">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'].map((skill) => (
            <div
              key={skill}
              className="w-20 h-20 bg-white shadow-md rounded flex items-center justify-center text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
