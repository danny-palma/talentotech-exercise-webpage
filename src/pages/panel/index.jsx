import React from "react";

import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";

import { BsTrophyFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { PiHouseFill } from "react-icons/pi";
import { RiBug2Fill } from "react-icons/ri";
import { TbBriefcase2Filled } from "react-icons/tb";
import {
  MdLogout,
  MdOutlineMenuBook,
  MdOutlineQuestionMark,
} from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";

function PanelIndex() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="vh-100" style={{ padding: "8px" }}>
          <div className="p-3 h-100 d-flex flex-column bg-light rounded">
            <div>
              <div className="text-center d-flex flex-row p-2">
                <Image
                  src="https://ui-avatars.com/api/?rounded=true&name=DANIEL%20ALEJANDRO_PALMA%20GARC%C3%8DA"
                  width={48}
                  height={48}
                />
                <div className="ms-3">
                  <p
                    style={{ fontSize: "18px" }}
                    className="mt-2 mb-0 text-start fw-bold"
                  >
                    DANIEL ALEJANDRO PALMA GARCÍA
                  </p>
                  <p style={{ fontSize: "14px" }} className="m-0 text-start">
                    danielpalma2003@hotmail.com
                  </p>
                  <span
                    className="badge badge-success badge-outline d-flex gap-2 items-center text-success"
                    style={{ width: "fit-content" }}
                  >
                    <BsTrophyFill /> 0
                  </span>
                </div>
              </div>
              <hr style={{ margin: "0px" }} />
              <ListGroup variant="flush" className="h-75 gap-2 p-2">
                <ListGroup.Item
                  className="bg-blue border-0 rounded d-flex align-items-center h-1 text-white menu-item"
                  as={Link}
                  to="/panel/"
                  action
                  id="btn-main"
                >
                  <PiHouseFill /> <span>Inicio</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="bg-transparent border-0 rounded d-flex align-items-center h-1 menu-item"
                  as={Link}
                  to="/panel/bootcamps"
                  action
                  id="btn-bootcamps"
                >
                  <FaBookmark /> <span>Bootcamps</span>
                </ListGroup.Item>
                <hr style={{ margin: "0px", marginBottom: ".5rem" }} />
                <ListGroup.Item
                  className="bg-transparent border-0 rounded d-flex align-items-center h-1 menu-item"
                  as={Link}
                  to="/panel/hackatons"
                  action
                  id="btn-hackatons"
                >
                  <RiBug2Fill />
                  <span>Hackathons</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="bg-transparent border-0 rounded d-flex align-items-center h-1 menu-item"
                  as={Link}
                  to="/panel/jobs"
                  action
                  id="btn-jobs"
                >
                  <TbBriefcase2Filled />
                  <span>Job Connections</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="bg-transparent border-0 rounded d-flex align-items-center h-1 menu-item"
                  as={Link}
                  to="/panel/marketplace"
                  action
                  id="btn-marketplace"
                >
                  <IoMdCart />
                  <span>Marketplace</span>
                </ListGroup.Item>
                <hr style={{ margin: "0px", marginBottom: ".5rem" }} />
                <ListGroup.Item
                  className="bg-transparent border-0 rounded d-flex align-items-center h-1 menu-item"
                  as={Link}
                  to="/panel/user-manual"
                  action
                  id="btn-user-manual"
                >
                  <MdOutlineMenuBook />
                  <span>Manual de Usuario</span>
                </ListGroup.Item>
                <ListGroup.Item
                  className="bg-transparent border-0 rounded d-flex align-items-center h-1 menu-item"
                  as={Link}
                  to="/panel/faq"
                  action
                  id="btn-faq"
                >
                  <MdOutlineQuestionMark />
                  <span>Preguntas frecuentes</span>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="mt-auto w-100 p-2">
              <Button
                variant="outline-danger"
                className="w-100 text-start d-flex align-items-center"
                style={{ fontSize: "14px" }}
              >
                <MdLogout style={{ marginRight: "10px" }} /> Cerrar Sesión
              </Button>
            </div>
          </div>
        </Col>
        <Col md={9} className="p-0 vh-100 overflow-y-auto ">
          <div className="py-2 h-100 d-flex flex-column rounded">
            <div className="h-20 bg-blue w-100 d-flex flex-row rounded justify-content-between align-items-center py-2">
              <p className="fs-4 text-white ps-4 cursor-pointer">
                <HiMenuAlt2 />
              </p>
              <Image
                src="https://talentotechbogota.co/images/logo_talento.svg"
                height={95}
              />
              <Image
                src="https://campus.talentotechbogota.co/assets/icons/tec-presidencia.svg"
                height={36}
                className="pe-5"
              />
            </div>
            <div className="h-100 w-100 p-10">
              <Outlet />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PanelIndex;
