import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CyberSafety from "./CyberSafety";
import Proxy from "./Proxy";
import Malware from "./Malware";
import Marquee from "react-fast-marquee";
import CyberCrime from "./CyberCrime";




const NotesChap6 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-6 CYBER SAFETY</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Cyber Safety</Accordion.Header>
              <Accordion.Body>
                <CyberSafety /> 
              </Accordion.Body>
            </Accordion.Item>
               

            <Accordion.Item eventKey="1">
              <Accordion.Header>Proxy</Accordion.Header>
              <Accordion.Body>
                <Proxy />         
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="2">
              <Accordion.Header>Malware</Accordion.Header>
              <Accordion.Body>
                  <Malware />        
              </Accordion.Body>
            </Accordion.Item>


            
            <Accordion.Item eventKey="3">
              <Accordion.Header>Cyber Crime</Accordion.Header>
              <Accordion.Body>
                  <CyberCrime />        
              </Accordion.Body>
            </Accordion.Item>


        


        

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap6;
