import React from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function PanelIndex() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light vh-100" style={{ padding: "8px" }}>
          <div className="p-3 h-100">
            <div className="text-center mb-4 d-flex flex-row">
              <div className="d-inline-block p-3 text-white">
                <Image
                  src="https://ui-avatars.com/api/?rounded=true&name=DANIEL%20ALEJANDRO_PALMA%20GARC%C3%8DA"
                  width={50}
                />
              </div>
              <div>
                <p
                  style={{ fontSize: "18px" }}
                  className="mt-2 mb-0 text-start fw-bold"
                >
                  DANIEL ALEJANDRO PALMA GARCÍA
                </p>
                <p style={{ fontSize: "14px" }} className="m-0">
                  danielpalma2003@hotmail.com
                </p>
              </div>
            </div>
            <hr style={{ margin: "0px" }} />
            <ListGroup variant="flush" className="h-75 gap-2 p-2">
              <ListGroup.Item as={Link} to="/panel/" action>
                Inicio
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/panel/bootcamps" action>
                Bootcamps
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/panel/hackathons" action>
                <hr style={{ margin: "0px", marginBottom: ".5rem" }} />
                Hackathons
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/panel/job-connections" action>
                Job Connections
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/panel/marketplace" action>
                Marketplace
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/panel/user-manual" action>
                <hr style={{ margin: "0px", marginBottom: ".5rem" }} />
                Manual de Usuario
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/panel/faq" action>
                Preguntas frecuentes
              </ListGroup.Item>
            </ListGroup>
            <Button
              variant="outline-danger"
              className="mt-auto w-100 text-start"
            >
              Cerrar Sesión
            </Button>
          </div>
        </Col>
        <Col md={8} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default PanelIndex;
