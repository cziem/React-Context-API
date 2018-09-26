import React from "react";
import { Row, Col, Form, Button, FormGroup, Label, Input } from "reactstrap";

import Context from "../../context/AppProvider";

export default () => (
  <Context.Consumer>
    {context => (
      <Form onSubmit={context.handleSubmit} className="form_el">
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input
                type="username"
                name="username"
                placeholder="Fayvor George"
                onChange={context.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                name="email"
                placeholder="example@abc.com"
                onChange={context.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                name="password"
                onChange={context.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Button size="lg">Login</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )}
  </Context.Consumer>
);
