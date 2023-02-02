
import React from 'react';


// --- MUI --- // 
import {
    Typography,
    Box,

} from '@mui/material';


// --- Sx Styles --- // 
import {
    sxWorkDescriptionTitle,
    sxWorkDescriptionContent,
    sxBreaksH5,

} from '../App/App.sxStyles';


function WorkDescription({title, body, details}) {

    return (
        <Box id='productDescriptionContainer'>
            <Box id="productDescriptionTitle" sx={sxWorkDescriptionTitle} >
                <Typography variant='h3'>{title}</Typography>
            </Box>

            <Box id="productDescriptionContent" sx={sxWorkDescriptionContent}>
                <Typography sx={sxBreaksH5} variant='h5'>{body}</Typography>
                <Typography variant='body1'>{details}</Typography>
            </Box>
        </Box>
    )
}
export default WorkDescription;