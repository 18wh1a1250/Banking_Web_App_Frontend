import { useEffect, useState } from "react";
import { withdraw } from "../services/customer-service";
import { Row, Col, FormFeedback } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form } from "reactstrap";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import { Container } from "reactstrap";
import Base from "../components/Base";
import { toast } from "react-toastify";

const Withdraw = () => {
  const [data, setData] = useState({
    acctID: " ",
    amount: " ",
  });
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const resetData = () => {
    setData({
      acctID: " ",
      amount: " ",
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    if (data.acctID.trim() == "" || data.amount.trim() == "") {
      toast.error("Please Enter account ID and amount ");
      return;
    }
    if (error.isError) {
      toast.error("Form data is invalid!!");
      return;
    }
    withdraw(data)
      .then((resp) => {
        console.log(resp);
        console.log("success");
        toast.success("Transaction successful");
        setData({
          acctID: " ",
          amount: " ",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <Base>
      <Container style={{ paddingTop: 10 }}>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline="true">
              <CardHeader>
                <h2 className="text-center">Withdraw Amount</h2>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <label for="acctID">Account ID </label>
                    <Input
                      type="text"
                      placeholder="Enter the account Id"
                      id="acctID"
                      name="acctID"
                      onChange={(e) => handleChange(e, "acctID")}
                      value={data.acctID}
                      invalid={
                        error.errors?.response?.data?.acctID ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.acctID}    
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <label for="amount"> Amount </label>
                    <Input
                      type="text"
                      placeholder="Enter the amount"
                      id="amount"
                      name="amount"
                      onChange={(e) => handleChange(e, "amount")}
                      value={data.amount}
                      invalid={
                        error.errors?.response?.data?.amount ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.amount}
                    </FormFeedback>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="success">Withdraw</Button>
                    <Button
                      onClick={resetData}
                      color="success"
                      type="Reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Withdraw;
