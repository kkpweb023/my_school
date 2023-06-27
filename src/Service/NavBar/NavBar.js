import React, { useContext, useEffect } from "react";
import "./NavBar.css";
import { Nav, NavDropdown , Navbar } from "react-bootstrap";
import { Link,NavLink } from 'react-router-dom';
import AppBar from './AppBar';
import logo from '../../Images/my_logo.png';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../../App.js";



const NavBar = () => {

  const {setFlag} = useContext(MyContext);

  const navigate = useNavigate();
  const auth = localStorage.getItem('user');

  function UserLogout() {
    localStorage.clear();
    navigate('/signUp');
  
    }

    function handleFlag(){  
      setFlag(false);
    }
    useEffect(()=>{
       setFlag(true)
    },[setFlag])




  return (
    <>
      <Navbar
        expand={"sm"}
        variant="light"
        className="pt-0 pb-0 w-1000"
        style={{backgroundColor:"rgb(212, 223, 65)"}}
      >
        
        <Navbar.Brand className="me-5 ms-3 fs-6 fw-bold">
        <img src={logo} alt="" className="img_logo" />
          <span style={{marginLeft:"18px"}}>My-School</span>
        </Navbar.Brand>

        <Nav className="me-auto nav_bar">

            <Nav.Link as={NavLink} to='/' className="menu">Home</Nav.Link>


          <NavDropdown
            title="Notes"
            id="collasible-nav-dropdown"
            className="menu width-2"
            menuVariant="dark"
          >

            <NavDropdown.Item
              as={Link}
              to="/topic_notes/class_8"
              className="menu-item"
            >
              Class 8
            </NavDropdown.Item>


            <NavDropdown.Item
              as={Link}
              to="/topic_notes/class_9"
              className="menu-item"
            >
              Class 9
            </NavDropdown.Item>

          </NavDropdown>


          <NavDropdown
            title="Practice questions"
            id="collasible-nav-dropdown"
            className="menu width-2"
            menuVariant="dark"
              
          >

            <NavDropdown.Item
              as={Link}
              to="/practiceQuestions/class_8"
              className="menu-item"
            >
              Class 8
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/practiceQuestions/class_9"
              className="menu-item"
            >
              Class 9
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/practiceQuestions/class_10"
            >
              Class 10
            </NavDropdown.Item>
          </NavDropdown>



          
          <NavDropdown
            title="Examination Paper"
            id="collasible-nav-dropdown"
            className="menu width-2"
            menuVariant="dark"
          >
            
            <NavDropdown.Item
              as={Link}
              to="exam_paper/class_8"
              className="menu-item"
              onClick={handleFlag}
            >
              Class 8
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="exam_paper/class_9"
              className="menu-item"
              onClick={handleFlag}
            >
              Class 9
            </NavDropdown.Item>

          </NavDropdown>


          <NavDropdown
            title="Students Details"
            id="collasible-nav-dropdown"
            className="menu width-2"
            menuVariant="dark"
          >
            <NavDropdown.Item
              as={Link}
              to="/add_Student_Details/class_5"
              className="menu-item"
              onClick={()=>!auth? alert("Please login first.....") : ""}
            >
              Add students Class 5
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/add_Student_Marks/class_5"
              className="menu-item"
              onClick={()=>!auth? alert("Please login first.....") : ""}
            >
              Students Marks Class 5
            </NavDropdown.Item>

     

          </NavDropdown>
          
        </Nav>

        <Nav className='nav_bar'>
                {/*
                    <Form className="navBar_form d-flex pt-2 pb-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Search Items">
                        <Form.Control
                            type="search"
                            placeholder="Search notes,books..."
                            className="rounded-0 shadow-none"
                            aria-label="Search" 
                            style={{fontSize:"15px",padding:"2px 15px 2px 15px"}} 
                        />
                
                        <Button variant="success" className="me-5 text-white rounded-0 shadow-none" style={{fontSize:"15px",padding:"2px 15px 2px 15px"}}>Search</Button>

                </Form> */}


  
                  <NavDropdown title="Dashboard" id="collasible-nav-dropdown" className="menu account" menuVariant="dark">

                  <NavDropdown.Item as={NavLink} to='/dashboard/profile' className='menu-item'>Profile</NavDropdown.Item>

                  <NavDropdown.Item as={NavLink} to='/dashboard/setting' className='menu-item'>Setting</NavDropdown.Item>

                  <NavDropdown.Divider />

                  {
                   auth ? 
                    <NavDropdown.Item as={NavLink} to='/login' className='menu-item' onClick={UserLogout}>Logout</NavDropdown.Item>
                  :
                  <NavDropdown.Item as={NavLink} to='/login' className='menu-item'>Login</NavDropdown.Item>
                  }
                  </NavDropdown>

                </Nav>
                <AppBar />
      </Navbar>
      
    </>
  );
};

export default NavBar;
