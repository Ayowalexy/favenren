import { useContext, createContext, useState } from "react";

const NavigationContext = createContext({
    active: '',
    setActive: () => null
});


export const NavigationContextProvider = ({children}) => {
    const [active, setActive] = useState("Dashboard");
    const value = { active, setActive };

    return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export const useNavigation = () => useContext(NavigationContext)