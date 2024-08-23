import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Reasons from "./components/Reason/Reasons";
import Speakers from "./components/Speakers/Speakers";
import Partners from "./components/Partners/Partners";
import Newsletter from "./components/Newsletter/Newsletter";
import Agenda from "./components/Agenda/Agenda";
import Terms from "./components/Terms_of_use/Terms";
import Privacy from "./components/Privacy_policy/Privacy";
import Countdown from "./components/Countdown/Countdown";
import ImageModal from "./components/Modal/ImageModal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // To show the modal only once
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setModalIsOpen(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  return (
    <Router>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl="/img/web3know.jpeg"
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Countdown />
              <About />
              <Reasons />
              <Speakers />
              <Partners />
              <Newsletter />
            </>
          }
        />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
