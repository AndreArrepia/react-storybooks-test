import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "../presentation/menu/Menu";

class MenuContainer extends Component {
  constructor() {
    super();
    this.changeMenuState = this.changeMenuState.bind(this);

    this.state = {
      hovered: false,
      categoryName: undefined
    };
  }

  componentWillMount() {
    console.log("Will mount again");
  }

  componentWillUpdate() {
    console.log("UPDATED");
  }

  componentDidMount() {
    console.log("Did mount");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  changeMenuState(categoryName) {
    this.setState({
      hovered: !this.state.hovered,
      categoryName: !this.state.hovered === true ? categoryName : undefined
    });
  }

  render() {
    return (
      <Menu
        title={this.props.title}
        menus={this.props.menus}
        changeMenuState={this.changeMenuState}
        hovered={this.state.hovered}
        categoryName={this.state.categoryName}
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
