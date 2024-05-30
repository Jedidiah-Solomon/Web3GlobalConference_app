import React from "react";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Reasons from "./components/Reason/Reasons";
import Speakers from "./components/Speakers/Speakers";
import Partners from "./components/Partners/Partners";
import Newsletter from "./Newsletter/Newsletter";

const App = () => {
  return (
    <>
      <Homepage />
      <About />
      <Reasons />
      <Speakers />
      <Partners />
      <Newsletter />
    </>
  );
};

export default App;
