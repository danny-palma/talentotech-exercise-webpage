import { TextField, IconButton } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Container, Row, Col } from "react-bootstrap";
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

function Chat() {
    const classes = useStyles();
    return (
        <>
            <Container fluid className="h-100 d-flex flex-column">
                <Row className="flex-1">
                    <Col>
                        <div className={classes.chatContainer}>
                            <div className={classes.messageWrapper}>
                                <p className="mb-1 text-xs">Usuario</p>
                                Mensaje del otro usuario
                            </div>
                            <div className={classes.ownMessageWrapper}>
                                <p className="mb-1 text-xs">Daniel Palma</p>
                                Mi mensaje
                            </div>
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
                    <Col xs="auto" className="d-flex items-center">
                        <IconButton className="">
                            <IoSend />
                        </IconButton>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Chat;
