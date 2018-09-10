import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-fela";
import { createRenderer } from "fela";
import Menu from "./components/presentation/menu/Menu";

class App extends Component {
  render() {
    const renderer = createRenderer();

    return (
      <Provider renderer={renderer}>
        <Menu
          title="First App"
          menus={[
            { itemName: "Item 1" },
            { itemName: "Item 2" },
            { itemName: "Item 3" }
          ]}
        />
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div> */}
      </Provider>
    );
  }
}

export default App;
