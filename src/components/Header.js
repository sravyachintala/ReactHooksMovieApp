import React from "react";
import '../App.css';

const Header = props => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
