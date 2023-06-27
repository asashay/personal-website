/** @jsx jsx */
import { jsx } from "theme-ui";

import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

import avatar from '../images/avatar.jpg'


const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1 sx={{ fontSize: '2.25rem', fontWeight: 'bold'}}>
          About
        </h1>
        <div sx={{ display: 'flex'}}>
          <img 
            sx={{
              width: '12rem',
              height: '12rem',
              borderRadius: '50%'
            }}
            src={avatar} alt="Profile picture" />
            <span sx={{ fontSize: '2.25rem', paddingLeft: '3rem'}}>
              I've been doing Software Web Development for almost 8 years already. I like to get involved in front- and back-end development and get my hands dirty configuring deployments
            </span>
        </div>
        <p sx={{ fontSize: '1.5rem'}}>
          Worked extensively with with Node.js, React, Angular, hacked with React Native, AWS and Google Cloud. In addition my technology competence covers Chrome, Firefox, Edge extensions development. Also I am familiar with deployments using AWS (EC2, Route53, S3, EBS), Google App Engine. Worked with NoSQL and SQL databases - MongoDB, PostgreSQL, MySQL, SQLite, Redis
        </p>
      </Inner>
    </Content>
  </div>
)

export default About
