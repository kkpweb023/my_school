import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import IntroPY from "./IntroPY";
import Identifiers from "./Identifiers";
import DataType from "./DataType";
import Operators from "./Operators";
import Conditional from "./Conditional";
import Looping from "./Looping";
import List from "./List";




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
                <DataType />
              </Accordion.Body>
            </Accordion.Item>

            
            <Accordion.Item eventKey="4">
              <Accordion.Header>Operators</Accordion.Header>
              <Accordion.Body>
                <Operators />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Conditional</Accordion.Header>
              <Accordion.Body>
                <Conditional />
              </Accordion.Body>
            </Accordion.Item>


            
            <Accordion.Item eventKey="6">
              <Accordion.Header>Looping Statement</Accordion.Header>
              <Accordion.Body>
                <Looping />
              </Accordion.Body>
            </Accordion.Item>


                        
            <Accordion.Item eventKey="7">
              <Accordion.Header>List</Accordion.Header>
              <Accordion.Body>
                <List />
              </Accordion.Body>
            </Accordion.Item>



          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap12;
