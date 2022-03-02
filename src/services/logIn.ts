import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"

export async function adminCheck(adminEmail: string | null | undefined) {
    try {
        if (adminEmail === undefined) {
            return false
        }
        const collectionRef = collection(db, "admins")
        const authQuery = query(collectionRef, where("email", "==", adminEmail))
        const snapshot = await getDocs(authQuery)
        const admin = snapshot.docs.map((doc) => (doc.data()))
        if (admin.length === 0) {
            return false
        } else {
            return true
        }
    } catch (error: any) {
        throw error
    }
}