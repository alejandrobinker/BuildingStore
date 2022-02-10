import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getItems } from "../services/products"
import Producto from "../dtos/productoDTO"
import { useParams } from "react-router-dom"
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
            {item !== undefined ? <ItemDetail key={item.id} title={item.title} descripcion={item.descripcion} precio={item.precio} img={item.img} /> : 'Cargando detalle de producto...'}
        </div>
    )
} export default ItemDetailContainer