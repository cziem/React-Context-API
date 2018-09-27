import React from "react";

const { Provider, Consumer } = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    // set state here!!!
  };
  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>;
  }
}

export { Consumer, ThemeProvider };
