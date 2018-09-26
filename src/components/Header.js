import React from "react";
import Context from "../context/AppProvider";
import { Jumbotron, Button } from "reactstrap";

export default () => (
  <Context.Consumer>
    {context => (
      <Jumbotron className="jb">
        <h2 className="display-4">Learn {context.tech}</h2>

        <p className="lead">
          Managing state in a large scaled application can be very challenging.
          Redux comes to help.
        </p>

        <p>
          What if the application was not so complex, and redux wasn't really
          needed? <br />
          Or you perhaps have some kind phobia for redux?{" "}
        </p>

        <hr />

        <p>
          Dont worry, React's context API is here to help. My name is{" "}
          {context.name} at your service.
        </p>

        <Button size="lg" color="success">
          Get Context
        </Button>
      </Jumbotron>
    )}
  </Context.Consumer>
);
