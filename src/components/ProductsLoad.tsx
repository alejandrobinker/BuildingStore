import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { postItem } from "../services/products"
import "./ProductsLoad.css"

function ProductsLoad() {

    const initialFields = {
        title: "",
        categoria: "",
        descripcion: "",
        precio: 0,
        stock: 0
    }

    const [fields, setFields] = useState(initialFields)
    const [productImage, setProductImage] = useState<any>()
    const [error, setError] = useState(false)

    const handleChange = (e: any) => {
        let { name, value } = e.target
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(fields)
    }

    const handleImgChange = (e: any) => {
        setProductImage(e.target.files[0])
        console.log(productImage)
    }

    const postProduct = async () => {
        setError(false)
        if (fields.title === "" || fields.categoria === "" || fields.descripcion === "" || fields.precio <= 0 || fields.stock <= 0) {
            setError(true)
            return
        }

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
        console.log(uploadItem)
        await postItem(uploadItem)
    }

    return (
        <div className="productsLoad-container px-5">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Titulo</Form.Label>
                    <Form.Control id="title" name="title" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicSelect">
                    <Form.Label>Select Norm Type</Form.Label>
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
                    <Form.Control id="descripcion" name="descripcion" as="textarea" rows={3} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="img">Default file input example</Form.Label>
                    <Form.Control id="img" name="img" type="file" onChange={handleImgChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="precio">Precio</Form.Label>
                    <Form.Control id="precio" name="precio" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="precio">Stock</Form.Label>
                    <Form.Control id="stock" name="stock" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" onClick={postProduct}>
                    Submit
                </Button>
            </Form>
        </div>
    )
} export default ProductsLoad