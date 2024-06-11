import { useContext, useEffect, useState } from "react";

import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { BsTrophyFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import {
    MdLogout,
    MdOutlineMenuBook,
    MdOutlineQuestionMark,
} from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { RiBug2Fill } from "react-icons/ri";
import { TbBriefcase2Filled } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

import { themeContext } from "../../contexts/change-theme";
import { UserInformation } from "../../contexts/user-info";

function PanelIndex() {
    const { toggleTheme, ThemeIcon } = useContext(themeContext);

    const [navStatus, changeNavStatus] = useState(false);
    useEffect(() => {
        const navPanel = document.getElementById("navPanel");
        const navPanelFixer = document.getElementById("navPanelFixer");
        const navMobileBackground = document.getElementById(
            "navMobileBackground",
        );
        if (navStatus) {
            navPanel?.classList.add("hide");
            navPanelFixer?.classList.add("hide");
            navPanel?.classList.remove("ps-2");
            navMobileBackground?.classList.remove(
                "max-lg:z-40",
                "max-lg:bg-gray-950",
            );
        } else {
            navPanel?.classList.remove("hide");
            navPanelFixer?.classList.remove("hide");
            navPanel?.classList.add("ps-2");
            navMobileBackground?.classList.add(
                "max-lg:z-40",
                "max-lg:bg-gray-950",
            );
        }
    }, [navStatus]);
    function hideNavinMobile() {
        const mediaQuery = "(max-width: 768px)"; // Puedes ajustar este valor según tus necesidades
        if (window.matchMedia(mediaQuery).matches) {
            changeNavStatus(true);
        }
    }
    return (
        <Container fluid>
            <Row>
                <div
                    className="fixed -z-50 h-full w-full !bg-opacity-40 transition max-lg:z-40 max-lg:bg-gray-950"
                    id="navMobileBackground"
                    onClick={() => {
                        changeNavStatus(!navStatus);
                    }}
                ></div>
                <div
                    className="navpanel m-0 !w-80 p-0 max-lg:hidden"
                    id="navPanelFixer"
                ></div>
                <div
                    className="vh-100 navpanel-animate fixed z-50 !w-80 p-0 py-2 ps-2"
                    id="navPanel"
                >
                    <div className="h-100 d-flex flex-column bg-body rounded p-1">
                        <div>
                            <div className="d-flex flex-row rounded p-2 text-center shadow-sm">
                                <Image
                                    src={UserInformation.avatarlink}
                                    width={48}
                                />
                                <div className="ms-3 overflow-hidden">
                                    <p
                                        style={{ fontSize: "18px" }}
                                        className="fw-bold text-nowarp mb-0 mt-2 overflow-hidden text-start"
                                    >
                                        {UserInformation.name.toUpperCase()}
                                    </p>
                                    <p
                                        style={{ fontSize: "14px" }}
                                        className="text-nowarp m-0 overflow-hidden text-start"
                                    >
                                        {UserInformation.email}
                                    </p>
                                    <span
                                        className="badge badge-success badge-outline d-flex text-success items-center gap-2"
                                        style={{
                                            width: "fit-content",
                                            marginTop: "5px",
                                        }}
                                    >
                                        <BsTrophyFill
                                            style={{ color: "gold" }}
                                        />
                                        {UserInformation.userPoints}
                                    </span>
                                </div>
                            </div>
                            <hr style={{ margin: "10px" }} />
                            <ListGroup
                                variant="flush"
                                className="h-75 gap-2 rounded p-2 shadow-sm"
                            >
                                <ListGroup.Item
                                    className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/"
                                    action
                                    id="btn-main"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
                                >
                                    <PiHouseFill /> <span>Inicio</span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/bootcamps"
                                    action
                                    id="btn-bootcamps"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
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
                                    className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/hackatons"
                                    action
                                    id="btn-hackatons"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
                                >
                                    <RiBug2Fill />
                                    <span>Hackathons</span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/jobs"
                                    action
                                    id="btn-jobs"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
                                >
                                    <TbBriefcase2Filled />
                                    <span>Job Connections</span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/marketplace"
                                    action
                                    id="btn-marketplace"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
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
                                    className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/user-manual"
                                    action
                                    id="btn-user-manual"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
                                >
                                    <MdOutlineMenuBook />
                                    <span>Manual de Usuario</span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className="btn btn-outline-primary d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                    as={Link}
                                    to="/panel/faq"
                                    action
                                    id="btn-faq"
                                    onClick={() => {
                                        hideNavinMobile();
                                    }}
                                >
                                    <MdOutlineQuestionMark />
                                    <span>Preguntas frecuentes</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="w-100 d-flex mt-auto rounded p-2 shadow-sm">
                            <Button
                                variant="outline-danger"
                                className="w-100 d-flex align-items-center text-start text-xs"
                            >
                                <MdLogout className="me-2" />
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
                </div>
                <Col className="vh-100 p-0">
                    <div className="h-100 d-flex flex-column rounded px-2">
                        <div className="bg-blue w-100 d-flex justify-content-between align-items-center mt-2 h-16 flex-row rounded lg:h-28">
                            <p
                                className="fs-4 mb-0 cursor-pointer ps-4 text-white"
                                onClick={() => changeNavStatus(!navStatus)}
                            >
                                <HiMenuAlt2 />
                            </p>
                            <Image
                                src="https://talentotechbogota.co/images/logo_talento.svg"
                                className="h-9 lg:h-24"
                            />
                            <Image
                                src="https://campus.talentotechbogota.co/assets/icons/tec-presidencia.svg"
                                className="h-6 pe-5 lg:h-9"
                            />
                        </div>
                        <div className="h-100 w-100 overflow-y-auto p-10 max-md:p-2">
                            <Outlet />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PanelIndex;
