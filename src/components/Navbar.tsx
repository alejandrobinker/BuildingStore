import { Navbar, Nav, Container} from "react-bootstrap"

function HeaderNavbar() {
    return (
        <Navbar className="px-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">BuildingStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Nosotros</Nav.Link>
                        <Nav.Link href="#pricing">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}
export default HeaderNavbar