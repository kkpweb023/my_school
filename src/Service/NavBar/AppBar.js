import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MyContext } from '../../App.js';



function AppBar() {

    const {
        showMob, 
        setShowMob } = useContext(MyContext);


    return (
        <>
            <Navbar bg="dark" variant="dark" expand={'sm'}  style={{ fontSize: "14px" }}>
                <Container fluid>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} bg="dark" variant="dark" onClick={() => setShowMob(true)} />


                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        style={{ backgroundColor: "#3C2930", color: "white" }}
                        show={showMob} onHide={()=>setShowMob(false)}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} className="me-5 ms-3 fs-1 fw-bold">
                                E-shopper
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <NavDropdown.Divider />

                        <Offcanvas.Body className='off_body' onTouchMove={()=>setShowMob(false)}>

                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Nav.Link as={NavLink} to='/' className="menu" onClick={()=>setShowMob(false)}>Home</Nav.Link>

                                <NavDropdown title="Categories" id="collasible-nav-dropdown" className='menu width-2 mb-4' menuVariant="dark">

                                    <NavDropdown.Item as={Link} to='/course/class_9' className='menu-item' onClick={()=>setShowMob(false)}>Class 9</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to='/course/class_10' className='menu-item' onClick={()=>setShowMob(false)}>Class 10</NavDropdown.Item>

                                </NavDropdown>



                                <NavDropdown  title="Examination Paper" id="collasible-nav-dropdown" className='menu width-2 mb-4' menuVariant="dark">

                                    <NavDropdown.Item as={Link} to="/exam_paper/class_3" className='menu-item'  onClick={()=>setShowMob(false)}>Class 3</NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to="/exam_paper/class_4" className='menu-item' onClick={()=>setShowMob(false)}>Class 4</NavDropdown.Item>

                                </NavDropdown>

                            </Nav>

                            <Form className="navBar_form d-flex mb-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Search Items">
                                <Form.Control
                                    type="search"
                                    placeholder="Search notes,books..."
                                    className="rounded-0 shadow-none"
                                    aria-label="Search"
                                    style={{ fontSize: "15px", padding: "2px 15px 2px 15px" }}
                                />
                                <Button variant="success" className="me-5 text-white rounded-0 shadow-none" style={{ fontSize: "15px", padding: "2px 15px 2px 15px" }}>Search</Button>
                            </Form>

                                    <Nav>
                                        <Nav.Link as={NavLink} to='/login' className="menu" onClick={() => setShowMob(false)}>Login</Nav.Link>
                                    </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
        </>
    );
}

export default AppBar;