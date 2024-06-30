import { IAPIUserInformation } from "../../../../types/api-json-types";
import { apiUri } from "../../config/global-config";

export async function getSessionUser(): Promise<IAPIUserInformation> {
    const response = await fetch(`${apiUri}/sessionUser`, {
        method: "get",
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
