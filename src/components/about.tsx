/** @jsx jsx */
import { jsx } from "theme-ui";

import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";

import avatar from "../images/avatar.jpg";

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
        <Svg
          icon="box"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="75%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_purple"
          left="5%"
          top="80%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <Svg
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1 sx={{ fontSize: "2.25rem", fontWeight: "bold" }}>About</h1>
        <div sx={{ display: "flex" }}>
          <img
            sx={{
              width: "12rem",
              height: "12rem",
              borderRadius: "50%",
            }}
            src={avatar}
            alt="Profile picture"
          />
          <span sx={{ fontSize: "2.25rem", paddingLeft: "3rem" }}>
            I've been doing Software Web Development for almost 8 years already.
            I like to get involved in front- and back-end development and get my
            hands dirty configuring deployments
          </span>
        </div>
        <div
          sx={{
            fontSize: "1.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            margin: "2rem 0",
          }}
        >
          <h3
            sx={{ fontSize: "1.75rem", marginBottom: "1rem", color: "primary" }}
          >
            Technical Expertise
          </h3>
          <ul sx={{ listStyleType: "none", padding: 0 }}>
            <li
              sx={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span sx={{ color: "primary", marginRight: "0.5rem" }}>•</span>
              <strong sx={{ marginRight: "0.5rem" }}>Frontend:</strong> React,
              Angular
            </li>
            <li
              sx={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span sx={{ color: "primary", marginRight: "0.5rem" }}>•</span>
              <strong sx={{ marginRight: "0.5rem" }}>Backend:</strong> Node.js,
              AWS, Google Cloud
            </li>
            <li sx={{ display: "flex", alignItems: "center" }}>
              <span sx={{ color: "primary", marginRight: "0.5rem" }}>•</span>
              <strong sx={{ marginRight: "0.5rem" }}>Databases:</strong>{" "}
              MongoDB, PostgreSQL, MySQL, SQLite, Redis
            </li>
            <li
              sx={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span sx={{ color: "primary", marginRight: "0.5rem" }}>•</span>
              <strong sx={{ marginRight: "0.5rem" }}>Mobile:</strong> React
              Native
            </li>
            <li
              sx={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span sx={{ color: "primary", marginRight: "0.5rem" }}>•</span>
              <strong sx={{ marginRight: "0.5rem" }}>
                Cloud Services:
              </strong>{" "}
              AWS (EC2, Route53, S3, EBS), Google App Engine
            </li>
            <li
              sx={{
                marginBottom: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span sx={{ color: "primary", marginRight: "0.5rem" }}>•</span>
              <strong sx={{ marginRight: "0.5rem" }}>
                Browser Extensions:
              </strong>{" "}
              Chrome, Firefox, Edge
            </li>
          </ul>
        </div>
      </Inner>
    </Content>
  </div>
);

export default About;
