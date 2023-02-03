import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- Constants --- //
import { possibleEmojis } from "../../constants/possibleEmojis";

// --- Components --- //
import RandomEmoji from "../RandomEmoji/RandomEmoji";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxNavContainer,
  sxNavContent,
  sxNameContainer,
  sxNavText,
  sxNavTextCreative,
  sxWorkContactContainer,

} from "../App/App.sxStyles";


function Nav() {
  const navigate = useNavigate();
  const [emojiList, setEmojiList] = useState([]);

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  const addEmoji = () => {
    const emoji = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
    if (emojiList.length > 14) {
      emojiList.pop(emojiList.length);
      emojiList.unshift(emoji);
    }
    else{
      emojiList.unshift(emoji);
    }
    setEmojiList([...emojiList]);
  }; // addEmoji

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
            <Typography
              id="NavTextCreative"
              sx={sxNavTextCreative}
              variant="body2"
              onClick={addEmoji}
            >
              Creative Guy
            </Typography>
            <RandomEmoji emojiList={emojiList} />
          </Box>

          <Box id="WorkContactContainer" sx={sxWorkContactContainer}>
            <Typography
              id="NavTextContact"
              sx={sxNavText}
              variant="h5"
              onClick={() => handleNav("/work")}
            >
              Work
            </Typography>
            <Typography
              id="NavTextContact"
              sx={sxNavText}
              variant="h5"
              onClick={() => handleNav("/contact")}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
export default Nav;
