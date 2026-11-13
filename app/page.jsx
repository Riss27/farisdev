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
    <div className="app-surface flex min-h-screen text-forest">
      <Header />
      <main className="flex-1 w-full md:ml-64 lg:ml-80">
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
