// Link.react.test.js
import React from "react";
import Menu from "./Menu";
import renderer from "react-test-renderer";
import { Provider } from "react-fela";
import { createRenderer } from "fela";

test("Menu Renders Without title and Menu Items", () => {
  const rendererProvider = createRenderer();
  const component = renderer.create(
    <Provider renderer={rendererProvider}>
      <Menu />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders with title and without Menu Items", () => {
  const rendererProvider = createRenderer();
  const component = renderer.create(
    <Provider renderer={rendererProvider}>
      <Menu title="Custom title" />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders without title and with Menu Items", () => {
  const rendererProvider = createRenderer();
  const component = renderer.create(
    <Provider renderer={rendererProvider}>
      <Menu
        menus={[
          { itemName: "Item 1" },
          { itemName: "Item 2" },
          { itemName: "Item 3" }
        ]}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders with title and Menu Items", () => {
  const rendererProvider = createRenderer();
  const component = renderer.create(
    <Provider renderer={rendererProvider}>
      <Menu
        title="Custom title"
        menus={[
          { itemName: "Item 1" },
          { itemName: "Item 2" },
          { itemName: "Item 3" }
        ]}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Menu Renders with title and Menu Items and SubItems", () => {
  const rendererProvider = createRenderer();
  const component = renderer.create(
    <Provider renderer={rendererProvider}>
      <Menu
        title="Custom title"
        menus={[
          {
            itemName: "Item 1",
            subItems: [
              {
                title: "Sneakers",
                link: "/sneakers"
              },
              {
                title: "Boots",
                link: "/boots"
              },
              {
                title: "Pumps",
                link: "/pumps"
              }
            ]
          },
          { itemName: "Item 2" },
          { itemName: "Item 3" }
        ]}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
