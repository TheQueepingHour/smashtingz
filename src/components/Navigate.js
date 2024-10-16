import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Navigate = () => {
    return (
        <>
        <Navbar expand='md' fixed='top' data-bs-theme='dark'>
            <Navbar.Brand href="/" className="px-3 coralText">
                Brand
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav coralText">
                <Nav className="ms-auto px-3 coralText">
                    <NavDropdown title='Pages' id="basic-nav-dropdown" align='end' className="coralText">
                        <NavDropdown.Item className="coralText">
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