import React from "react";

// --- Components --- //
import ProjectCard from "../ProductCard/ProductCard";
import ProjectDescription from "../WorkDescription/WorkDescription";

// --- MUI --- //
import {
  // Typography,
  // CardMedia,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  CardMedia,
} from "@mui/material";

import {
  sxFeaturedContainer,
  sxCardFeaturedGallery,
  sxFeaturedImage,
  sxImageList,
} from "../App/App.sxStyles";

function Featured({ featured }) {

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
          {featured.content.map((item) => (
            <Box key={item.id}>
              <CardMedia
                sx={sxFeaturedImage}
                component="img"
                alt={item.alt}
                height="140"
                image={`${item.image}`}
                loading="lazy"
                onClick={() => handleClick(item.url, item.image)}
                // srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              ></CardMedia>
              <Typography color="info.light" variant="body1">{item.caption}</Typography>
              {/* <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.alt}
                loading="lazy"
              /> */}
            </Box>
          ))}
      </Box>
    </Box>
  );
}
export default Featured;
