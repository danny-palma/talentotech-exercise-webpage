/**
 * ! Type 1: Finalizado
 * ! Type 2: En Curso
 * ! Type 3: Proximamente
 */

import dayjs from "dayjs";
export const englishClases = [
    {
        link: "",
        description: "Consulta aquí los horarios y tematicas.",
    },
    {
        link: "",
        description: "Ingreso tutoría diurna (6 AM a 8 AM)",
    },
    {
        link: "",
        description: "Ingreso tutoría nocturna (6 PM a 8 PM)",
    },
    {
        link: "",
        description: "Consulta aquí las grabaciones de las tutorías.",
    },
];
export const CoursesInfo = [
    {
        id: "1",
        title: "Sesión 1",
        date: dayjs("2024-06-03 05:55"),
        attendance: "Asistencia marcada",
        description: "Descripción de la Sesión 1",
        status: "Finalizado",
        recordingLink: "#",
        type: 1,
    },
    {
        id: "2",
        title: "Sesión 2",
        date: dayjs("2024-06-04 05:55"),
        attendance: "",
        description: "",
        status: "En Curso",
        recordingLink: "#",
        type: 2,
    },
    {
        id: "3",
        title: "Sesión 3",
        date: dayjs("2024-06-05 05:55"),
        attendance: "Asistencia marcada",
        description: "Descripción de la Sesión 3",
        status: "Proximamente",
        recordingLink: "#",
        type: 3,
    },
    {
        id: "4",
        title: "Sesión 4",
        date: dayjs("2024-06-06 05:55"),
        attendance: "Asistencia marcada",
        description: "Descripción de la Sesión 4",
        status: "Proximamente",
        recordingLink: "#",
        type: 3,
    },
];

export const activeBootcamps = [
    {
        id: "bc8363f5-7491-43d6-939e-7b4efc1db459",
        name: "Desarrollo Web Full Stack",
        description: "...",
        resources: [
            {
                link: "",
                description: "Kit del programador",
            },
            {
                link: "",
                description: "Actividades estudiantes",
            },
            {
                link: "",
                description: "Material de clase",
            },
            {
                link: "",
                description: "Contenido tematico",
            },
            {
                link: "",
                description: "Tutorías componente técnico",
            },
        ],
        englishClases,
        CoursesInfo,
    },
];

export const UserInformation = {
    name: "Daniel Alejandro Palma Garcia",
    email: "danielpalma2003@hotmail.com",
    avatarlink:
        "https://ui-avatars.com/api/?rounded=true&name=DANIEL%20ALEJANDRO_PALMA%20GARC%C3%8DA",
    userPoints: 100,
    bootcamps: activeBootcamps,
};
