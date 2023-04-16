import React from "react";
import "./Class9.css";
import UploadNote from "./UploadNote";

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
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chapter 1</td>
            <td>PDF</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Chapter 2</td>
            <td>PDF</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Chapter 3</td>
            <td>PDF</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Chapter 4</td>
            <td>PDF</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Class_9;
