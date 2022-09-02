import React from "react";
import NavComponent from "../components/NavBar";
import hero from "../assets/XrayCar.jpg";
import { Button } from "react-bootstrap";
import "./HomeScreen.css";
import Announcements from "../components/Announcements";
import Partners from "../components/Partners";

const HomeScreen = () => {
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
          color: #fff;
          background-color: #172a51f1 !important;
          border-color: #172a51f1 !important;
        }
        .btn-flat:hover{
          color: #172a51f1;
          background-color: #fff !important;
          border-color: #172a51f1;
        }`}
      </style>
      <NavComponent />
      <h1 className="heading-primary">
        At Specialty Portable X-Ray, Inc We Travel, Not The Patient!
      </h1>
      <img className="hero-image" src={hero} alt="" />
      <Button className="btn-service" variant="flat" size="lg" style={{}}>
        Order Exam
      </Button>
      <h1 className="heading-secondary">
        Specialty Portable X-Ray, Inc. is here to help
      </h1>
      <p className="paragraph">
        SPX is a medical diagnostic X-Ray and Ultrasound imaging company with a
        specialization in In-Home care.We provide services to private homes,
        nursing facilities and anyone who cannot get to a hospital due to their
        physical or psychological limitations. Our state-of-the-art technology
        allows us to be faster, safer and more accurate than available
        alternatives.
      </p>
      <Announcements />
      <Partners />
      <footer style={{ backgroundColor: "#000", height: "30rem" }}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus doloremque maiores eos alias expedita fugiat in quos,
          dolore explicabo maxime.
        </p>
      </footer>
    </>
  );
};

export default HomeScreen;
