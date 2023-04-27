import React from "react";

const InputDevice = () => {
  return (
    <>
      <div>

        <h5>1. Keyboards</h5>

          <ul className="inputDevice">
            <li>
              It contains a matrix of switches is used to type letters,digits
              and commonds.
            </li>
            <li>Total Keys = 104</li>
          </ul>

        <h5>2. Mouse</h5>

          <ul className="inputDevice">
            <li>
              The mouse is pointer device that points to a position on computer screen.
            </li>
            <li><strong>Mouse pointer-</strong>Mouse controls movement of pointer on screen.</li>
          </ul>


        <h5>3. Microphones</h5>

          <ul className="inputDevice">
            <li>
              A input device that converts sound waves into an electrical signal ( or into computer's format called digitized sound or digital audio).
            </li>
            <li>It can work if computer has <strong>sound card</strong> device driver.</li>
          </ul>


        
        <h5>4. Barcode Reader</h5>

          <ul className="inputDevice">
            <li>
              The input device that is used to read,translate and transmit information contained in barcodes..
            </li>
          </ul>


        <h5>5. Scanner</h5>

          <ul className="inputDevice">
            <li>
              A input device that scans the images or documents,then convert or create into digital form or electronic form.
            </li>
                <strong> Types of scanner :---- </strong>
            <ol>
                <li><strong>Hand-Held scanners-</strong> scans text or images by dragging.</li>
                <li><strong>Sheet-fed scanners-</strong> scans paper by feeding.</li>
                <li>
                    <strong>Drum scanners-</strong>
                    <ul>
                        <li>Mid-size scanners with a rollowing drum.</li>
                        <li>Scans images using photomultiplier tube.</li>
                    </ul>
                </li>
                <li><strong>Flatbed scanners-</strong>It scans the image by placing it inside a glass plane.</li>
            </ol>
          </ul>



        <h5>6. Light Pen</h5>
           <ul className="inputDevice">
                <li>It is a pen shape pointing input device that is light-sensitive.</li>
                <li>It is used to either select or modify text or data on a screen.</li>
            </ul>

        <h5>7. Digital Camera </h5>
           <ul className="inputDevice">
                <li>It records and stores images and videos in digital form.</li>
            </ul>


        <h5>8. Joystick </h5>
           <ul className="inputDevice">
                <li>It is an input device that can be used for controlling the movement of the cursor or a pointer in a computer device by maneuvering a lever.</li>
                <li>Used for gaming and graphics application.</li>
            </ul>

        <h5>9. Magnetic Strip Reader </h5>
           <ul className="inputDevice">
                <li>Input device that reads the information in the magnetic strip loacted on the back of plastic badge.</li>
                <li>Used as credit card,security card etc.</li>
            </ul>
 
        <h5>10. OMR (Optical Mark Reader or Recognition) </h5>
           <ul className="inputDevice">
                <li>can read marks at designed positions.</li>
            </ul>

             
        <h5>11. OCR (Optical Character Reader or Recognition) </h5>
           <ul className="inputDevice">
                <li>can scan a printed documents and convert it into editable text.</li>
            </ul>

            
             
        <h5>12. MICR (Magnetic Ink Character Reader) </h5>
           <ul className="inputDevice">
                <li>can read the magnetized ink characters (eg. bank cheques).</li>
            </ul>
      </div>



    </>
  );
};

export default InputDevice;
