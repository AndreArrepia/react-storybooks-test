// Link.react.test.js
import React from "react";
import Menu from "./Menu";
import renderer from "react-test-renderer";

test("Menu Renders Without title and Menu Items", () => {
  const component = renderer.create(<Menu />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders with title and without Menu Items", () => {
  const component = renderer.create(<Menu title="Custom title" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders without title and with Menu Items", () => {
  const component = renderer.create(
    <Menu
      menus={[
        { itemName: "Item 1" },
        { itemName: "Item 2" },
        { itemName: "Item 3" }
      ]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders with title and Menu Items", () => {
  const component = renderer.create(
    <Menu
      title="Custom title"
      menus={[
        { itemName: "Item 1" },
        { itemName: "Item 2" },
        { itemName: "Item 3" }
      ]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
