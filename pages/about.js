import { Provider } from "react-fela";
import { createRenderer } from "fela";
import LayoutContainer from "../src/components/containers/LayoutContainer";

const About = () => {
  const renderer = createRenderer();
  const menus = [
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
  ];

  return (
    <div>
      <div>
        <Provider renderer={renderer}>
          <LayoutContainer title="First App" menus={menus}>
            <p>About Page Mon!</p>
          </LayoutContainer>
        </Provider>
      </div>
    </div>
  );
};

export default About;
