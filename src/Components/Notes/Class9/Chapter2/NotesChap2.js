import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputDevice from "./InputDevice";
import OutputDevice from "./OutputDevice";

const NotesChap2 = () => {
  return (
    <div>
      <div className="Chapter2_div">
        <h4 className="head_1" style={{color:"wheat"}}>Chapter-2 Types of Hardware</h4>

        <div className="Ch2_choice">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Input Devices</Accordion.Header>
              <Accordion.Body>
                <InputDevice />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Output Devices</Accordion.Header>
              <Accordion.Body>
                <OutputDevice />
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap2;
