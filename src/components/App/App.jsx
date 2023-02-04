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

import './App.css';

// --- Components --- //
import Home from "../_Pages/Home";
import Contact from "../_Pages/Contact";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Work from "../_Pages/Work";
import WorkImage from "../_Pages/WorkImage";

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import {
  theme,
  transApp,
  sxApp,
  sxAppContainer,

} from "./App.sxStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="sxApp" sx={sxApp}>
        <Helmet>
          <title>Eric Meinzer</title>
          <meta
            name="description"
            content="eric meinzer, work, products, architecture, graphic design, product design, developer, react, c#, rendering"
          />
          <meta
            name="keywords"
            content="eric meinzer, work, products, architecture, graphic design, product design, developer, react, c#, rendering"
          />
          <meta
            name="author"
            content="eric, meinzer, landmeinz"
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
                  <Route path='*' exact={true}  element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/image" element={<WorkImage />} />
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
