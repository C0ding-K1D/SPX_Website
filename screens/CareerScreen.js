import React from "react";
import NavComponent from "../components/NavBar";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Footer from "../components/Footer";
import "react-tabs/style/react-tabs.css";
import "./CareerScreen.css";

const CareerScreen = () => {
  return (
    <>
      <NavComponent />
      <h1 className="career-heading">We Are Hiring!</h1>
      <h2 className="career-subheading">
        Specialty Portable X-Ray is always looking for professionals to join our
        team.
      </h2>
      <p style={{ textAlign: "center" }}>
        Click on a career below to find out more about the position
      </p>
      <p style={{ textAlign: "center" }}>
        Email us at Naresa@SpecialtyXray.com
      </p>
      <p style={{ textAlign: "center" }}>or</p>
      <h1
        className="career-heading"
        style={{ marginTop: "-.5rem", marginBottom: "2.5rem" }}
      >
        Give us a call 888-XRAY-NOW
      </h1>
      <Tabs
        style={{
          boxShadow: "0 0 .5rem rgba(0,0,0,0.25)",
          overflow: "scroll",
          margin: "3rem",
        }}
      >
        <TabList
          style={{
            backgroundColor: "#172a51f1",
            color: "#fff",
          }}
        >
          <Tab style={{ marginLeft: ".5rem", padding: ".8rem" }}>X-Ray</Tab>
          <Tab style={{ padding: ".8rem" }}>Ultrasound</Tab>
        </TabList>

        <TabPanel
          style={{
            backgroundColor: "#fff",
            paddingTop: "1rem",
          }}
        >
          <h1 className="career-title">Portable X-Ray Technologist</h1>
          <h1 className="career-heading">
            Full and Part-Time Positions Available!
          </h1>
          <p style={{ margin: "1rem 3rem" }}>
            <span style={{ fontWeight: "bold" }}>Specialty Portable X-Ray</span>{" "}
            has been providing X-Ray service to patient's in need since 1978. At
            SPX, we pride ourselves on our accountability and willingness to get
            the job done. We are searching for enthusiastic and friendly
            professionals who are eager to succeed and grow with our
            organization. As a pay by the case employer you can be confident
            that your hard-work, dedication extra efforts are rewarded.
          </p>
          <h3 style={{ margin: "1rem 3rem" }}>Qualifications</h3>
          <ul style={{ margin: "1rem 3rem" }}>
            <li>Solid work ethic and reliability.</li>
            <li>Moderate understanding of computer usage.</li>
            <li>
              Licensed by the State of New York or New Jersey and be registered
              with ARRT.
            </li>
            <li>Clean driving record.</li>
            <li>
              Physically capable of lifting heavy equipment unassisted in and
              out of a vehicle and up and down numerous stairs.
            </li>
          </ul>
          <h3 style={{ margin: "1rem 3rem" }}>Be Advised</h3>
          <p style={{ margin: "1rem 3rem" }}>
            Since we travel to the patient's location there is a considerable
            amount of driving involved in this position.
          </p>
          <h3 style={{ margin: "1rem 3rem" }}>Benefits</h3>
          <ul style={{ margin: "1rem 3rem" }}>
            <li>Salary range: $65,000 - $90,000+</li>
            <li>Medical</li>
            <li>401K</li>
            <li>Paid Training</li>
            <li>
              Being on the road, visiting multiple locations vs. being in the
              same place all day, every day.
            </li>
          </ul>
          <h2 className="career-subheading">Submit your application</h2>
          <p style={{ textAlign: "center" }}>
            Email your resume, cover letter and New York State or New Jersey
            State License to{" "}
            <a href="mailto:Careers@SpecialtyXray.com">
              Careers@SpecialtyXray.com
            </a>
          </p>
          <p style={{ textAlign: "center" }}>or</p>
          <h1 className="career-footer">Submit your application on Indeed</h1>
        </TabPanel>
        <TabPanel
          style={{
            backgroundColor: "#fff",
            paddingTop: "1rem",
          }}
        >
          <h1 className="career-title">Portable Ultrasound Technologist</h1>
          <h1 className="career-heading">
            Full and Part-Time Positions Available!
          </h1>
          <p style={{ margin: "1rem 3rem" }}>
            <span style={{ fontWeight: "bold" }}>Specialty Portable X-Ray</span>{" "}
            has been providing X-Ray service to patient's in need since 1978. At
            SPX, we pride ourselves on our accountability and willingness to get
            the job done. We are searching for enthusiastic and friendly
            professionals who are eager to succeed and grow with our
            organization. As a pay by the case employer you can be confident
            that your hard-work, dedication extra efforts are rewarded.
          </p>
          <h3 style={{ margin: "1rem 3rem" }}>Qualifications</h3>
          <ul style={{ margin: "1rem 3rem" }}>
            <li>Solid work ethic and reliability.</li>
            <li>Moderate understanding of computer usage.</li>
            <li>
              Must be registered in Vascular, General and/or Echocardiogram.
            </li>
            <li>Clean driving record.</li>
          </ul>
          <h3 style={{ margin: "1rem 3rem" }}>Be Advised</h3>
          <p style={{ margin: "1rem 3rem" }}>
            Since we travel to the patient's location there is a considerable
            amount of driving involved in this position.
          </p>
          <h3 style={{ margin: "1rem 3rem" }}>Benefits</h3>
          <ul style={{ margin: "1rem 3rem" }}>
            <li>Salary range: $65,000 - $90,000+</li>
            <li>Medical</li>
            <li>401K</li>
            <li>Paid Training</li>
            <li>
              Being on the road, visiting multiple locations vs. being in the
              same place all day, every day.
            </li>
          </ul>
          <h2 className="career-subheading">Submit your application</h2>
          <p style={{ textAlign: "center" }}>
            Email your resume, cover letter and New York State or New Jersey
            State License to{" "}
            <a href="mailto:Careers@SpecialtyXray.com">
              Careers@SpecialtyXray.com
            </a>
          </p>
          <p style={{ textAlign: "center" }}>or</p>
          <h1 className="career-footer">Submit your application on Indeed</h1>
        </TabPanel>
      </Tabs>
      <Footer />
    </>
  );
};

export default CareerScreen;
