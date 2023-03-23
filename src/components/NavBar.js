import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from './CartWidget';
import { Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from "./ItemDetailContainer";
import "./LinkFont-module.css";

function NavBar(){
    return(
    <>
    <Navbar bg="light" expand="lg" sticky="top">
        <Container className="navBarContainer">
        <Navbar.Brand><Link to="/" className="linkFont">MangaZone</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to="/" className="linkFont">Inicio</Link></Nav.Link>
                <Nav.Link><Link to="/" className="linkFont">Novedades</Link></Nav.Link>
                    <NavDropdown title="Manga" id="basic-nav-dropdown" className="linkFont">
                    <NavDropdown.Item><Link to="/category/seinen" className="linkFont">Seinen</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/category/shonen" className="linkFont">Shonen</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Carrito/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>
    <Routes>
        <Route path="/" exact element={<ItemListContainer/>}/>
        <Route path="/category/:category" exact element={<ItemListContainer/>}/>  
        <Route path="/item/:id" exact element={<ItemDetailContainer/>}/>  
      </Routes>
    </>
    )
}

export default NavBar;