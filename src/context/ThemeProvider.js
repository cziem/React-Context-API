import React from "react";
import { Themes } from "../themes/ThemeStyles";
const { Provider, Consumer } = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    ligth: Themes.ligth,
    dark: Themes.dark
  };

  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>;
  }
}

export { Consumer, ThemeProvider };
