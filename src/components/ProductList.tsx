import Item from "./Item"

function ProductList(props: any) {

    return (
        <div className="d-flex flex-wrap">
            {
                props.items.map((item: any) => (
                    <Item key={item.id} id={item.id} title={item.title} precio={item.precio} img={item.img} />
                )
                )}
        </div>
    )
} export default ProductList