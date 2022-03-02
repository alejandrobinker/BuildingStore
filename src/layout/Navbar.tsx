import { useContext } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faCog } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../components/cart/CartContext"
import CartWidget from "../components/cart/CartWidget"
import googleLogo from "../assets/googleLogo.png"
import "./Navbar.css"
import { AuthContext } from "../components/auth/AuthContext"

function HeaderNavbar() {

    const { user, logInWithGoogle } = useContext(AuthContext)
    const { cartQty } = useContext(CartContext)
    const logoToggle = (<FontAwesomeIcon icon={faCog} size='lg' />)

    return (
        <Navbar className="px-3 navbar-custom" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
            <Navbar.Brand as={Link} to="/">BuildingStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav className="me-3">
                    <Nav.Link href="#features">Nosotros</Nav.Link>
                    <NavDropdown
                        title="Productos"
                    >
                        <NavDropdown.Item as={Link} to="/category/construccion">Construcción</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/plomeria">Plomería</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <Nav.Link className="cart-link">
                        <CartWidget cantidad={cartQty()} />
                    </Nav.Link>
                    <NavDropdown
                        title={logoToggle}
                    >
                        <NavDropdown.Item className="me-5" as={Link} to="/productsLoad" disabled={user ? false : true}>Cargar productos <FontAwesomeIcon icon={faLock} size='lg' /> </NavDropdown.Item>
                        <NavDropdown.Item className="me-5" onClick={logInWithGoogle}><img src={googleLogo} className="login-button" />Log in</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
export default HeaderNavbar