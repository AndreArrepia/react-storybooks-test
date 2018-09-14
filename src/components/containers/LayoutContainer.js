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
        <MenuContainer
          title="First App"
          menus={[
            {
              itemName: "Main",
              subItems: [
                {
                  title: "About",
                  link: "/about"
                }
              ]
            },
            { itemName: "Item 2" },
            { itemName: "Item 3" }
          ]}
        />
        {this.props.element}
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
