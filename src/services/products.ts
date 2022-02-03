import Producto from "../dtos/productoDTO"

const products = [
    {
        id: 1,
        title: 'Ladrillo',
        descripcion: 'Ladrillo hueco 18 x 18 x 33 cm',
        precio: 100,
        img: './img/ladrillo-hueco.jpg'
    },
    {
        id: 2,
        title: 'Ladrillo',
        descripcion: 'Ladrillo hueco 18 x 18 x 33 cm',
        precio: 200,
        img: './img/ladrillo-hueco.jpg'
    },
]


const promise = new Promise<Producto[]>((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    },2000)
})

function getItems() {
    return promise
}

export {
    getItems
}