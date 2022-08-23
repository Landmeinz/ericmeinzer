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
import Home from '../_Pages/Home';

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import { theme, transApp, sxApp, sxAppContainer } from "../App/App.sxStyles";
import './App.css';

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
                {/* <Nav /> */}
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Router>
        </Box>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
