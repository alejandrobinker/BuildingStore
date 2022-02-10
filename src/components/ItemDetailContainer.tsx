import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getItems } from "../services/products"
import Producto from "../dtos/productoDTO"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import "./ItemDetailContainer.css"

function ItemDetailContainer() {

    const [item, setItem] = useState<Producto>()
    const { productId }: any = useParams();

    async function fetchData() {
        const data = await getItems()
        const product = data.find((producto) => producto.id === parseInt(productId))
        setItem(product)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="product-detail">
            {item !== undefined ? <ItemDetail key={item.id} title={item.title} descripcion={item.descripcion} precio={item.precio} img={item.img} /> :
                <><p>Cargando detalle de producto...</p>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>
                </>}
        </div>
    )
} export default ItemDetailContainer