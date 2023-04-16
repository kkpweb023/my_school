import React,{ createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Service/NavBar/NavBar';
import Footer from './Service/Footer/Footer';
import Course from './Components/Course/Course';
import Class3 from './Components/Paper/Class3/Class3';
import PreMid from './Components/Paper/Class3/PreMid';



export const MyContext = createContext();

function App() {

  const [showMob, setShowMob] = useState(false);

  
  return (

    <MyContext.Provider value={{ showMob:showMob,setShowMob:setShowMob}} >

      <div>

        <NavBar />

        <Routes basename="/notes">

          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/course/class_9' element={<Course />} />
          <Route path='/exam_paper/class_3' element={<Class3 />} />
          <Route path='/exam_paper/class_3/pre_mid_C3' element={<PreMid />} />
          <Route path='/exam_paper/class_3/half_yearly_C3' element={<h1>Half Yearly</h1>} />
          <Route path='/exam_paper/class_3/post_mid_C3' element={<h1>Post Mid</h1>} />
          <Route path='/exam_paper/class_3/annual_C3' element={<h1>Annual</h1>} />
          
          <Route path='/exam_paper/class_4' element={<h1>Class 4</h1>} />

          
        </Routes>


        <Footer />

      </div>
      </MyContext.Provider>
  );
}

export default App;
