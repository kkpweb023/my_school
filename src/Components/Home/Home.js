import React from 'react';
import pic from '../../Images/study.PNG';
import './Home.css';
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className='Home_div'>

            <div className='home_content'>

                <div>
                    <div className='head'>Build Better Assignments.</div>
                    <div className='Quates'>Implementing best pedogogical practises can be yearly impossible.We make it easy.</div>
                </div>

            <img src={pic}  alt='study_pic'className='img' />

            </div>


            <div className='educator'>Trusted by educator at</div>

          <h5 style={{color:"darkred",fontStyle:"italic",position:"absolute",bottom:"0px",left:"10px"}}><Marquee play>Kaushal Pandey</Marquee></h5>
          
    </div>
  )
}

export default Home;
