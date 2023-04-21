import React from "react";
import "./NavBar.css";
import { Nav, NavDropdown , Navbar } from "react-bootstrap";
import { Link,NavLink } from 'react-router-dom';
import AppBar from './AppBar';
import logo from '../../Images/my_logo.png';


const NavBar = () => {
  return (
    <>
      <Navbar
        expand={"sm"}
        variant="light"
        className="pt-0 pb-0 w-1000"
        style={{backgroundColor:"rgb(212, 223, 65)"}}
      >
        <img src={logo} alt="" className="img_logo" />
        <Navbar.Brand className="me-5 ms-3 fs-6 fw-bold">
          My-School
        </Navbar.Brand>

        <Nav className="me-auto nav_bar">

            <Nav.Link as={NavLink} to='/' className="menu">Home</Nav.Link>

          <NavDropdown
            title="Course"
            id="collasible-nav-dropdown"
            className="menu width-2"
            menuVariant="dark"
            
          >

            <NavDropdown.Item
              as={Link}
              to="/course/class_6"
              className="menu-item"
            >
              Class 6
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/course/class_7"
              className="menu-item"
            >
              Class 7
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/course/class_8"
              className="menu-item"
            >
              Class 8
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/course/class_9"
              className="menu-item"
            >
              Class 9
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/course/class_10"
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
              to="/exam_paper/class_3"
              className="menu-item"
            >
              Class 3
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/exam_paper/class_4"
              className="menu-item"
            >
              Class 4
            </NavDropdown.Item>

          </NavDropdown>



          <NavDropdown
            title="Notes"
            id="collasible-nav-dropdown"
            className="menu width-2"
            menuVariant="dark"
          >
            <NavDropdown.Item
              as={Link}
              to="/topic_notes/class_6"
              className="menu-item"
            >
              Class 6
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/topic_notes/class_7"
              className="menu-item"
            >
              Class 7
            </NavDropdown.Item>

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
                       
                    <Nav>
                        <Nav.Link as={NavLink} to='/login'  className="menu">Login</Nav.Link>
                    </Nav>  
                    
                </Nav>
                <AppBar />
      </Navbar>
      
    </>
  );
};

export default NavBar;
