import Item from "./Item"
import Spinner from 'react-bootstrap/Spinner'

function ProductList(props: any) {

    return (
        <div className="products">
            {props.items.length > 0 ?
                props.items.map((item: any) => (
                    <Item key={item.id} id={item.id} title={item.title} precio={item.precio} img={item.img} />
                )
                ) :
                <><p>Cargando productos...</p>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden"></span>
                    </Spinner>
                </>}
        </div>
    )
} export default ProductList