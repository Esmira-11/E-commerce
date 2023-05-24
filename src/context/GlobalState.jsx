import { createContext,useState} from "react";

export const GlobalContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("backet") || '[]')
const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || '[]')
const isloginFromLocalStorage = JSON.parse(localStorage.getItem("islogin" || '[]'))

export const GlobalProvider = (props) => {

    const [selectedProduct, setselectedProduct] = useState(cartFromLocalStorage)
    const [user, setuser] = useState(userFromLocalStorage)
    const [islogin,setislogin] = useState(isloginFromLocalStorage)

    return (
        <GlobalContext.Provider value={{selectedProduct,setselectedProduct,user,setuser,islogin,setislogin}}>
            {props.children}
        </GlobalContext.Provider>
    )
}