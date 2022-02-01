import { useEffect, useState } from "react"
import { getItems } from "../services/getItem"
import Item from "./Item"


function ItemList() {

    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        getItems().then(function (products: any) {
            setItems(products)
        })
    }, [])


    return (
        <div className="products">
            {items.map(item => (
                <Item key={item.id} title={item.title} descripcion={item.descripcion} precio={item.precio} img={item.img} />
            )
            )}
        </div>
    )
} export default ItemList