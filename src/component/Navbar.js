import React from "react";
import { sortListItem } from "../redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const { showList } = useSelector((state) => state.show);
  const Search = (shows) => {
    const searchedShow = showList.filter((show) => {
      return show.name.toLowerCase().includes(shows.toLowerCase());
    });
    dispatch(sortListItem(searchedShow));
  };
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Today</Nav.Link>
          {/* <Nav.Link href="#">Upcomming</Nav.Link> */}
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/Crime">Crime</NavDropdown.Item>
            <NavDropdown.Item href="/Fantasy">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="/Drama">Drama</NavDropdown.Item>
            <NavDropdown.Item href="/Thriller">Thriller</NavDropdown.Item>
            <NavDropdown.Item href="/SciFi">SciFi</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            onChange={(e) => {
              Search(e.target.value);
            }}
            type="search"
            placeholder="search"
            className="me-2"
            aria-label="search"
          />
          {/* <Button variant="outline-danger">Search</Button> */}
        </Form>
      </Container>
    </Navbar>
  );
}
