function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FarisDev</h1>
        <nav className="space-x-4">
          <a href="#hero" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="#skills" className="text-gray-600 hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;