import React from "react";
import { Navbar, Dropdown, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Navigate = () => {
    return (
        <>
        <Navbar expand='md' fixed='top' data-bs-theme='dark' className="navBGC justify-content-between">
            <Navbar.Brand href="/" className="px-3">
                <img src="/logoplaceholder.png" alt="placeholder" className="brandImg"/>
            </Navbar.Brand>
            <Container className="justify-content-end">
                <Dropdown data-bs-theme='dark' align='end' className="navDrop">
                    <Dropdown.Toggle className="navButton">
                        Pages
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="navMenu">
                        <Dropdown.Item href="/">
                            Home
                        </Dropdown.Item>
                        <Dropdown.Item href="/basics">
                            Basics
                        </Dropdown.Item>
                        <Dropdown.Item href="/Tech">
                            Tech
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
}

export default Navigate