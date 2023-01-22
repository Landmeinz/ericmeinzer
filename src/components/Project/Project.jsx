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
  sxProjectContainer,
  sxCardProjectGallery,
  sxProjectImage,
  sxImageList,
  sxExperienceContent,
  sxImageTextHeader,
  sxExperienceImage,
  sxExpHeaderDetails,

  sxProjectContent,
  sxProjectImageTextHeader,
  sxProjectHeaderDetails,
  sxProductImage,



} from "../App/App.sxStyles";

function Project({ projects }) {

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
                <Box id="imageTextHeader" sx={sxProjectImageTextHeader} onClick={() => handleClick(item.image)}>
                  <CardMedia
                    sx={sxProductImage}
                    component="img"
                    alt={item.alt}
                    image={item.image}
                  />
                  <Box id="expHeaderDetails" sx={sxProjectHeaderDetails}>
                    <Typography variant="h5">{item.caption}</Typography>
                    <Typography variant="body1">{item.date}</Typography>
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
