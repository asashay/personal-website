/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import ProjectCard from "./project-card"
import TechTag from "../elements/tech-tag"

import sc1 from '../images/sc1.png';
import sc2 from '../images/sc2.png';
import sc3 from '../images/sc3.png';
import sc4 from '../images/sc4.png';

import jt1 from '../images/jt1.png';
import jt2 from '../images/jt2.png';
import jt3 from '../images/jt3.png';
import jt4 from '../images/jt4.png';

import ws1 from '../images/ws1.png';
import ws2 from '../images/ws2.png';
import ws3 from '../images/ws3.png';
import ws4 from '../images/ws4.png';

import sr1 from '../images/sr1.png';
import sr2 from '../images/sr2.png';
import sr3 from '../images/sr3.png';
import sr4 from '../images/sr4.png';

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => {
  const scTech = [
    'React', 'Node.js', 'PostgreSQL', 'Web Extension'
  ]

  const scImages = [
    { original: sc1 },
    { original: sc2 },
    { original: sc3 },
    { original: sc4 }
  ]

  const jamtagTech = [
    'React', 'Node.js', 'Firebase'
  ]

  const jtImages = [
    { original: jt1 },
    { original: jt2 },
    { original: jt3 },
    { original: jt4 },
  ]

  const windscribeTech = [
    'Chrome Extension', 'React'
  ]

  const wsImages = [
    { original: ws1 },
    { original: ws2 },
    { original: ws3 },
    { original: ws4 },
  ]

  const simplerayTech = [
    'React', 'Node.js', 'MongoDB',
    'Google Cloud', 'CI/CD'
  ]

  const srImages = [
    { original: sr1 },
    { original: sr2 },
    { original: sr3 },
    { original: sr4 },
  ]

  return (
    <div>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={-0.2}
        offset={1.1}
        factor={factor}
      />
      <Content speed={0.4} offset={offset + 0.2} factor={factor}>
        <Inner>
          <div
            sx={{
              display: `grid`,
              gridGap: [4, 4, 4, 5],
              gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
              h1: { gridColumn: `-1/1`, color: `white !important` },
            }}
          >
            <h1 sx={{ fontSize: '2.25rem', marginBottom: '-20px'}}>My favourite projects</h1>

            <ProjectCard   
                title="Samacare"
                link="https://www.samacare.com/"
                bg="linear-gradient(to right, #2C5364, #203A43, #0F2027)"
                images={scImages}
              >
                  <p>It's prior authorizations automation software that helps patients 
                    get their treatment 50% faster. I did:</p>
                  <ul>
                    <li>Web Extension development</li>
                    <li>New features development and bug fixes</li>
                    <li>Writing automated tests and architecturing new parts of the app</li>
                  </ul>
                  <div >
                    {
                      scTech.map(i => <TechTag>{i}</TechTag>)
                    }
                  </div>
              </ProjectCard>
              <ProjectCard   
                title="Jam Tag"
                link="https://jamtag.co/"
                bg="linear-gradient(to right, #904e95, #e96443)"
                images={jtImages}
              >
                <p sx={{margin: '0'}}>The main idea of the project is to help
                  musicians find someone to jam with. Core features:
                </p>
                <ul sx={{margin: '0'}}>
                  <li>users matching</li>
                  <li>user's showcase (Youtube and SoundCloud integrations)</li>
                  <li>built-in chat</li>
                </ul>
                <div >
                  {
                    jamtagTech.map(i => <TechTag>{i}</TechTag>)
                  }
                </div>
              </ProjectCard>
              <ProjectCard   
                title="Windscribe VPN"
                link="https://windscribe.com/"
                bg="linear-gradient(to right, #F27121, #E94057, #8A2387)"
                images={wsImages}
              >
                <p>
                  Complete rewrite of Web Extension for Chrome and Firefox.
                  Used by almost 1M of users worldwide. Implemented:
                </p>
                <ul>
                  <li>Internationalization</li>
                  <li>Notifications system</li>
                  <li>Integrated new ads blocking engine</li>
                </ul>
                <div >
                  {
                    windscribeTech.map(i => <TechTag>{i}</TechTag>)
                  }
                </div>
              </ProjectCard>
              <ProjectCard   
                title="Simpleray"
                link="https://www.simpleray.com/"
                bg="linear-gradient(to right, #4286f4, #373B44)"
                images={srImages}
              >
                <p>
                  Launched redevelopment of the internal web app used by sales
                  and engineers for crafting customer proposals. Main features:
                </p>
                <ul>
                  <li>3 staged environment (dev/test/prod)</li>
                  <li>Rich integration with 3rd party APIs</li>
                  <li>Automated tests</li>
                </ul>
                <div >
                  {
                    simplerayTech.map(i => <TechTag>{i}</TechTag>)
                  }
                </div>
              </ProjectCard>
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
          <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
          <Svg icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
          <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
          <Svg icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
          <Svg icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
          <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
        <Svg icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
        <Svg icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
      </Divider>
    </div>
  )
}

export default Projects
