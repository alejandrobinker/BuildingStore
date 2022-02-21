import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {

    let i = 0
    const { cart } = useContext(CartContext)
    const { removeFromCart } = useContext(CartContext)
    const { cartTotal } = useContext(CartContext)
    return (
        <>
            {cart.length !== 0 ?
                <div className="mt-5">
                    <div className="table-responsive">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => (
                                    <tr key={product.id}>
                                        <td>{++i}</td>
                                        <td>{product.title}</td>
                                        <td>{product.cantidad}</td>
                                        <td>{`$${product.cantidad * product.precio}`} <FontAwesomeIcon onClick={() => removeFromCart(product.id)} icon={faTrash} size='lg' /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-end"><h2>Total: {`$${cartTotal()}`}</h2></div>
                </div> :
                <div className="mt-5"> <Link to="/"><h1>Agrega productos en la tienda</h1> </Link> </div>}
        </>
    )
}
export default Cart