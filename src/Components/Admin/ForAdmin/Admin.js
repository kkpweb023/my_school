import React, { useEffect } from 'react';
import './Admin.css';
import { Link, useNavigate } from 'react-router-dom';
import sign from '../../../Images/sign.png';

const Admin = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        auth ? navigate('/') : navigate('/signUp');
    }, [navigate])

 
 
    return (

        <section className="background-radial-gradient overflow-hidden">

            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">

                        <div className="bg-glass admin_div d-flex" >

                            <img src={sign} alt="" style={{ width: "40%",height:"65vh" }} />

                            <div className="card-body px-4 py-4 px-md-5">
                        
                                <div className='only_admiin'>ONLY FOR ADMIN</div>

                                <p className="admin_link-info">Back to home page <Link to={'/'} >Click here</Link></p>

                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default Admin;