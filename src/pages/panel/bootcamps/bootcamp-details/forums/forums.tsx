import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Forums() {
    return (
        <>
            <h5>Foros: </h5>
            <ListGroup.Item
                as={Link}
                className="bg-secondary-subtle d-flex justify-content-between align-items-center flex-column rounded border transition hover:scale-105 active:scale-105"
                to={""}
            >
                <span className="text-start text-sm">
                    Foro de presentacion y conocimiento de los miembros del
                    grupo
                </span>
                <small className="text-warning w-100 text-start text-xs">
                    En discusion
                </small>
            </ListGroup.Item>
        </>
    );
}

export default Forums;
