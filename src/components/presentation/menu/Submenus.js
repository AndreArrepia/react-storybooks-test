import React, { Component } from "react";
import PropTypes from "prop-types";
import { createComponent } from "react-fela";

class Submenus extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.hovered === true) {
      setTimeout(() => {
        document.querySelector(".Submenus-wrapper").classList.add("Open");
      }, 100);
    } else {
      document.querySelector(".Submenus-wrapper").classList.add("Open");
      setTimeout(() => {
        document.querySelector(".Submenus-wrapper").classList.remove("Open");
      }, 100);
    }
  }

  render() {
    return (
      <div className="Submenus-wrapper">
        <ul>
          <li>Submenu 1</li>
          <li>Submenu 2</li>
          <li>Submenu 3</li>
          <li>Submenu 4</li>
        </ul>
      </div>
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
