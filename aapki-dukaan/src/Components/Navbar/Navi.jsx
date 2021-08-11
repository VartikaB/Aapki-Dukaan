import React from "react"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navi.css"

const navi = () => {
    return (
        <Navbar bg="dark" expand="lg" className="navbar navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="#home">AAPKI-DUKAAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Shops</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Your cart</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">How to shop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">About us</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Complaint and Queries</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navi;