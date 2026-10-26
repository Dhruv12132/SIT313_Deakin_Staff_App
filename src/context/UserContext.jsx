import { createContext, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentuser: () => {}
});

export function UserProvider({ children }) {
    const [currentUser, setCurrentuser] = useState(null);

    const value = { currentUser, setCurrentuser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
