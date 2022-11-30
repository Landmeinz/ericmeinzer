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
      //   dark: "hsla(14, 77%, 32%, 1)",
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
  //   border: "1px solid red",
  //   bgcolor: "secondary.main",
  minHeight: "100vh",
  //   hight: '500vh',
  //   width: '500vw',
  m: 0,
  p: 0,
};

export const sxAppContainer = {
  // border: "1px solid blue",
  backgroundImage: `url("images/background/background.png")`,
  //   mx: 2,
  //   objectFit: "contain",
  height: "2000px",
  //   width: '100vw',
  //   width: '5000vw',
  minHeight: "100vh",
  zIndex: 1,
  position: "relative",
};

export const sxBackgroundImage = {
  // border: '1px solid blue',
  //   position: 'sticky',
  // backgroundPosition: 'center',
  //   objectFit: 'contain',
  // overflowY: 'auto',
  zIndex: 1,
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
  borderTopLeftRadius: "1vh",
  borderTopRightRadius: "1vh",
  zIndex: 50,
  position: "absolute",
  bottom: 0,
  width: "100%",
  bgcolor: "info.light",
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
  gap: "60vh",
  mx: "10vw",
  pt: "20vh",

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
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    gap: 8,
}

export const sxDesignerDeveloperText = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 1,
}

export const sxDoingNowContainer = {
  color: "info.light",
};

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
  //   border: '1px solid blue',
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
  py: "2vh",
  px: "2vw",
  bgcolor: "info.light",
  boxShadow: 3,
  borderBottomLeftRadius: "2vh",
  borderBottomRightRadius: "2vh",
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
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5vh",
  width: "100%",
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
  pt: "40vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,

};
// ----- Work ----- //
// ----- Work ----- //
// ----- Work ----- //
