import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxContactContainer,
  sxContactContent,
  sxHomeHeroText,
  sxH3,
  sxContactSubText,
  
} from "../App/App.sxStyles";

function Contact() {
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
        <Typography sx={sxHomeHeroText} variant="h1">
          Connect With Me
        </Typography>
        <Box id="ContactContent" sx={sxContactContent}>
          <Typography sx={sxH3} variant="h3">
            GitHub
          </Typography>
          <Typography sx={sxH3} variant="h3">
            LinkedIn
          </Typography>
          <Typography sx={sxH3} variant="h3">
            Tinker
          </Typography>
        </Box>

        <Box sx={sxContactSubText}>
          <Typography variant="body1">
            Living life in between the physical and the digital world, my name
            is Eric Meinzer and I like to design and build things.
          </Typography>
          <Typography variant="body1">
            My current focus is on software engineering, designing and
            developing fluid digital products.{" "}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
export default Contact;
