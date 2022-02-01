import { Card } from "react-bootstrap"


interface ItemProp {
    title: string
    descripcion: string
    precio: number
    img: string
}

function Item(item: ItemProp) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.descripcion}
                </Card.Text>
                <Card.Text>
                    {`$${item.precio}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
} export default Item