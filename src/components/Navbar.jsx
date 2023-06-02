import React, {useState} from 'react';
import { Row } from 'react-bootstrap';
import {Navbar, Nav, Button, Container, Form} from 'react-bootstrap'

const Navba = ({filterSearch}) => {

  // je vais une fonction de recherche en fonction du mot integrer dans l'input, il sera le parametre de ma fonction
  // je vais utiliser le setState qui prend un string vide comme parametre 
  const [searchValue, setSearchValue] = useState(''); 

  const onSearch = () => {
    
    filterSearch(searchValue)
  }
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
              onChange= {(e)=> setSearchValue(e.target.value)}
              value = {searchValue}
            />
            <Button  onClick={()=>onSearch()} variant="outline-primary" className='btn-search'>Recherche</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Row>
    );
};

export default Navba;