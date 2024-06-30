import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import { BsTrophyFill } from "react-icons/bs";
import { FaBookmark, FaCalculator } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import {
    MdAdminPanelSettings,
    MdLogout,
    MdOutlineMenuBook,
    MdOutlineQuestionMark,
} from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { RiBug2Fill } from "react-icons/ri";
import { TbBriefcase2Filled } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { themeContext } from "../../contexts/change-theme";
import { UserInformation } from "../../contexts/user-info";

const drawerWidth = 240;

function PanelIndex() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isClosingDrawer, setIsClosingDrawer] = useState(false);
    const { toggleTheme, ThemeIcon } = useContext(themeContext);
    const Navigate = useNavigate();
    const handleDrawerClose = () => {
        setIsClosingDrawer(true);
        setDrawerOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosingDrawer(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosingDrawer) {
            setDrawerOpen(!drawerOpen);
        }
    };

    return (
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    position: "fixed",
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <div className="h-100 d-flex flex-column bg-body rounded p-1">
                    <div className="d-flex flex-row rounded p-2 text-center shadow-sm">
                        <Image src={UserInformation.avatarlink} width={48} />
                        <div className="ms-3 overflow-hidden">
                            <p
                                style={{ fontSize: "12px" }}
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
                                <BsTrophyFill style={{ color: "gold" }} />
                                {UserInformation.userPoints}
                            </span>
                        </div>
                    </div>
                    <hr style={{ margin: "10px" }} />
                    <ListGroup
                        variant="flush"
                        className="h-75 gap-2 overflow-y-auto rounded p-2 shadow-sm"
                    >
                        <ListGroup.Item
                            className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                            as={Link}
                            to="/panel"
                            action
                            id="btn-main"
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                        >
                            <PiHouseFill /> <span>Inicio</span>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                            as={Link}
                            to="/panel/admin"
                            action
                            id="btn-admin"
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                        >
                            <MdAdminPanelSettings /> <span>Administrador</span>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                            as={Link}
                            to="/panel/bootcamps"
                            action
                            id="btn-bootcamps"
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                        >
                            <FaBookmark /> <span>Bootcamps</span>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                            as={Link}
                            to="/panel/califica"
                            action
                            id="btn-califica"
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                        >
                            <FaCalculator /> <span>Calificaciones</span>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                            as={Link}
                            to="/panel/asistencia"
                            action
                            id="btn-asistencia"
                            onClick={() => {
                                setDrawerOpen(false);
                            }}
                        >
                            <FaCalculator /> <span>Asistencia</span>
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
                                setDrawerOpen(false);
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
                                setDrawerOpen(false);
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
                                setDrawerOpen(false);
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
                                setDrawerOpen(false);
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
                                setDrawerOpen(false);
                            }}
                        >
                            <MdOutlineQuestionMark />
                            <span>Preguntas frecuentes</span>
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="w-100 d-flex mt-auto rounded p-2 shadow-sm">
                        <Button
                            variant="outline-danger"
                            className="w-100 d-flex align-items-center text-start text-xs"
                            onClick={() => Navigate("/login")}
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
            </Drawer>
            <Box
                sx={{
                    flexGrow: 1,
                    flex: 1,
                    p: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                }}
            >
                <div className="h-100 w-100 flex flex-col rounded px-2">
                    <div className="bg-blue d-flex justify-content-between align-items-center mt-2 h-16 w-full flex-row rounded lg:h-28">
                        <p
                            className="fs-4 mb-0 cursor-pointer ps-4 text-white"
                            onClick={() => handleDrawerToggle()}
                        >
                            <HiMenuAlt2 />
                        </p>
                        <img
                            src="https://talentotechbogota.co/images/logo_talento.svg"
                            className="h-9 lg:h-24"
                        />
                        <img
                            src="https://campus.talentotechbogota.co/assets/icons/tec-presidencia.svg"
                            className="h-6 pe-5 lg:h-9"
                        />
                    </div>
                    <div className="w-100 flex flex-1 h-fit !overflow-auto p-10 max-md:p-2">
                        <Outlet />
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default PanelIndex;
