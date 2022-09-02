import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NavComponent from "../components/NavBar";
import equipment from "../assets/XrayMachine.jpg";
import "./ServiceScreen.css";
import Partners from "../components/Partners";
import TabComponent from "../components/TabComponent";

const ServiceScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
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
      <h1
        style={{
          marginTop: "5rem",
          position: "relative",
          zIndex: "100",
          textAlign: "center",
          fontFamily: "Oswald",
          fontWeight: "700",
          color: "#172a51f1",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        SPX Provides in home digital X-Rays, Ultrasounds, Dopplers, Echo,
        Echocardiograms & EKG Exams.
      </h1>
      <img
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "-5rem",
        }}
        src={equipment}
        alt=""
      />
      {showModal && <TabComponent onClick={hideModalHandler} />}
      <Button
        variant="flat"
        size="lg"
        onClick={showModalHandler}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "200",
        }}
      >
        Order Exam
      </Button>
      <h1
        style={{
          marginTop: "-8rem",
          position: "relative",
          zIndex: "100",
          textAlign: "center",
          fontFamily: "Oswald",
          fontWeight: "700",
          color: "#172a51f1",
        }}
      >
        Including:
      </h1>
      <ul className="services-list">
        <li>Abdominal ultrasounds</li>
        <li>Liver / spleen ultrasounds</li>
        <li>Carotid and thyroid sonograms</li>
        <li>
          Color Doppler studies of the upper and lower extremities, venous &
          arterial
        </li>
        <li>Echocardiograms</li>
        <li>
          All exams are interpreted by board-certified radiologists and
          cardiologists
        </li>
      </ul>
      <p className="main-text">All at the Patient's Bedside!</p>
      <p className="service-subtext">
        SPX has been providing service throughout the 5 Boroughs, Nassau &
        Suffolk Counties for over 35 years to:
      </p>
      <ul className="services-list">
        <li>Nursing homes</li>
        <li>Assisted living facilities</li>
        <li>Home-bound patients</li>
        <li>Dialysis centers</li>
        <li>Correctional facilities</li>
        <li>Corporate settings</li>
        <li>Tuberculosis testing</li>
        <li>Asbestosis Screening</li>
        <li>Clinics</li>
      </ul>
      <Partners />
    </>
  );
};

export default ServiceScreen;
