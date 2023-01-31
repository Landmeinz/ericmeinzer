// responsiveFontSizes
import { createTheme } from "@mui/material/styles";

// ----- Transitions ----- //
// ----- Transitions ----- //
// ----- Transitions ----- //
export const trans = {
  time: { duration: 0.75 },
  initial: { rotate: 0, y: 0, opacity: 0 },
  animate: { rotate: 0, y: 0, opacity: 1 },
  // exit:       { rotate: -30 },
};

export const transApp = {
  time: { duration: 1.25 },
  initial: { rotate: 0, y: 0, opacity: 0 },
  animate: { rotate: 0, y: 0, opacity: 1 },
};
// ----- Transitions ----- //
// ----- Transitions ----- //
// ----- Transitions ----- //

// ----- App ----- //
// ----- App ----- //
// ----- App ----- //
export const theme = createTheme({
  palette: {
    primary: {
      main: "hsla(360, 60%, 40%, 1)",
      dark: "hsla(360, 60%, 18%, 1)",
      //   light: "hsla(14, 77%, 56%, 1)",
    },
    secondary: {
      main: "hsla(360, 5%, 20%, 1)",
      //   dark: "hsla(312, 14%, 36%, 1)",
      //   light: "hsla(180, 78%, 48%, 1)",
    },
    error: {
      main: "hsla(350, 90%, 40%, 1)",
    },
    info: {
      main: "hsla(330, 10%, 12%, 1)",
      dark: "hsla(330, 10%, 4%, 1)",
      light: "hsla(330, 10%, 82%, 1)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// [theme.breakpoints.down("xl")]: {
//     fontSize: "2.25rem",
//   },
//   [theme.breakpoints.down("lg")]: {
//     fontSize: "2rem",
//   },
//   [theme.breakpoints.down("md")]: {
//     fontSize: "1.75rem",
//   },
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "1.5rem",
//   },

export const sxApp = {
  // border: "5px solid red",
  //   bgcolor: "secondary.main",
  minHeight: "100vh",
  // hight: "100%",
  // width: '100%',
  m: 0,
  p: 0,
  position: "relative",
  overflow: "hidden ",

};

export const sxAppContainer = {
  // border: "2px solid blue",
  // backgroundImage: `url("images/background/background.png")`,
  bgcolor: "primary.dark",
  // mb: 20,
  //   objectFit: "contain",
  height: "100%",
  width: '100%',
  //   width: '5000vw',
  minHeight: "100vh",
  zIndex: 1,
  position: "relative",
  overflow: "hidden ",
};

export const sxBackgroundImage = {
  // border: '1px solid blue',
  //   position: 'sticky',
  // backgroundPosition: 'center',
  //   objectFit: 'contain',
  // overflowY: 'auto',
  zIndex: 1,
};

export const sxBreaksH4 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

export const sxBreaksH5 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};

export const sxBreaksH6 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.15rem",
  },
};
// ----- App ----- //
// ----- App ----- //
// ----- App ----- //

// ----- Contact ----- //
// ----- Contact ----- //
// ----- Contact ----- //
export const sxContactContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  justifyContent: "space-between",
  // alignItems: "space-between",
  // gap: "30vh",
  height: "1400px",
  mx: "10vw",
  pt: "40vh",
  color: "info.light",

};

export const sxContactHeader = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5vh",
};

export const sxContactContent = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "5vh",
};

export const sxContactSubText = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2vh",
  // position: "absolute",
  // bottom: 0,
  color: "info.light",
  textAlign: "center",
  mb: 10,

};

export const sxIcon = {
  // border: "1px solid blue",
  cursor: "pointer",
  width: "3rem",
  height: "3rem",
  p: ".4rem",
  borderRadius: "50%",

  "&:hover": {
    color: "primary.main",
    transform: "scale(1.05)",
    boxShadow: 3,
  },
};
// ----- Contact ----- //
// ----- Contact ----- //
// ----- Contact ----- //

// ----- Experience ----- //
// ----- Experience ----- //
// ----- Experience ----- //

export const sxExperienceContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  width: "100%",

};

