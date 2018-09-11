import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "../presentation/menu/Menu";

class MenuContainer extends Component {
  constructor() {
    super();
    this.changeMenuState = this.changeMenuState.bind(this);

    this.state = {
      hovered: false
    };
  }

  changeMenuState() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    return (
      <Menu
        menus={[
          { itemName: "Item 1" },
          { itemName: "Item 2" },
          { itemName: "Item 3" }
        ]}
        changeMenuState={this.changeMenuState}
        hovered={this.state.hovered}
      />
    );
  }
}

MenuContainer.defaultProps = {
  title: "Hello World",
  menus: []
};

MenuContainer.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array
};

export default MenuContainer;
