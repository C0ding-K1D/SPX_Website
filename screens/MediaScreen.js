import React from "react";
import NavComponent from "../components/NavBar";
import Partners from "../components/Partners";
import VideoCarousel from "../components/VideoCarousel";

const MediaScreen = () => {
  return (
    <>
      <NavComponent />
      <VideoCarousel />
      <Partners />
    </>
  );
};

export default MediaScreen;
