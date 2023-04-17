import React from "react";
import Multiple1 from "./Mutiple1";
import jsPDF from "jspdf";
import './Chapter1.css';

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
      <button onClick={handleChapter1} className="notes_download">Download</button>

      <div className="Chapter1_div" id={"pdf"}>

        <h4 className="head_1">Chapter-1 Computer System</h4>

        <div className="Ch1_choice">
          <div className="Ch1_ques">
            <div className="Ch1_head_ques">1. Multiple choice questions.</div>
          </div>

          <Multiple1 />
        </div>
      </div>
    </>
  );
};

export default Chapter1;
