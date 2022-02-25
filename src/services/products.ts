import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"

export async function getAllItems(): Promise<any[]> {
    try {
        const collectionRef = collection(db, "productos")
        const snapshot = await getDocs(collectionRef)
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return products
    } catch (error: any) {
        throw error
    }
}

export async function getItemsByCategory(categoryName: string): Promise<any[]> {
    try {
        const collectionRef = collection(db, "productos")
        const categoryQuery = query(collectionRef, where("categoria", "==", categoryName))
        const snapshot = await getDocs(categoryQuery)
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return products
    } catch (error: any) {
        throw error
    }
}

export async function getItemById(productId: string): Promise<any> {
    try {
        const itemRef = doc(db, "productos", productId)
        const snapshot = await getDoc(itemRef)
        const product = { id: snapshot.id, ...snapshot.data() }
        return product
    } catch (error: any) {
        throw error
    }
}

export async function postItem(producto: any) {
    try {
        const collectionRef = collection(db, "productos")
        await addDoc(collectionRef, producto)
    } catch (error: any) {
        throw error
    }
}