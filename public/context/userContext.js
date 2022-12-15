import { useContext, createContext, useState } from "react";


const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const value = { email, setEmail} 

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;
export const useUser = () => useContext(UserContext);