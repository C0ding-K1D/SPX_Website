import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import "./TabComponent.css";

const TabComponent = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <Tabs
        style={{
          boxShadow: "0 0 .5rem rgba(0,0,0,0.25)",
          overflow: "scroll",
        }}
      >
        <TabList
          style={{
            backgroundColor: "#172a51f1",
            // borderRadius: ".4rem",
            color: "#fff",
          }}
        >
          <Tab style={{ marginLeft: ".5rem", padding: ".8rem" }}>
            House call
          </Tab>
          <Tab style={{ padding: ".8rem" }}>Facility order</Tab>
        </TabList>

        <TabPanel
          style={{
            backgroundColor: "#fff",
            paddingTop: "1rem",
          }}
        >
          <ContactForm />
        </TabPanel>
        <TabPanel
          style={{
            backgroundColor: "#fff",
            paddingTop: "1rem",
          }}
        >
          <ContactForm />
        </TabPanel>
      </Tabs>
    </Modal>
  );
};

export default TabComponent;
