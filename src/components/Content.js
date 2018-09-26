import React from "react";
import Context from "../context/AppProvider";
import Forms from "./forms/Forms";
import { Container, Row, Col } from "reactstrap";

export default () => (
  <Context.Consumer>
    {context =>
      context.open && (
        <main>
          <h3 className="display-5">Our New Buddie</h3>
          <h4>Context API</h4>

          <Container>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Forms />
              </Col>
            </Row>
          </Container>
        </main>
      )
    }
  </Context.Consumer>
);
