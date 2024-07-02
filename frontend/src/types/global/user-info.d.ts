import { IBootcamp } from "./bootcamp-info";

export interface IUserInformation {
  name: string;
  email: string;
  avatarlink: string;
  userPoints: number;
  bootcamps: IBootcamp[];
}
