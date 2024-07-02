import { ListGroup } from "react-bootstrap";
import { FaGoogleDrive, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TableBootcampLinkExterno } from "../../../../../../types/database-types";

function ResourcesButton({
  resourceInfo,
  resourceKey,
}: {
  resourceInfo: Omit<TableBootcampLinkExterno, "id_bootcamp" | "id_grupo">;
  resourceKey: number;
}) {
  return (
    <ListGroup.Item
      key={resourceInfo + "-" + resourceKey}
      as={Link}
      className="bg-secondary-subtle d-flex justify-content-between align-items-center rounded border text-center transition hover:scale-105 active:scale-105 max-md:!text-wrap md:text-nowrap"
      to={resourceInfo.link}
    >
      <FaGoogleDrive className="me-2" />
      {resourceInfo.texto}
      <FaLink className="ms-2" />
    </ListGroup.Item>
  );
}

export default ResourcesButton;
