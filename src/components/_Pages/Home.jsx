import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //
import Pill from "../Pill/Pill";
import ToolTipDisplay from "../ToolTipDisplay/ToolTipDisplay";
import Experience from "../Experience/Experience";

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Sx Styles --- //
import {
  theme,
  trans,
  sxHomeContainer,
  sxHomeHeadshot,
  sxJackTextContainer,
  sxImageAndDesignerText,
  sxDesignerDeveloperText,
  sxBackgroundImage,
  sxHistoryTextContainer,
  sxPillContainer,
  sxPillCard,
  sxPillContainerText,
  sxDoingNowContainer,
  sxHomeHeroText,
  sxH3,
  sxPhotoToolTip,
  sxExperienceText,
  sxViewCreations,


} from "../App/App.sxStyles";

function Home() {
  const navigate = useNavigate();

  const displayMessage = `they say a jack of all trades is a master of none,
  but more often better than a master of one`;

  function handleClick() {
    navigate("/work");
    window.scrollTo(0, 0);
  }

  return (
    <motion.div
      initial={trans.initial}
      animate={trans.animate}
      exit={trans.exit}
      style={trans.style}
      transition={trans.time}
    >
      <Helmet>
        <title>Eric Meinzer | Home</title>
        <meta
          name="description"
          content="general information about eric meinzer and a website to view his work."
        />
        <meta name="keywords" content="personal website, " />
        <meta name="author" content="ericmeinzer.com, eric, meinzer" />
      </Helmet>

      <Box id="homeContainer" sx={sxHomeContainer}>
        <Box id="jackTextContainer" sx={sxJackTextContainer}>
          <Box sx={sxImageAndDesignerText}>

            <ToolTipDisplay content={displayMessage} direction="right">
              <Box>

                <CardMedia
                  sx={sxHomeHeadshot}
                  component="img"
                  alt="A Nice Headshot Photo of Eric"
                  image="/images/EM.jpg"
                />
              </Box>
            </ToolTipDisplay>

            <Box id="designerDeveloperText" sx={sxDesignerDeveloperText}>
              <Typography sx={sxHomeHeroText} variant="h1">
                Designer &
              </Typography>
              <Typography sx={sxHomeHeroText} variant="h1">
                Developer
              </Typography>
            </Box>

          </Box>

          {/* <Typography sx={sxH3} variant="h3">
            they say a jack of all trades is a master of none
          </Typography>
          <Typography sx={sxH3} variant="h3">
            but more often better than a master of one
          </Typography> */}
        </Box>

        {/* --- pill layers ---*/}
        <Box id="pillContainer" sx={sxPillContainer}>
          <Typography color="info.light" sx={sxExperienceText} variant="h3">
            🤖 What Is My Purpose?
          </Typography>
          <Box id="pillCard" sx={sxPillCard}>
            <Typography sx={sxHomeHeroText} variant="h1">
              To Help Bring
            </Typography>
            <Typography sx={sxHomeHeroText} variant="h1">
              Ideas Together
            </Typography>
            <Typography sx={sxHomeHeroText} variant="h1">
              With Design & Code
            </Typography>
          </Box>

          {/* <Box sx={sxPillContainerText}>
            <Pill text={"Lighting Design"} />
            <Pill text={"Rendering"} />
            <Pill text={"Graphic Design"} />
            <Pill text={"Product Design"} />
            <Pill text={"Architecture"} />
          </Box> */}
        </Box>

        <Box id="doingNowContainer" sx={sxDoingNowContainer}>
          <Typography sx={sxExperienceText} variant="h3">
            Places I've Worked
          </Typography>
          {/* <Typography variant="h5">Full Stack Software Engineer with a Bachelor of Science in Design</Typography> */}
          <Experience />
          {/* <Pill text={"View My Work"} /> */}
        </Box>

        <Box sx={sxViewCreations}>
          <Typography
            sx={sxExperienceText}
            variant="h3"
            onClick={() => handleClick()}
          >
            Click Here To View Work
          </Typography>
        </Box>


      </Box>
    </motion.div>
  );
}
export default Home;
