import dayjs from "dayjs";

export interface ISessionInfo {
    id: string;
    title: string;
    date: dayjs.Dayjs;
    attendance: string;
    description: string;
    status: "Finalizado" | "En Curso" | "Proximamente";
    recordingLink: string;
    /**
     * ! Type 1: Finalizado,
     * ! Type 2: En Curso,
     * ! Type 3: Proximamente
     */
    type: 1 | 2 | 3;
}
