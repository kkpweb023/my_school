import React, { useEffect, useState } from 'react';
import './StudentsMarks.css';
import logo from '../../Images/my_logo.png';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

let port = `https://unusual-elk-flannel-nightgown.cyclic.app` || `http://localhost:4000`;


const StudentsMarks = () => {

    const [data, setData] = useState([]);

    const getStudents = () => {
      axios.get(`${port}/list-students`)
        .then((result) => {
          setData(result.data)
        })
        .catch((error) => console.log("! 404 data fetch failed"));

    }
    useEffect(() => {
        getStudents();
    },[])



    const handleRecord = (del) =>{
 
        axios.delete(`${port}/delete-Student/${del}`)
        .then((result) => {
          if (result.data) {
            getStudents();
            alert('Delete Successfully')
          } else {
            alert('Delete failed')
          }
        })
        .catch((error) => console.log('deletion failed'));
    }
    
  






    return (

       
        <div className='students_div'>

            <h2 className='h2'>Students Marks</h2>
       

            {/*-----------------------------Students Details -------------------------------*/}

        {   

            data.length > 0 ?            

            data.map((value,index)=>

        

            <div className='Students_Details' key={index}>

                

                <div className='school_head'>
                    <img src={logo} alt="my logo" />

                    <div style={{ marginLeft: "10%" }}>
                        <div className='school_name'>My School </div>
                        <div className='school_medium'>English Medium School, C.B.S.E pattern </div>
                    </div>
                </div>




                <div className='class_name'>Class 5th Students Record Session 2023 - 2024 </div>

                <div className='students_info'>

                    <div>
                        <span>Name:</span>
                        <span>{value.name}</span>
                    </div>

                    <div>
                        <span>Roll No:</span>
                        <span>{value.roll_No}</span>
                    </div>

                    <div>
                        <span>Father's Name:</span>
                        <span>{value.father_name}</span>
                    </div>
                    <DeleteForeverIcon onClick={()=>handleRecord(value._id)} className='delete_students'>Delete Record</DeleteForeverIcon>
                </div>



                <form className='form_table_div' onClick={(e)=>(e.preventDefault())}>

                    <div className='table_div'>

                        {/*-----------------------------------Term I table ------------------------------*/}

                        <table className="table table-striped table-hover" cellSpacing={0}>
                            <caption>TERM I</caption>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Pre-Mid -Max:10</th>
                                    <th>Note Book-Max:5</th>
                                    <th>Practical Work-Max:5</th>
                                    <th>Half Yearly Exam-Max:80</th>
                                    <th>Marks Obtained-Max:100</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Eng</td>
                                    <td>{value.eng_pre_mid}</td>
                                    <td>{value.eng_nb1}</td>
                                    <td>{value.eng_pw1}</td>
                                    <td>{value.eng_halfYearly}</td>
                                    <td>{value.eng_pre_mid + value.eng_nb1 + value.eng_pw1 + value.eng_halfYearly}</td>
                                </tr>



                                <tr>
                                    <td>Hindi</td>
                                    <td>{value.hindi_pre_mid}</td>
                                    <td>{value.hindi_nb1}</td>
                                    <td>{value.hindi_pw1}</td>
                                    <td>{value.hindi_halfYearly}</td>
                                    <td>{value.hindi_pre_mid + value.hindi_nb1 + value.hindi_pw1 + value.hindi_halfYearly}</td>
                                </tr>

                                <tr>
                                    <td>Maths</td>
                                    <td>{value.math_pre_mid}</td>
                                    <td>{value.math_nb1}</td>
                                    <td>{value.math_pw1}</td>
                                    <td>{value.math_halfYearly}</td>
                                    <td>{value.math_pre_mid + value.math_nb1 + value.math_pw1 + value.math_halfYearly}</td>
                                </tr>

                                <tr>
                                    <td>Evs</td>
                                    <td>{value.evs_pre_mid}</td>
                                    <td>{value.evs_nb1}</td>
                                    <td>{value.evs_pw1}</td>
                                    <td>{value.evs_halfYearly}</td>
                                    <td>{value.evs_pre_mid + value.evs_nb1 + value.evs_pw1 + value.evs_halfYearly}</td>
                                </tr>


                                <tr>
                                    <td>Comp</td>
                                    <td>{value.comp_pre_mid}</td>
                                    <td>{value.comp_nb1}</td>
                                    <td>{value.comp_pw1}</td>
                                    <td>{value.comp_halfYearly}</td>
                                    <td>{value.comp_pre_mid + value.comp_nb1 + value.comp_pw1 + value.comp_halfYearly}</td>
                                </tr>


                                <tr>
                                    <td>GK/Art</td>
                                    <td>{value.gk_art_pre_mid}</td>
                                    <td>{value.gk_art_nb1}</td>
                                    <td>{value.gk_art_pw1}</td>
                                    <td>{value.gk_art_halfYearly}</td>
                                    <td>-</td>
                                </tr>


                                <tr>
                                    <td>Total</td>
                                    <td>
                                        {value.eng_pre_mid+value.hindi_pre_mid+value.math_pre_mid+value.evs_pre_mid+value.comp_pre_mid}
                                    </td>
                                    <td>
                                        {value.eng_nb1+value.hindi_nb1+value.math_nb1+value.evs_nb1+value.comp_nb1}
                                    </td>
                                    <td>
                                        {value.eng_pw1+value.hindi_pw1+value.math_pw1+value.evs_pw1+value.comp_pw1}
                                    </td>
                                    <td>
                                        {value.eng_halfYearly+value.hindi_halfYearly+value.math_halfYearly+value.evs_halfYearly+value.comp_halfYearly}
                                    </td>

                                    <td>
                                    {value.eng_pre_mid+value.hindi_pre_mid+value.math_pre_mid+value.evs_pre_mid+value.comp_pre_mid + 
                                    value.eng_nb1+value.hindi_nb1+value.math_nb1+value.evs_nb1+value.comp_nb1+
                                    value.eng_pw1+value.hindi_pw1+value.math_pw1+value.evs_pw1+value.comp_pw1
                                    +
                                    value.eng_halfYearly+value.hindi_halfYearly+value.math_halfYearly+value.evs_halfYearly+value.comp_halfYearly
                                    }

                                    </td>
                                    
                                </tr>

                                <tr>
                                    <td>Per(%)</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>

                                    {(value.eng_halfYearly+value.hindi_halfYearly+value.math_halfYearly+value.evs_halfYearly+value.comp_halfYearly)* 100 / 400}


                                    </td>

                                    <td>

                                    {(value.eng_pre_mid+value.hindi_pre_mid+value.math_pre_mid+value.evs_pre_mid+value.comp_pre_mid + 
                                    value.eng_nb1+value.hindi_nb1+value.math_nb1+value.evs_nb1+value.comp_nb1+
                                    value.eng_pw1+value.hindi_pw1+value.math_pw1+value.evs_pw1+value.comp_pw1
                                    +
                                    value.eng_halfYearly+value.hindi_halfYearly+value.math_halfYearly+value.evs_halfYearly+value.comp_halfYearly) * 100 /500
                                    }



                                    </td>
                                    
                                </tr>

                            </tbody>
                        </table>


                        {/*-----------------------------------Term II table ------------------------------*/}


                        <table className="table table-striped table-hover" cellSpacing={0}>
                            <caption>TERM II</caption>
                            <thead>
                                <tr>
                                    <th>Post-Mid-Max: 10</th>
                                    <th>Note Book-Max:5</th>
                                    <th>Practical Work -Max:5</th>
                                    <th>Annual Exam-Max. 80</th>
                                    <th>Marks Obtained-Total 100</th>
                                    <th>Grand Total-Total 200</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{value.eng_post_mid}</td>
                                    <td>{value.eng_nb2}</td>
                                    <td>{value.eng_pw2}</td>
                                    <td>{value.eng_annual}</td>
                                    <td>{value.eng_post_mid + value.eng_nb2 + value.eng_pw2 + value.eng_annual}</td>

                                    <td>
                                    {value.eng_pre_mid + value.eng_nb1 + value.eng_pw1 + value.eng_halfYearly
                                    +value.eng_post_mid + value.eng_nb2 + value.eng_pw2 + value.eng_annual}



                                    </td>

                                    <td>{value.grade_eng}</td>
                                </tr>


                                <tr>
                                    <td>{value.hindi_post_mid}</td>
                                    <td>{value.hindi_nb2}</td>
                                    <td>{value.hindi_pw2}</td>
                                    <td>{value.hindi_annual}</td>
                                    <td>{value.hindi_post_mid+value.hindi_nb2+value.hindi_pw2+value.hindi_annual}</td>

                                    <td>
                                    {value.hindi_pre_mid + value.hindi_nb1 + value.hindi_pw1 + value.hindi_halfYearly
                                    +value.hindi_post_mid+value.hindi_nb2+value.hindi_pw2+value.hindi_annual}
                                    </td>

                                    <td>{value.grade_hindi}</td>
                                </tr>


                                <tr>
                                    <td>{value.math_post_mid}</td>
                                    <td>{value.math_nb2}</td>
                                    <td>{value.math_pw2}</td>
                                    <td>{value.math_annual}</td>
                                    <td>{value.math_post_mid +value.math_nb2+value.math_pw2+value.math_annual} </td>

                                    <td>
                                    {value.math_pre_mid + value.math_nb1 + value.math_pw1 + value.math_halfYearly
                                    +value.math_post_mid +value.math_nb2+value.math_pw2+value.math_annual} 
                                    </td>

                                    <td>{value.grade_math}</td>

                                </tr>

                                <tr>
                                    <td>{value.evs_post_mid}</td>
                                    <td>{value.evs_nb2}</td>
                                    <td>{value.evs_pw2}</td>
                                    <td>{value.evs_annual}</td>
                                    <td>{value.evs_post_mid+value.evs_nb2+value.evs_pw2+value.evs_annual}</td>

                                    <td>
                                    {value.evs_pre_mid + value.evs_nb1 + value.evs_pw1 + value.evs_halfYearly
                                    +value.evs_post_mid+value.evs_nb2+value.evs_pw2+value.evs_annual}
                                    </td>
                                    <td>{value.grade_evs}</td>
                                </tr>


                                <tr>
                                    <td>{value.comp_post_mid}</td>
                                    <td>{value.comp_nb2}</td>
                                    <td>{value.comp_pw2}</td>
                                    <td>{value.comp_annual}</td>
                                    <td>{value.comp_post_mid+value.comp_nb2+value.comp_pw2+value.comp_annual}</td>

                                    <td>
                                    {value.comp_pre_mid + value.comp_nb1 + value.comp_pw1 + value.comp_halfYearly
                                    +value.comp_post_mid+value.comp_nb2+value.comp_pw2+value.comp_annual}
                                    </td>

                                    <td>{value.grade_comp}</td>
                                </tr>


                                <tr>
                                    <td>{value.gk_art_post_mid}</td>
                                    <td>{value.gk_art_nb2}</td>
                                    <td>{value.gk_art_pw2}</td>
                                    <td>{value.gk_art_annual}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>{value.grade_comp}</td>
                                </tr>

                                <tr>
                                    <td>
                                        {value.eng_post_mid+value.hindi_post_mid+value.math_post_mid+value.evs_post_mid+value.comp_post_mid}
                                    </td>
                                    <td>
                                        {value.eng_nb2+value.hindi_nb2+value.math_nb2+value.evs_nb2+value.comp_nb2}
                                    </td>
                                    <td>
                                        {value.eng_pw2+value.hindi_pw2+value.math_pw2+value.evs_pw2+value.comp_pw2}
                                    </td>
                                    <td>
                                        {value.eng_annual+value.hindi_annual+value.math_annual+value.evs_annual+value.comp_annual}
                                    </td>

                                    <td>
                                    {value.eng_post_mid+value.hindi_post_mid+value.math_post_mid+value.evs_post_mid+value.comp_post_mid
                                    +value.eng_nb2+value.hindi_nb2+value.math_nb2+value.evs_nb2+value.comp_nb2+value.eng_pw2+value.hindi_pw2+value.math_pw2+value.evs_pw2+value.comp_pw2+value.eng_annual+value.hindi_annual+value.math_annual+value.evs_annual+value.comp_annual}
                                    </td>

                                    <td>
                                    {value.eng_pre_mid + value.eng_nb1 + value.eng_pw1 + value.eng_halfYearly
                                    +value.eng_post_mid + value.eng_nb2 + value.eng_pw2 + value.eng_annual+value.hindi_pre_mid + value.hindi_nb1 + value.hindi_pw1 + value.hindi_halfYearly
                                    +value.hindi_post_mid+value.hindi_nb2+value.hindi_pw2+value.hindi_annual
                                    +value.math_pre_mid + value.math_nb1 + value.math_pw1 + value.math_halfYearly+value.math_post_mid +value.math_nb2+value.math_pw2+value.math_annual+value.evs_pre_mid + value.evs_nb1 + value.evs_pw1 + value.evs_halfYearly
                                    +value.evs_post_mid+value.evs_nb2+value.evs_pw2+value.evs_annual
                                    +value.comp_pre_mid + value.comp_nb1 + value.comp_pw1 + value.comp_halfYearly
                                    +value.comp_post_mid+value.comp_nb2+value.comp_pw2+value.comp_annual}

                                    </td>


                                    <td></td>
                                    
                                </tr>


                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td> 

                                        {(value.eng_annual+value.hindi_annual+value.math_annual+value.evs_annual+value.comp_annual)* 100 / 400} 

                                    </td>
                                    <td>

                                    {(value.eng_post_mid+value.hindi_post_mid+value.math_post_mid+value.evs_post_mid+value.comp_post_mid
                                    +value.eng_nb2+value.hindi_nb2+value.math_nb2+value.evs_nb2+value.comp_nb2+value.eng_pw2+value.hindi_pw2+value.math_pw2+value.evs_pw2+value.comp_pw2+value.eng_annual+value.hindi_annual+value.math_annual+value.evs_annual+value.comp_annual) * 100 / 500}


                                    </td>

                                    <td>

                                    {(value.eng_pre_mid + value.eng_nb1 + value.eng_pw1 + value.eng_halfYearly
                                    +value.eng_post_mid + value.eng_nb2 + value.eng_pw2 + value.eng_annual+value.hindi_pre_mid + value.hindi_nb1 + value.hindi_pw1 + value.hindi_halfYearly
                                    +value.hindi_post_mid+value.hindi_nb2+value.hindi_pw2+value.hindi_annual
                                    +value.math_pre_mid + value.math_nb1 + value.math_pw1 + value.math_halfYearly+value.math_post_mid +value.math_nb2+value.math_pw2+value.math_annual+value.evs_pre_mid + value.evs_nb1 + value.evs_pw1 + value.evs_halfYearly
                                    +value.evs_post_mid+value.evs_nb2+value.evs_pw2+value.evs_annual
                                    +value.comp_pre_mid + value.comp_nb1 + value.comp_pw1 + value.comp_halfYearly
                                    +value.comp_post_mid+value.comp_nb2+value.comp_pw2+value.comp_annual)*100/1000}

                                    
                                    </td>


                                    <td></td>
                                </tr>

    

                            </tbody>
                            
                        </table>
                        
                    </div>

                    
                </form>


            </div>
           ) : <h1>"No record found !!</h1> }
        </div>
       




    )
}

export default StudentsMarks;