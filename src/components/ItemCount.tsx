import { Card, Button, FormControl } from "react-bootstrap"
import './ItemCount.css'

function ItemListCount(props: any) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto (stock: {props.stock})</Card.Title>
                <div className="d-flex mb-3">
                    <Button className="btn-counter mx-1" onClick={props.resta}>-</Button>
                    <FormControl className="input-counter" value={props.value} disabled />
                    <Button className="btn-counter mx-1" onClick={props.value < props.stock ? props.suma : null }>+</Button>
                </div>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    )
} export default ItemListCount