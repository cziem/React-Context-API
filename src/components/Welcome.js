import React from "react";
import { Row, Col } from "reactstrap";

import Context from "../context/AppProvider";

export default () => (
  <Context.Consumer>
    {context => (
      <Row>
        <Col md={6}>
          <p className="welcome">
            Welcome <span className="username">{context.username}!</span> <br />{" "}
            We hope you'd have fun learning React's Context API.
          </p>
        </Col>
      </Row>
    )}
  </Context.Consumer>
);
