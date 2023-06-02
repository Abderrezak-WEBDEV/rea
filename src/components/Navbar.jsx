import React from 'react';
import { Row } from 'react-bootstrap';
import {Navbar, Nav, Button, Container, Form} from 'react-bootstrap'
const Navba = () => {
    return (
        <Row>
             <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#">Resto Belle-Vue</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder=""
              className="mx-2"
             
            />
            <Button variant="outline-primary" className='btn-search'>Recherche</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Row>
    );
};

export default Navba;