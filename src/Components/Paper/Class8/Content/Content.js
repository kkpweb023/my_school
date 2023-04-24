import React, { useContext } from 'react';
import './Content.css';
import { Link, Outlet } from 'react-router-dom';
import { MyContext } from '../../../../App.js';
import DocPic from '../../../../Images/docPic.png';

const auth = localStorage.getItem('user');

const Content = () => {

  const {setFlag,flag} = useContext(MyContext);

  function handlePaper(){
    setFlag(true);
    
    if(!auth){
      alert("Please login first.....")
    }
  }




  return (
    <>
    <div className='Content_div'>

        <Link className='pre_mid' to={"/exam_paper/class_8/pre_mid_C8"} onClick={handlePaper}>Pre-Mid Paper</Link>
    
        <Link className='pre_mid' to={"/exam_paper/class_8/half_yearly_C8"} onClick={handlePaper}>Half-Yearly</Link>
  
        <Link className='pre_mid' to={"/exam_paper/class_8/post_mid_C8"} onClick={handlePaper}>Post-Mid</Link>
 
        <Link className='pre_mid' to={"/exam_paper/class_8/annual_C8"} onClick={handlePaper}>Annual</Link>
  
    </div>
    { flag ? <Outlet />:<img src={DocPic} alt='Show document pic' className='doc_img'/>}
    </>
  )
}
export default Content;