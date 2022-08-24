import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxNavContainer,
  sxNavContent,
  sxNameContainer,
  sxNavText,
  sxNavSubText,
} from "../App/App.sxStyles";

function Nav() {
  const navigate = useNavigate();

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  return (
    <Box id="NavContainer" sx={sxNavContainer}>
      <motion.div
        initial={trans.initial}
        animate={trans.animate}
        exit={trans.exit}
        style={trans.style}
        transition={trans.time}
      >
        <Box id="NavContent" sx={sxNavContent}>
          <Box sx={sxNameContainer}>
            <Typography
              id="NavTextEricMeinzer"
              sx={sxNavText}
              variant="h5"
              onClick={() => handleNav("/home")}
            >
              Eric Meinzer
            </Typography>
            <Typography id="NavTextDesignerDev" variant="body1">
              Designer | Developer
            </Typography>
          </Box>

          <Typography
            id="NavTextContact"
            sx={sxNavText}
            variant="h6"
            onClick={() => handleNav("/contact")}
          >
            Contact
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
export default Nav;
