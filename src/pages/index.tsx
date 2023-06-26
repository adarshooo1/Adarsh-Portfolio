import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { MdArrowUpward } from "react-icons/md";
import { GetStaticProps, NextPage } from "next";
import { PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSKills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const HomePage = ({ pageInfo, skills, projects, socials }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[rgb(16,16,16)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-[#FB923C]/80 z-0">
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
          <Header socials={socials} />
          {/* Hero */}
          <section id="hero" className="snap-start">
            <HeroBanner pageInfo={pageInfo} />
          </section>

          {/* about */}
          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>

          {/* skills */}
          <section id="skills" className="snap-center">
            <Skills skills={skills} />
          </section>

          {/* projects */}
          <section id="projects" className="snap-center">
            <Projects projects={projects} />
          </section>

          {/* Contact */}
          <section id="contacts" className="snap-center">
            <Contact />
          </section>

          <span>
            <Link href="#hero" className="scroll-smooth">
              <footer className="sticky bottom-5 w-[30px] h-[30px] cursor-pointer m-5">
                <MdArrowUpward className="animate-bounce text-3xl text-orange-500" />
              </footer>
            </Link>
          </span>
        </>
      )}
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSKills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
