import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //
import Pill from "../Pill/Pill";

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
  sxPillContainerText,
  sxDoingNowContainer,
  sxHomeHeroText,
  sxH3,
} from "../App/App.sxStyles";

function Home() {
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

      <Box id="HomeContainer" sx={sxHomeContainer}>
        <Box id="JackTextContainer" sx={sxJackTextContainer}>
          <Box sx={sxImageAndDesignerText}>
          <CardMedia
            sx={sxHomeHeadshot}
            component="img"
            alt="A Nice Headshot Photo of Eric"
            image="/images/EM.jpg"
          />
          <Box sx={sxDesignerDeveloperText}>
          <Typography sx={sxHomeHeroText} variant="h1">
            Designer &
          </Typography>
          <Typography sx={sxHomeHeroText} variant="h1">
            Developer
          </Typography>
          </Box>
       
          </Box>
       
          <Typography sx={sxH3} variant="h3">
            they say a jack of all trades is a master of none
          </Typography>
          <Typography sx={sxH3} variant="h3">
            but more often better than a master of one
          </Typography>
        </Box>

        {/* --- pill layers ---*/}
        <Box sx={sxPillContainer}>
          <Typography sx={sxH3} variant="h3">
            I've done a lot of different things over the years
          </Typography>
          <Box sx={sxPillContainerText}>
            <Pill text={"Lighting Design"} />
            <Pill text={"Rendering"} />
            <Pill text={"Graphic Design"} />
            <Pill text={"Product Design"} />
            <Pill text={"Architecture"} />
          </Box>
        </Box>

        <Box sx={sxDoingNowContainer}>
          <Typography sx={{ fontWeight: "bold" }} variant="h3">
            Designing & Developing Software
          </Typography>
          <Typography variant="h4">as a Full Stack Developer</Typography>
          <Pill text={"View My Work"} />
        </Box>
      </Box>
    </motion.div>
  );
}
export default Home;
