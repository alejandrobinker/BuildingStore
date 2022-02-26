import { Button, FormControl } from "react-bootstrap"
import { useState } from "react";
import './ItemCount.css'

function ItemListCount(props: any) {

    const [cantidad, setCantidad] = useState(1);

    const handleQty = () => {
        props.action(cantidad)
    }

    const handleResta = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const handleSuma = () => {
        if (cantidad < props.stock) {
            setCantidad(cantidad + 1)
        }
    }

    return (
        <>
            <p>Producto (stock: {props.stock})</p>
            <div className="d-flex mb-3">
                <Button className="btn-counter btn-danger mx-1" onClick={handleResta}>-</Button>
                <FormControl className="input-counter" value={cantidad} disabled />
                <Button className="btn-counter btn-danger mx-1" onClick={handleSuma}>+</Button>
            </div>
            {props.stock > 0 ? 
            <Button onClick={handleQty} variant="danger w-100">Agregar al carrito</Button>:
            <Button variant="danger w-100" disabled>Agregar al carrito</Button>}
        </>
    )
} export default ItemListCount