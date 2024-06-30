import { useContext } from "react";

import { Col, Container, ListGroup, Row } from "react-bootstrap";

import { pageContext } from "../../../../contexts/panelPageContext";
import { UserInformation } from "../../../../contexts/user-info";

import Chat from "./chat/chat";
import Forums from "./forums/forums";
import ResourcesButton from "./resources-button";
import SessionSelector from "./session-selector/session-selector";


function BootcampDetails() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("void");
    return (
        <div>
            <h1 className="fw-bold text-3xl">Desarrollo Web Full Stack</h1>
            <p className="fw-bold">...</p>
            <h2 className="fw-bold text-2xl">Desarrollo del bootcamp</h2>
            <Container fluid className="w-100 h-100 p-0">
                <Row className="m-0">
                    <Col className="fluid grid flex-wrap gap-3 lg:flex">
                        <ListGroup
                            variant="flush"
                            className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
                        >
                            <SessionSelector />
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
                        >
                            <Chat />
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
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
                                },
                            )}
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
                        >
                            <h5>Tutorias de ingles: </h5>
                            {UserInformation.bootcamps[0].EnglishSessions.map(
                                (resourceInfo, index) => {
                                    return (
                                        <ResourcesButton
                                            resourceInfo={resourceInfo}
                                            resourceKey={index}
                                            key={index}
                                        />
                                    );
                                },
                            )}
                        </ListGroup>
                        <ListGroup
                            variant="flush"
                            className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
                        >
                            <Forums />
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BootcampDetails;
