import React from "react";
import Multiple1 from "./Mutiple1";
import jsPDF from "jspdf";

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

      <div className="PreMid" id={"pdf"}>
        <h5 className="h5">Chapter-1 Computer System</h5>

        <div className="multiple_choice">
          <div className="multi_ques">
            <div className="main_ques">1. Multiple choice questions.</div>
          </div>

          <Multiple1 />
        </div>
      </div>
    </>
  );
};

export default Chapter1;
