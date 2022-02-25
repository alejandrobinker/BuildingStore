import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Producto from "../interfaces/productoDTO";
import { getAllItems, getItemsByCategory } from "../services/products";
import ProductList from "./ProductList";

function ProductListContainer() {
    const [items, setItems] = useState<Producto[]>([])
    const [title, setTitle] = useState("")
    const [loaded, setLoaded] = useState(false)
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
        setLoaded(false)
        if (!categoryName) {
            const data = await getAllItems()
            setItems(data)
            setLoaded(true)
        } else {
            const products = await getItemsByCategory(categoryName)
            setItems(products)
            setLoaded(true)
        }
    }

    useEffect(() => {
        fetchData()
        handleTitle()
    }, [categoryName])
    
    return (
        <div className="products-container pt-5">
            {loaded ?
                <>
                    <h1>{title}</h1> <ProductList items={items} />
                </> :
                <>
                <p>Cargando productos...</p>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner></>}
        </div>
    )
}
export default ProductListContainer