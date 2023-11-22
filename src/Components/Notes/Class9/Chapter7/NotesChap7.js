import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import Introduction from "./Introduction";
import WordProTerminology from "./WordProTerminology";
import Editing from "./Editing";
import ShortcutKey from "./ShortcutKey";




const NotesChap7 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-7 OpenOffice.Org Writer-I</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Word Processor</Accordion.Header>
              <Accordion.Body>
                 <Introduction />
              </Accordion.Body>
            </Accordion.Item>
               

            <Accordion.Item eventKey="1">
              <Accordion.Header>Word Processing Terminology</Accordion.Header>
              <Accordion.Body>
                     <WordProTerminology />
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="2">
              <Accordion.Header>Editing and Formatting a document</Accordion.Header>
              <Accordion.Body>
                   <Editing />   
              </Accordion.Body>
            </Accordion.Item>


            
            <Accordion.Item eventKey="3">
              <Accordion.Header>Shortcut Keys</Accordion.Header>
              <Accordion.Body>
                        <ShortcutKey />
              </Accordion.Body>
            </Accordion.Item>


        


        

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap7;
