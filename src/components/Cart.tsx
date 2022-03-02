import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"
import { Alert, Button, Form, Spinner } from "react-bootstrap"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { updateStock } from "../services/products"
import { db } from "../firebase"

function Cart() {

    const { cart, removeFromCart, cartTotal, clearCart } = useContext(CartContext)

    const initialFields = {
        name: "",
        email: "",
        phone: ""
    }
    const [orderId, setOrderId] = useState("")
    const [fields, setFields] = useState(initialFields)
    const [error, setError] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    let i = 0

    const handleChange = (e: any) => {
        setError(false)
        let { name, value } = e.target
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const postOrder = async () => {
        setError(false)
        if (fields.name === "" || fields.email === "" || fields.phone === "") {
            setError(true)
            return
        }
        setIsAdding(true)

        const order = {
            buyer: fields,
            products: cart.map(item => (
                {
                    id: item.id,
                    title: item.title,
                    cantidad: item.cantidad
                }
            )),
            date: Timestamp.fromDate(new Date()),
            total: cartTotal()
        }
        try {
            for (const item of cart) {
                await updateStock(item.id, item.cantidad)
            }
            const docRef = await addDoc(collection(db, "compras"), order)
            clearCart()
            setOrderId(docRef.id)
        } catch (error: any) {
            throw error
        }
        setIsAdding(false)
    }

    if (orderId !== "") {
        return <div className="id-order ps-3"><h2>Tu Id de compra: {orderId}</h2></div>
    }

    return (
        <div className="cart-container">
            {cart.length !== 0 ?
                <div className="cart-list p-3">
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
                                        <td>{`$${product.cantidad * product.precio}`}</td>
                                        <td> <Button onClick={() => removeFromCart(product.id)} variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} size='lg' /></Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pe-3"><h2>Total: {`$${cartTotal()}`}</h2></div>
                    </div>

                    <Form>
                        {error && <Alert variant="danger">Datos inválidos</Alert>}
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" placeholder="Ingresá tu nombre" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Ingresá tu mail" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control name="phone" type="number" pattern="[0-9]*" placeholder="Teléfono" onChange={handleChange} />
                        </Form.Group>

                        <Button variant={isAdding ? "success" : "danger"} onClick={postOrder}>
                            {isAdding ? <>Guardando... <Spinner animation="border" role="status" size="sm">
                                <span className="visually-hidden"></span>
                            </Spinner></> : "Finalizar compra"}
                        </Button>
                    </Form>
                </div>
                :
                <div> <Link to="/"><h1>Agrega productos en la tienda</h1> </Link> </div>}
        </div>
    )
}
export default Cart