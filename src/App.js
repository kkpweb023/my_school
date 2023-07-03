import React, { createContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./Service/NavBar/NavBar";
import Footer from "./Service/Footer/Footer";
import Course from "./Components/Course/Course";
import pic from "./Images/pageNot.avif";
import Chapter1 from "./Components/Course/Class9/Chapter1/Chapter1";
import Home from "./Components/Home/Home";
import Chapter2 from "./Components/Course/Class9/Chapter2/Chapter2";
import Students from "./Components/Students/Students";
import StudentsMarks from "./Components/Students/StudentsMarks";
import Login from "./Components/Admin/Login/Login";
//import SignUp from './Components/Admin/SignUp/SignUp';
import Auth from "./Components/Admin/Auth/Auth";
import Admin from "./Components/Admin/ForAdmin/Admin";
import Setting from "./Service/Setting/Setting";


import Class8 from "./Components/Paper/Class8/Class8";
import PreMid from "./Components/Paper/Class8/PreMid/PreMid";

import Class9 from "./Components/Paper/Class9/Class9";
import ClassTest1 from "./Components/Paper/Class9/ClassTest1/ClassTest1";
import Notes from "./Components/Notes/Notes";
import NotesChap2 from "./Components/Notes/Class9/Chapter2/NotesChap2";
import StdProfile from "./Components/DashBoard/StdProfile";
import NotesChap3 from "./Components/Notes/Class9/Chapter3/NotesChap3";
import ClassTest2 from "./Components/Paper/Class9/ClassTest2/ClassTest2";



export const MyContext = createContext();



function App() {

  const [flag,setFlag] = useState(false);
  const [showMob, setShowMob] = useState(false);

  //dark mode
  const [clicked, setClicked] = useState(false);

  

  function handleMode() {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }

  return (
    <MyContext.Provider
      value={{
        showMob: showMob,
        setShowMob: setShowMob,
        handleMode: handleMode,
        setFlag:setFlag,
        flag:flag
      }}
    >
      <div className={`App ${clicked ? "App_mode" : ""}`}>
        <NavBar />

        <Routes basename="/my_school">
          <Route path="/" element={<Home />} />

{/* ===================================== Practice Questions  ====================================================*/}

          <Route path="/practiceQuestions/class_9" element={<Course />} />
          <Route path="/practiceQuestions/class_9/chapter_1" element={<Chapter1 />} />
          <Route path="/practiceQuestions/class_9/chapter_2" element={<Chapter2 />} />


{/* ========================================== Topic Notes ===========================================*/} 

 {/* ===================== Class9 Notes =================*/}


    <Route path="/topic_notes/class_9" element={<Notes />} />
    <Route path="/topic_notes/class_9/chapter_2" element={<NotesChap2 />} />
    <Route path="/topic_notes/class_9/chapter_3" element={<NotesChap3 />} />


          

{/* ====================================== Exam_Paper ===========================================*/}      

            {/* ===================== Class8 Paper =================*/}

            <Route path="/exam_paper/class_8" element={<Class8 />}>

              <Route element={<Auth />}>
              
                <Route
                  path="pre_mid_C8"
                  element={<PreMid /> /*<h1>Page not active...</h1>*/}
                />
                <Route
                  path="half_yearly_C8"
                  element={<h1>Page not active...</h1>}
                />
                  <Route path="post_mid_C8" element={<h1>Page not active...</h1>} />
                  <Route path="annual_C8" element={<h1>Page not active...</h1>} />
              
              </Route>

            </Route>

            <Route path="/exam_paper/class_7" element={<h1>Class 7</h1>} />

              {/* ===================== Class9 Paper =================*/}


            <Route path="/exam_paper/class_9"  element={<Class9 />}>

                <Route
                  path="class_test1_C9"
                  element={<ClassTest1 /> /*<h1>Page not active...</h1>*/}
                />
                <Route
                  path="class_test2_C9"
                  element={<ClassTest2  /> /*<h1>Uploading Soon...</h1>*/}
                />

                <Route
                  path="pre_mid_C9"
                  element={/*<PreMid />*/ <h1>Uploading Soon...</h1>}
                />
                

              <Route element={<Auth />}>

                <Route
                  path="half_yearly_C9"
                  element={/*<PreMid />*/ <h1>Uploading Soon...</h1>}
                />
                <Route
                  path="post_mid_C9"
                  element={/*<PreMid />*/ <h1>Uploading Soon...</h1>}
                />
                <Route
                  path="annual_C9"
                  element={/*<PreMid />*/ <h1>Uploading Soon...</h1>}
                />

              </Route>

            </Route>



{/* ========================================== Student_Details========================================*/}  

            <Route element={<Auth />}>

              <Route path="/add_Student_Details/class_5" element={<Students />} />
             <Route
                path="/add_Student_Marks/class_5"
                element={<StudentsMarks />}
              />   
              <Route path="/logout" element={"Logout"} />

             </Route>
         
          <Route path="/dashboard/profile" element={<StdProfile />} />
          
          <Route path="/dashboard/setting" element={<Setting />} />

          <Route path="/signUp" element={<Admin /> /*<SignUp />*/} />
          <Route path="/login" element={<Login />} />


          <Route
            path="/*"
            element={
              <h1>
                <img
                  src={pic}
                  style={{ width: "100%", height: "80vh" }}
                  alt=""
                />
                <Link to={"/"}>Back to home page</Link>
              </h1>
            }
          />
        </Routes>

        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
