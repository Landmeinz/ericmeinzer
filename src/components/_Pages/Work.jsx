import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //
import Project from "../Project/Project";
import Featured from "../Featured/Featured";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

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

function Work() {

  const embraceText = "// Embrace The Process";
  const createText = "// Create And Build";

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

        <Box id="workHeader" sx={sxWorkHeader}>
          <Typography sx={sxWorkHeroText} variant="h1">
            {embraceText}
          </Typography>
          <Typography sx={sxWorkHeroText} variant="h1">
            {createText}
          </Typography>
        </Box>

        <Box id="projectsContainer-1" sx={sxProjectsContainer}>
          <Typography sx={sxFocusHeaderText} variant="h3">
            Currently my focus is on designing, developing, and deploying applications
          </Typography>
          <Featured />
        </Box>

        <Box id="projectsConatiner-2" sx={sxProjectsContainer}>
          <Box id="listProjectsContainer" sx={sxLisProjectsContainer}>
            <Box id="listProjects-1" sx={sxListProjects}>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Branding
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Lighting Design
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Concept Renderings
              </Typography>
            </Box>
            <Box id="listProjects-2" sx={sxListProjects}>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Physical Models
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Architectural Drawings
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Web Design
              </Typography>
            </Box>
            <Box id="listProjects-3" sx={sxListProjects}>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Calligraphy
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Packaging Design
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h4">
                Graphic Design
              </Typography>
            </Box>
          </Box>
          <Project />
        </Box>
      </Box>
    </motion.div>
  );
}
export default Work;
