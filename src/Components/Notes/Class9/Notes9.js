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
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
              </Link>
            </td>
          </tr>


          <tr>
            <td>3</td>
            <td>Chapter 5</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_5"} style={{textDecorationLine:"none"}}>
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
              </Link>
            </td>
          </tr>



          <tr>
            <td>4</td>
            <td>Chapter 6</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_6"} style={{textDecorationLine:"none"}}>
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
              </Link>
            </td>
          </tr>



          <tr>
            <td>5</td>
            <td>Chapter 7</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_7"} style={{textDecorationLine:"none"}}>
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
              </Link>
            </td>
          </tr>



          <tr>
            <td>6</td>
            <td>Chapter 8</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_8"} style={{textDecorationLine:"none"}}>
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
              </Link>
            </td>
          </tr>



          <tr>
            <td>7</td>
            <td>Chapter 9</td>
            <td>
              <Link to={"/topic_notes/class_9/chapter_9"} style={{textDecorationLine:"none"}}>
                <img src={Enter} alt='enter_img' style={{width:"40px"}}/>
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
