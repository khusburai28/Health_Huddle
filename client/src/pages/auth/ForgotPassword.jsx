import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../assets/Forgot password.svg";
import NavigationBar from "../../components/NavigationBar";
import { useUserAuth } from "../../contexts/UserAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
  };

  return (
    <>
      <NavigationBar />
      <div className="custom-login-box">
        <Container style={{ paddingTop: 5 }}>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12} className="forgot-pass-form">
              <div className="custom-login-card-border"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                    Health Huddle
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <img src={login} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
