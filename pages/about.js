import { Provider } from "react-fela";
import { createRenderer } from "fela";
import MenuContainer from "../src/components/containers/MenuContainer";

const About = () => {
  const renderer = createRenderer();
  return (
    <div>
      <Provider renderer={renderer}>
        <MenuContainer
          title="First App"
          menus={[
            {
              itemName: "Main",
              subItems: [
                {
                  title: "Index",
                  link: "/"
                }
              ]
            },
            { itemName: "Item 2" },
            { itemName: "Item 3" }
          ]}
        />
      </Provider>
      <p>This is the about page</p>
    </div>
  );
};

export default About;
