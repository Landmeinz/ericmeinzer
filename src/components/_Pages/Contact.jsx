import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// --- Parallax --- //
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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

      <Parallax
        // factor={100}
        pages={2}
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
          speed={1}
          //   speed={2.5}
          // sticky={{ start: 0, end: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // color: "blue",
            // backgroundColor: "yellow",
            backgroundImage: `url("images/background/backgroundRed.png")`,
            backgroundSize: "no-scale",
            width: "100vw",
            height: "500vh",
          }}
        ></ParallaxLayer>

        {/* --- text layer Contact Page ---  */}
        <ParallaxLayer
          //   factor={1}
          offset={0}
          speed={-.75}
          // sticky={{ start: 0, end: 0.25 }}
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
          <Box id="ContactContainer" sx={sxContactContainer}>
            <Typography variant="h1">connect with me</Typography>
            <Box id="ContactContent" sx={sxContactContent}>
              <Typography variant="h3">Contact</Typography>
              <Typography variant="h3">Fax Number</Typography>
            </Box>
            <Typography>
              Living life in between the physical and the digital world, my name
              is Eric Meinzer and I like to design and build things.
            </Typography>
            <Typography>
              My current focus is on software engineering, designing and
              developing fluid digital products.{" "}
            </Typography>
            <Typography>
              Thanks for stopping by! 👇 connect with me on LinkedIn or GitHub
              👇
            </Typography>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </motion.div>
  );
}
export default Contact;
