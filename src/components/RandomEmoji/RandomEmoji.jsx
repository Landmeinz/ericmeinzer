import React, {useEffect} from "react";

// --- Components --- //

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import { sxEmojiContainer } from "../App/App.sxStyles";

function RandomEmoji({ emojiList }) {

  return (
    <Box id="EmojiContainer" sx={sxEmojiContainer}>
      {emojiList?.map((emoji, i) => (
        <Typography key={i} variant="body1">{emoji}</Typography>
      ))}
    </Box>
  );
}
export default RandomEmoji;
