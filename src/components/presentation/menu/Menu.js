import React, { Component } from "react";
import PropTypes from "prop-types";
import { createComponent } from "react-fela";

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
    const rule = () => ({
      display: "flex",
      width: "100%",
      height: "80px",
      padding: "10px 15px",
      backgroundColor: "red",
      alignItems: "center",
      boxSizing: "border-box",

      "> h1": {
        textTransform: "uppercase",
        color: "white"
      },

      "> ul": {
        listStyleType: "none",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        flex: "1",
        height: "100%",
        marginTop: "0",
        marginBottom: "0",

        "> li": {
          color: "white",
          cursor: "pointer",
          padding: "0 20px",
          borderRadius: "6px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          textTransform: "uppercase",
          fontFamily: "Arial Balck, Courier, monospace",
          transition: "background 0.5s ease-in-out, color 0.5s ease-in-out",

          ":hover": {
            background: "white",
            color: "red"
          },

          "@media only screen and (max-width: 767px)": {
            display: "none"
          }
        }
      }
    });

    const Header = createComponent(rule, "header");

    return (
      <Header className="Menu">
        <h1>{this.props.title}</h1>
        {this.props.menus &&
          this.props.menus.length > 0 && (
            <ul>{this.buildMenus(this.props.menus)}</ul>
          )}
      </Header>
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
