import React from "react";
import Footer from "../components/Footer";
import NavComponent from "../components/NavBar";
import Partners from "../components/Partners";
import VideoCarousel from "../components/VideoCarousel";

const MediaScreen = () => {
  return (
    <>
      <NavComponent />
      <VideoCarousel />
      <Partners />
      <Footer />
    </>
  );
};

export default MediaScreen;
