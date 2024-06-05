import { ListGroup } from "react-bootstrap";
import { FaGoogleDrive, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { englishClases } from "../../../../contexts/user-info";

function ResourcesButton({
    resourceInfo,
    resourceKey,
}: {
    resourceInfo: (typeof englishClases)[0];
    resourceKey: number;
}) {
    return (
        <ListGroup.Item
            key={resourceInfo + "-" + resourceKey}
            as={Link}
            className="rounded border bg-secondary-subtle d-flex justify-content-between align-items-center text-start text-nowrap"
            to={resourceInfo.link}
        >
            <FaGoogleDrive className="me-2" />
            {resourceInfo.description}
            <FaLink className="ms-2" />
        </ListGroup.Item>
    );
}

export default ResourcesButton;
