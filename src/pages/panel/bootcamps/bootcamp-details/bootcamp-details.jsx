import React, { useContext } from "react";
import { pageContext } from "../../../../contexts/panel-page-indexer";
import {
  Accordion,
  Button,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { CoursesInfo } from "../../../../contexts/user-info";
import { Session } from "../../../../components/session-card";
import { FaGoogleDrive, FaLink } from "react-icons/fa";

function BootcampDetails() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("void");
  return (
    <div>
      <h1 className="fw-bold" style={{ fontSize: "30px" }}>
        Desarrollo Web Full Stack
      </h1>
      <p className="fw-bold">...</p>
      <h2 className="fw-bold mt-4" style={{ fontSize: "24px" }}>
        Desarrollo del bootcamp
      </h2>
      <Container fluid className="w-100 h-100 p-0" style={{ gap: "1.25rem" }}>
        <Row className={"m-0"} style={{ gap: "1.25rem" }}>
          <Col sm={7} className="" style={{ gap: "1.25rem" }}>
            <Accordion
              className="d-flex flex-column"
              style={{ gap: "1.25rem" }}
            >
              {CoursesInfo.map((session) => {
                return <Session key={session.id} session={session} />;
              })}
            </Accordion>
          </Col>
          <Col>
            <div className="d-flex flex-column" style={{ gap: "1.5rem " }}>
              <ListGroup
                variant="flush"
                className="border rounded p-4 text-body"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <h5>Recursos: </h5>
                <ListGroup.Item
                  as={Button}
                  className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center"
                >
                  <FaGoogleDrive /> Kit del programador <FaLink />
                </ListGroup.Item>
                <ListGroup.Item
                  as={Button}
                  className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center"
                >
                  <FaGoogleDrive /> Actividades estudiantes <FaLink />
                </ListGroup.Item>
                <ListGroup.Item
                  as={Button}
                  className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center"
                >
                  <FaGoogleDrive /> Material de clase <FaLink />
                </ListGroup.Item>
                <ListGroup.Item
                  as={Button}
                  className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center"
                >
                  <FaGoogleDrive /> Contenido Temático <FaLink />
                </ListGroup.Item>
                <ListGroup.Item
                  as={Button}
                  className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center"
                >
                  <FaGoogleDrive /> Tutorías componente técnico <FaLink />
                </ListGroup.Item>
              </ListGroup>
              <ListGroup
                variant="flush"
                className="border rounded p-4 text-body"
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <h5>Foros: </h5>
                <ListGroup.Item
                  as={Button}
                  className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center flex-column"
                >
                  <span style={{ textAlign: "start", fontSize: "14px" }}>
                    Foro de presentacion y conocimiento de los miembros del
                    grupo
                  </span>
                  <small
                    className="text-warning text-start w-100"
                    style={{ textAlign: "start", fontSize: "11.4px" }}
                  >
                    En discusion
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BootcampDetails;
