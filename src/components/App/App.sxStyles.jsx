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

export const sxApp = {
  // border: "5px solid red"
  minHeight: "100vh",
  m: 0,
  p: 0,
  position: "relative",
  overflow: "hidden ",

};

export const sxAppContainer = {
  bgcolor: "primary.dark",
  height: "100%",
  width: '100%',
  minHeight: "100vh",
  zIndex: 1,
  position: "relative",
  overflow: "hidden ",
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
  height: "200vh",
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

export const sxContactHeroText = {
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
    fontSize: "2.25rem",
    textAlign: "center"
  },
}
// ----- Contact ----- //
// ----- Contact ----- //
// ----- Contact ----- //

// ----- Experience ----- //
// ----- Experience ----- //
// ----- Experience ----- //

export const sxExperienceContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  width: "100%",

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },

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

  "&:hover": {
    color: "primary.main",
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

export const sxExperienceImage = {
  borderRadius: "50%",
  height: '5rem',
  width: '5rem',
  display: "flex",
  alignItems: "center",
  boxShadow: 2,
};

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

};

export const sxCardFeaturedGallery = {
  // border: '1px solid green',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 20,
  textAlign: "center",
  mx: 8,

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {
    mx: 5,
  },
  [theme.breakpoints.down("sm")]: {
    mx: 3,
    gap: 8,
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
  zIndex: 50,
  position: "absolute",
  bottom: 0,
  width: "100%",
  color: "info.light",

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    color: "primary.dark",
  },
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
  gap: 32,
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
    mb: 12,
  },
};

export const sxDandDContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
};

export const sxImageAndDesignerText = {
  gap: 8,

  [theme.breakpoints.down("xl")]: {
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
}

export const sxHomeHeadshot = {
  borderRadius: "50%",
  height: '280px',
  width: '280px',
  display: "flex",
  alignItems: "center",
  boxShadow: 6,
}

export const sxDesignerDeveloperText = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 1,
  color: "info.light",

}

export const sxPurposeContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,

};

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

export const sxPurposeText = {
  fontWeight: "bold",
  textAlign: "center",
  // mb: -2,

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.25rem",
    textAlign: "center"
  },
}

export const sxPurposeCard = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  px: 6,
  py: 3,
  borderRadius: 10,
  color: "primary.main",
  bgcolor: "info.light",
  boxShadow: 8,
};

export const sxHomePurposeText = {
  // border: "1px solid red",
  fontSize: "4rem",
  fontWeight: "bold",
  width: "100%",

  [theme.breakpoints.down("xl")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}


export const sxViewCreations = {
  color: "primary.main",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: 6,
  p: 3,
  borderRadius: 6,
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
    fontSize: "2.25rem",
    textAlign: "center"
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
  gap: 2,
};

export const sxWorkContactContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "baseline",
  gap: 2,

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    gap: 2,
  },
}

export const sxNavText = {
  // border: "1px solid blue",
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
    width: "100%",
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

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    gap: 1,
    display: "none",
  },
};

// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //

// ----- Project  ----- //
// ----- Project  ----- //
// ----- Project  ----- //

export const sxProjectContainer = {
  // border: '1px solid yellow',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  // mt: 10,

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    mb: 12,
  },

};

export const sxCardProjectGallery = {
  // border: '1px solid blue',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 3,
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

  "&:hover": {
    color: "primary.main",
    boxShadow: 12,
  },
};

export const sxImageList = {
  // border: '2px solid green',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",

}

export const sxProjectImage = {
  // border: '2px solid blue',
  cursor: "pointer",
  objectFit: "contain",
  boxShadow: 4,

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

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",

  },
}

export const sxProjectHeaderText = {

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
    fontWeight: "bold",
    alignItems: "center",

  },
}

export const sxProjectLocationText = {

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".68rem",
  },
}

// ----- Project  ----- //
// ----- Project  ----- //
// ----- Project  ----- //

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
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 34,
  mx: 10,
  py: 20,

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    mx: 5,
  },
};

export const sxWorkHeader = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  gap: 2,

}

export const sxWorkHeroText = {
  // border: "1px solid green",
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
    fontSize: "2.25rem",
  },
}

export const sxProjectsContainer = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,

}

export const sxLisProjectsContainer = {
  // border: "1px solid yellow",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  // alignItems: "center",
  gap: 10,

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    gap: 2,
  },
}

export const sxFocusHeaderText = {
  // border: "1px solid yellow",
  fontWeight: "bold",
  color: "info.light",
  width: "80%",
  textAlign: "center",

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
    fontSize: "1.75rem",
    width: "100%",
  },
}

export const sxListProjects = {
  // border: "1px solid yellow",
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",

}

export const sxProjectsHeaderText = {
  // border: "1px solid blue",
  fontWeight: "bold",
  color: "info.light",
  textAlign: "left",

  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}

// ----- Work ----- //
// ----- Work ----- //
// ----- Work ----- //