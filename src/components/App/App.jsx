import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// --- Components --- //
import Home from "../_Pages/Home";
import Contact from "../_Pages/Contact";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Work from "../_Pages/Work";

// --- MUI --- //
import { Box, CardMedia } from "@mui/material";

// --- Sx Styles --- //
import {
  theme,
  transApp,
  sxApp,
  sxAppContainer,
  sxBackgroundImage,
} from "./App.sxStyles";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="sxApp" sx={sxApp}>
        <Helmet>
          <title>Eric Meinzer</title>
          <meta
            name="description"
            content="general information and mission statement of the tinker.group along with a gallery of work."
          />
          <meta
            name="keywords"
            content="tinker together, tinker.group, welcome"
          />
          <meta
            name="author"
            content="tinker.group, Eric Meinzer, Chris Benner, Adam Donner"
          />
        </Helmet>

        <Box id="sxAppContainer" sx={sxAppContainer}>
          <Router>
            <AnimatePresence mode="wait" initial={true}>
              <motion.div
                initial={transApp.initial}
                animate={transApp.animate}
                exit={transApp.exit}
                style={transApp.style}
                transition={transApp.time}
              >
                <Nav />
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </motion.div>
            </AnimatePresence>
          </Router>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
