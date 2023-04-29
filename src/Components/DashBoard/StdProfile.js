import React, { createContext, useEffect, useState } from 'react';
import './StdProfile.css';
import StudentsInfo from './StudentsProfile/StudentsInfo';
import StudentsList from './StudentsProfile/StudentsList';
import axios from 'axios';

export const MyContext = createContext();

const StdProfile = () => {


  const [data, setData] = useState([]);
  let [isLoading, setLoading] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    subject: "",
    remarks: ""
  });


  const getInfo = () => {
    setLoading(true);
    axios.get('http://localhost:4000/info_list')
      .then((result) => {
        setData(result.data)
        setLoading(false);
      })
      .catch((error) => console.log("! 404 data fetch failed"));

  }
  useEffect(() => {
    getInfo();
  },[])





  return (


    <MyContext.Provider value={{getInfo:getInfo,data:data,isLoading:isLoading,info,setInfo}} >


    <div className='Std_profile_div'>

      <StudentsInfo />
      <StudentsList /> 
      
    </div>

    </MyContext.Provider>
  )
}

export default StdProfile;
