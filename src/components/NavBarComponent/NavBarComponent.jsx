import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Raiqui Drinks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>             
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={"/category/gin"}>Gin</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={"/category/whisky"}>Whisky</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to={"/category/rum"}>Rum</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Link to={"/category/vodka"}>Vodka</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};