import { Alert } from "react-bootstrap";

const Notify = ({ variant = "danger", msg = "No msg set" }) => {
  return (
    <div>
      <Alert className="text-center" variant={variant}>
        {msg}
      </Alert>
    </div>
  );
};

export default Notify;
