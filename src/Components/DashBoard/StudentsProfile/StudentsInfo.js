import React, { useContext, useState } from "react";
import "./StudentsInfo.css";
import axios from 'axios';
import { MyContext } from "../StdProfile";

let port = `https://thankful-twill-colt.cyclic.app` || `http://localhost:4000`;

const StudentsInfo = () => {

  const { getInfo,info,setInfo } = useContext(MyContext);


  const [error,setError] = useState(false);

  
function handleAdd() {

  // =================== Add Name ==================== ////


  if(!info.name || !info.subject || !info.remarks){
    setError(true);
    return false;  
  }

    axios.post(`${port}/attendence`, {
      name: info.name,
      subject: info.subject,
      remarks: info.remarks
    })
    .then((result)=>{
      getInfo();
      console.log(result.data);
    })
    .catch((error)=>console.log("! data add failed"));
    
  }






  return (
    <div className="container_div">
        

          <div className="card_div">

            <h5>Students Info</h5>

            <div className="form-input-div">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
              />
              {error && !info.name &&  <small className='error'>Enter valid name</small>}
            </div>

            <div className="form-input-div">
         
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                onChange={(e) => setInfo({ ...info, subject: e.target.value })}
              />
              {error && !info.subject &&  <small className='error'>Enter valid name</small>}
            </div>

            <div className="form-input-div">
             
              <input
                type="text"
                className="form-control"
                placeholder="Remarks"
                onChange={(e) => setInfo({ ...info, remarks: e.target.value })}
              />
              {error && !info.remarks &&  <small className='error'>Enter valid name</small>}
            </div>

            <button className="btn btn-primary form-btn" onClick={handleAdd}>
              Submit
            </button>
            
          </div>
        </div>
   
  );
};

export default StudentsInfo;
