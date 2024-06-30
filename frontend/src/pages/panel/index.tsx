import { useContext, useState, Fragment as ReactFragment } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Image, ListGroup } from "react-bootstrap";
import { BsTrophyFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { MdAdminPanelSettings, MdLogout, MdOutlineMenuBook, MdOutlineQuestionMark } from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { RiBug2Fill } from "react-icons/ri";
import { TbBriefcase2Filled } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { themeContext } from "../../contexts/themeContext";
import { UserInformation } from "../../contexts/user-info";

type LinkInformation = {
    to: string;
    text: string;
    icon: IconType;
    id: string;
    addSeparator: boolean;
    userPermissionsNeeded: number;
};

const LinksInfo: LinkInformation[] = [
    {
        id: "btn-main",
        to: "/panel",
        icon: PiHouseFill,
        text: "Inicio",
        addSeparator: false,
        userPermissionsNeeded: 0,
    },
    {
        to: "/panel/admin",
        text: "Administrador",
        icon: MdAdminPanelSettings,
        id: "btn-admin",
        addSeparator: false,
        userPermissionsNeeded: 9,
    },
    {
        to: "/panel/bootcamps",
        text: "Bootcamps",
        icon: FaBookmark,
        id: "btn-bootcamps",
        addSeparator: true,
        userPermissionsNeeded: 1,
    },
    {
        to: "/panel/hackatons",
        text: "Hackathons",
        icon: RiBug2Fill,
        id: "btn-hackatons",
        addSeparator: false,
        userPermissionsNeeded: 1,
    },
    {
        to: "/panel/jobs",
        text: "Job Connections",
        icon: TbBriefcase2Filled,
        id: "btn-jobs",
        addSeparator: false,
        userPermissionsNeeded: 1,
    },
    {
        to: "/panel/marketplace",
        text: "Marketplace",
        icon: IoMdCart,
        id: "btn-marketplace",
        addSeparator: true,
        userPermissionsNeeded: 1,
    },
    {
        to: "/panel/user-manual",
        text: "Manual de Usuario",
        icon: MdOutlineMenuBook,
        id: "btn-user-manual",
        addSeparator: false,
        userPermissionsNeeded: 1,
    },
    {
        to: "/panel/faq",
        text: "Preguntas frecuentes",
        icon: MdOutlineQuestionMark,
        id: "btn-faq",
        addSeparator: false,
        userPermissionsNeeded: 1,
    },
];

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
                        {LinksInfo.map((linkInfo, index) => {
                            return (
                                <ReactFragment key={index}>
                                    <ListGroup.Item
                                        className="d-flex align-items-center menu-item h-9 transform rounded border-0 transition hover:scale-105 active:scale-105"
                                        as={Link}
                                        to={linkInfo.to}
                                        action
                                        id={linkInfo.id}
                                        onClick={() => {
                                            setDrawerOpen(false);
                                        }}
                                    >
                                        <linkInfo.icon />
                                        <span>{linkInfo.text}</span>
                                    </ListGroup.Item>
                                    {linkInfo.addSeparator && (
                                        <hr
                                            style={{
                                                margin: "0px",
                                                marginBottom: ".5rem",
                                                marginRight: "10px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    )}
                                </ReactFragment>
                            );
                        })}
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
                    <div className="w-100 flex h-fit flex-1 !overflow-auto p-10 max-md:p-2">
                        <Outlet />
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default PanelIndex;