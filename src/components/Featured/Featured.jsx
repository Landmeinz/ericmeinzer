import React from "react";

// --- Components --- //

// --- Content --- //
import {
  featured,
} from "../../content/Projects";

// --- MUI --- //
import {
  Box,
  Typography,
  CardMedia,
} from "@mui/material";

import {
  sxFeaturedContainer,
  sxCardFeaturedGallery,
  sxFeaturedImage,

} from "../App/App.sxStyles";

function Featured() {
  function handleClick(url, image){
    console.log('handle open in new tab');
    if (url == null) {
      return window.open(image, '_blank'); 
    }
    window.open(url, '_blank');
  }

  return (
    <Box id="featuredContainer" sx={sxFeaturedContainer}>
      <Box id="cardFeaturedGallery" sx={sxCardFeaturedGallery}>
          {featured?.content.map((item) => (
            <Box key={item.id}>
              <CardMedia
                sx={sxFeaturedImage}
                component="img"
                alt={item.alt}
                height="140"
                image={`${item.image}`}
                loading="lazy"
                onClick={() => handleClick(item.url, item.image)}
              ></CardMedia>
              <Typography color="info.light" variant="body1">{item.caption}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
export default Featured;
