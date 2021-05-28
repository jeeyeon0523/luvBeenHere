import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/Navi.css';


function Navi(){
    return(
      <Navbar className="nav" variant="dark">
      <Navbar.Brand href="#home">LUVBEENHERE</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#timelines">Timelines</Nav.Link>
        <Nav.Link href="#maps">Maps</Nav.Link>
        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
    )
}

export default Navi;