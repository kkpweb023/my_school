import React,{ createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Service/NavBar/NavBar';
import Footer from './Service/Footer/Footer';
import Course from './Components/Course/Course';


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


        </Routes>


        <Footer />

      </div>
      </MyContext.Provider>
  );
}

export default App;
