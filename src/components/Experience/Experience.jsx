import React from "react";

// --- Components --- //

// --- MUI --- //
import { Typography, Box, CardMedia } from "@mui/material";

// --- Sx Styles --- //
import {
    sxExperienceContent,
    sxExperienceImage,
    sxExperienceContainer,
    sxImageTextHeader,
    sxExpHeaderDetails,

} from "../App/App.sxStyles";

function Experience(props) {

    function handleClick(input) {
        console.log('clicked');
        switch (input) {
            case 'ceridian':
                window.open('https://www.linkedin.com/company/ceridian/home', '_blank');
                break;

            case 'schuler':
                window.open('https://www.linkedin.com/company/schuler-shook/home', '_blank');
                break;

            default:
                break;
        }

    } // handleNav

    return (
        <Box id="experienceContainer" sx={sxExperienceContainer}>
            <Box id="experienceContent" sx={sxExperienceContent}>
                <Box id="imageTextHeader" sx={sxImageTextHeader} onClick={() => handleClick("ceridian")}>
                    <CardMedia
                        sx={sxExperienceImage}
                        component="img"
                        alt="Ceridian Logo"
                        image="/images/projects/CeridianLogo.png"
                    />
                    <Box id="expHeaderDetails" sx={sxExpHeaderDetails}>
                        <Typography variant="h5">Software Developer</Typography>
                        <Typography variant="body1">Ceridian // 2022-2023</Typography>
                    </Box>
                </Box>
            </Box>

            <Box id="experienceContent2" sx={sxExperienceContent}>
                <Box id="imageTextHeader2" sx={sxImageTextHeader} onClick={() => handleClick("schuler")}>
                    <CardMedia
                        sx={sxExperienceImage}
                        component="img"
                        alt="Schuler Shook Logo"
                        image="/images/projects/SSLogo.png"
                    />
                    <Box id="expHeaderDetails2" sx={sxExpHeaderDetails}>
                        <Typography variant="h5">Architectural Lighting Designer</Typography>
                        <Typography variant="body1">Schuler Shook // 2016-2021</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default Experience;
