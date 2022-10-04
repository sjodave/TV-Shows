import React, { useRef } from "react";
import { setSearchedShow } from "../redux/reducer";
import { useDispatch } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const input = useRef();
  const navigate = useNavigate();
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
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
            ref={input}
            type="search"
            placeholder="search"
            className="me-2"
            aria-label="search"
          />
          <Button
            variant="outline-warning"
            onClick={() => {
              if (input.current.value.length > 2) {
                fetch(
                  `https://api.tvmaze.com/search/shows?q=${input.current.value}`
                )
                  .then((resp) => resp.json())
                  .then((data) =>
                    dispatch(
                      setSearchedShow(
                        data.map((item) => {
                          // obtain same array of object as in app.js component
                          return item.show;
                        })
                      )
                    )
                  );
                navigate("/Search");
              }
            }}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
