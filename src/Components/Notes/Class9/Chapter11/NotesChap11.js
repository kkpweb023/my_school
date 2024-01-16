import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Marquee from "react-fast-marquee";
import FormattingData from "./FormattingData";
import Charts from "./Charts";
import TypesCharts from "./TypesCharts";



const NotesChap11 = () => {
  return (
    <div>
      <div className="Chapter2_div">
      <Marquee> <h4 className="head_1" style={{color:"wheat"}}>Chapter-11 OpenOffice.Org Calc-II</h4> </Marquee>

        <div className="Ch2_choice">
          <Accordion>

          
            <Accordion.Item eventKey="1">
              <Accordion.Header>Formatting Data</Accordion.Header>
              <Accordion.Body>
                  <FormattingData />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header>Charts in OOo Calc</Accordion.Header>
              <Accordion.Body>
                  <Charts />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
              <Accordion.Header>Types of a Chart</Accordion.Header>
              <Accordion.Body>
                  <TypesCharts />
              </Accordion.Body>
            </Accordion.Item>


          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default NotesChap11;
