import React, { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = ({children}) => {
  return ( 
    <Fragment>  
      <div className='col-12'></div>
      <Navbar bg="primary" variant="dark">
        <Nav className='me-auto'>
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