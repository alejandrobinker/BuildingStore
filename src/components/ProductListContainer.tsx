import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Producto from "../interfaces/productoDTO";
import { getItems } from "../services/products";
import ProductList from "./ProductList";

function ProductListContainer() {
    const [items, setItems] = useState<Producto[]>([])
    const [title, setTitle] = useState("")
    const { categoryName } = useParams()

    const handleTitle = () => {
        switch (categoryName) {
            case undefined:
                setTitle("Lista de Productos")
                break;
            case 'construccion':
                setTitle("Construcción")
                break;
            case 'plomeria':
                setTitle("Plomería")
                break;
        }
    }


    async function fetchData() {
        if (!categoryName) {
            const data = await getItems()
            setItems(data)
        } else {
            const data = await getItems()
            const products = data.filter((productos) => productos.categoria === categoryName)
            setItems(products)
        }
    }

    useEffect(() => {
        fetchData()
        handleTitle()
    }, [categoryName])
    return (
        <div className="products-container pt-5">
            <h1>{title}</h1>
            <ProductList items={items} />
        </div>
    )
}
export default ProductListContainer