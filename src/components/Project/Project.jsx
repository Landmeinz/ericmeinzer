import React from "react";

// --- Components --- //

// --- Content --- //
import {
  projects,
} from "../../content/Projects";

// --- MUI --- //
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  CardMedia,

} from "@mui/material";

import {
  sxProjectContainer,
  sxCardProjectGallery,
  sxImageList,
  sxProjectContent,
  sxProjectImageTextHeader,
  sxProjectHeaderDetails,
  sxProductImage,
  sxProjectHeaderText,
  sxProjectLocationText,

} from "../App/App.sxStyles";

function Project() {

  projects?.content.sort((a, b) => 0.5 - Math.random());

  function handleClick(image) {
    console.log('handle open in new tab');
    window.open(image, '_blank');
  }

  return (
    <Box id="projectContainer" sx={sxProjectContainer}>
      <Box id="cardProjectGallery" sx={sxCardProjectGallery}>
        <ImageList sx={sxImageList} variant="masonry" cols={1} gap={12}>
          {projects?.content.map((item) => (
            <ImageListItem key={item.id}>
              <Box id="projectContent" sx={sxProjectContent}>
                <Box
                  id="imageTextHeader"
                  sx={sxProjectImageTextHeader}
                  onClick={() => handleClick(item.image)}>
                  <CardMedia
                    sx={sxProductImage}
                    component="img"
                    alt={item.alt}
                    image={item.thumbnail}
                  />
                  <Box
                    id="expHeaderDetails"
                    sx={sxProjectHeaderDetails}>
                    <Typography sx={sxProjectHeaderText} variant="h5">{item.caption}</Typography>
                    <Typography sx={sxProjectLocationText} variant="body1">{item.date}</Typography>
                  </Box>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
export default Project;
