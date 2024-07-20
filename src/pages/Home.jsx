import { Accordion, Card, Form, Button } from "react-bootstrap";
import Input from "../components/input";
import SubActivity from "../components/subActivity";
import { useState, useEffect } from "react";
import Notify from "../components/Notify";
import { getAll } from "../services/activities";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAll();
      const { data } = result;
      setData(data?.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row mt-2">
        <h1 className="text-center">Activity Tracker</h1>
      </div>
      <div className="row">
        <Card className="shadow p-3 mb-5 bg-white rounded overflow-auto">
          <Card.Body>
            <Input placeholder="Add new Activity" />
            <div className="m-3">
              {data.length > 0 ? (
                data.map((activity, index) => (
                  <Accordion key={index} defaultActiveKey={index}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <Form.Check
                            type="checkbox"
                            className="me-5"
                            checked={activity?.isCompleted}
                          />
                          <span>{activity?.name}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        {activity.subActivities &&
                        activity.subActivities.length > 0 ? (
                          activity.subActivities.map(
                            (subActivity, subIndex) => (
                              <SubActivity key={subIndex} data={subActivity} />
                            )
                          )
                        ) : (
                          <Notify msg="No subactivities" />
                        )}
                        <div className="d-flex align-items-center">
                          <input placeholder="Enter subactivity" />
                          <Button variant="primary" className="ms-auto">
                            Submit
                          </Button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))
              ) : (
                <Notify msg="No activities" />
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
