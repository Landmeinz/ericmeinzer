import React from "react";
import { motion } from "framer-motion";

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
  sxFooter,


} from "../App/App.sxStyles";

function Footer() {

  return (
    <Box id="Footer" sx={sxFooter}>
      <Typography variant="body2">Eric Meinzer 2023 | Designer & Developer | Minneapolis, MN</Typography>
    </Box>
  );
}
export default Footer;
