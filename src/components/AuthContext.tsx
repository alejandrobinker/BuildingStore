import { signInWithRedirect, User } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth, googleProvider } from "../firebase"
import { adminCheck } from "../services/logIn"

type ContextProps = {
    user: User | null
    logInWithGoogle: () => any
}
interface props {
    children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext<ContextProps>({} as ContextProps)

function AuthProvider({ children }: props) {

    const [user, setUser] = useState(() => auth.currentUser)

    const logInWithGoogle = () => {
        signInWithRedirect(auth, googleProvider)
    }

    useEffect(() => {
        const userChange = auth.onAuthStateChanged(async (user) => {
            if (await adminCheck(user?.email)) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        console.log(user)
        return userChange
    }, [])


    return (
        <AuthContext.Provider value={{ user, logInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider