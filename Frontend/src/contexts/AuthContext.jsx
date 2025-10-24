import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (userInfo) => {
        try {
            
        } catch (error) {
            
        }
    }
}