export const sxExperienceContent = {
  // border: "1px solid blue",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "2vw",
  py: "1.5vh",
  px: "2.5vh",
  textAlign: "center",
  bgcolor: "info.light",
  boxShadow: 6,
  color: "info.dark",
  gap: 1,
  // width: "50%",

  "&:hover": {
    color: "primary.main",
    // transform: "scale(1.05)",
    boxShadow: 12,
  },
};

export const sxImageTextHeader = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,

}

export const sxExpHeaderDetails = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
}

export const sxExperienceDetails = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  textAlign: "left",
  gap: 2,

}

export const sxExperienceImage = {
  borderRadius: "50%",
  height: '5rem',
  width: '5rem',
  display: "flex",
  alignItems: "center",
  boxShadow: 2,
};

export const sxBody1 = {
  lineHeight: "1.25",

}

// ----- Experience ----- //
// ----- Experience ----- //
// ----- Experience ----- //

// ----- Featured ----- //
// ----- Featured ----- //
// ----- Featured ----- //

export const sxFeaturedContainer = {
  // border: '1px solid yellow',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // gap: 2,
  // mt: 10,


};

export const sxCardFeaturedGallery = {
  // border: '1px solid green',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 8,
  textAlign: "center",

  // borderBottom: 1,
  // borderColor: "primary.light",
  // pb: 5,
  // mx: 8,

  [theme.breakpoints.down("xl")]: {
    mx: 8,
  },
  [theme.breakpoints.down("lg")]: {
    mx: 8,
  },
  [theme.breakpoints.down("md")]: {
    mx: 5,
  },
  [theme.breakpoints.down("sm")]: {
    mx: 3,
  },
}

export const sxFeaturedImage = {
  // border: '2px solid blue',
  cursor: "pointer",
  objectFit: "cover",
  boxShadow: 6,
  mb: 2,
  borderRadius: "50%",
  width: "200px",
  height: "200px",

  // display: "flex",
  // flexDirection: "row",
  // justifyContent: "center",
  // flexWrap: "wrap",
  // width: "50%",
  // height: "50%",

  "&:hover": {
    transform: "scale(1.05)",
  },
}

// ----- Featured ----- //
// ----- Featured ----- //
// ----- Featured ----- //

// ----- Footer ----- //
// ----- Footer ----- //
// ----- Footer ----- //
export const sxFooter = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  py: ".5vh",
  // borderTopLeftRadius: "1vh",
  // borderTopRightRadius: "1vh",
  zIndex: 50,
  position: "absolute",
  bottom: 0,
  width: "100%",
  color: "info.light",
  // bgcolor: "info.light",
};
// ----- Footer ----- //
// ----- Footer ----- //
// ----- Footer ----- //

// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //
export const sxHomeContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 0,
  gap: 34,
  mx: 10,
  py: 20,

  [theme.breakpoints.down("xl")]: {
    mx: "10vw",
  },
  [theme.breakpoints.down("lg")]: {
    mx: "8vw",
  },
  [theme.breakpoints.down("md")]: {
    mx: "6vw",
  },
  [theme.breakpoints.down("sm")]: {
    mx: "5vw",
  },
};

export const sxHomeHeadshot = {
  borderRadius: "50%",
  height: '280px',
  width: '280px',
  display: "flex",
  alignItems: "center",
  boxShadow: 6,
}

export const sxJackTextContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
  gap: 2,
};

export const sxImageAndDesignerText = {
  // border: "2px solid red",
  display: "flex",
  flexDirection: "row",
  // justifyContent: "center",
  gap: 8,
}

export const sxPhotoToolTip = {
  color: "primary.main",
  bgcolor: "blue",
  height: "100px",

}

export const sxDesignerDeveloperText = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 1,
  color: "info.light",

}

export const sxDoingNowContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  color: "info.light",
  width: "100%",

};

export const sxExperienceText = {
  fontWeight: "bold",
  textAlign: "center",
  // mb: -2,
}

