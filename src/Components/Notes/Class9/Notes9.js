import React from 'react';
import './Notes9.css';
import { Link } from 'react-router-dom';
import Enter from '../../../Images/Enter2.png';


const Notes9 = () => {
  return (
    <div>
         <>
      <table className="notes_table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Chapters</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1</td>
            <td>Chapter 2</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_2"} style={{textDecorationLine:"none"}}>
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
              </Link>
            </td>
            
          </tr>

          <tr>
            <td>2</td>
            <td>Chapter 3</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_3"} style={{textDecorationLine:"none"}}>
                Not Active
              </Link>
            </td>
          </tr>
          

        </tbody>
      </table>
    </>
    </div>
  )
}

export default Notes9;
