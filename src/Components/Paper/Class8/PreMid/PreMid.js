import React from "react";
import '../../../Common/Css/MyCss.css';
import jsPDF from "jspdf";
import Qusestion from "../Questions/Qusestion";
import FullForm from "../Questions/FullForm";
import Match from "../Questions/Match";
import Fill from "../Questions/Fill";
import TrueFalse from "../Questions/TrueFalse";
import Multiple from "../Questions/Multiple";

const PreMid = () => {
  const handlePaper = async () => {

    const pdf = new jsPDF("p", "pt", "a4");
    const data = document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("Class8.pdf");
    });

  };




  return (
    <>
      <button download onClick={handlePaper} className="download_btn">
        Download
      </button>

      <div className="PreMid" id={"pdf"}>
        <h5 className="paper_name_heading">Pre-Mid Term Paper (2023-2024)</h5>

        <div className="intro" style={{fontSize:"14px"}}>

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
            <div className="main_ques">
              2. Write T for True and F for False.
            </div>
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
            <div className="main_ques">
              5. Write full form of the following.
            </div>
            <div className="marks_no">2</div>
          </div>

          <FullForm />

          <div className="Section">Section F</div>
          <div className="multi_ques">
            <div className="main_ques">
              6. Answer the following questions. (Any three)
            </div>
            <div className="marks_no">6</div>
          </div>

          <Qusestion />
        </div>
      </div>
    </>
  );
};

export default PreMid;
