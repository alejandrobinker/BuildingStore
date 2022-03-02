import Item from "../items/Item"
import "./ProductList.css"

function ProductList(props: any) {

    return (
        <div className="d-flex list-container flex-wrap">
            {
                props.items.map((item: any) => (
                    <Item key={item.id} id={item.id} title={item.title} precio={item.precio} img={item.img} />
                )
                )}
        </div>
    )
} export default ProductList