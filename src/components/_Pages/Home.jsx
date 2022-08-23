import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import { trans, sxHomeContainer } from "../App/App.sxStyles";

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
        <Typography variant="h1">Welcome!</Typography>
        <Typography variant="h2">
          A jack of all trades is a master of none, but oftentimes better than a
          master of one.
        </Typography>
      </Box>
    </motion.div>
  );
}
export default Home;
