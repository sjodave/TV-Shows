import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="/shows/Action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/shows/Crime">Crime</NavDropdown.Item>
            <NavDropdown.Item href="/shows/Fantasy">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="/shows/Drama">Drama</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
