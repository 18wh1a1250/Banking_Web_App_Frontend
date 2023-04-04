import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { FormGroup, Form } from "reactstrap";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import { Col, Row } from "reactstrap";
import { Container } from "reactstrap";
import Base from "../components/Base";
import { customerLogin } from "../services/customer-service";
import { doLogin } from "../authentication";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import regImage from "./regImg.jpg";

const Login = () => {
  const userContextData = useContext(userContext);
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      // actual object with updated value
      ...loginDetail, // details will be taken here, if any change
      [field]: actualValue, // will be updated here
    });
  };
  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password is required!");
      return;
    }
    // submit the data to server to generate the token
    customerLogin(loginDetail)
      .then((data) => {
        // we will get successful jwt token
        console.log("Customer Login: ");
        console.log(data); // jwtTokenData is an obj where the token is stored.
        //save the data to localStorage
        doLogin(data, () => {
          console.log("Login Detail is saved to local storage");
          // redirect to user dashboard page
          console.log(data);
          userContextData.setUser({
            data: data,
            login: true,
          });
          navigate("/customer/dashboard");
        });
        toast.success("Login Successful!"); // jwt token will be generated
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on the server!");
        }
      });
  };
  return (
    <Base>
      <div
        style={{
          backgroundImage: `url(${regImage})`,
          marginTop: "-25px",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="mt-4">
            <Col
              sm={{
                size: 6,
                offset: 3,
              }}
            >
              <Card color="dark" outline="true">
                <CardHeader>
                  <h3 className="text-center">Login</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                      <label for="mobileno">Phone Number </label>
                      <Input
                        type="text"
                        placeholder="Enter Your Mobile Number"
                        id="mobileno"
                        value={loginDetail.username}
                        onChange={(e) => handleChange(e, "username")}
                      />
                    </FormGroup>
                    <FormGroup>
                      <label for="password"> Password </label>
                      <Input
                        type="password"
                        placeholder="Enter Correct Password"
                        id="password"
                        value={loginDetail.password}
                        onChange={(e) => handleChange(e, "password")}
                      />
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="success"> Login </Button>
                      <Button
                        onClick={handleReset}
                        className="ms-2"
                        color="success"
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
export default Login;
