import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Navigate = () => {
    return (
        <>
        <Navbar expand='md' fixed='top'>
            <Navbar.Brand href="/" className="px-3">
                Brand
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto px-3">
                    <Nav.Link href="#">
                        List of pages
                    </Nav.Link>
                    <NavDropdown title='Dropdown' id="basic-nav-dropdown" align='end'>
                        <NavDropdown.Item>
                            First page placeholder
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Outlet />
        </>
    )
}

export default Navigate