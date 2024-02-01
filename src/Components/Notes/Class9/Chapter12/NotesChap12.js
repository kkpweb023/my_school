import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import IntroPY from "./IntroPY";
import Identifiers from "./Identifiers";




const NotesChap12 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Python(For Class 6,7,8 and 9)</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Introduction</Accordion.Header>
              <Accordion.Body>
                  <IntroPY />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header>Identifiers</Accordion.Header>
              <Accordion.Body>
                <Identifiers />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
              <Accordion.Header>Data Types</Accordion.Header>
              <Accordion.Body>
           
              </Accordion.Body>
            </Accordion.Item>


          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap12;
