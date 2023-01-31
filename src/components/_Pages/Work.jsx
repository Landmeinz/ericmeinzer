import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //
import Pill from "../Pill/Pill";
import Project from "../Project/Project";
import WorkDescription from "../WorkDescription/WorkDescription";
import Featured from "../Featured/Featured";

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Content --- //
import {
  projects,
  workPage,
  featured,
  projectSection,

  // other,
} from "../../content/Projects";

// --- Sx Styles --- //
import {
  theme,
  trans,
  sxWorkContainer,
  sxH3,
  sxCardProjectGallery,
  sxProjectDescription,
  sxHomeHeroText,
  sxWorkHeader,
  sxWorkHeroText,
  sxProjectsHeaderText,
  sxProjectsContainer,
  sxListProjects,
  sxLisProjectsContainer,



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
        <title>Eric Meinzer | Work</title>
        <meta
          name="description"
          content="selected work eric meinzer has worked on or created."
        />
        <meta name="keywords" content="portfolio, work, photo, gallery" />
        <meta name="author" content="ericmeinzer.com, eric, meinzer" />
      </Helmet>

      <Box id="workContainer" sx={sxWorkContainer}>
        {/* <Typography variant="h4">Software Development</Typography>
        <Typography variant="h4">Lighting Design</Typography>
        <Typography variant="h4">Renderings</Typography>
        <Typography variant="h4">Graphic Design</Typography>
        <Typography variant="h4">Product Design</Typography>
        <Typography variant="h4">Under Graduate Architecture Portfolio</Typography> */}
        <Box id="workHeader" sx={"sxWorkHeader"}>
          <Typography sx={sxWorkHeroText} variant="h1">
            // Embrace The Process
          </Typography>
          <Typography sx={sxWorkHeroText} variant="h1">
            // Create And Build
          </Typography>
        </Box>

        {/* <WorkDescription
          id="workDescription"
          // title={workPage.title}
          body={workPage.body}
          details={workPage.details}
        /> */}

        <Box sx={sxProjectsContainer}>
          <Typography sx={sxProjectsHeaderText} variant="h5">
            Currently my focus is on designing and deploying applications
          </Typography>
          <Featured featured={featured} />
        </Box>

        <Box sx={sxProjectsContainer}>
          <Box sx={sxLisProjectsContainer}>
            <Box sx={sxListProjects}>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Logos
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Lighting Design
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Concept Renderings
              </Typography>
            </Box>
            <Box sx={sxListProjects}>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Physical Models
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Architectural Drawings
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Web Design
              </Typography>
            </Box>
            <Box sx={sxListProjects}>
            <Typography sx={sxProjectsHeaderText} variant="h5">
                Calligraphy
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h5">
                Packaging Design
              </Typography>
              <Typography sx={sxProjectsHeaderText} variant="h5">
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
export default Home;
