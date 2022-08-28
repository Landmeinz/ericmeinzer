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
import { theme, trans, sxWorkContainer, sxH3 } from "../App/App.sxStyles";

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
        <title>Eric Meinzer | Work</title>
        <meta
          name="description"
          content="selected work eric meinzer has worked on."
        />
        <meta name="keywords" content="portfolio, work, photo, gallery " />
        <meta name="author" content="ericmeinzer.com, eric, meinzer" />
      </Helmet>

      <Box id="WorkContainer" sx={sxWorkContainer}>
        <Typography variant="h4">Lighting Design</Typography>
        <Typography variant="h4">Rendering</Typography>
        <Typography variant="h4">Graphic Design</Typography>
        <Typography variant="h4">Product Design</Typography>
        <Typography variant="h4">UnderGrad Architecture Portfolio</Typography>
      </Box>
    </motion.div>
  );
}
export default Home;
