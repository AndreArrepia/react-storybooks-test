import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuContainer from "./MenuContainer";

class LayoutContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MenuContainer title={this.props.title} menus={this.props.menus} />
        {this.props.children}
      </div>
    );
  }
}

LayoutContainer.defaultProps = {
  element: undefined
};

LayoutContainer.propTypes = {
  element: PropTypes.element.isRequired
};

export default LayoutContainer;
