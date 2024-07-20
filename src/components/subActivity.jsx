import { FaTrash } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";

const SubActivity = () => {
  return (
    <div className="d-flex align-items-center">
      <Form.Check type="checkbox" className="me-2" />
      <span className="mx-2">Sub Activity 1</span>
      <Button variant="danger" className="ms-auto">
        <FaTrash />
      </Button>
    </div>
  );
};

export default SubActivity;
