import React from "react";
import "./PreMid.css";
import Multiple from "./Questions/Multiple";
import TrueFalse from "./Questions/TrueFalse";
import Fill from "./Questions/Fill";
import Match from "./Questions/Match";
import FullForm from "./Questions/FullForm";
import Qusestion from "./Questions/Qusestion";


const PreMid = () => {
  return (
    <div className="PreMid">
      <h5 className="h5">Pre-Mid Term Paper (2023-2024)</h5>

      <div className="intro">
        <div className="marks_class_intro">
          <div className="mm" style={{ fontWeight: "bold" }}>
            M.M. 20
          </div>
          <div className="class">
            <span style={{ fontWeight: "bold" }}>Class-</span>3
          </div>
        </div>

        <div className="sub_time_intro">
          <div className="time">
            <span style={{ fontWeight: "bold" }}>Time:</span> 40 min
          </div>
          <div className="subject">
            <span style={{ fontWeight: "bold" }}>Subject-</span>Computer
          </div>
        </div>
      </div>

      

      <div className="multiple_choice">

        <div className="Section">Section A</div>
        <div className="multi_ques">
          <div className="main_ques">1. Multiple choice questions.</div>
          <div className="marks_no">2</div>
        </div>

        <Multiple />

        <div className="Section">Section B</div>
        <div className="multi_ques">
          <div className="main_ques">2. Write T for True and F for False.</div>
          <div className="marks_no">2</div>
        </div>

        <TrueFalse />


        <div className="Section">Section C</div>
        <div className="multi_ques">
          <div className="main_ques">3. Fill in the blanks</div>
          <div className="marks_no">2</div>
        </div>

        <Fill />

        
        <div className="Section">Section D</div>
        <div className="multi_ques">
          <div className="main_ques">4. Match the column.</div>
          <div className="marks_no">4</div>
        </div>

        <Match />


        <div className="Section">Section E</div>
        <div className="multi_ques">
          <div className="main_ques">5. Write full form of the following.</div>
          <div className="marks_no">2</div>
        </div>

        <FullForm />


        <div className="Section">Section F</div>
        <div className="multi_ques">
          <div className="main_ques">6. Answer the following questions. (Any three)</div>
          <div className="marks_no">6</div>
        </div>

        <Qusestion />






      </div>



    </div>
  );
};

export default PreMid;
