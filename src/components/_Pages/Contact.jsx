import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxContactContainer,
  sxContactContent,
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

      <Box id="Contactontainer" sx={sxContactContainer}>
        <Typography variant="h1">Contact Page!</Typography>
        <Box id="ContactContent" sx={sxContactContent}>
          <Typography variant="h3">Contact</Typography>
          <Typography variant="h3">Fax Number</Typography>
        </Box>
        <Typography>
          Living life in between the physical and the digital world, my name is
          Eric Meinzer and I like to design and build things.
        </Typography>
        <Typography>
          My current focus is on software engineering, designing and developing
          fluid digital products.{" "}
        </Typography>
        <Typography>
          Thanks for stopping by! 👇 connect with me on LinkedIn or GitHub 👇
        </Typography>
      </Box>
    </motion.div>
  );
}
export default Contact;
