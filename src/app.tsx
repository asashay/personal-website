import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "./components/layout"
import Hero from "./components/hero"
import Projects from "./components/projects"
import About from "./components/about"
import Contact from "./components/contact"

const desktopLayout = {
  pages: 4.5,
  about: { offset: 1, factor: 1 },
  projects: { offset: 2, factor: 1.5 },
  contact: { offset: 3.5, factor: 1 },
}

const App = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia(`(max-width: 599px)`)
    const updateLayout = () => setIsMobile(query.matches)

    updateLayout()
    query.addEventListener(`change`, updateLayout)

    return () => query.removeEventListener(`change`, updateLayout)
  }, [])

  return (
    <Layout>
      {isMobile ? (
        <div style={{ display: `flex`, flexDirection: `column`, gap: `20vh` }}>
          <Hero offset={0} isStatic />
          <About offset={0} isStatic />
          <Projects offset={0} isStatic />
          <Contact offset={0} isStatic />
        </div>
      ) : (
        <Parallax pages={desktopLayout.pages}>
          <Hero offset={0} factor={1} />
          <About {...desktopLayout.about} />
          <Projects {...desktopLayout.projects} />
          <Contact {...desktopLayout.contact} />
        </Parallax>
      )}
    </Layout>
  )
}

export default App
