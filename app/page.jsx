import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodeShowcase from "@/components/CodeShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-cream text-forest transition-colors duration-500">
      <Header />
      <main className="flex-1 w-full md:ml-64 lg:ml-80 md:border-l border-forest/15 transition-colors duration-500">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodeShowcase />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
