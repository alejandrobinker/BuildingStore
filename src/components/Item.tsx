import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Item.css"
interface ItemProp {
    id: number
    title: string
    precio: number
    img: string
}

function Item(item: ItemProp) {

    return (

        <Card style={{ width: '18rem' }}>
            <Link to={`/producto/${item.id}`}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="precio">
                        {`$${item.precio}`}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
} export default Item