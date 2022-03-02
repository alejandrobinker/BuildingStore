import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Producto from "../../interfaces/productoDTO";
import { getAllItems, getItemsByCategory } from "../../services/products";
import ProductList from "./ProductList";
import "./ProductListContainer.css"

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
        <div className="products-container row">
            <div className="d-none d-md-block col-md-2"><h3>Filtros</h3></div>
            <div className="col-12 col-md-10">
                <h1 className="ms-sm-3">{title}</h1>
                {loaded ?
                    <>
                        <ProductList items={items} />
                    </> :
                    <>
                        <p>Cargando productos...</p>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden"></span>
                        </Spinner></>}
            </div>
        </div>
    )
}
export default ProductListContainer