import { ISessionInfo } from "./bootcamp-session-info";
import { IExternalLink } from "./external-links-info";

export interface IBootcamp {
  id: string;
  name: string;
  description: string;
  resources: IExternalLink[];
  EnglishSessions: IExternalLink[];
  CoursesInfo: ISessionInfo[];
}
