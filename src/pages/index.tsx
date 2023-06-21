import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[rgb(16,16,16)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Adarsh | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* Hero */}
          <section id="hero" className="snap-start">
            <HeroBanner />
          </section>

          {/* Background Circles */}
          {/* <BackgroundCircles /> */}

          {/* about */}
          <section id="about" className="snap-center">
          <About />
          </section>

          {/* skills */}
          <section id="skills" className="snap-center">
            <Skills />
          </section>

          {/* projects */}
          <section id="projects" className="snap-center">
            <Projects/>
          </section>

          {/* Contact */}
          <section id="contacts" className="snap-center">
            <Contact/>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
