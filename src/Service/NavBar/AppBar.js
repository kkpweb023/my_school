import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MyContext } from "../../App.js";
import { useNavigate } from "react-router-dom";
import "./AppBar.css";
import logo from '../../Images/my_logo.png';


function AppBar() {
  const { showMob, setShowMob } = useContext(MyContext);

  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  function UserLogout() {
    localStorage.clear();
    setShowMob(false);
    navigate("/signUp");
  }

  function handleExam() {
    if (!auth) {
      alert("Only for admin or login first....");
    }
    setShowMob(false);
  }




  return (
    <>
      <Navbar
        variant="light"
        expand={"sm"}
        style={{ fontSize: "14px", backgroundColor: "rgb(212, 223, 65)" }}
      >
        <Container fluid>
          
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-sm`}
            bg="dark"
            variant="dark"
            onClick={() => setShowMob(true)}
          />
          
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            className="offcan_nav"
            show={showMob}
            onHide={() => setShowMob(false)}
          ><div className="icon_back"></div>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-sm`}
                className="me-5 ms-3 fs-1 fw-bold"
                style={{ color: "white" }}
              >
                <img src={logo} alt="" style={{width:"40px",marginLeft:"-20px",position:"absolute"}}/>
                <span style={{marginLeft:"60px",fontSize:"25px"}}>My-School</span>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <hr style={{ height: "2px", color: "blue" }} />

            <Offcanvas.Body
              className="off_body"
              onTouchMove={() => setShowMob(false)}
            >

           

              
              <Nav className="justify-content-end flex-grow-1 pe-3">
                

              { /*====================== Home ======================== */   }

                <Nav.Link
                  as={NavLink}
                  to="/"
                  className="app_menu"
                  onClick={() => setShowMob(false)}
                >
                  <i className="bi bi-house-door-fill"></i>
                  <span> Home</span>
                </Nav.Link>

                { /*====================== Course ======================== */   }


                <div className="app_menu">
                  <i
                    className="bi bi-book-half"
                    style={{ margin: "20px 0px 0px 0px" }}
                  ></i>

                  <NavDropdown
                    title="Course"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2 mb-2"
                    menuVariant="light"
                    style={{ margin: "10px 0px 0px 50px" }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/course/class_5"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 5
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/course/class_6"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 6
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/course/class_7"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 7
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/course/class_8"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 8
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/course/class_9"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 9
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/course/class_10"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 10
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>



                { /*====================== Notes ======================== */   }

                <div className="app_menu">
                  <i className="bi bi-pencil-fill"  style={{ margin: "10px 0px 0px 0px" }}></i>

                  <NavDropdown
                    title="Notes"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2 mb-2"
                    menuVariant="light"
                    style={{ margin: "0px 0px 0px 50px" }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/topic_notes/class_6"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 6
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/topic_notes/class_7"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 7
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="topic_notes/class_8"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 8
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="topic_notes/class_9"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 9
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>


                { /*====================== Examination ======================== */   }

                <div className="app_menu">
                  <i className="bi bi-envelope-paper-fill"  style={{ margin: "10px 0px 0px 0px" }}></i>

                  <NavDropdown
                    title="Examination Paper"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2 mb-2"
                    menuVariant="light"
                    style={{ margin: "0px 0px 0px 50px" }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/exam_paper/class_3"
                      className="menu-item"
                      onClick={handleExam}
                    >
                      Class 3
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/exam_paper/class_4"
                      className="menu-item"
                      onClick={handleExam}
                    >
                      Class 4
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>



                { /*====================== Students ======================== */   }



                <div className="app_menu">
                  <i className="bi bi-person-lines-fill"  style={{ margin: "10px 0px 0px 0px" }}></i>

                  <NavDropdown
                    title="Students Details"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2"
                    menuVariant="light"
                    style={{ margin: "0px 0px 0px 50px" }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/add_Student_Details/class_5"
                      className="menu-item"
                      onClick={handleExam}
                    >
                      Add students Class 5
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/add_Student_Marks/class_5"
                      className="menu-item"
                      onClick={handleExam}
                    >
                      Students Marks Class 5
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>

              {/*<Form className="navBar_form d-flex mb-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Search Items">
                                <Form.Control
                                    type="search"
                                    placeholder="Search notes,books..."
                                    className="rounded-0 shadow-none"
                                    aria-label="Search"
                                    style={{ fontSize: "15px", padding: "2px 15px 2px 15px" }}
                                />
                                <Button variant="success" className="me-5 text-white rounded-0 shadow-none" style={{ fontSize: "15px", padding: "2px 15px 2px 15px" }}>Search</Button>
                            </Form>*/}

              {auth ? (
                <Nav>
                  <Nav.Link
                    as={NavLink}
                    to="/login"
                    className="app_menu"
                    onClick={UserLogout}
                  >
                    <i className="bi bi-box-arrow-in-right" style={{ margin: "10px 0px 0px -2px" }}></i>
                    <span style={{ margin: "10px 0px 0px 50px" }}>Logout</span>
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link
                    as={NavLink}
                    to="/login"
                    className="app_menu"
                    onClick={() => setShowMob(false)}
                  >
                    <i className="bi bi-person-fill-lock"  style={{ margin: "10px 0px 0px 0px" }}></i> <span  style={{ margin: "10px 0px 0px 50px" }}>Login</span>
                  </Nav.Link>
                </Nav>
              )}
               <Nav>
                  <Nav.Link as={NavLink} className="app_setting" to="/setting" onClick={() => setShowMob(false)}>
                     <i className="bi bi-gear-fill" style={{ margin: "10px 0px 0px 0px" }}></i>
                     <span  style={{ margin: "10px 0px 0px 30px" }}>Setting</span>
                  </Nav.Link>
               </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
