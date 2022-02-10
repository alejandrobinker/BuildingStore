import Producto from "../dtos/productoDTO"

const products = [
    {
        id: 1,
        title: 'Ladrillo hueco 18 x 18 x 33 cm',
        descripcion: 'Ladrillo hueco de 18 x 18 x 33 cm, 12 agujeros. Peso: 6,8 kg. Venta por unidad.',
        precio: 150,
        img: '../img/ladrillo-hueco.jpg',
        categoria: 'construccion'
    },
    {
        id: 2,
        title: 'Ladrillo Retak 60 x 25 x 15 cm',
        descripcion: 'Descripcion',
        precio: 200,
        img: '../img/ladrillo-retak.jpg',
        categoria: 'construccion'
    },
    {
        id: 3,
        title: 'Tanque de Reserva 1100 L',
        descripcion: 'Descripcion',
        precio: 200,
        img: '../img/tanque-1.jpg',
        categoria: 'plomeria'
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