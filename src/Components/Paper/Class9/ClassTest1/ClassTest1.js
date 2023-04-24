import React from "react";
import "./ClassTest1.css";
//import Multiple from "./Questions/Multiple";
//import TrueFalse from "./Questions/TrueFalse";
//import Fill from "./Questions/Fill";
//import Match from "./Questions/Match";
//import FullForm from "./Questions/FullForm";
//import Qusestion from "./Questions/Qusestion";
import jsPDF from "jspdf";

const ClassTest1 = () => {

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
        <h5 className="h5" style={{fontSize:"25px"}}>Class Test-1  Paper (2023-2024)</h5>

        <div className="intro" style={{fontSize:"14px"}}>
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
          <div>a. Coordinates the components of a computer system.</div>
          <div>
            <span>i. ALU</span>
            <span>ii.CU ✅</span>
            <span>iii. Register</span>
            <span>iv. Cache</span>
          </div>
        </div>

        <div className="mul_question">
          <div>
            b. Which of the following is not the characteristic of computer?
          </div>
          <div>
            <span>i. Speed</span>
            <span>ii. Feelings✅</span>
            <span>iii.Obedience</span>
            <span>iv.Storage</span>
          </div>
        </div>
      </div>


          <div className="multi_ques">
            <div className="main_ques">
              2. Write T for True and F for False.
            </div>
            <div className="marks_no">2</div>
          </div>

          
          <div className="true_div">
            <div className="true_question">
              <div>a. Computer has lack of decision-making ability. <strong style={{color:"green"}}>True</strong></div>
              <div>b.	Secondary memory is the main memory of the computer. <strong style={{color:"green"}}>False</strong></div>
            </div>
          </div>

      
          <div className="multi_ques">
            <div className="main_ques">3. Fill in the blanks</div>
            <div className="marks_no">2</div>
          </div>

        <div className="fill_div">
          <div className="fill_question">
            <div></div>
          <div>a.	Most powerfull computers among digital computers are  <small style={{textDecorationLine:"underline",color:"green",fontWeight:"bold"}}>supercomputer</small>.</div>
          <div>b.	Collecting the data and converting into information is called <small style={{textDecorationLine:"underline",color:"green",fontWeight:"bold"}}>Data Processing.</small></div>
      </div>
    </div>

         

          <div className="multi_ques">
            <div className="main_ques">
              6. Answer the following questions. (Any three)
            </div>
            <div className="marks_no">4</div>
          </div>

          <div className="long_div">
            <div className="long_question">
                <div>a.	What is computer and electronic device?</div>
                <div>b.	What is parts IPO cycle define with the help  of flow chart?</div>
                <div>c.	Write three parts of processing unit with the help of flow chart?</div>
                <div>d.	Give two features of Micro-Computer? </div>
            </div>
           </div>

        </div>

      </div>
    </>
  );
};

export default ClassTest1;
