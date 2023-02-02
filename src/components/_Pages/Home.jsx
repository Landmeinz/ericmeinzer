import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- Parallax --- //
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //
import ToolTipDisplay from "../ToolTipDisplay/ToolTipDisplay";
import Experience from "../Experience/Experience";

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxHomeContainer,
  sxHomeHeadshot,
  sxDandDContainer,
  sxImageAndDesignerText,
  sxDesignerDeveloperText,
  sxDoingNowContainer,
  sxHomeHeroText,
  sxViewCreations,
  sxPurposeContainer,
  sxPurposeText,
  sxHomePurposeText,
  sxPurposeCard,

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
          content="Eric Meinzer's website, designer and developer, code" />
        <meta
          name="keywords"
          content="personal website, work, design, architecture, graphic design, branding" />
        <meta
          name="author"
          content="ericmeinzer.com, eric, meinzer, Eric Meinzer" />
      </Helmet>

      <Box id="homeContainer" sx={sxHomeContainer}>
        <Box id="jackTextContainer" sx={sxDandDContainer}>
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
        </Box>

        <Box id="purposeContainer" sx={sxPurposeContainer}>
          <Typography color="info.light" sx={sxPurposeText} variant="h3">
            🤖 What Is My Purpose?
          </Typography>
          <Box id="purposeCard" sx={sxPurposeCard}>
            <Typography sx={sxHomePurposeText} variant="h2">
              To Help Bring
            </Typography>
            <Typography sx={sxHomePurposeText} variant="h2">
              Ideas Together
            </Typography>
            <Typography sx={sxHomePurposeText} variant="h2">
              With Design & Code
            </Typography>
          </Box>
        </Box>

        <Box id="doingNowContainer" sx={sxDoingNowContainer}>
          <Typography sx={sxPurposeText} variant="h3">
            Places I've Worked
          </Typography>
          <Experience />
        </Box>

        <Box id="viewCreations" sx={sxViewCreations}>
          <Typography
            sx={sxPurposeText}
            variant="h3"
            onClick={() => handleClick()}
          >
            View Some Work
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
export default Home;
