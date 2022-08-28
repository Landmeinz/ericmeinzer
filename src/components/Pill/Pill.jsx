import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  theme,
  sxPillContent,

} from "../App/App.sxStyles";

function Pill({ text }) {
  const navigate = useNavigate();

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  const max = 0.9;
  const min = 0.1;
  //   let gridAreaNumber = Math.round(Math.random() * (100 - 30) + 1);

  return (
    <Box sx={sxPillContent} onClick={() => handleNav("/work")}>
      <Typography sx={{fontWeight: "bold",}} variant="h6">{text}</Typography>
    </Box>
  );
}
export default Pill;
