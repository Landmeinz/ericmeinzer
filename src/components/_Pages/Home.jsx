import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// --- Components --- //

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxHomeContainer,
  sxJackTextContainer,
  sxBackgroundImage,
  sxHistoryTextContainer,

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

      <Parallax
        // factor={100}
        pages={6}
        // speed={1}
        style={{
          top: "0",
          left: "0",
          // backgroundColor: "black",
          //   backgroundImage: `url("images/background/background.png")`,
        }}
      >
        {/* --- top one ---  */}
        <ParallaxLayer
          //   factor={10}
          offset={0}
          speed={0}
          //   speed={2.5}
          // sticky={{ start: 0, end: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // color: "blue",
            // backgroundColor: "yellow",
            backgroundImage: `url("images/background/background.png")`,
            backgroundSize: "no-scale",
            width: "100vw",
            height: "100%",
          }}
        ></ParallaxLayer>

        {/* --- text layer Jack ---  */}
        <ParallaxLayer
          //   factor={1}
          offset={0}
          speed={-0.25}
          //   sticky={{ start: 0, end: 0.25 }}
          style={{
            // border: "5px solid blue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // color: "white",
            // backgroundColor: "green",
            // opacity: ".25"
          }}
        >
          <Box id="HomeContainer" sx={sxHomeContainer}>
            <Typography variant="h1">Designer & Developer</Typography>
            <Box id="JackTextContainer" sx={sxJackTextContainer}>
              <Typography variant="h3">
                A jack of all trades is a master of none
              </Typography>
              <Typography variant="h3">
                but more often better than a master of one
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* --- text layer 2 ---  */}
        <ParallaxLayer
          //   factor={1}
          offset={1}
          speed={0.25}
          //   sticky={{ start: 0, end: 0.25 }}
          style={{
            // border: "5px solid blue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // color: "white",
            // backgroundColor: "green",
          }}
        >
          <Box id="HomeContainer" sx={sxHomeContainer}>
            <Typography variant="h3">
              I've done a lot of things over the years
            </Typography>
            <Box id="HistoryTextContainer" sx={sxHistoryTextContainer}>
              <Typography variant="h4">
                Earned a design degree from a university
              </Typography>
              <Typography variant="h4">
                Spent time as a freelance graphic designer
              </Typography>
              <Typography variant="h4">
                Would draft construction drawings and specify architectural products
              </Typography>
              <Typography variant="h4">
                Collabed with manufactures to 3D model products
              </Typography>
              <Typography variant="h4">
                Created environments and set the mood as a lighting designer
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* --- text layer 3 ---  */}
        <ParallaxLayer
          //   factor={1}
          offset={2}
          speed={0.5}
          //   sticky={{ start: 0, end: 0.25 }}
          style={{
            // border: "5px solid blue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            // backgroundColor: "green",
          }}
        >
          <Box id="HomeContainer" sx={sxHomeContainer}>
            <Typography variant="h3">
              Now I'm designing and developing software
            </Typography>
            <Box id="HistoryTextContainer1" sx={sxHistoryTextContainer}>
              <Typography variant="h4">
                React developer, C# 
              </Typography>
            </Box>
          </Box>
        </ParallaxLayer>

        {/* --- bottom layer ---  */}
        <ParallaxLayer
          //   factor={1}
          offset={3}
          speed={0}
          // sticky={{ start: 0, end: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "start",
            // color: "blue",
            // backgroundColor: "yellow",
            backgroundImage: `url("images/background/backgroundRotated.png")`,
            backgroundSize: "no-scale",
            width: "100vw",
            height: "100%",
          }}
        ></ParallaxLayer>
      </Parallax>
    </motion.div>
  );
}
export default Home;
