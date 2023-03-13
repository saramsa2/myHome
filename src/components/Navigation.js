import React, { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = ({children}) => {
  return ( 
    <Fragment>       
      <Navbar bg="primary justify-content-" variant="dark">
        <Nav className='m-auto'>
          <Nav.Link href='Portfolio'>Portfolios</Nav.Link>
          <Nav.Link href='Travel' >Travel</Nav.Link>
          <Nav.Link href='Profile' >Profile</Nav.Link>
        </Nav>
      </Navbar>
      <Container>{children}</Container>
    </Fragment>    
  );
};

export default Navigation;