import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { UserInformation } from "../../../types/api-json-types";

type userContextType = {
    user: UserInformation | undefined;
    setUser: Dispatch<SetStateAction<UserInformation | undefined>>;
};

export const UserContext = createContext<userContextType | undefined>(
    undefined,
);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useToast debe ser usado dentro de un UserProvider");
    }
    return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserInformation | undefined>();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
