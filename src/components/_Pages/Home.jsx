import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxHomeContainer,
  sxJackTextContainer,
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
        <Typography variant="h1">Home Page!</Typography>
        <Box id="JackTextContainer" sx={sxJackTextContainer}>
          <Typography variant="h3">
            A jack of all trades is a master of none,
          </Typography>
          <Typography variant="h3">
            but more often better than a master of one.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
export default Home;
