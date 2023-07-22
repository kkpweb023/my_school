import React from "react";
//import "./ClassTest1.css";
import '../../../Common/Css/MyCss.css'
import '../../Class8/Questions/Multiple.css'
import jsPDF from "jspdf";

const ClassTest2 = () => {
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
          Class Test-2 Paper (2023-2024)
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
              <div>a. Which of the following is not the type of monitor?.</div>
              <div>
                <span>i. Laser monitor ✅</span>
                <span>ii.LCD monitor</span>
                <span>iii. LED monitor</span>
                <span>iv. TFT monitor</span>
              </div>
            </div>

            <div className="mul_question">
              <div>
                b. Backup storage is also know as?
              </div>
              <div>
                <span>i. Cache memory</span>
                <span>ii. Secondary Memnory✅</span>
                <span>iii.Processor memory</span>
                <span>iv.All of these</span>
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
              <div>
                a. MICR is used to read code printed on bank cheques.{" "}
                <strong style={{ color: "green" }}>True</strong>
              </div>
              <div>
                b. Floppy disk drive use laser beam technology to read and write data.{" "}
                <strong style={{ color: "green" }}>False</strong>
              </div>
            </div>
          </div>

          <div className="multi_ques">
            <div className="main_ques">
              4. Answer the following questions.
            </div>
            <div className="marks_no">6</div>
          </div>

          <div className="long_div">
            <div className="long_question">
              <div>a. Why we use blu-ray disc rather than CD and DVD,Give any two reason?</div>
              <div>
                b. What is the booting process and which memory is responsible for booting process?
              </div>
              <div>
                c. Write any two difference between RAM and ROM? 
              </div>
              <div>d. Write any two difference between processor memory and external memory?</div>
              <div>e. Draw and mention all the internal and external parts of CPU with help of processor,primary and secondary memory using flow charts?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassTest2;
