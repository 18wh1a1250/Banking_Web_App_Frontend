import { useEffect, useState } from "react";
import { registration } from "../services/customer-service";
import { Row, Col, FormFeedback } from "reactstrap";
import { Button } from "reactstrap";
import { FormGroup, Form } from "reactstrap";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import { Container } from "reactstrap";
import Base from "../components/Base";
import { toast } from "react-toastify";
import regImage from "./regImg.jpg";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    accountNo: "",
    acctID: "",
    ifscCode: "",
    mobileno: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
  });
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  const resetData = () => {
    setData({
      name: "",
      accountNo: "",
      acctID: "",
      ifscCode: "",
      mobileno: "",
      email: "",
      password: "",
      city: "",
      state: "",
      country: "",
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    // var alphaExp = /^[a-zA-Z]+$/;

    if (error.isError) {
      if (
        data.name.trim() == "" ||
        data.accountNo.trim() == "" ||
        data.acctID.trim() == "" ||
        data.ifscCode.trim() == "" ||
        data.mobileno.trim() == "" ||
        data.email.trim() == "" ||
        data.password.trim() == ""
      ) {
        toast.error("Form cannot be empty ");
        return;
      }
      // if (!data.name.match(alphaExp)) {
      //   toast.error("please enter alphabets only");
      // }
      toast.error("Form data is invalid!!");
      return;
    }
    registration(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success(
          "User is registered successfully, user Id :" + resp.customerId
        );
        setData({
          name: "",
          accountNo: "",
          acctID: "",
          ifscCode: "",
          mobileno: "",
          email: "",
          password: "",
          city: "",
          state: "",
          country: "",
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
      <div
        style={{
          backgroundImage: `url(${regImage})`,
          marginTop: "-25px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" outline="true">
                <CardHeader>
                  <h2 className="text-center">Register</h2>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={submitForm}>
                    <FormGroup>
                      <label for="name">Full Name </label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                        onChange={(e) => handleChange(e, "name")}
                        value={data.name}
                        invalid={
                          error.errors?.response?.data?.name ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.name}    
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="accountNo"> Account Number </label>
                      <Input
                        type="text"
                        placeholder="Enter Your Account Number"
                        id="accountNo"
                        onChange={(e) => handleChange(e, "accountNo")}
                        value={data.accountNo}
                        invalid={
                          error.errors?.response?.data?.accountNo ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.accountNo}
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="acctID">Account ID </label>
                      <Input
                        type="text"
                        placeholder="Enter your account id"
                        id="acctID"
                        onChange={(e) => handleChange(e, "acctID")}
                        value={data.acctID}
                        invalid={
                          error.errors?.response?.data?.acctID ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.acctID}  
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                      <label for="ifscCode"> IFSC Code </label>
                      <Input
                        type="text"
                        placeholder="Enter Your IFSC Code"
                        id="ifscCode"
                        onChange={(e) => handleChange(e, "ifscCode")}
                        value={data.ifscCode}
                        invalid={
                          error.errors?.response?.data?.ifscCode ? true : false
                        }
                        // invalid="true" -> for validation we can use this.
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.ifscCode}      {" "}
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="email"> Email </label>
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        id="email"
                        onChange={(e) => handleChange(e, "email")}
                        value={data.email}
                        invalid={
                          error.errors?.response?.data?.email ? true : false
                        }
                        // invalid="true" -> for validation we can use this.
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.email}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="password"> Password </label>
                      <Input
                        type="password"
                        placeholder="Enter Strong Password"
                        id="password"
                        onChange={(e) => handleChange(e, "password")}
                        value={data.password}
                        invalid={
                          error.errors?.response?.data?.password ? true : false
                        }
                        // invalid="true" -> for validation we can use this.
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.password}    
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="mobileno"> Phone Number </label>
                      <Input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        id="mobileno"
                        onChange={(e) => handleChange(e, "mobileno")}
                        value={data.mobileno}
                        invalid={
                          error.errors?.response?.data?.mobileno ? true : false
                        }
                        // invalid="true" -> for validation we can use this.
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.mobileno}  
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="city">City</label>
                      <Input
                        type="text"
                        placeholder="Enter your city"
                        id="city"
                        onChange={(e) => handleChange(e, "city")}
                        value={data.city}
                        invalid={
                          error.errors?.response?.data?.city ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.city}
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="state">State </label>
                      <Input
                        type="text"
                        placeholder="Enter your state"
                        id="state"
                        onChange={(e) => handleChange(e, "state")}
                        value={data.state}
                        invalid={
                          error.errors?.response?.data?.state ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.state}      {" "}
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <label for="acctID">Country </label>
                      <Input
                        type="text"
                        placeholder="Enter your contry"
                        id="country"
                        onChange={(e) => handleChange(e, "country")}
                        value={data.country}
                        invalid={
                          error.errors?.response?.data?.country ? true : false
                        }
                      />
                      <FormFeedback>
                        {error.errors?.response?.data?.country}      {" "}
                        {/* displays error msg under the filled if not filled */}
                      </FormFeedback>
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="success">Register</Button>
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
      </div>
    </Base>
  );
};
export default Registration;
