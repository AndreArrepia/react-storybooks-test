import React, { Component } from "react";
import PropTypes from "prop-types";
import { createComponent } from "react-fela";
import Submenus from "./Submenus";

class Menu extends Component {
  constructor() {
    super();

    this.buildMenus = this.buildMenus.bind(this);
    this.changeMenuState = this.changeMenuState.bind(this);
  }

  /*componentWillMount() {
    console.log("Will mount again 1");
  }

  componentWillUpdate() {
    console.log("UPDATED 1");
  }

  componentDidMount() {
    console.log("Did mount 1");
  }

  componentWillUnmount() {
    console.log("Unmounted 1");
  }
*/

  changeMenuState(evt) {
    let categoryName = evt.target.textContent;
    let subMenustoRender = [];
    this.props.menus.map(item => {
      if (item.itemName === categoryName) {
        subMenustoRender = item.subItems;
      }
    });

    this.props.changeMenuState(categoryName);
  }

  buildMenus(items) {
    return items.map((singleItem, index) => {
      let result = null;
      if (singleItem.subItems && singleItem.subItems.length > 0) {
        result = (
          <li key={index} onClick={evt => this.changeMenuState(evt)}>
            {singleItem.itemName}
          </li>
        );
      } else {
        result = (
          <a key={index} onClick={() => console.log("Whooooopi")}>
            {singleItem.itemName}
          </a>
        );
      }
      return result;
    });
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

      "> .Menu-Shadow-Wrappper": {
        display: "flex",
        width: "100%",
        boxShadow: "0 3px 3px -3px black",
        position: "relative",
        zIndex: "11",

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
          },

          "> a": {
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
        }
      },

      "> .Submenus-wrapper": {
        display: "block",
        width: "100%",
        background: "red",
        height: "0px",
        transition: "height 0.5s ease-in-out 0.5s",

        "> ul": {
          visibility: "hidden",
          opacity: "0",
          transition: "visibility 0.5s ease-in-out, opacity 0.5s ease-in-out"
        },

        "&.Open": {
          height: "300px",
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
    const isMenuHovered = this.props.hovered;
    let subMenustoRender = [];
    let categoryName = this.props.categoryName;

    if (categoryName) {
      this.props.menus.map(item => {
        if (item.itemName === categoryName && item.subItems) {
          subMenustoRender = item.subItems;
        }
      });
    }

    return (
      <Header className="Menu">
        <div className="Menu-Shadow-Wrappper">
          <h1>{this.props.title}</h1>
          {this.props.menus &&
            this.props.menus.length > 0 && (
              <nav>
                <ul>{this.buildMenus(this.props.menus)}</ul>
              </nav>
            )}
        </div>
        {subMenustoRender &&
          subMenustoRender.length > 0 && (
            <Submenus
              subMenustoRender={subMenustoRender}
              hovered={isMenuHovered}
            />
          )}
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
