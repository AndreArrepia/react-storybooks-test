import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Menu from "../components/presentation/menu/Menu";

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
  .add("default", () => <Menu />)
  .add("custom title", () => <Menu title="Custom title" />)
  .add("with menus", () => (
    <Menu
      menus={[
        { itemName: "Item 1" },
        { itemName: "Item 2" },
        { itemName: "Item 3" }
      ]}
    />
  ));