export const sxViewCreations = {
  color: "primary.main",
  textAlign: "center",
  cursor: "pointer",
  // border: 5,
  boxShadow: 6,
  p: 3,
  borderRadius: 6,
  // borderColor: "info.dark",
  bgcolor: "info.light",



  "&:hover": {
    color: "primary.light",
    transform: "scale(1.05)",
  },

}

export const sxHomeHeroText = {
  fontSize: "5rem",
  fontWeight: "bold",

  [theme.breakpoints.down("xl")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
};

export const sxH3 = {
  fontSize: "3rem",

  [theme.breakpoints.down("xl")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};
// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //

// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //
export const sxNavContainer = {
  // border: '2px solid red',
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  width: "100vw",
  top: 0,
  zIndex: 5000,
};

export const sxNavContent = {
  // border: '1px solid green',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  //   mt: "2vh",
  py: "1vh",
  px: "2vw",
  bgcolor: "info.light",
  boxShadow: 4,
  borderBottomLeftRadius: "1vh",
  borderBottomRightRadius: "1vh",
  zIndex: 5000,
};

export const sxNameContainer = {
  // border: '1px solid red',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "baseline",
  gap: "2vh",

  [theme.breakpoints.down("xl")]: {
    gap: "2vh",
  },
  [theme.breakpoints.down("lg")]: {
    gap: "2vh",
  },
  [theme.breakpoints.down("md")]: {
    gap: "1vh",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "1vh",
  },
};

export const sxWorkContactContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "baseline",
  gap: "2vh",

  [theme.breakpoints.down("xl")]: {
    gap: "2vh",
  },
  [theme.breakpoints.down("lg")]: {
    gap: "2vh",
  },
  [theme.breakpoints.down("md")]: {
    gap: "1vh",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "1vh",
  },
}

export const sxNavText = {
  // color: "secondary.main",
  cursor: "pointer",
  userSelect: "none",
  fontWeight: "bold",
  p: 0,
  m: 0,

  "&:hover": {
    color: "primary.light",
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

export const sxNavTextCreative = {
  cursor: "pointer",
  userSelect: "none",
  p: 0,
  m: 0,

  "&:hover": {
    color: "primary.main",
    transform: "scale(.98)",
  },
};
// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //

// ----- Pill  ----- //
// ----- Pill  ----- //
// ----- Pill  ----- //
export const sxPillContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  // width: "100%",
  // px: 6,
  // py: 3,
  // borderRadius: 10,
  // color: "primary.main",
  // bgcolor: "info.light",
  // boxShadow: 8,


};

export const sxPillCard = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  // width: "100%",
  px: 6,
  py: 3,
  borderRadius: 10,
  color: "primary.main",
  bgcolor: "info.light",
  boxShadow: 8,


};

export const sxPillContainerText = {
  //  border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignSelf: "auto",
  alignItems: "center",
  gap: "2vh",
  width: "100%",
};

export const sxPillContent = {
  // border: "1px solid red",
  cursor: "pointer",
  borderRadius: "2vw",
  px: "2vh",
  textAlign: "center",
  bgcolor: "info.light",
  boxShadow: 6,
  color: "info.dark",

  "&:hover": {
    color: "primary.main",
    transform: "scale(1.05)",
  },
};
// ----- Pill  ----- //
// ----- Pill  ----- //
// ----- Pill  ----- //

// ----- Project  ----- //
// ----- Project  ----- //
// ----- Project  ----- //

export const sxProjectContent = {
  // border: "1px solid blue",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "2vw",
  py: "1.5vh",
  px: "2.5vh",
  textAlign: "center",
  bgcolor: "info.light",
  boxShadow: 6,
  color: "info.dark",
  gap: 1,
  // width: "50%",

  "&:hover": {
    color: "primary.main",
    // transform: "scale(1.05)",
    boxShadow: 12,
  },
};

export const sxProjectContainer = {
  // border: '1px solid yellow',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  // mt: 10,

};

export const sxCardProjectGallery = {
  // border: '1px solid blue',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 3,
  // borderBottom: 1,
  // borderColor: "primary.light",
  pb: 5,
  mx: 8,

  [theme.breakpoints.down("xl")]: {
    mx: 8,
  },
  [theme.breakpoints.down("lg")]: {
    mx: 8,
  },
  [theme.breakpoints.down("md")]: {
    mx: 5,
  },
  [theme.breakpoints.down("sm")]: {
    mx: 3,
  },
}

export const sxProjectImageTextHeader = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,

}

