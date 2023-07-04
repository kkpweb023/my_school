import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Multiple3 from './Multiple3';
import Fill3 from './Fill3';
import TrueFalse3 from './TrueFalse3';

const Chapter3 = () => {
  return (
    <>
    {/*<button onClick={handleChapter2} className="notes_download">Download</button>*/}

    <div className="Chapter1_div" id={"pdf"}>

      <h4 className="head_1">Chapter-3 Types of Software</h4>

      <div className="Ch1_choice">


          <Accordion>

            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Multiple choice questions.</Accordion.Header>
              <Accordion.Body>
                  <Multiple3 />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>2.State true of false</Accordion.Header>
              <Accordion.Body>
                  <TrueFalse3 /> 
              </Accordion.Body>
            </Accordion.Item>
       

          <Accordion.Item eventKey="2">
              <Accordion.Header>3. Fill in the blanks</Accordion.Header>
              <Accordion.Body>
                <Fill3 />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


      </div>
    </div>
  </>
  )
}

export default Chapter3;