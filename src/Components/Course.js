import React from "react";
import './Course.css';


const Course = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Class</th>
            <th>Files</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Class 9</td>
            <td>PDF</td>
            <td><button>Download</button></td>
          </tr>
          <tr>
          <td>2</td>
            <td>Class 9</td>
            <td>PDF</td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Class 9</td>
            <td>PDF</td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Class 9</td>
            <td>PDF</td>
            <td><button>Download</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Course;
