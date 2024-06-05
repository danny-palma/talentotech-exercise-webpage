import { Accordion, Button, Card } from "react-bootstrap";
import { CoursesInfo } from "../contexts/user-info";

export const Session = ({ session }: { session: typeof CoursesInfo[0] }) => {
  return (
      <Card>
          <Accordion.Item eventKey={session.id} className="bg-transparent p-0">
              <Accordion.Header
                  as={Card.Header}
                  className="bg-transparent border p-0"
              >
                  <div className="d-flex justify-content-between w-100">
                      <div>
                          <h5>{session.title}</h5>
                          <p>{session.date.format("ddd, MMM D, YYYY")}</p>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-center me-2">
                          <span
                              className={`badge  ${
                                  session.status === "Finalizado"
                                      ? "bg-danger"
                                      : "bg-success"
                              }`}
                              style={{ height: "1.5rem" }}
                          >
                              {session.status}
                          </span>
                      </div>
                  </div>
              </Accordion.Header>
              <Accordion.Collapse eventKey={session.id}>
                  <Card.Body>
                      <p>
                          <strong>Horario de la sesión:</strong>{" "}
                          {session.date.format("dddd, MMMM D, YYYY h:mm A")}
                      </p>
                      <p>
                          <strong>Asistencia:</strong>{" "}
                          <span className="text-success">
                              {session.attendance}
                          </span>
                      </p>
                      <p>
                          <strong>Descripción:</strong> {session.description}
                      </p>
                      {session.status === "Finalizado" && (
                          <Button
                              variant="primary"
                              href={session.recordingLink}
                          >
                              Ingresar a la grabación
                          </Button>
                      )}
                  </Card.Body>
              </Accordion.Collapse>
          </Accordion.Item>
      </Card>
  );
};
