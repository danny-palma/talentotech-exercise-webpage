import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { IAPIUserInformation } from "../../../types/api-json-types";
import { getSessionUser } from "../services/api/api";

type userContextType = {
    user: IAPIUserInformation | undefined;
    setUser: Dispatch<SetStateAction<IAPIUserInformation | undefined>>;
    updateCurrentUserInformation: () => Promise<void>;
};

export const UserContext = createContext<userContextType | undefined>(
    undefined,
);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(
            "useUserContext debe ser usado dentro de un UserProvider",
        );
    }
    return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IAPIUserInformation | undefined>();
    async function updateCurrentUserInformation() {
        try {
            const userInfo = await getSessionUser();
            setUser(userInfo);
        } catch (error) {
            navigate("/login");
        }
    }
    return (
        <UserContext.Provider
            value={{ user, setUser, updateCurrentUserInformation }}
        >
            {children}
        </UserContext.Provider>
    );
};
