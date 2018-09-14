import React, { Component } from "react";
import PropTypes from "prop-types";
import { createComponent } from "react-fela";
import Link from "next/link";

class Submenus extends Component {
  constructor() {
    super();

    this.state = {
      localState: false
    };

    this.buildSubMenus = this.buildSubMenus.bind(this);
  }

  componentWillMount() {
    console.log("Will mount again 2");
  }

  componentDidMount() {
    if (this.props.hovered === true) {
      setTimeout(() => {
        document.querySelector(".Submenus-wrapper").classList.add("Open");
      }, 0);
    } else {
      document.querySelector(".Submenus-wrapper").classList.add("Open");
      setTimeout(() => {
        document.querySelector(".Submenus-wrapper").classList.remove("Open");
      }, 0);
    }
  }

  componentWillUpdate() {
    console.log("UPDATED 2");
  }

  componentWillUnmount() {
    console.log("Unmounted 2");
  }

  buildSubMenus(subMenu, key) {
    return (
      <Link href={`${subMenu.link}`}>
        <li key={key}>{subMenu.title}</li>
      </Link>
    );
  }

  render() {
    const rule = () => ({
      zIndex: "1",
      "> ul": {
        listStyleType: "none",
        color: "white",
        borderRight: "1px solid white",
        margin: "10px 0",
        maxWidth: "25vh",
        height: "calc(100% - 20px)",

        "> li": {
          textTransform: "uppercase",
          padding: "20px 0",
          cursor: "pointer"
        }
      }
    });

    const SubMenuWrapper = createComponent(rule, "div");

    return (
      <SubMenuWrapper className="Submenus-wrapper">
        <ul>
          {this.props.subMenustoRender.map((singleSubMenu, index) =>
            this.buildSubMenus(singleSubMenu, index)
          )}
        </ul>
      </SubMenuWrapper>
    );
  }
}

Submenus.defaultProps = {
  hovered: false
};

Submenus.propTypes = {
  hovered: PropTypes.bool
};

export default Submenus;
