import { useState } from "react"
import ItemListCount from "./ItemCount"
import ItemList from "./ItemList";

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
    const onAdd= ()=>{
        console.log("producto agregado");
        
    }

    return (
        <div className="products-container">
            <h1>{props.title}</h1>
            <ItemListCount value={cantidad} stock={5} resta={handleResta} suma={handleSuma} action={onAdd} />
            <ItemList/>
        </div>
    )
}
export default ItemListContainer