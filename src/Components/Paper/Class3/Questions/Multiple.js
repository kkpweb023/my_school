import React from "react";
import './Multiple.css';

const Multiple = () => {
  return (
    <>
      <div className="m_ques">
        <div className="mul_question">
          <div>a. Pen drives are not used for_______</div>
          <div>
            <span>i. Storing data</span>
            <span>ii. Transferring data</span>
            <span>iii. Processing data</span>
          </div>
        </div>

        <div className="mul_question">
          <div>
            b. Computer manages its functions with the help of__________
          </div>
          <div>
            <span>i. Operating System</span>
            <span>ii. Moniter</span>
            <span>iii.Mouse</span>
          </div>
        </div>

        <div className="mul_question">
          <div>
            c. The __________ appears on the screen when the computer is idle.
          </div>
          <div>
            <span>i. Desktop</span>
            <span>ii. Taskbar</span>
            <span>iii.Screen Server</span>
          </div>
        </div>

        <div className="mul_question">
          <div>d. Physical parts of a computer called _________</div>
          <div>
            <span>i. Software</span>
            <span>ii.Input unit</span>
            <span>iii. Hardware</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multiple;
