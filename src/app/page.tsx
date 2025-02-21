import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Projects from "./components/projects/Projects";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

