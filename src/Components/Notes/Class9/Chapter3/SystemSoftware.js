import React from 'react';
import './Software.css';


const SystemSoftware = () => {
  return (
    <>
    <div className="software">

      <h5>A. System Software</h5>

        <ul className="software">
          <li>
            A software that is used to manage and control the hardware components of the computer.
          </li>
          <li>
            It allows the interaction between the hardware and the application software.
          </li><br></br>

      
                <strong>Functions of System Software</strong>
                  <ul>
                      <li>It directly interface with hardware.</li>
                      <li>It can also used for managing computer resources.</li>
                      <li>It can control the internal computer operations.</li>
                  </ul>

                <strong>Features of System Software</strong>
                  <ul>
                      <li>closer to the computer system.</li>
                      <li>Written in a low-level language</li>
                      <li>Difficult to design and understand.</li>
                      <li>Less or indirectly interface with users.</li>
                  </ul>
      </ul>    


        <h5>Types of System Software</h5>

           
                <strong>System Software are divided into four types:-</strong>
                  <ol>
                      <li>Operating System(OS).</li>
                      <li>Language Translators.</li>
                      <li>Utility Software.</li>
                      <li>Device Driver</li>
                  </ol>

        
        <h5>1. Operating System(OS) software.</h5>    

            <ul>
                <li>
                    It is the backbone of computer system which manage and control both software and hardware device.
                </li>
                <li>
                    It is responsible for controlling and allocating hardware resources to the application software.
                </li>
                <li>
                    It prevents unauthorized user from accessing the computer system.
                </li>
                <p>
                    <strong>e.g:</strong> Linux,Apple mac OS, Microsoft windows etc.
                </p>
                
            </ul>
           
    </div>
    
  </>
  )
}

export default SystemSoftware;