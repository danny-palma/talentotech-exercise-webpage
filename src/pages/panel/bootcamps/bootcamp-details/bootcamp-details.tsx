import { useContext } from "react";
import { pageContext } from "../../../../contexts/panel-page-indexer";
import {
    Accordion,
    Button,
    Col,
    Container,
    ListGroup,
    Row,
} from "react-bootstrap";
import DateCalendar from "../../../../components/calendar-mui";
import { Session } from "../../../../components/session-card";
import { UserInformation } from "../../../../contexts/user-info";
import ResourcesButton from "./resources-button";
import { TextField, IconButton } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { IoSend } from "react-icons/io5";

// Estilos personalizados para los mensajes del chat
const useStyles = makeStyles((theme: Theme) => ({
    chatContainer: {
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
    },
    messageWrapper: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
        borderRadius: "8px",
        maxWidth: "70%",
        alignSelf: "flex-start",
        color: theme.palette.text.primary, // El color del texto sigue el tema actual
        backgroundColor: theme.palette.background.default,
    },
    ownMessageWrapper: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
        borderRadius: "8px",
        maxWidth: "70%",
        alignSelf: "flex-end",
        color: theme.palette.text.primary, // El color del texto sigue el tema actual
        backgroundColor: theme.palette.background.paper,
    },
}));
function BootcampDetails() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("void");
    const classes = useStyles();
    return (
        <div>
            <h1 className="fw-bold" style={{ fontSize: "30px" }}>
                Desarrollo Web Full Stack
            </h1>
            <p className="fw-bold">...</p>
            <h2 className="fw-bold mt-4" style={{ fontSize: "24px" }}>
                Desarrollo del bootcamp
            </h2>
            <Container
                fluid
                className="w-100 h-100 p-0"
                style={{ gap: "1.25rem" }}
            >
                <Row className="m-0">
                    <Col
                        className="d-flex fluid flex-wrap"
                        style={{ gap: "1.5rem " }}
                    >
                        <ListGroup
                            variant="flush"
                            className="border rounded p-4 text-body d-flex flex-column"
                            style={{ gap: "8px" }}
                        >
                            <h5>
                                <strong>Sesiones: </strong>
                            </h5>
                            <DateCalendar />
                            <Accordion
                                className="d-flex flex-column"
                                style={{ gap: "1.25rem" }}
                            >
                                <Session
                                    session={
                                        UserInformation.bootcamps[0]
                                            .CoursesInfo[0]
                                    }
                                />
                            </Accordion>
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="border rounded p-4 text-body d-flex flex-column"
                            style={{ gap: "8px", height: "34rem" }}
                        >
                            <Container
                                fluid
                                className="h-100 d-flex flex-column"
                            >
                                <Row style={{ flex: "1" }}>
                                    <Col>
                                        <div className={classes.chatContainer}>
                                            {/* Ejemplo de mensajes de chat */}
                                            <div
                                                className={
                                                    classes.messageWrapper
                                                }
                                            >
                                                <p
                                                    style={{
                                                        fontSize: "10px",
                                                        marginBottom: "5px",
                                                    }}
                                                >
                                                    Usuario
                                                </p>
                                                Mensaje del otro usuario
                                            </div>
                                            <div
                                                className={
                                                    classes.ownMessageWrapper
                                                }
                                            >
                                                <p
                                                    style={{
                                                        fontSize: "10px",
                                                        marginBottom: "5px",
                                                    }}
                                                >
                                                    Daniel Palma
                                                </p>
                                                Mi mensaje
                                            </div>
                                            {/* Fin del ejemplo de mensajes de chat */}
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <TextField
                                            fullWidth
                                            placeholder="Escribe un mensaje"
                                            variant="outlined"
                                        />
                                    </Col>
                                    <Col xs="auto" className="d-flex ">
                                        <IconButton>
                                            <IoSend />
                                        </IconButton>
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="border rounded p-4 text-body d-flex flex-column"
                            style={{ gap: "8px" }}
                        >
                            <h5>Recursos: </h5>
                            {UserInformation.bootcamps[0].resources.map(
                                (resourceInfo, index) => {
                                    return (
                                        <ResourcesButton
                                            resourceKey={index}
                                            resourceInfo={resourceInfo}
                                            key={index}
                                        />
                                    );
                                }
                            )}
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="border rounded p-4 text-body d-flex flex-column"
                            style={{ gap: "8px" }}
                        >
                            <h5>Tutorias de ingles: </h5>
                            {UserInformation.bootcamps[0].englishClases.map(
                                (resourceInfo, index) => {
                                    return (
                                        <ResourcesButton
                                            resourceInfo={resourceInfo}
                                            resourceKey={index}
                                            key={index}
                                        />
                                    );
                                }
                            )}
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="border rounded p-4 text-body"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <h5>Foros: </h5>
                            <ListGroup.Item
                                as={Button}
                                className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center flex-column"
                            >
                                <span
                                    style={{
                                        textAlign: "start",
                                        fontSize: "14px",
                                    }}
                                >
                                    Foro de presentacion y conocimiento de los
                                    miembros del grupo
                                </span>
                                <small
                                    className="text-warning text-start w-100"
                                    style={{
                                        textAlign: "start",
                                        fontSize: "11.4px",
                                    }}
                                >
                                    En discusion
                                </small>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BootcampDetails;
