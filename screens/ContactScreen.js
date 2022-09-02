import React from "react";
import ContactForm from "../components/ContactForm";
import NavComponent from "../components/NavBar";
import "./ContactScreen.css";

const ContactScreen = () => {
  return (
    <>
      <NavComponent />
      <h1 className="contact-heading">Contact Us</h1>
      <ContactForm />
    </>
  );
};

export default ContactScreen;
