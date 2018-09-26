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
    password: "",
    error: {}
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

  validate = () => {
    const { username, email, password } = this.state;
    let error = {
      username: "",
      email: "",
      password: ""
    };
    let isValid = true;

    if (!username) {
      isValid = false;
      error.username = "Username cannot be empty";
    }

    if (!email) {
      isValid = false;
      error.email = "Email cannot be empty";
    }

    if (!password) {
      isValid = false;
      error.password = "Password cannot be empty";
    }

    return error;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.validate) {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleOpen: this.toggleOpen,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
