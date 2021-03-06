import { createContext, useEffect, useState } from "react"
import Cart from "../../interfaces/cart";

export type ContextProps = {
    cart: Cart[]
    addToCart: (cantidad: number, item: any) => void
    removeFromCart: (id: string) => void
    clearCart: () => void
    cartQty: () => number
    cartTotal: () => number
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const CartContext = createContext<ContextProps>({} as ContextProps)

function CartProvider({ children }: props) {

    const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart')!) || [])

    const addToCart = (cantidad: number, item: any) => {
        let producto = cart.find((product) => product.id === item.id)
        if (producto) {
            producto.cantidad += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, { ...item, cantidad }])
        }
    };

    const removeFromCart = (id: string) => {
        setCart(cart.filter((producto) => producto.id !== id));
    }

    const clearCart = () => {
        setCart([])
    }

    const cartQty = () => {
        return cart.reduce((prev: any, curr: any) => prev + curr.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((prev: any, curr: any) => prev + curr.cantidad * curr.precio, 0)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartQty, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider