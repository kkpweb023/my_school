import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import OpenOfficeCalc from "./OpenOfficeCalc";
import Functions from "./Functions";







const NotesChap10 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-10 OpenOffice.Org Calc-I</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>

          
            <Accordion.Item eventKey="1">
              <Accordion.Header>OpenOffice.org Calc</Accordion.Header>
              <Accordion.Body>
                  <OpenOfficeCalc />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header>Functions in OOo Calc</Accordion.Header>
              <Accordion.Body>
                  <Functions />
              </Accordion.Body>
            </Accordion.Item>







          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap10;
