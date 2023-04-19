import React from "react";
import Multiple1 from "./Mutiple1";
import jsPDF from "jspdf";
import "./Chapter1.css";
import TrueFalse from "./TrueFalse";
import Accordion from "react-bootstrap/Accordion";

const Chapter1 = () => {
  function handleChapter1() {
    const pdf = new jsPDF("p", "pt", "a4");
    const data = document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("Chapter1.pdf");
    });
  }

  return (
    <>
      <button onClick={handleChapter1} className="notes_download">
        Download
      </button>

      <div className="Chapter1_div" id={"pdf"}>
        <h4 className="head_1">Chapter-1 Computer System</h4>

        <div className="Ch1_choice">
 
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Multiple choice questions.</Accordion.Header>
              <Accordion.Body>

                    <Multiple1 />

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2.State true of false</Accordion.Header>
              <Accordion.Body>

                   <TrueFalse />
                   
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
      </div>
    </>
  );
};

export default Chapter1;
