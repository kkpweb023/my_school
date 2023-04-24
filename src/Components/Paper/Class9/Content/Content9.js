import React, { useContext } from 'react';
import './Content9.css';
import { Link, Outlet } from 'react-router-dom';
import { MyContext } from  '../../../../App.js';
import DocPic from '../../../../Images/docPic.png';

const auth = localStorage.getItem('user');

const Content9 = () => {

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

        <Link className='classTest_1' to={"/exam_paper/class_9/class_test1_C9"} onClick={()=>setFlag(true)}>Class Test-1</Link>

        <Link className='classTest_2' to={"/exam_paper/class_9/class_test2_C9"} onClick={()=>setFlag(true)}>Class Test-2</Link>

        <Link className='pre_mid' to={"/exam_paper/class_9/pre_mid_C9"} onClick={handlePaper}>Pre-Mid Paper</Link>
    
        <Link className='pre_mid' to={"/exam_paper/class_9/half_yearly_C9"} onClick={handlePaper}>Half-Yearly</Link>
  
        <Link className='pre_mid' to={"/exam_paper/class_9/post_mid_C9"} onClick={handlePaper}>Post-Mid</Link>
 
        <Link className='pre_mid' to={"/exam_paper/class_9/annual_C9"} onClick={handlePaper}>Annual</Link>
  
    </div>

    { flag ? <Outlet />:<img src={DocPic} alt='Show document pic' className='doc_img'/>}

     </>
  )
}
export default Content9;