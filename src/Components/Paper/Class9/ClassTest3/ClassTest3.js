import React from "react";
//import "./ClassTest1.css";
import '../../../Common/Css/MyCss.css'
import '../../Class8/Questions/Multiple.css'
import jsPDF from "jspdf";

const ClassTest3 = () => {
  const handlePaper = async () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const data = document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("Class9.pdf");
    });
  };

  return (
    <>
      <button download onClick={handlePaper} className="download_btn">
        Download
      </button>

      <div className="ClassTest" id={"pdf"}>
        <h5 className="paper_name_heading" style={{ fontSize: "25px" }}>
          Class Test-3 Paper (2023-2024)
        </h5>

        <div className="intro" style={{ fontSize: "14px" }}>

          <div className="marks_class_intro">
            <div className="mm" style={{ fontWeight: "bold" }}>
              M.M. 10
            </div>
            <div className="class">
              <span style={{ fontWeight: "bold" }}>Class-</span>9
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
          <div className="multi_ques">
            <div className="main_ques">1. Multiple choice questions.</div>
            <div className="marks_no">2</div>
          </div>

          <div className="m_ques">
            <div className="mul_question">
              <div>a. Not a function of utility software:--</div>
              <div style={{display:"inline-block"}}>
                <div>i. Controlling the computer resources</div>
                <div>ii.Communicate with piece of hardware✅</div>
                <div>iii. Not directly interact with the hardware.</div>
                <div>iv. Increase file access speed.</div>
              </div>
            </div>

            <div className="mul_question">
              <div>
                b. What is the function of Bespoke software?
              </div>
              <div style={{display:"inline-block"}}>
                <div>i. used for Billing system</div>
                <div>ii. report card generator</div>
                <div>iii.created as per user's need ✅</div>
                <div>iv. allows users manipulate data</div>
              </div>
            </div>
          </div>

          <div className="multi_ques">
            <div className="main_ques">
              2. Fill in the blanks:-
            </div>
            <div className="marks_no">2</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>
                a. Device Driver are <strong style={{ color: "green" }}>hardware</strong> dependent.
              </div>
              <div>
                b. <strong style={{ color: "green" }}>Encryption</strong> is the technique of converting a content into rotation of shapes.
              </div>
            </div>
          </div>


          <div className="multi_ques">
            <div className="main_ques">
              3. Write two types of software which is suitable for:--
            </div>
            <div className="marks_no">1</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>
                a. Replication of cells  - <strong style={{ color: "green" }}>Spreadsheet</strong> .
              </div>
              <div>
                b. Organizing files for faster search - <strong style={{ color: "green" }}>Database (DBMS)</strong>.
              </div>
            </div>
          </div>




          <div className="multi_ques">
            <div className="main_ques">
              4. Write two example of the following:--
            </div>
            <div className="marks_no">2</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>
                a. OS - <strong style={{ color: "green" }}>MS Windows, Linux,Mac OS</strong>
              </div>
              <div>
                b. Presentation - <strong style={{ color: "green" }}>MS Powerpoint, OpenOffice Impress</strong>
              </div>
              <div>
                c. Antivirus - <strong style={{ color: "green" }}>Norton, AVG</strong>
              </div>
              <div>
                b. DBMS - <strong style={{ color: "green" }}>MongoDB, MS access , MySQL</strong>
              </div>
            </div>
          </div>



          
          <div className="multi_ques">
            <div className="main_ques">
              5. Write any two difference with example:--
            </div>
            <div className="marks_no">2</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>
                a. Compiler vs Interpreter.
              </div>
              <div>
                b. System software vs Application software.
              </div>
            </div>
          </div>



          <div className="multi_ques">
            <div className="main_ques">
              6. How utility software perform smooth operation of computer system? Give four reason with explain any one?
            </div>
            <div className="marks_no">1</div>
          </div>

        

        
        </div>
      </div>
    </>
  );
};

export default ClassTest3;
