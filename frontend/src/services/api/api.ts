import { IAPIUserInformation } from "../../../../types/api-json-types";
import { apiUri } from "../../config/global-config";

export async function getSessionUser(): Promise<IAPIUserInformation> {
  // fetch al servidor con la informacion de la peticion
  const response = await fetch(`${apiUri}/sessionUser`, {
    method: "GET",
    credentials: "include", // enviamos en la peticion las cookies
  });

  // Verificamos que la peticion este correcta
  if (!response.ok)
    throw new Error(
      "Error trying get user information!! " +
        response.statusText +
        response.status,
    );
  
  // esperamos la informacion en formato json 
  const userInformation: IAPIUserInformation = await response.json();

  //devolvemos como formato json
  return userInformation;
}

export async function logOutSession(): Promise<void> {
  const response = await fetch(`${apiUri}/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok)
    throw new Error(
      "Error trying logout!! " + response.statusText + response.status,
    );
  return;
}
