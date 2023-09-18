import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import NetworkMedia from "./NetworkMedia";
import NetworkTypes from "./NetworkTypes";


const NotesChap5 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-5 COMPUTER NETWORK</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Communication Channel</Accordion.Header>
              <Accordion.Body>
                <NetworkMedia />
              </Accordion.Body>
            </Accordion.Item>
               

            <Accordion.Item eventKey="1">
              <Accordion.Header>Types of Networks</Accordion.Header>
              <Accordion.Body>
                    <NetworkTypes /> 
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header>Internet & Cloud Computing</Accordion.Header>
              <Accordion.Body>
                          
              </Accordion.Body>
            </Accordion.Item>

    
            <Accordion.Item eventKey="3">
              <Accordion.Header>Multimedia</Accordion.Header>
              <Accordion.Body>
                          
              </Accordion.Body>
            </Accordion.Item>


        
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap5;
