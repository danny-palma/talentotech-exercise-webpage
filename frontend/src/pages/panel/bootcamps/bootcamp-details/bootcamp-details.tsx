import { useContext } from "react";

import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { RiAdminFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";

import { pageContext } from "../../../../contexts/panelPageContext";
import { useUserContext } from "../../../../contexts/userContext";

import Chat from "./chat/chat";
import Forums from "./forums/forums";
import ResourcesButton from "./resources-button";
import SessionSelector from "./session-selector/session-selector";

function BootcampDetails() {
  const { id } = useParams();
  const { SetPageState } = useContext(pageContext);
  const { currentUserInformation } = useUserContext();
  const navigate = useNavigate();
  if (!currentUserInformation) return;
  const currentBootcamp = currentUserInformation?.bootcamps.find(
    (bootcamp) => bootcamp.id == id,
  );
  if (!currentBootcamp) {
    navigate("/panel/bootcamps");
    return;
  }
  SetPageState("void");
  return (
    <div>
      <h1 className="fw-bold text-3xl">{currentBootcamp.titulo}</h1>
      <p className="fw-bold">{currentBootcamp.descripcion}</p>
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
            {currentBootcamp.externalLinks.map((externalLinkGroup) => {
              return (
                <ListGroup
                  variant="flush"
                  className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
                >
                  <h5>{externalLinkGroup.nombreGrupo}</h5>
                  {externalLinkGroup.links.map((resourceInfo, index) => {
                    return (
                      <ResourcesButton
                        resourceKey={index}
                        resourceInfo={resourceInfo}
                        key={index}
                      />
                    );
                  })}
                </ListGroup>
              );
            })}
            {currentUserInformation.nivel_permisos >= 9 ? (
              <>
                <ListGroup
                  variant="flush"
                  className="text-body d-flex flex-column flex-1 gap-2 rounded border p-4 transition-shadow hover:shadow md:flex-initial"
                >
                  <h5>Opciones Administrativas</h5>
                  <ListGroup.Item
                    key={1}
                    as={Link}
                    className="bg-secondary-subtle d-flex justify-content-center align-items-center rounded border text-center transition hover:scale-105 active:scale-105 max-md:!text-wrap md:text-nowrap"
                    to={`/panel/bootcamps/${currentBootcamp.id}/admin-sesiones`}
                  >
                    <RiAdminFill className="me-2" />
                    Opciones Sesiones
                  </ListGroup.Item>
                  <ListGroup.Item
                    key={2}
                    as={Link}
                    className="bg-secondary-subtle d-flex justify-content-center align-items-center rounded border text-center transition hover:scale-105 active:scale-105 max-md:!text-wrap md:text-nowrap"
                    to={`/panel/bootcamps/${currentBootcamp.id}/admin-usuarios`}
                  >
                    <RiAdminFill className="me-2" />
                    Opciones Usuarios
                  </ListGroup.Item>
                  <ListGroup.Item
                    key={3}
                    as={Link}
                    className="bg-secondary-subtle d-flex justify-content-center align-items-center rounded border text-center transition hover:scale-105 active:scale-105 max-md:!text-wrap md:text-nowrap"
                    to={`/panel/bootcamps/${currentBootcamp.id}/admin-asistencias`}
                  >
                    <RiAdminFill className="me-2" />
                    Opciones Asistencias
                  </ListGroup.Item>
                </ListGroup>
              </>
            ) : undefined}
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
