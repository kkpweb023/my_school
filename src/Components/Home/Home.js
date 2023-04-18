import React from 'react';
import pic from '../../Images/study.PNG';
import './Home.css';

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

          <h6 style={{color:"darkred",fontStyle:"italic",position:"absolute",bottom:"0px",left:"10px"}}>Kaushal Pandey</h6>
          
    </div>
  )
}

export default Home;
