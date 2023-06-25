import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Software from "./Software";
import SystemSoftware from "./SystemSoftware";
import LangTraslator from "./LangTraslator";
import UtilitySoft from "./UtilitySoft";
import DeviceDriver from "./DeviceDriver";


const NotesChap3 = () => {
  return (
    <div>
      <div className="Chapter2_div">
        <h4 className="head_1" style={{color:"wheat"}}>Chapter-3 Types of Software</h4>

        <div className="Ch2_choice">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Software</Accordion.Header>
              <Accordion.Body>
                    <Software />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>System Software</Accordion.Header>
              <Accordion.Body>
                    <SystemSoftware />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header>Language Traslator or Processor</Accordion.Header>
              <Accordion.Body>
                  <LangTraslator />               
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
              <Accordion.Header>Utility Software</Accordion.Header>
              <Accordion.Body>
                  <UtilitySoft />
              </Accordion.Body>
            </Accordion.Item>


            
            <Accordion.Item eventKey="4">
              <Accordion.Header>Device Driver</Accordion.Header>
              <Accordion.Body>
                <DeviceDriver />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
              <Accordion.Header>Application Software</Accordion.Header>
              <Accordion.Body>
               

              </Accordion.Body>
            </Accordion.Item>


          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap3;
