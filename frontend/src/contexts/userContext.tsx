import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

import { IAPIUserInformation } from "../../../types/api-json-types";
import { getSessionUser } from "../services/api/api";

type userContextType = {
    currentUserInformation: IAPIUserInformation | undefined;
    setCurrentUserInformation: Dispatch<
        SetStateAction<IAPIUserInformation | undefined>
    >;
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
    const [currentUserInformation, setCurrentUserInformation] = useState<
        IAPIUserInformation | undefined
    >();
    async function updateCurrentUserInformation() {
        const userInfo = await getSessionUser();
        setCurrentUserInformation(userInfo);
    }
    return (
        <UserContext.Provider
            value={{
                currentUserInformation,
                setCurrentUserInformation,
                updateCurrentUserInformation,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
