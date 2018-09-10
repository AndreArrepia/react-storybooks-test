import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Menu.css";

class Menu extends Component {
  constructor() {
    super();
    this.buildMenus = this.buildMenus.bind(this);
  }

  buildMenus(items) {
    return items.map((singleItem, index) => (
      <li key={index}> {singleItem.itemName} </li>
    ));
  }

  render() {
    return (
      <header className="Menu">
        <h1>{this.props.title}</h1>
        {this.props.menus &&
          this.props.menus.length > 0 && (
            <ul>{this.buildMenus(this.props.menus)}</ul>
          )}
      </header>
    );
  }
}

Menu.defaultProps = {
  title: "Hello World",
  menus: []
};

Menu.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array
};

export default Menu;
