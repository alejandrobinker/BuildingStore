import { useContext, useEffect, useState } from "react"
import { Alert, Button, Form, Spinner } from "react-bootstrap"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { postItem } from "../services/products"
import "./ProductsLoad.css"
import { AuthContext } from "./AuthContext"

function ProductsLoad() {

    const initialFields = {
        title: "",
        categoria: "",
        descripcion: "",
        precio: "",
        stock: ""
    }
    
    const [loaded, setLoaded] = useState(false)
    const { user } = useContext(AuthContext)
    const [fields, setFields] = useState(initialFields)
    const [productImage, setProductImage] = useState<any>()
    const [error, setError] = useState(false)
    const [isAdding, setIsAdding] = useState(false)

    const handleChange = (e: any) => {
        setError(false)
        let { name, value } = e.target
        if (name !== "stock" && name !== "precio") {
            setFields(prevState => ({
                ...prevState,
                [name]: value
            }))
        } else {
            setFields(prevState => ({
                ...prevState,
                [name]: +value
            }))
        }
    }

    const handleImgChange = (e: any) => {
        setProductImage(e.target.files[0])
    }

    const postProduct = async () => {
        setError(false)
        if (fields.title === "" || fields.categoria === "" || fields.descripcion === "" || +fields.precio <= 0 || +fields.stock <= 0) {
            setError(true)
            return
        }
        setIsAdding(true)

        let img = "https://via.placeholder.com/600"

        if (typeof (productImage) !== "undefined") {
            const storage = getStorage()
            const imgName = (+ new Date()).toString(20)
            const storageRef = ref(storage, `productos/${imgName}`)
            const uploadImg = await uploadBytes(storageRef, productImage)
            img = await getDownloadURL(uploadImg.ref)
        }

        const uploadItem = {
            ...fields,
            img: img
        }

        await postItem(uploadItem)
        setIsAdding(false)
        setFields(initialFields)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []);

    if (loaded === false) {
        return (
            <div className="loading ps-3">
                <p>Cargando...</p>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>
            </div>
        )
    }

    return (
        <>
            {user ?
                <div className="productsLoad-container px-5" >
                    <Form>
                        {error && <Alert variant="danger">Datos inválidos</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="title">Titulo</Form.Label>
                            <Form.Control id="title" name="title" onChange={handleChange} value={fields.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Seleccioná una categoría</Form.Label>
                            <Form.Control
                                as="select"
                                name="categoria"
                                onChange={handleChange}
                                placeholder="Categoría"
                            >
                                <option hidden selected>Categoría</option>
                                <option value="construccion">Construcción</option>
                                <option value="plomeria">Plomería</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="descripcion">Descripción</Form.Label>
                            <Form.Control id="descripcion" name="descripcion" as="textarea" rows={3} onChange={handleChange} value={fields.descripcion} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="img">Imagen</Form.Label>
                            <Form.Control id="img" name="img" type="file" onChange={handleImgChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="precio">Precio</Form.Label>
                            <Form.Control type="number" id="precio" name="precio" onChange={handleChange} value={fields.precio} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="precio">Stock</Form.Label>
                            <Form.Control type="number" id="stock" name="stock" onChange={handleChange} value={fields.stock} />
                        </Form.Group>
                        <Button variant={isAdding ? "success" : "danger"} onClick={postProduct}>
                            {isAdding ? <div>Guardando... <Spinner animation="border" role="status">
                                <span className="visually-hidden"></span>
                            </Spinner></div> : "Agregar"}
                        </Button>
                    </Form>
                </div> :
                <div className="access ps-3">
                    <h2>Access denied</h2>
                </div>}
        </>
    )
} export default ProductsLoad