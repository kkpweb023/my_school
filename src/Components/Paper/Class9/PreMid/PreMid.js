import React from "react";
//import "./ClassTest1.css";
import '../../../Common/Css/MyCss.css'
import '../../Class8/Questions/Multiple.css'
import jsPDF from "jspdf";

const PreMid = () => {
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
          Pre-Mid Paper (2023-2024)
        </h5>

        <div className="intro" style={{ fontSize: "14px" }}>

          <div className="marks_class_intro">
            <div className="mm" style={{ fontWeight: "bold" }}>
              M.M. 20
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
              <div>a.	The contents of main memory, currently in use and likely to be needed in future is stored in which memory?</div>

              <div style={{display:"inline-block"}}>
                <div>i. Registers</div>
                <div>ii.Hard Disk</div>
                <div>iii. Flash Memory</div>
                <div>iv. Cache Memory ✅</div>
              </div>
            </div>

            <div className="mul_question">
              <div>
                b. Which software takes control of computer system on startup?
              </div>
              <div style={{display:"inline-block"}}>
                <div>i. Compiler</div>
                <div>ii. Application Software</div>
                <div>iii. OS ✅</div>
                <div>iv. All of these</div>
              </div>
            </div>


            <div className="mul_question">
              <div>
                c. This part sends signals to other parts of the computer to tell them what to do?
              </div>
              <div style={{display:"inline-block"}}>
                <div>i. CPU ✅</div>
                <div>ii. Keyboard</div>
                <div>iii. Mouse</div>
                <div>iv. Hard Disk</div>
              </div>
            </div>



            <div className="mul_question">
              <div>
                d. MS-DOS is an ______________.
              </div>
              <div style={{display:"inline-block"}}>
                <div>i. MS-office</div>
                <div>ii. Networking device</div>
                <div>iii. OS ✅</div>
                <div>iv. BIOS</div>
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
                a. Among all the memories, the Cache Memory is the fastest memory.{" "}
                <strong style={{ color: "green" }}>False</strong>
              </div>
              <div>
                b. Device driver is a part of system software.{" "}
                <strong style={{ color: "green" }}>True</strong>
              </div>

              <div>
                c. The ALU unit provides the capability of decision making to the computer.{" "}
                <strong style={{ color: "green" }}>True</strong>
              </div>

              <div>
                d.	Average booting time of OS in SSD is slower than the HDD.{" "}
                <strong style={{ color: "green" }}>False</strong>
              </div>
              
            </div>
          </div>



          <div className="multi_ques">
            <div className="main_ques">
              3. Fill in the blanks:-
            </div>
            <div className="marks_no">2</div>
          </div>

          <div className="true_div">
            <div className="true_question">

              <div>
                a. The binary system uses the symbols <strong style={{ color: "green" }}>0</strong> and <strong style={{ color: "green" }}>1</strong>.
              </div>

              <div>
                b. The programs that control internal computer operations is called <strong style={{ color: "green" }}>system software</strong>.
              </div>

              <div>
                c. Most powerful computers among digital computers are <strong style={{ color: "green" }}>supercomputer</strong>.
              </div>

              <div>
                d.	Blu-ray disc is a new optical disc format, which is rapidly replacing <strong style={{ color: "green" }}>CD/DVD</strong>.
              </div>

            </div>
          </div>


          <div className="multi_ques">
            <div className="main_ques">4. Match the column.</div>
            <div className="marks_no">4</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>a.	Virus removal function -- <strong style={{ color: "green" }}>iv. Utilities</strong></div>

              <div>b.	Cloud Storage -- <strong style={{ color: "green" }}>iii. Google Drive</strong></div>

              <div>c.	CRAY -- <strong style={{ color: "green" }}>i. Supercomputer</strong></div>

              <div>d.	DOT Matrix <strong style={{ color: "green" }}>ii. Impact Printer</strong></div>
            </div>
          </div>




          <div className="multi_ques">
            <div className="main_ques">
              5. Define following terms (Any three)                                         
            </div>
            <div className="marks_no">3</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>a.	Register </div>
              <div>b.	OMR</div>
              <div>c.	Booting Process</div>
              <div>d.	ROM</div>
            </div>
          </div>



          <div className="multi_ques">
            <div className="main_ques">
            6.  Short answer type questions (Any three).     
            </div>
            <div className="marks_no">3</div>
          </div>

          <div className="true_div">
            <div className="true_question">
              <div>a.	Difference two between SSD and HDD?</div>
              <div>b.	Difference two between Interpreter and Compiler?</div>
              <div>c.	Mention name and define the types of system software?</div>
              <div>d.	What is DBMS?</div>
            </div>
          </div>



          
          <div className="multi_ques">
            <div className="main_ques">
              7.  Long answer type questions (Any two). 	
            </div>
            <div className="marks_no">4</div>
          </div>

          <div className="true_div">
            <div className="true_question">

              <div>
              a.	Define computer using Input-Process-Output(IPO) cycle with the help of flow chart? 
              </div>

              <div>
                b. Draw and mention all parts of CPU with help of processor, primary
                    memory and secondary memory using flow chart?
              </div>

              <div>
                c.  Draw the complete flow chart of software which acts as mediator 
                    between the user and the hardware and define operating system?
              </div>

            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default PreMid;
