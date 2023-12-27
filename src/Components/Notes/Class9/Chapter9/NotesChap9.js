import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import Presentation from "./Presentation";
import OpenOfficeImpress from "./OpenOfficeImpress";






const NotesChap9 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-9 OpenOffice.Org Impress</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>

            
            <Accordion.Item eventKey="0">
              <Accordion.Header>Presentation Software</Accordion.Header>
              <Accordion.Body>
                <Presentation />
              </Accordion.Body>
            </Accordion.Item>
               

            <Accordion.Item eventKey="1">
              <Accordion.Header>OpenOffice.org Impress</Accordion.Header>
              <Accordion.Body>
                 <OpenOfficeImpress />
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="2">
              <Accordion.Header>Slide</Accordion.Header>
              <Accordion.Body>
                <h2>Uploading soon, Please wait--- </h2>
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
              <Accordion.Header>Editing and Formatting a Slide</Accordion.Header>
              <Accordion.Body>
                  <h2>Uploading soon, Please wait--- </h2>
              </Accordion.Body>
            </Accordion.Item>
            

            
            <Accordion.Item eventKey="4">
              <Accordion.Header>Slide Sorter View</Accordion.Header>
              <Accordion.Body>
                  <h2>Uploading soon, Please wait--- </h2>
              </Accordion.Body>
            </Accordion.Item>








          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap9;
