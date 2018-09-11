import React, { Component } from "react";
import PropTypes from "prop-types";
import { createComponent } from "react-fela";
import Submenus from "./Submenus";

class Menu extends Component {
  constructor() {
    super();
    this.buildMenus = this.buildMenus.bind(this);
    this.changeMenuState = this.changeMenuState.bind(this);

    this.state = {
      hovered: false,
      hoverAnime: undefined
    };
  }

  changeMenuState() {
    this.props.changeMenuState();
  }

  buildMenus(items) {
    return items.map((singleItem, index) => (
      <li key={index} onClick={() => this.changeMenuState()}>
        {singleItem.itemName}
      </li>
    ));
  }

  render() {
    const rule = () => ({
      display: "flex",
      width: "100%",
      height: "80px",
      padding: "0px",
      backgroundColor: "red",
      alignItems: "center",
      boxSizing: "border-box",
      flexWrap: "wrap",

      "> h1": {
        textTransform: "uppercase",
        color: "white",
        paddingLeft: "15px"
      },

      "> nav ul": {
        boxSizing: "border-box",
        listStyleType: "none",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        flex: "1 0 auto",
        height: "100%",
        marginTop: "0",
        marginBottom: "0",

        "> li": {
          color: "white",
          cursor: "pointer",
          padding: "0 20px",
          borderRadius: "6px",
          height: "60px",
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
      },

      "> .Submenus-wrapper": {
        display: "block",
        width: "100%",
        background: "yellow",
        height: "0px",
        transition: "height 0.5s ease-in-out 0.5s, background 0.5s ease-in-out",

        "> ul": {
          visibility: "hidden",
          opacity: "0",
          transition: "visibility 0.5s ease-in-out, opacity 0.5s ease-in-out"
        },

        "&.Open": {
          height: "300px",
          background: "blue",
          transition: "height 0.5s ease-in-out",

          "> ul": {
            opacity: "1",
            visibility: "visible",
            transition:
              "visibility 0.5s ease-in-out 0.5s, opacity 0.5s ease-in-out 0.5s"
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
            <nav>
              <ul>{this.buildMenus(this.props.menus)}</ul>
            </nav>
          )}
        <Submenus hovered={this.props.hovered} />
      </Header>
    );
  }
}

Menu.defaultProps = {
  title: "Hello World",
  menus: [],
  changeMenuState: () => console.log("hello")
};

Menu.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array,
  changeMenuState: PropTypes.func
};

export default Menu;
