import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';



const Content = () => {


  return (
    <div className='Content_div'>

        <Link className='pre_mid' to={"/exam_paper/class_3/pre_mid_C3"} >Pre-Mid Paper</Link>
    
        <Link className='pre_mid' to={"/exam_paper/class_3/half_yearly_C3"}>Half-Yearly</Link>
  
        <Link className='pre_mid' to={"/exam_paper/class_3/post_mid_C3"} >Post-Mid</Link>
 
        <Link className='pre_mid' to={"/exam_paper/class_3/annual_C3"} >Annual</Link>
  
    </div>
  )
}
export default Content;