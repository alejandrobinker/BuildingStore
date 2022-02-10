import ItemCount from "./ItemCount";
import { useState } from "react";
import credito from "../assets/credito.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import "./ItemDetail.css"
interface ItemProp {
    title: string
    descripcion: string
    precio: number
    img: string
}

function ItemDetail(item: ItemProp) {

    const [compra, setCompra] = useState({})

    const onAdd = (itemCount: number) => {
        setCompra(itemCount)
        console.log(itemCount);
    }

    return (
        <div className="row p-3 itemDetail">
            <div className="col-8 text-center">
                <img className="img-fluid w-75" src={item.img} alt="" />
            </div>
            <div className="col-4 aside px-3 py-4 d-flex flex-column justify-content-around">
                <div className="details">
                    <h1 className="title">{item.title}</h1>
                    <p className="detail-precio">{`$ ${item.precio}`}</p>
                    <p className="detail-descripcion"><b>Descripción:</b> {item.descripcion}</p>
                </div>
                <div className="payment-methods mt-5">
                    <p><FontAwesomeIcon icon={faCheckCircle} /><b>Garantía</b>, si este producto no cumple con tus expectativas podés devolverlo.</p>
                    <p><b>Medios de pago</b></p>
                    <img src={credito} alt="" />
                </div>
                <div className="buy-btn">
                    <ItemCount stock={5} action={onAdd} />
                </div>
            </div>
        </div>
    )
} export default ItemDetail