import { IAPIUserInformation } from "../../../../types/api-json-types";
import { apiUri } from "../../config/global-config";

export async function getSessionUser(): Promise<IAPIUserInformation> {
    const response = await fetch(`${apiUri}/sessionUser`, {
        method: "GET",
        credentials: "include",
    });
    if (!response.ok)
        throw new Error(
            "Error trying get user information!! " +
                response.statusText +
                response.status,
        );
    const userInformation: IAPIUserInformation = await response.json();
    return userInformation;
}

export async function logOutSession(): Promise<void> {
    const response = await fetch(`${apiUri}/logout`, {
        method: "POST",
        credentials: "include"
    });
    if (!response.ok)
        throw new Error(
            "Error trying logout!! " +
                response.statusText +
                response.status,
        );
    return;
}