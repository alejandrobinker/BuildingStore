import { useState } from "react"
import ItemListCount from "./ItemCount"

function ItemListContainer(props: any) {

    const [cantidad, setCantidad] = useState(1);

    const handleResta = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const handleSuma = () => {
        setCantidad(cantidad + 1)
    }

    return (
        <>
            <h1>{props.title}</h1>
            <ItemListCount value={cantidad} stock={5} resta={handleResta} suma={handleSuma} />
        </>
    )
}
export default ItemListContainer