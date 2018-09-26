import React from "react";

const Context = React.createContext();

export class AppProvider extends React.Component {
  state = {
    name: "Fayvor George",
    tech: "React's Context API",
    open: false,
    isLoggedIn: false,
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  toggleOpen = () => {
    this.setState(prev => ({
      open: !prev.open
    }));
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleOpen: this.toggleOpen,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
