import React from "react";
import './Software.css';

const UtilitySoft = () => {
  return (
    <div className="software">
      <h5>3. Utility Software</h5>

      <ul>
        <li>
          Utility software helps to manage,maintain and control computer
          resources.
        </li>
        <li>
          It is software which help to maintain and protect the computer
          system,but it does not directly interact with the hardware.
        </li>
        <br></br>

       
          <strong>Utility software perform certain tasks:-</strong>
          <ul>
            <li>Virus detection.</li>
            <li>Installation and Uninstallation of software.</li>
            <li>Data backup.</li>
            <li>Deletion of unwanted files.</li>
          </ul>
       

        
          <strong>Some activity performed by Utility Software:</strong>
          <ul>
            <li>Formatting</li>
            <li>Back-up recovery</li>
            <li>Disk Management</li>
            <li>File Management</li>
            <li>File Compression</li>
            <li>Registry cleaners</li>
            <li>Disk Partitions</li>
          </ul>
       
      </ul>

      <h5>Some important utility software</h5>

        <strong>I. Antivirus Software</strong>
        <ul>
            <li>
          It can scan the system for any virus and if detected,gets read of it
          and delete or isolating it.
            </li>

            <li>
          It detect many types of virus like---
          <br />
          <div style={{ marginLeft: "30px" }}>
            boot virus
            <br />
            Trojan
            <br />
            Worm
            <br />
            Spyware, etc
          </div>
            </li>

            <li>
          Some popular antivirus--
          <br />
          <div style={{ marginLeft: "30px" }}>
            Norton
            <br />
            Quick Heal
            <br />
            MacCaffee
            <br />
            AVG, etc
          </div>
            </li>
        </ul>

        <strong>II. Disk/File/Folder Management Tools or Software</strong>
        <ul>
          <li>
            It is a program to organize and keep track the files known as file
            management software
          </li>

          <li>
            It provide regular file management task like
            browser,search,update,preview etc.
          </li>

          <li>
            Some popular file/folder Managementsoftware--
            <br />
            <div style={{ marginLeft: "30px" }}>
              Windows Explorer
              <br />
              Google desktop
              <br />
              FreeCommander
              <br />
              Directory, etc
            </div>
          </li>
        </ul>


        <strong>III. Compression tools</strong>
        <ul>
          <li>
            It allows Compression of large files in order to save storage space.
          </li>

          <li>
            It needs to the uncompressed before it can be accessed.
          </li>

       
    
          <li>
            Some Compression tools:---
            <br />
            <div style={{ marginLeft: "30px" }}>
              WinRARA
              <br />
              PeaZip
              <br />
              The Unachiver
              etc.
            </div>
          </li>

        </ul>


        
        <strong>IV. Disk Defragmenter</strong>
        <ul>
            <li>
                It is a disk management utility that increase file access speeds by rearranging fragmented files on contiguous location.
            </li>

            <li>
                It scans the hard disk and tries to assemble file fragments.
            </li>
        </ul>


        <strong>V. Backup recovery</strong>
        <ul>
            <li>
                It enables backing up of files,folder,database and complete disks.
            </li>
        </ul>


        <strong>VI. Encryption and Decryption Software</strong>
        <ul>
            <li>
                Encryption refers to the conversion of the electronic data into encrypted form called Ciphertext.
            </li>

            <li>
                Decryption refers to the conversion of the Ciphertext into orignal using correct key.
            </li>

            <li>
            Some Popular Encryption/Decryption tools:---
            <br />
            <div style={{ marginLeft: "30px" }}>
              LastPass
              <br />
              BitLocker
              <br />
              7zip
              etc.
            </div>
          </li>

        </ul>

    </div>
  );
};

export default UtilitySoft;
