import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getItems } from "../services/products"
import Producto from "../dtos/productoDTO"

function ItemDetailContainer() {

    const [item, setItem] = useState<Producto>()

    async function fetchData() {
        const data = await getItems()
        const product = data.find((producto) => producto.id === 2)
        setItem(product)
    }
    useEffect(() => {
        fetchData()
        console.log(item)
    }, [])

    return (
        <div className="product-detail">
            {item !== undefined ? <ItemDetail key={item.id} title={item.title} descripcion={item.descripcion} precio={item.precio} img={item.img} /> : 'Cargando detalle de producto...'}
        </div>
    )
} export default ItemDetailContainer