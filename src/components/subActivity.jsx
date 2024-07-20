import { FaTrash } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import { update } from "../services/subActivities";
const SubActivity = ({ data }) => {
  const handleUpdate = async () => {
    const { _id, isCompleted } = data;
    const payload = {
      isCompleted: !isCompleted,
    };
    await update(_id, payload);
  };

  return (
    <div className="d-flex align-items-center">
      <Form.Check
        type="checkbox"
        className="me-2"
        onChange={() => handleUpdate(data)}
      />
      <span className="mx-2">{data?.name}</span>
      <Button variant="danger" className="ms-auto">
        <FaTrash />
      </Button>
    </div>
  );
};

export default SubActivity;
