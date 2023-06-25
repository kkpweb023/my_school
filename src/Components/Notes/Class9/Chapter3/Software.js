import React from "react";
import "./Software.css";

const Software = () => {
  return (
    <>
      <div className="software">
        
        <h5>Instruction</h5>

        <ul>
          <li>A set of codes that the computer processor can understand.</li>
        </ul>

        <h5>Program</h5>

        <ul>
          <li>A set or sequence of instructions that a computer can run.</li>
        </ul>

        <h5>Software</h5>

        <ul>
          <li>
            A set of programs that are used to performs a specific task or
            control the hardware and its components that operates the computer.
          </li>
          <li>
            A software acts as a interface or mediator between the user and the
            hardware.
          </li>
          <br />
          <center>
            <img
              src={
                "https://res.cloudinary.com/dp2exjpd5/image/upload/v1687671725/Software/Software_dgxjm4.png"
              }
              alt="software"
              className="soft_image"
            />
          </center>
        </ul>

        <h5>Types of software</h5>

        <ol>
          <li>System Software</li>
          <li>Application Software</li>
          <br />
          <center>
            <img
              src={
                "https://res.cloudinary.com/dp2exjpd5/image/upload/v1687672889/Software/Types_of_software_kurbtz.png"
              }
              alt="software"
              className="soft_image"
            />
          </center>
        </ol>
      </div>
    </>
  );
};

export default Software;
