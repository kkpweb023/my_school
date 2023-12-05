import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import List from "./List";
import SpellCheck from "./SpellCheck";
import FindReplace from "./FindReplace";





const NotesChap8 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-8 OpenOffice.Org Writer-II</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>

            
            <Accordion.Item eventKey="0">
              <Accordion.Header>List</Accordion.Header>
              <Accordion.Body>
                 <List />
              </Accordion.Body>
            </Accordion.Item>
               

            <Accordion.Item eventKey="1">
              <Accordion.Header>Spelling and Grammar Check</Accordion.Header>
              <Accordion.Body>
                 <SpellCheck />
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="2">
              <Accordion.Header>Find and Replace</Accordion.Header>
              <Accordion.Body>
                 <FindReplace />
              </Accordion.Body>
            </Accordion.Item>
            

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap8;
