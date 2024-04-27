import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";

function MyContainer() {
  return (
    <Container fluid className="bg-dark d-flex text-white px-4 justify-content-start">
        <h2 className="mb-4">TV Shows</h2>
      <DropdownButton title="Genres" id="dropdown-basic" variant="black text-white ms-4 mt-1">
        <Dropdown.Item eventKey="1">Comedy</Dropdown.Item>
        <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
        <Dropdown.Item eventKey="3">Thriller</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
}

export default MyContainer;
