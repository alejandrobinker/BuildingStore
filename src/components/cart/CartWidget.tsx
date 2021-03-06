import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./CartWidget.css"

function CartWidget(props: any) {

    return (
        <>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} size='lg' />
                <span className="badge">{props.cantidad === 0 ? null : props.cantidad}</span>
            </Link>
        </>
    )
}
export default CartWidget