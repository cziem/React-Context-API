import React from "react";
import Context from "../context/AppProvider";

export default () => (
  <Context.Consumer>
    {context =>
      context.open && (
        <main>
          <h3 className="display-5">Our New Buddie</h3>
        </main>
      )
    }
  </Context.Consumer>
);
