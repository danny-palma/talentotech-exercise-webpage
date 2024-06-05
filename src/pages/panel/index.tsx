import { useContext, useEffect, useState } from "react";

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

import { themeContext } from "../../contexts/change-theme";
import { UserInformation } from "../../contexts/user-info";

function PanelIndex() {
    const { toggleTheme, ThemeIcon } = useContext(themeContext);

    const [navStatus, changeNavStatus] = useState(false);
    useEffect(() => {
        const navPanel = document.getElementById("navPanel");
        if (navStatus) {
            navPanel?.classList.add("hide");
        } else {
            navPanel?.classList.remove("hide");
        }
    }, [navStatus]);
    return (
        <Container fluid>
            <Row>
                <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={4}
                    sm={1} 
                    xs={1}
                    className="vh-100 navpanel"
                    id="navPanel"
                    style={{ padding: "8px 0px 8px 8px" }}
                >
                    <div className="p-3 h-100 d-flex flex-column rounded">
                        <div>
                            <div className="text-center d-flex flex-row p-2">
                                <Image
                                    src={UserInformation.avatarlink}
                                    width={48}
                                />
                                <div className="ms-3 overflow-hidden">
                                    <p
                                        style={{ fontSize: "18px" }}
                                        className="mt-2 mb-0 text-start fw-bold overflow-hidden text-nowarp"
                                    >
                                        {UserInformation.name.toUpperCase()}
                                    </p>
                                    <p
                                        style={{ fontSize: "14px" }}
                                        className="m-0 text-start overflow-hidden text-nowarp"
                                    >
                                        {UserInformation.email}
                                    </p>
                                    <span
                                        className="badge badge-success badge-outline d-flex gap-2 items-center text-success"
                                        style={{
                                            width: "fit-content",
                                            marginTop: "5px",
                                        }}
                                    >
                                        <BsTrophyFill
                                            style={{ color: "gold" }}
                                        />{" "}
                                        {UserInformation.userPoints}
                                    </span>
                                </div>
                            </div>
                            <hr style={{ margin: "10px" }} />
                            <ListGroup
                                variant="flush"
                                className="h-75 gap-2 p-2"
                            >
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
                                <hr
                                    style={{
                                        margin: "0px",
                                        marginBottom: ".5rem",
                                        marginRight: "10px",
                                        marginLeft: "10px",
                                    }}
                                />
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
                                <hr
                                    style={{
                                        margin: "0px",
                                        marginBottom: ".5rem",
                                        marginRight: "10px",
                                        marginLeft: "10px",
                                    }}
                                />
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
                        <div className="mt-auto w-100 p-2 d-flex">
                            <Button
                                variant="outline-danger"
                                className="w-100 text-start d-flex align-items-center"
                                style={{ fontSize: "14px" }}
                            >
                                <MdLogout style={{ marginRight: "10px" }} />{" "}
                                Cerrar Sesión
                            </Button>
                            <Button
                                onClick={() => toggleTheme()}
                                variant="outline-info"
                                className="mx-2"
                            >
                                {ThemeIcon}
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="p-0 vh-100">
                    <div className="h-100 d-flex flex-column rounded px-2">
                        <div className="h-20 bg-blue w-100 d-flex flex-row rounded justify-content-between align-items-center mt-2">
                            <p
                                className="fs-4 text-white ps-4 cursor-pointer"
                                onClick={() => changeNavStatus(!navStatus)}
                            >
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
                        <div className="h-100 w-100 p-10 overflow-y-auto">
                            <Outlet />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PanelIndex;
