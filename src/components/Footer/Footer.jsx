import React from "react";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
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
