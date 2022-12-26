import { useContext, createContext, useState } from "react";


const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [cryptoData, setCryptoData] = useState({});
    const [page, setPage] = useState({
        name: '',
        description: ''
    })
    const value = { email, setEmail, cryptoData, setCryptoData, page, setPage} 

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;
export const useUser = () => useContext(UserContext);