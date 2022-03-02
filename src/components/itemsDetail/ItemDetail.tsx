import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import credito from "../../assets/credito.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import "./ItemDetail.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";


function ItemDetail({ item }: any) {

    const [isBuying, setIsBuying] = useState(true)
    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad: number) => {
        addToCart(cantidad, item)
        setIsBuying(false)
    }

    return (
        <div className="row p-3 itemDetail">
            <div className="col-lg-8 text-center m-auto">
                <img className="img-fluid w-75" src={item.img} alt="" />
            </div>
            <div className="col-lg-4 aside px-3 py-4 d-flex flex-column justify-content-around">
                <div className="details">
                    <h1 className="title">{item.title}</h1>
                    <p className="detail-precio">{`$ ${item.precio}`}</p>
                    <p className="detail-descripcion"><b>Descripción:</b> {item.descripcion}</p>
                </div>
                <div className="payment-methods mt-5">
                    <p><FontAwesomeIcon icon={faCheckCircle} /><b>Garantía</b>, si este producto no cumple con tus expectativas podés devolverlo.</p>
                    <p><b>Medios de pago</b></p>
                    <img src={credito} className="w-75" alt="pagos-tarjeta" />
                </div>
                <div className="buy-btn">
                    {isBuying ? <ItemCount stock={item.stock} action={onAdd} /> : <Link to="/cart"><Button variant="danger w-100">Ir al carrito</Button></Link>}
                </div>
            </div>
        </div>
    )
} export default ItemDetail