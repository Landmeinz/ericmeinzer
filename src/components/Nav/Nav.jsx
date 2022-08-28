import React, { useState, useEffect } from "react";
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
  sxNavSubText,
  sxNavTextCreative,
} from "../App/App.sxStyles";

function Nav() {
  const navigate = useNavigate();

  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {}, []); //No dependency to trigger in each page load

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  const addEmoji = () => {
    const emoji = possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
    emojiList.push(emoji);
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
              variant="body1"
              onClick={addEmoji}
            >
              Creative Guy
            </Typography>
            <RandomEmoji emojiList={emojiList} />
          </Box>

          <Typography
            id="NavTextContact"
            sx={sxNavText}
            variant="body1"
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
