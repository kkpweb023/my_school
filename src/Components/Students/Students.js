import React, { useState } from 'react';
import './Students.css';
import logo from '../../Images/my_logo.png';
import axios from 'axios';

let port = `https://unusual-elk-flannel-nightgown.cyclic.app` || `http://localhost:4000`;

const Students = () => {

    const [stud_data, set_stud_Data] = useState({
        name: "",
        roll_No: "",
        father_name: "",
    })


    const [engData, setEngData] = useState({

        eng_pre_mid: "",
        eng_nb1: "",
        eng_pw1: "",
        eng_halfYearly: "",
        eng_halfTotal:"",
        eng_post_mid: "",
        eng_nb2: "",
        eng_pw2: "",
        eng_annual: ""
    })

    const [hindiData, setHindiData] = useState({

        hindi_pre_mid: "",
        hindi_nb1: "",
        hindi_pw1: "",
        hindi_halfYearly: "",
        hindi_post_mid: "",
        hindi_nb2: "",
        hindi_pw2: "",
        hindi_annual: ""
    })


    const [mathData, setMathData] = useState({

        math_pre_mid: "",
        math_nb1: "",
        math_pw1: "",
        math_halfYearly: "",
        math_post_mid: "",
        math_nb2: "",
        math_pw2: "",
        math_annual: ""
    })

    const [evsData, setEvsData] = useState({

        evs_pre_mid: "",
        evs_nb1: "",
        evs_pw1: "",
        evs_halfYearly: "",
        evs_post_mid: "",
        evs_nb2: "",
        evs_pw2: "",
        evs_annual: ""
    })

    const [compData, setCompData] = useState({

        comp_pre_mid: "",
        comp_nb1: "",
        comp_pw1: "",
        comp_halfYearly: "",
        comp_post_mid: "",
        comp_nb2: "",
        comp_pw2: "",
        comp_annual: ""
    })

    const [gk_art_Data, set_Gk_Art_Data] = useState({
        gk_art_pre_mid: "",
        gk_art_nb1: "",
        gk_art_pw1: "",
        gk_art_halfYearly: "",
        gk_art_post_mid: "",
        gk_art_nb2: "",
        gk_art_pw2: "",
        gk_art_annual: ""
    })

    const [grade_Data, setGradeData] = useState({
        grade_eng: "",
        grade_hindi: "",
        grade_math: "",
        grade_evs: "",
        grade_comp: "",
    })


    //const [engTotal,setEngTotal] = useState("");
 

    function handleTableForm(event) {
        event.preventDefault();


        axios.post(`${port}/add_Students`, {
            name: stud_data.name,
            roll_No: stud_data.roll_No,
            father_name: stud_data.father_name,

            eng_pre_mid: engData.eng_pre_mid,
            eng_nb1: engData.eng_nb1,
            eng_pw1: engData.eng_pw1,
            eng_halfYearly: engData.eng_halfYearly,
            eng_halfTotal:"",
            eng_post_mid: engData.eng_post_mid,
            eng_nb2: engData.eng_nb2,
            eng_pw2: engData.eng_pw2,
            eng_annual: engData.eng_annual,

            hindi_pre_mid: hindiData.hindi_pre_mid,
            hindi_nb1: hindiData.hindi_nb1,
            hindi_pw1: hindiData.hindi_pw1,
            hindi_halfYearly: hindiData.hindi_halfYearly,
            hindi_post_mid: hindiData.hindi_post_mid,
            hindi_nb2: hindiData.hindi_nb2,
            hindi_pw2: hindiData.hindi_pw2,
            hindi_annual: hindiData.hindi_annual,

            math_pre_mid: mathData.math_pre_mid,
            math_nb1: mathData.math_nb1,
            math_pw1: mathData.math_pw1,
            math_halfYearly: mathData.math_halfYearly,
            math_post_mid: mathData.math_post_mid,
            math_nb2: mathData.math_nb2,
            math_pw2: mathData.math_pw2,
            math_annual: mathData.math_annual,

            evs_pre_mid: evsData.evs_pre_mid,
            evs_nb1: evsData.evs_nb1,
            evs_pw1: evsData.evs_pw1,
            evs_halfYearly: evsData.evs_halfYearly,
            evs_post_mid: evsData.evs_post_mid,
            evs_nb2: evsData.evs_nb2,
            evs_pw2: evsData.evs_pw2,
            evs_annual: evsData.evs_annual,

            comp_pre_mid: compData.comp_pre_mid,
            comp_nb1: compData.comp_nb1,
            comp_pw1: compData.comp_pw1,
            comp_halfYearly: compData.comp_halfYearly,
            comp_post_mid: compData.comp_post_mid,
            comp_nb2: compData.comp_nb2,
            comp_pw2: compData.comp_pw2,
            comp_annual: compData.comp_annual,

            gk_art_pre_mid: gk_art_Data.gk_art_pre_mid,
            gk_art_nb1: gk_art_Data.gk_art_nb1,
            gk_art_pw1: gk_art_Data.gk_art_pw1,
            gk_art_halfYearly: gk_art_Data.gk_art_halfYearly,
            gk_art_post_mid: gk_art_Data.gk_art_post_mid,
            gk_art_nb2: gk_art_Data.gk_art_nb2,
            gk_art_pw2: gk_art_Data.gk_art_pw2,
            gk_art_annual: gk_art_Data.gk_art_annual,

            grade_eng: grade_Data.grade_eng,
            grade_hindi: grade_Data.grade_hindi,
            grade_math: grade_Data.grade_math,
            grade_evs: grade_Data.grade_evs,
            grade_comp: grade_Data.grade_comp,


        })
        .then((result) => console.log(result.data))
        .catch((error) => console.log("! data add failed"));
 
    }



    return (

        <div className='students_div'>

            <h2 className='h2'>Add Students Details and Marks</h2>


            {/*-----------------------------Students Details -------------------------------*/}

            <div className='Students_Details'>

                <div className='school_head'>
                    <img src={logo} alt="my logo" style={{ width: "60px",height:"60px" }} />

                    <div style={{ marginLeft: "10%" }}>
                        <div className='school_name'>My School</div>
                        <div className='school_medium'>English Medium School, C.B.S.E pattern</div>
                    </div>

                </div>

                <div className='class_name'>Class 5th Students Record Session 2023 - 2024</div>

                <div className='students_info'>

                    <div>

                        <label>Name:</label>
                        <input type={'text'}
                            placeholder="enter name"
                            className='std_name_input'
                            onChange={(e) => set_stud_Data({ ...stud_data, name: e.target.value })}
                        />

                       <span className='std_roll_div'>
                        <label>Roll No:</label>
                        <input type={'text'}
                            placeholder="enter roll no."
                            onChange={(e) => set_stud_Data({ ...stud_data, roll_No: e.target.value })} />
                        </span>
                    </div>

                    <div className='father_name_div'>
                        <label>Father's Name:</label>
                        <input type={'text'}
                            placeholder="enter father's name"
                            className='father_name_input'
                            onChange={(e) => set_stud_Data({ ...stud_data, father_name: e.target.value })}
                        />
                    </div>

              

                </div>







                <form className='form_table_div'>

                    <div className='my_input_table'>

                        {/*-----------------------------------Term I table ------------------------------*/}

                        <table className='table_term_1' border={"1px solid black"}>
                            <caption>TERM I</caption>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Pre-Mid(Max: 10)</th>
                                    <th>Note Book(Max:5)</th>
                                    <th>Practical Work(Max:5)</th>
                                    <th>Half Yearly Exam(Max. 80)</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>Eng</td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_pre_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_nb1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_pw1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_halfYearly: e.target.value })}
                                    /></td>
                                </tr>



                                <tr>
                                    <td>Hindi</td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_pre_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_nb1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_pw1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_halfYearly: e.target.value })}
                                    /></td>
                                </tr>

                                <tr>
                                    <td>Maths</td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_pre_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_nb1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_pw1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_halfYearly: e.target.value })}
                                    /></td>
                                </tr>

                                <tr>
                                    <td>Evs</td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_pre_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_nb1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_pw1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_halfYearly: e.target.value })}
                                    /></td>
                                </tr>


                                <tr>
                                    <td>Comp</td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_pre_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_nb1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_pw1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_halfYearly: e.target.value })}
                                    /></td>
                                </tr>


                                <tr>
                                    <td>GK/Art</td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_nb1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_pw1: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_halfYearly: e.target.value })}
                                    /></td>
                                </tr>

                            </tbody>
                        </table>


                        {/*-----------------------------------Term II table ------------------------------*/}


                        <table className='table_term_1' border={"1px solid black"}>
                            <caption>TERM II</caption>
                            <thead>
                                <tr>
                                    <th>Post-Mid(Max: 10)</th>
                                    <th>Note Book(Max:5)</th>
                                    <th>Practical Work(Max:5)</th>
                                    <th>Annual Exam(Max. 80)</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_post_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_nb2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_pw2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEngData({ ...engData, eng_annual: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setGradeData({ ...grade_Data, grade_eng: e.target.value })}
                                    /></td>
                                </tr>


                                <tr>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_post_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_nb2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_pw2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setHindiData({ ...hindiData, hindi_annual: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setGradeData({ ...grade_Data, grade_hindi: e.target.value })}
                                    /></td>
                                </tr>


                                <tr>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_post_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_nb2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_pw2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setMathData({ ...mathData, math_annual: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setGradeData({ ...grade_Data, grade_math: e.target.value })}
                                    /></td>

                                </tr>

                                <tr>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_post_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_nb2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_pw2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setEvsData({ ...evsData, evs_annual: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setGradeData({ ...grade_Data, grade_evs: e.target.value })}
                                    /></td>
                                </tr>


                                <tr>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_post_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_nb2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_pw2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setCompData({ ...compData, comp_annual: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setGradeData({ ...grade_Data, grade_comp: e.target.value })}
                                    /></td>
                                </tr>


                                <tr>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_post_mid: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_nb2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_pw2: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => set_Gk_Art_Data({ ...gk_art_Data, gk_art_annual: e.target.value })}
                                    /></td>
                                    <td><input type={'text'}
                                        onChange={(e) => setGradeData({ ...grade_Data, grade_gk: e.target.value })}
                                    /></td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                    <button type='submit' onClick={handleTableForm}>UPLOAD MARKS</button>


                </form>

            </div>

        </div>
    )
}

export default Students;