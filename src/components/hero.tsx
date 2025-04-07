/** @jsx jsx */
import { jsx } from "theme-ui";
import Typist from "react-typist-component";

import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import Svg from "./svg";
import { UpDown, UpDownWide } from "../styles/animations";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="triangle"
          hiddenMobile
          width={56}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
        />
        <Svg
          icon="hexa"
          width={48}
          stroke
          color="icon_red"
          left="60%"
          top="70%"
        />
        <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="50%"
        />
        <Svg
          icon="circle"
          width={16}
          color="icon_darker"
          left="70%"
          top="90%"
        />
        <Svg
          icon="triangle"
          width={16}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <Svg
          icon="cross"
          width={16}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <Svg
          icon="circle"
          width={6}
          color="icon_darkest"
          left="75%"
          top="10%"
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
        width={24}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg
        icon="upDown"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <Svg
        icon="triangle"
        width={8}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
      />
      <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <Svg
        icon="box"
        hiddenMobile
        width={64}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg
        icon="hexa"
        width={16}
        stroke
        color="icon_darker"
        left="10%"
        top="50%"
      />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_darker"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Typist
          typingDelay={40}
          startDelay={500}
          cursor={<span className="cursor">|</span>}
        >
          <h1
            sx={{
              textShadow: "0 5px 35px rgba(255, 255, 255, 0.15)",
              fontSize: "5rem",
              marginBottom: "1.5rem",
            }}
          >
            Nice to meet you, <br />
            I'm Alex Oliynyk
          </h1>
          <div
            sx={{
              textShadow: "0 2px 15px rgba(0, 0, 0, 0.2)",
              fontSize: "2.25rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Senior Software Engineer
            <Typist.Delay ms={500} />
            <Typist.Backspace count={8} />
            <Typist.Delay ms={300} />
            Developer
            <Typist.Delay ms={200} />
            &nbsp;crafting stellar digital experiences
          </div>
        </Typist>
        <div></div>
        <div
          sx={{
            fontSize: "28px",
            fontWeight: "bold",
            a: {
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            },
          }}
        >
          <a
            href="https://www.linkedin.com/in/oleksandroliynyk"
            target="_blank"
            rel="noreferrer noopener"
            sx={{
              color: "rgb(37, 99, 235)",
              "&:hover": { color: "rgb(37, 99, 235)" },
            }}
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://www.upwork.com/freelancers/~011eaa783914e93d3d"
            target="_blank"
            rel="noreferrer noopener"
            sx={{
              color: "rgb(64, 191, 117)",
              "&:hover": { color: "rgb(64, 191, 117)" },
            }}
          >
            Upwork
          </a>{" "}
          |{" "}
          <a
            href="/OLEKSANDR_OLIYNYK_CV.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </div>
      </Inner>
    </Content>
  </div>
);

export default Hero;
