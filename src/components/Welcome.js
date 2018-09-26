import React from "react";
import { Row, Col } from "reactstrap";

import Context from "../context/AppProvider";

export default () => (
  <Context.Consumer>
    {context => (
      <Row>
        <Col md={6}>
          <p>
            Welcome {context.username}! We hope you'd have fun learning React's
            Context API.
          </p>
        </Col>
      </Row>
    )}
  </Context.Consumer>
);
