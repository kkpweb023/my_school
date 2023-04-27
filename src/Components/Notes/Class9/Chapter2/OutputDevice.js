import React from "react";

const OutputDevice = () => {
  return (
    <>
      <div>
        <h5>1. Monitor</h5>

        <ul className="inputDevice">
          <li>Also known as Visual Display Unit(VDU).</li>
          <li>
            It is a standard output device that form images using made of
            thousand of tiny coloured dots called <strong>pixels.</strong>
          </li>

          <ul>
            <strong>Types of Monitor</strong>
                <li>CRT- Cathode Ray Tube</li>
                <li>LCD- Liquid Crystal Display or TFT - Thin Film Transistor</li>
                <li>PDP- Plasma Display Panels</li>
                <li>LED- Light Emitting Diode or Display</li>
                <li>OLED-Organic light Emitting Diode or Display</li>
          </ul>
        </ul>

        <h5>2. Printer</h5>

        <ul className="inputDevice">
          <li>
            It is a hard copy output device,which is used to print information on paper.
          </li>
                <strong><u>Types of printer :---- </u></strong> <br/>
                   Two types of printer
                <li>Impact Printer</li>
                <li>Non-Impact Printer</li>  
                <b><u>Difference Between Impact printer and Non-Impact printer</u></b>  

                <table>
                    <thead>
                        <tr>
                            <th>Impact printer(Character Printer)</th>
                            <th>Non-Impact printer(Page Printer)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produce Character and graphics on a piece of paper by striking.</td>
                            <td>Produce Character and graphics on a piece of paper without striking.</td>
                        </tr>

                        <tr>
                            <td>Electromechanical device are used.</td>
                            <td>No Electromechanical device are used.</td>
                        </tr>

                        <tr>
                            <td>Faster speed(250 word/sec).</td>
                            <td>Slower speed(1 page/30 sec)</td>
                        </tr>

                        <tr>
                            <td>Make noise</td>
                            <td>Work silently</td>
                        </tr>

                        <tr>
                            <td>Eg:- Line Printer,Dot-matrix printer , Daisy wheel printer</td>
                            <td>Eg:- Inkjet Printer,Photo printer , Laser printer</td>
                        </tr>
                    </tbody>
                </table>
        </ul>
            

        <h5>3. Speaker</h5>

        <ul className="inputDevice">
          <li>
            It receive the sound in form of electrical current from the sound card and convert 
            into sound signal.
          </li>
        </ul>

        <h5>4. Plotter</h5>

        <ul className="inputDevice">
          <li>A plotter is an output device that is used for printing vector graphics.</li>
          <li>It draws picture on a paper using a pen.</li>

          <strong><u>Types of plotter :---- </u></strong> <br/>
                   Two types of printer
                <li>Pen Plotter - Electromechanical device</li>
                <li>Photo Plotter - Fiber optics technology based.</li>  
        </ul>

        <h5>5. Projector</h5>

        <ul className="inputDevice">
          <li>
            It is an output device used to display the digital output from a computer device on to a large screen or wall.
          </li>
        </ul>
      </div>
    </>
  );
};

export default OutputDevice;
