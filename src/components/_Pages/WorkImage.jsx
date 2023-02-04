import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";

// --- Parallax --- //
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Content --- //

// --- Sx Styles --- //
import {
  trans,
  sxWorkContainer,
  sxWorkHeader,
  sxWorkHeroText,
  sxProjectsHeaderText,
  sxProjectsContainer,
  sxListProjects,
  sxLisProjectsContainer,
  sxFocusHeaderText,

} from "../App/App.sxStyles";

function WorkImage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

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
          content="selected work eric meinzer has worked on or created."
        />
        <meta name="keywords" content="portfolio, work, photo, gallery" />
        <meta name="author" content="ericmeinzer.com, eric, meinzer" />
      </Helmet>

      <Box id="workContainer" sx={sxWorkContainer}>
        <CardMedia
          component="img"
          alt={searchParams.get("alt")}
          image={searchParams.get("image")}
        />
      </Box>
    </motion.div>
  );
}
export default WorkImage;
