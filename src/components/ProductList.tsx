import Item from "./Item"

function ProductList(props: any) {

    return (
        <div className="products">
            {props.items.length > 0 ?
                props.items.map((item: any) => (
                    <Item key={item.id} id={item.id} title={item.title} precio={item.precio} img={item.img} />
                )
                ) : 'Cargando productos...'}
        </div>
    )
} export default ProductList