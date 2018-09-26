import React from "react";
import { Row, Col, Form, Button, FormGroup, Label, Input } from "reactstrap";

import Context from "../../context/AppProvider";
import FormElement from "./FormElement";
import Welcome from "../Welcome";

export default () => (
  <Context.Consumer>
    {context => (context.isLoggedIn ? <Welcome /> : <FormElement />)}
  </Context.Consumer>
);
