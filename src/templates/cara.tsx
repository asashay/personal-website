import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Seo from "../components/seo";

const mobileLayout = {
  pages: 6,
  about: { offset: 1, factor: 1.5 },
  projects: { offset: 2.5, factor: 2.5 },
  contact: { offset: 5, factor: 1 },
};

const desktopLayout = {
  pages: 4.5,
  about: { offset: 1, factor: 1 },
  projects: { offset: 2, factor: 1.5 },
  contact: { offset: 3.5, factor: 1 },
};

const Cara = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia(`(max-width: 599px)`);
    const updateLayout = () => setIsMobile(query.matches);

    updateLayout();
    query.addEventListener(`change`, updateLayout);

    return () => query.removeEventListener(`change`, updateLayout);
  }, []);

  const pageLayout = isMobile ? mobileLayout : desktopLayout;

  return (
    <Layout>
      <Parallax key={isMobile ? `mobile` : `desktop`} pages={pageLayout.pages}>
        <Hero offset={0} factor={1} />
        <About {...pageLayout.about} />
        <Projects {...pageLayout.projects} />
        <Contact {...pageLayout.contact} />
      </Parallax>
    </Layout>
  );
};

export default Cara;

export const Head: HeadFC = () => <Seo />;
