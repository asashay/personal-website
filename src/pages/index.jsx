import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Typist from 'react-typist';

import cc1 from '../images/cc1.png';
import cc2 from '../images/cc2.png';
import cc3 from '../images/cc3.png';
import cc4 from '../images/cc4.png';
import cc5 from '../images/cc5.png';

import jt1 from '../images/jt1.png';
import jt2 from '../images/jt2.png';
import jt3 from '../images/jt3.png';
import jt4 from '../images/jt4.png';
import jt5 from '../images/jt5.png';

import ws1 from '../images/ws1.png';
import ws2 from '../images/ws2.png';
import ws3 from '../images/ws3.png';
import ws4 from '../images/ws4.png';
import ws5 from '../images/ws5.png';

import sr1 from '../images/sr1.png';
import sr2 from '../images/sr2.png';
import sr3 from '../images/sr3.png';
import sr4 from '../images/sr4.png';
import sr5 from '../images/sr5.png';

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import TechTag from '../elements/TechTag'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => {
  const cryptoCritiquesTech = [
    'React', 'Google Cloud', 'Node.js', 'MongoDB', 'Docker'
  ]

  const ccImages = [
    { original: cc1 },
    { original: cc2 },
    { original: cc3 },
    { original: cc4 },
    { original: cc5 },
  ]

  const jamtagTech = [
    'React', 'Node.js', 'Firebase'
  ]

  const jtImages = [
    { original: jt1 },
    { original: jt2 },
    { original: jt3 },
    { original: jt4 },
    { original: jt5 },
  ]

  const windscribeTech = [
    'Chrome Extension', 'React'
  ]

  const wsImages = [
    { original: ws1 },
    { original: ws2 },
    { original: ws3 },
    { original: ws4 },
    { original: ws5 },
  ]

  const simplerayTech = [
    'React', 'AngularJS', 'Node.js', 'MongoDB',
    'Google Cloud', 'Docker', 'Automated deployments'
  ]

  const srImages = [
    { original: sr1 },
    { original: sr2 },
    { original: sr3 },
    { original: sr4 },
    { original: sr5 },
  ]

  return (
    <>
      <Layout />
      <Parallax pages={5}>
        <Typist avgTypingDelay={10} startDelay={500}>
          <Hero offset={0}>
            <BigTitle>
              Nice to meet you, <br /> I'm Alex Oliynyk
            </BigTitle>
            <Typist.Delay ms={500} />
            <Subtitle>
              Full Stack Javascript developer who enjoys creating stellar digital experiences with modern tech
            </Subtitle>
          </Hero>
        </Typist>
        <Projects offset={1}>
          <Title>My favourite projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Crypto Critiques"
              link="https://www.cryptocritiques.com/home"
              bg="linear-gradient(to right, #2C5364, #203A43, #0F2027)"
              images={ccImages}
            >
              <p>From the ground up built the web app with the crypto currencies info and custom CMS. It has:</p>
              <ul>
                <li>Integration with the 3rd party APIs</li>
                <li>Data scraper</li>
                <li>Been deployed to Google Cloud</li>
              </ul>
              <div >
                {
                  cryptoCritiquesTech.map(i => <TechTag>{i}</TechTag>)
                }
              </div>
            </ProjectCard>
            <ProjectCard
              title="Jam Tag"
              link="https://jamtag.co"
              bg="linear-gradient(to right, #904e95, #e96443)"
              images={jtImages}
            >
              <p>The main idea of the project is to help
                musicians find someone to jam with. Core features:</p>
              <ul>
                <li>users matching</li>
                <li>user's showcase (integration with Youtube and SoundCloud)</li>
                <li>build-in chat</li>
              </ul>
              <div >
                {
                  jamtagTech.map(i => <TechTag>{i}</TechTag>)
                }
              </div>
            </ProjectCard>
            <ProjectCard
              title="Windscribe VPN"
              link="https://chrome.google.com/webstore/detail/windscribe-free-vpn-and-a/hnmpcagpplmpfojmgmnngilcnanddlhb?hl=uk"
              bg="linear-gradient(to right, #F27121, #E94057, #8A2387)"
              images={wsImages}
            >
              <p>
                Complete rewrite of Web Extension for Chrome and Firefox using React (Redux) and Web Extensions API.
                Used by almost 1M of users worldwide. Implemented many new features:
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
              link="https://simpleray.com/"
              bg="linear-gradient(to right, #4286f4, #373B44)"
              images={srImages}
            >
              <p>
                Launched redevelopment of the internal web app used by sales people
                and engineers for crafting customer proposals. Also did legacy app support. Main features:
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
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              I've been into Software development with JavaScript for the last 4+ years.
              During this time worked extensively with with Node.js, React, Angular, hacked with React Native, AWS and Google Cloud.
              So yeah, front- and back-end development together with deployments - that's what I like to do
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            In addition my technology competence covers Chrome, Firefox, Edge extensions development. 
            Also I am familiar with deployments using AWS (EC2, Route53, S3, EBS), Google App Engine. 
            Worked with NoSQL and SQL databases - MongoDB, PostgreSQL, MySQL, SQLite, Redis
          </AboutDesc>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Find me on {' '}
              <a href="https://twitter.com/alex__oliynyk">Twitter</a> &{' '}
              <a href="https://www.linkedin.com/in/oleksandroliynyk/">LinkedIn</a>
            </ContactText>
          </Inner>
          <Footer>
            {/* Footer info here */}
          </Footer>
        </Contact>
      </Parallax>

    </>
  )
}

export default Index
