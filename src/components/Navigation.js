import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (    
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Portfolios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='Travel'>Travel</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;