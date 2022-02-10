import { useState } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./Navbar.css"

function HeaderNavbar() {

    const [show, setShow] = useState(false)

    return (
        <Navbar className="px-3 navbar-custom" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
            <Navbar.Brand as={Link} to="/">BuildingStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Nosotros</Nav.Link>
                    <NavDropdown
                        title="Productos"
                        show={show}
                        onMouseEnter={() => setShow(!show)}
                        onMouseLeave={() => setShow(!show)}
                    >
                        <NavDropdown.Item as={Link} to="/category/construccion">Construcción</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/plomeria">Plomería</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <Nav.Link className="cart-link">
                        <CartWidget /><span className="badge">0</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
export default HeaderNavbar