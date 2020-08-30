import React from "react";
import { Row, Col, Button, Form } from "reactstrap";
import FormControl from "./FormControl";

class Login extends React.Component {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  validate = () => {
    const { data } = this.state;
    const errors = {};
    if (data.username === "") errors.username = "User can not be empty";
    if (data.password === "") errors.password = "Password can not be empty";
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log(this.state.data);
      this.setState({
        data: {
          username: "",
          password: "",
        },
        errors: {},
      });
    } else {
      this.setState({
        errors,
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      data: { ...this.state.data,
             [e.target.id]: e.target.value 
            },
      errors: { ...this.state.errors, 
                [e.target.id]: "" 
              },
    });
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <Row>
          <Col md={4}>
            <Form onSubmit={this.handleSubmit}>
              <FormControl
                label="Username"
                type="text"
                value={data.username}
                handleChange={this.handleChange}
                error={errors.username}
              ></FormControl>
              <FormControl
                label="Password"
                type="password"
                value={data.password}
                handleChange={this.handleChange}
                error={errors.password}
              ></FormControl>
              <Button color="primary">Login</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Login;
