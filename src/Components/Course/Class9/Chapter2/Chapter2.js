import React from 'react';
//import jsPDF from 'jspdf';
import Multiple2 from './Multiple2';
import TrueFalse2 from './TrueFalse2';
import Fill from './Fill';
import Accordion from "react-bootstrap/Accordion";

const Chapter2 = () => {

  /*  function handleChapter2() {
        const pdf = new jsPDF("p", "pt", "a4");
        const data = document.querySelector("#pdf");
        pdf.html(data).then(() => {
        pdf.save("Chapter2.pdf");
      });
    
    }*/
    

  return (
    <>
    {/*<button onClick={handleChapter2} className="notes_download">Download</button>*/}

    <div className="Chapter1_div" id={"pdf"}>

      <h4 className="head_1">Chapter-2 Types of Hardware</h4>

      <div className="Ch1_choice">


          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Multiple choice questions.</Accordion.Header>
              <Accordion.Body>

                  <Multiple2 />

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>2.State true of false</Accordion.Header>
              <Accordion.Body>

                <TrueFalse2 />
                   
              </Accordion.Body>
            </Accordion.Item>
       

          <Accordion.Item eventKey="2">
              <Accordion.Header>3. Fill in the blanks</Accordion.Header>
              <Accordion.Body>

                <Fill />
                   
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


      </div>
    </div>
  </>
  )
}

export default Chapter2
