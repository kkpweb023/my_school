import React from "react";
import "./Class9.css";
import UploadNote from "./UploadNote";
import { Link } from "react-router-dom";
import Pdf from '../../../Images/pdf.PNG';



const Class_9 = () => {


  return (
    <>
      <UploadNote />
      <table className="table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Chapter</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chapter 1</td>
            <td>
              <Link to={"/course/class_9/chapter_1"}><img src={Pdf} alt="chapter_1" style={{width:"3%"}}/></Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Chapter 2</td>
            <td>
              <Link to={"/course/class_9/chapter_1"}><img src={Pdf} alt="chapter_1" style={{width:"3%"}}/></Link>
            </td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Chapter 3</td>
            <td>
              <Link to={"/course/class_9/chapter_1"}><img src={Pdf} alt="chapter_1" style={{width:"3%"}}/></Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Chapter 4</td>
            <td>
              <Link to={"/course/class_9/chapter_1"}><img src={Pdf} alt="chapter_1" style={{width:"3%"}}/></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Class_9;
