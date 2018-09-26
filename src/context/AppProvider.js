import React from "react";

const Context = React.createContext();

export class AppProvider extends React.Component {
  state = {
    name: "Fayvor George",
    tech: "React's Context API"
  };
  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
