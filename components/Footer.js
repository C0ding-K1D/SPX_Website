import React from "react";
import logo from "../assets/NavLogoMini.png";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Footer.css";

const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="logo-column">
            <LinkContainer to="/">
              <div className="footer-logo_container">
                <img className="footer-logo" src={logo} alt="company logo" />
              </div>
            </LinkContainer>
            <p className="footer-text">
              410 Jericho Turnpike, Suite 320 Jericho, New York 11753
            </p>
            <p className="footer-text">1-888-XRAY-NOW</p>
            <p className="footer-text">Fax: 1-516-897-3915</p>
            <p className="footer-text">Info@888XrayNow.com</p>
          </div>
          <div className="nav-column_1">
            <ul className="footer-list">
              <LinkContainer to="/services">
                <Nav.Link className="nav-link">Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/history">
                <Nav.Link className="nav-link">History</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/media">
                <Nav.Link className="nav-link">Media</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq">
                <Nav.Link className="nav-link">Faq</Nav.Link>
              </LinkContainer>
            </ul>
          </div>
          <div className="nav-column_2">
            <ul className="footer-list">
              <LinkContainer to="/careers">
                <Nav.Link className="nav-link">Careers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-link">Contact</Nav.Link>
              </LinkContainer>
              <a
                className="nav-link"
                href="https://www.dropbox.com/sm/password?cont=https%3A%2F%2Fwww.dropbox.com%2Fsh%2Fo6tg9jbzbqf148p%2FAABKrMg5z1uRjbD4JUg8GvPLa%3Fdl%3D0&content_id=AVDhwzxhvfvxbcIlcsRqIzZKpgTdGLweBQM"
              >
                Login
              </a>
              <Nav.Link onClick={props.onShowModal} className="nav-link">
                Exams
              </Nav.Link>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">Copyright &copy; Specialty Portable X-ray</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
