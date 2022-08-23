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
      main: "hsla(14, 77%, 44%, 1)",
      dark: "hsla(14, 77%, 32%, 1)",
      light: "hsla(14, 77%, 56%, 1)",
    },
    secondary: {
      main: "hsla(360, 5%, 20%, 1)",
      dark: "hsla(312, 14%, 36%, 1)",
      light: "hsla(180, 78%, 48%, 1)",
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
  m: 0,
  p: 0,
};

export const sxAppContainer = {
  // border: "1px solid blue",
  //   mx: 2,
};
// ----- App ----- //
// ----- App ----- //
// ----- App ----- //

// ----- Contact ----- //
// ----- Contact ----- //
// ----- Contact ----- //
export const sxContactContainer = {
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5vh",
  mx: "10vw",
  mt: "20vh",
};

export const sxContactContent = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
// ----- Contact ----- //
// ----- Contact ----- //
// ----- Contact ----- //

// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //
export const sxHomeContainer = {
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5vh",
  mx: "10vw",
  mt: "20vh",
};

export const sxJackTextContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //

// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //
export const sxNavContainer = {
  // border: '1px solid blue',
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: 0,
  width: "100vw",
};

export const sxNavContent = {
  // border: '1px solid green',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: "2vh",
  px: "2vw",
  bgcolor: "info.light",
  boxShadow: 3,
  zIndex: 1000,
};

export const sxNameContainer = {
    // border: '1px solid red',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "baseline",
    gap: '2vh',
}

export const sxNavText = {
  // color: "secondary.main",
  cursor: "pointer",
  p: 0,
  m: 0,

  "&:hover": {
    color: "primary.light",
    transform: "scale(1.05)",
  },
};
// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //
