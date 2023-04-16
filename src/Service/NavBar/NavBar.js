import React from "react";
import "./NavBar.css";
import { Button, Form, Nav, NavDropdown , Navbar } from "react-bootstrap";
import { Link,NavLink } from 'react-router-dom';
import AppBar from './AppBar';


const NavBar = () => {
  return (
    <>
      <Navbar
        expand={"sm"}
        bg="dark"
        variant="dark"
        className="pt-0 pb-0 w-100"
      >
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





        </Nav>

        <Nav className='nav_bar'>
                    <Form className="navBar_form d-flex pt-2 pb-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Search Items">
                        <Form.Control
                            type="search"
                            placeholder="Search notes,books..."
                            className="rounded-0 shadow-none"
                            aria-label="Search" 
                            style={{fontSize:"15px",padding:"2px 15px 2px 15px"}} 
                        />
                
                        <Button variant="success" className="me-5 text-white rounded-0 shadow-none" style={{fontSize:"15px",padding:"2px 15px 2px 15px"}}>Search</Button>

                    </Form>
                       
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
