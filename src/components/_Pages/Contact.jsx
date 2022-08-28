import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ConstructionIcon from "@mui/icons-material/Construction";

// --- Sx Styles --- //
import {
  trans,
  sxContactContainer,
  sxContactContent,
  sxHomeHeroText,
  sxH3,
  sxContactSubText,
  sxIcon,
  sxContactHeader,

} from "../App/App.sxStyles";

function Contact() {
  const githubUrl = "https://github.com/Landmeinz";
  const linkedInUrl = "https://www.linkedin.com/in/ericmeinzer/";
  const tinkerUrl = "https://www.tinker.group/#/about";

  function handleNav(url) {
    window.open(url, "_blank").focus();
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
        <title>Eric Meinzer | Contact</title>
        <meta
          name="description"
          content="contact, email, social media, message, text"
        />
        <meta name="keywords" content="contact, " />
        <meta name="author" content="ericmeinzer.com, eric, meinzer" />
      </Helmet>

      {/* --- text layer Contact Page ---  */}
      <Box id="ContactContainer" sx={sxContactContainer}>
        <Box sx={sxContactHeader}>
          <Typography sx={sxHomeHeroText} variant="h1">
            Connect With Me
          </Typography>

          <Box id="ContactContent" sx={sxContactContent}>
            <GitHubIcon sx={sxIcon} onClick={() => handleNav(githubUrl)} />
            <LinkedInIcon sx={sxIcon} onClick={() => handleNav(linkedInUrl)} />
            <ConstructionIcon
              sx={sxIcon}
              onClick={() => handleNav(tinkerUrl)}
            />
          </Box>
        </Box>

        <Box sx={sxContactSubText}>
        <Typography sx={sxHomeHeroText} variant="h1">
            TLDR
          </Typography>

          <Typography variant="h6">
            Minneapolis livin
          </Typography>

          <Typography variant="h6">
            I like to design and build things
          </Typography>

          <Typography variant="h6">
            Living life in between the physical and the digital world
          </Typography>

          <Typography variant="h6">
            I'm pretty good at a lot of things and like to take on challenges
          </Typography>

        </Box>
      </Box>
    </motion.div>
  );
}
export default Contact;
