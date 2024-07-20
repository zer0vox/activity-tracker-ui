import { Accordion, Card, Form, Button } from "react-bootstrap";
import Input from "../components/input";
import SubActivity from "../components/subActivity";

import Notify from "../components/Notify";
const Home = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <h1 className="text-center">Activity Tracker</h1>
      </div>
      <div className="row">
        <Card className="shadow p-3 mb-5 bg-white rounded overflow-auto">
          <Card.Body>
            <Input placeholder="Add new Activity" />
            <Notify />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="d-flex align-items-center">
                    <Form.Check type="checkbox" className="me-5" />
                    <span>Activity number 1</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <SubActivity />
                  <SubActivity />
                  <SubActivity />
                  <div className="d-flex align-items-center">
                    <input placeholder="ENter subactivity" />
                    <Button variant="primary" className="ms-auto">
                      Submit
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