export const sxProductImage = {
  // border: "1px solid red",
  borderRadius: "50%",
  height: '5rem',
  width: '5rem',
  display: "flex",
  alignItems: "center",
  boxShadow: 2,
  objectFit: "cover",

};

export const sxProjectHeaderDetails = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
}

export const sxImageList = {
  // border: '2px solid green',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  boxShadow: 2,

}

export const sxProjectImage = {
  // border: '2px solid blue',
  cursor: "pointer",
  objectFit: "contain",

  // display: "flex",
  // flexDirection: "row",
  // justifyContent: "center",
  // flexWrap: "wrap",
  // width: "50%",
  // height: "50%",
}

// ----- Project  ----- //
// ----- Project  ----- //
// ----- Project  ----- //

// ----- ProductCard --- //
// ----- ProductCard --- //
// ----- ProductCard --- //
export const sxProductImageContent = {
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",

  "&:hover": {
    color: "primary.light",
    transform: "scale(1.025)",
  },
  "&:active": {
    color: "primary.light",
    transform: "scale(1.05)",
  },

};

export const sxCardProduct = {
  width: "20rem",
  height: "26.9rem",
  mb: 1,
  borderRadius: 2,
};

export const sxImageCaption = {
  color: "info.light",
  width: "20rem",
};

// ----- ProductCard --- //
// ----- ProductCard --- //
// ----- ProductCard --- //

// ----- WorkDescription ----- //
// ----- WorkDescription ----- //
// ----- WorkDescription ----- //

export const sxWorkDescriptionTitle = {
  // border: '1px solid red',
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  px: 8,
  py: 1.5,
  color: "info.light",

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
  },
};

export const sxWorkDescriptionContent = {
  // border: '1px solid red',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  color: "info.light",
  px: 8,

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
    textAlign: "center",
  },
};
// ----- WorkDescription ----- //
// ----- WorkDescription ----- //
// ----- WorkDescription ----- //

// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
export const sxProjectDescriptionTitle = {
  // border: '1px solid red',
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  px: 8,
  py: 1.5,
  color: "info.light",

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
  },
};

export const sxProjectDescriptionContent = {
  // border: '1px solid red',
  display: "flex",
  flexDirection: "column",
  gap: 1,
  color: "info.light",
  px: 8,

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
    textAlign: "center",
  },
};
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //

// ----- RandomEmoji ----- //
// ----- RandomEmoji ----- //
// ----- RandomEmoji ----- //
export const sxEmojiContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  gap: "2vh",
  overflow: "hidden",
  width: "40vw",
};
// ----- RandomEmoji ----- //
// ----- RandomEmoji ----- //
// ----- RandomEmoji ----- //

// ----- Work ----- //
// ----- Work ----- //
// ----- Work ----- //
export const sxWorkContainer = {
  border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 34,
  mx: 10,
  py: 20,

};

export const sxWorkHeader = {
  border: "1px solid green",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  // gap: 2,
  // color: "info.light",

}

export const sxWorkHeroText = {
  // border: "1px solid green",
  fontSize: "5rem",
  fontWeight: "bold",
  color: "info.light",

  [theme.breakpoints.down("xl")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}

export const sxProjectsContainer = {
  border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,

}

export const sxLisProjectsContainer = {
  border: "1px solid yellow",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,

}

export const sxListProjects = {
  border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
  gap: 1,
}



export const sxProjectsHeaderText = {
  // fontSize: "2rem",
  fontWeight: "bold",
  color: "info.light",

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}

// export const sxProjectDescription = {
//   border: "1px solid blue",
//   fontWeight: "bold",

// }


// ----- Work ----- //
// ----- Work ----- //
// ----- Work ----- //
