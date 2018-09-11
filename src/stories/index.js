import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Provider } from "react-fela";
import { createRenderer } from "fela";

import { Button, Welcome } from "@storybook/react/demo";
import Menu from "../components/presentation/menu/Menu";
import MenuContainer from "../components/containers/MenuContainer";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Menu", module)
  .addDecorator(story => {
    const renderer = createRenderer();
    return <Provider renderer={renderer}>{story()}</Provider>;
  })
  .add("default", () => {
    return <Menu />;
  })
  .add("custom title", () => <Menu title="Custom title" />)
  .add("with menus", () => (
    <Menu
      menus={[
        { itemName: "Item 1" },
        { itemName: "Item 2" },
        { itemName: "Item 3" }
      ]}
    />
  ))
  .add("teste animatiopn", () => (
    <MenuContainer
      title="Custom title"
      menus={[
        { itemName: "Item 1" },
        { itemName: "Item 2" },
        { itemName: "Item 3" }
      ]}
    />
  ));
