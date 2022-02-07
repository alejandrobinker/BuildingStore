import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

interface ItemProp {
    id: number
    title: string
    descripcion: string
    precio: number
    img: string
}

function Item(item: ItemProp) {

    return (
        <Link to={`producto/${item.id}`}>
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
        </Link>
    )
} export default Item