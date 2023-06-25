import React from "react";
import "./Software.css";

const DeviceDriver = () => {
  return (
    <>
      <div className="software">
        <h5>4. Device Driver (Hardware Driver)</h5>

        <ul>
          <li>
            Device Driver or Hardware driver is a piece of software that allows
            computer's operating system(OS) communicate with a particular piece
            of hardware.
          </li>
          <br />

          <li>
            A Device driver communicate with the device through the computer
            bus, which connects the device with computer.
          </li>
          <br />

          <li>
            A Device driver work within the Kernel layer of the OS. (The Kernel
            is the part of the OS that directly interact with the system's
            physical structure.)
          </li>
          <br />

          <li>
            Device Driver are hardware-dependent and operating system specific.
          </li>

          <br />
          <center>
            <img
              src={
                "https://res.cloudinary.com/dp2exjpd5/image/upload/v1687698667/Software/Device_Driver_ndchmb.png"
              }
              alt="software"
              className="soft_image"
            />
          </center>
        </ul>

        <h5>Purpose of a Device Driver</h5>
        <ul>
          <li>
            The main purpose of device driver is to provide abstraction by
            acting as translator between hardware device and the applictions or
            operating system.
          </li>
        </ul>

        <h5>Types of Device Driver</h5>
        <p style={{ marginLeft: "30px" }}>Two types of device drivers:-</p>

        <ol type="i">
          <li>Kernel-Mode Device driver</li>
          <li>User-Mode Device driver</li>
        </ol>

        <h5 style={{ marginLeft: "30px" }}>i. Kernel-Mode Device driver</h5>

        <ul style={{ marginLeft: "30px" }}>
          <li>
            It includes some generic hardware that loads with OS.
          </li>
          <li>
            BIOS,Motherboard,Processor etc.
          </li>
        </ul>


        <h5 style={{ marginLeft: "30px" }}>ii. User-Mode Device driver</h5>
        <ul style={{ marginLeft: "30px" }}>
          <li>
            It have to communicate with the hardware through a special interface provided by the Kernel,is called Window Drive Model(WDM).
          </li>
        </ul>



        
        <b><u>Difference Between User Mode  and Kernel Mode</u></b> 
            <br/>
            <table>
                <thead>
                    <tr>
                        <th><center>User Mode</center></th>
                        <th><center>Kernel Mode</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Knows as Slave or restricted mode.</td>
                        <td>Knows as System or privileged mode.</td>
                    </tr>

                    <tr>
                        <td>Process gets their own address space.</td>
                        <td>Process gets single address space.</td>
                    </tr>

                    <tr>        
                        <td>If an Interrupt occurs only one process fails.</td>
                        <td>If an Interrupt occurs the whole operating might fail.</td>
                    </tr>

                    <tr>
                        <td>Restrictions to access Kernel programs.</td>
                        <td>Both Kernel and User programs can be accessed.</td>
                    </tr>
                    
                </tbody>
            </table>    



      </div>
    </>
  );
};

export default DeviceDriver;
