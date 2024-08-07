// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Reasons from "./components/Reason/Reasons";
import Speakers from "./components/Speakers/Speakers";
import Partners from "./components/Partners/Partners";
import Newsletter from "./components/Newsletter/Newsletter";
import Terms from "./components/Terms_of_use/Terms";
import Privacy from "./components/Privacy_policy/Privacy";
import Countdown from "./components/Countdown/Countdown";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <About />
              <Reasons />
              <Speakers />
              <Partners />
              <Newsletter />
              <Countdown />
            </>
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;