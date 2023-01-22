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
        <WorkDescription
          id="workDescription"
          title={workPage.title}
          body={workPage.body}
          details={workPage.details}
        />
        <Featured featured={featured} />

        <WorkDescription
          id="projectDescription"
          title={projectSection.title}
          body={projectSection.body}
          // details={projectSection.details}
        />
        <Project projects={projects} />

      </Box>
    </motion.div>
  );
}
export default Home;
