import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import { trans } from "../App/App.sxStyles";

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

      <Typography variant="h1">
        Contact Page
      </Typography>
    </motion.div>
  );
}
export default Contact;
