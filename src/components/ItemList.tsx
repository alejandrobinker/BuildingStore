import { useEffect, useState } from "react"
import { getItems } from "../services/products"
import Item from "./Item"
import Producto from "../dtos/productoDTO"

function ItemList() {

    const [items, setItems] = useState<Producto[]>([])

    async function fetchData() {
        setItems(await getItems())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="products">
            {items.length > 0 ?
                items.map(item => (
                    <Item key={item.id} title={item.title} descripcion={item.descripcion} precio={item.precio} img={item.img} />
                )
                ) : 'Cargando productos...'}
        </div>
    )
} export default ItemList