import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MyContext } from "../../App.js";
import { useNavigate } from "react-router-dom";
import "./AppBar.css";
import logo from "../../Images/my_logo.png";

function AppBar() {
  const { setFlag, flag } = useContext(MyContext);
  const { showMob, setShowMob } = useContext(MyContext);

  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  function UserLogout() {
    localStorage.clear();
    setShowMob(false);
    navigate("/signUp");
  }

  function handleExam() {
    setShowMob(false);
    if (flag === true) {
      setFlag(false);
    }
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
          >
            <div className="icon_back"></div>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-sm`}
                className="me-5 ms-3 fs-1 fw-bold"
                style={{ color: "white" }}
              >
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "40px",
                    marginLeft: "-20px",
                    position: "absolute",
                  }}
                />
                <span style={{ marginLeft: "60px", fontSize: "25px" }}>
                  My-School
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <hr style={{ height: "2px", color: "blue" }} />

            <Offcanvas.Body
              className="off_body"
              onTouchMove={() => setShowMob(false)}
            >
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/*====================== Home ======================== */}

                <Nav.Link
                  as={NavLink}
                  to="/"
                  className="app_menu"
                  onClick={() => setShowMob(false)}
                >
                  <i className="bi bi-house-door-fill"></i>
                  <span> Home</span>
                </Nav.Link>


                {/*====================== Notes ======================== */}

                <div className="app_menu">
                  <i
                    className="bi bi-pencil-fill"
                    style={{ margin: "20px 0px 0px 0px" }}
                  ></i>

                  <NavDropdown
                    title="Notes"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2 mb-2"
                    menuVariant="light"
                    style={{ margin: "10px 0px 0px 50px" }}
                  >
           
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



                {/*====================== Practice Questions ======================== */}

                <div className="app_menu">
                  <i
                    className="bi bi-book-half"
                    style={{ margin: "10px 0px 0px 0px" }}
                  ></i>

                  <NavDropdown
                    title="Practice Questions"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2 mb-2"
                    menuVariant="light"
                    style={{ margin: "0px 0px 0px 50px" }}
                  >
                    
                    <NavDropdown.Item
                      as={Link}
                      to="/practiceQuestions/class_8"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 8
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/practiceQuestions/class_9"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 9
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/practiceQuestions/class_10"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Class 10
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>


                {/*====================== Examination ======================== */}

                <div className="app_menu">
                  <i
                    className="bi bi-envelope-paper-fill"
                    style={{ margin: "10px 0px 0px 0px" }}
                  ></i>

                  <NavDropdown
                    title="Examination Paper"
                    id="collasible-nav-dropdown"
                    className="drop-menu width-2 mb-2"
                    menuVariant="light"
                    style={{ margin: "0px 0px 0px 50px" }}
                  >
      
                    <NavDropdown.Item
                      as={Link}
                      to="/exam_paper/class_8"
                      className="menu-item"
                      onClick={handleExam}
                    >
                      Class 8
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/exam_paper/class_9"
                      className="menu-item"
                      onClick={handleExam}
                    >
                      Class 9
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>

                {/*====================== Students ======================== */}

                <div className="app_menu">
                  <i
                    className="bi bi-person-lines-fill"
                    style={{ margin: "10px 0px 0px 0px" }}
                  ></i>

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

              <div className="app_menu">
                <i
                  className="bi bi-gear-fill"
                  style={{ margin: "10px 0px 0px 0px" }}
                ></i>

                <NavDropdown
                  title="Dashboard"
                  id="collasible-nav-dropdown"
                  menuVariant="light"
                  className="drop-menu width-2"
                  style={{ margin: "0px 0px 0px 40px" }}
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/dashboard/profile"
                    className="menu-item"
                    onClick={() => setShowMob(false)}
                  >
                    Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/dashboard/setting"
                    className="menu-item"
                    onClick={() => setShowMob(false)}
                  >
                    Setting
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  {auth ? (
                    <NavDropdown.Item
                      as={NavLink}
                      to="/login"
                      className="menu-item"
                      onClick={UserLogout}
                    >
                      Logout
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item
                      as={NavLink}
                      to="/login"
                      className="menu-item"
                      onClick={() => setShowMob(false)}
                    >
                      Login
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
              </div>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
