import { useContext, createContext, useState } from "react";


const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [cryptoData, setCryptoData] = useState({})
    const value = { email, setEmail, cryptoData, setCryptoData} 

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;
export const useUser = () => useContext(UserContext);