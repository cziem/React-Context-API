import React from "react";
import Header from "./Header";
import Content from "./Content";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
