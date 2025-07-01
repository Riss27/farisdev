import profileImg from "../assets/profile.png";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 space-y-12 md:space-y-0 md:space-x-12 bg-blue-50">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">Hai, saya Faris</h1>
        <p className="text-lg text-indigo-600 font-semibold mb-6">Web Developer Kreatif</p>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">Saya membangun situs web dan aplikasi yang indah, responsif, dan ramah pengguna. Mengubah masalah kompleks menjadi solusi elegan adalah hasrat saya.</p>
        <a href="#projects" className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Lihat Karya Saya
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
          <img
            src={profileImg}
            alt="Foto Profil Faris"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x400/E0E7FF/4F46E5?text=Foto+Profil";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
