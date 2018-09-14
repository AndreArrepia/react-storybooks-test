import { Provider } from "react-fela";
import { createRenderer } from "fela";
import LayoutContainer from "../src/components/containers/LayoutContainer";

const Index = () => {
  const renderer = createRenderer();
  const menus = [
    {
      itemName: "Main",
      subItems: [
        {
          title: "About",
          link: "/about"
        },
        {
          title: "Hello Next JS",
          link: "/about"
        }
      ]
    },
    { itemName: "Item 2" },
    { itemName: "Item 3" }
  ];

  return (
    <div>
      <Provider renderer={renderer}>
        <LayoutContainer title="First App" menus={menus}>
          <p>Index Page Mon!</p>
        </LayoutContainer>
      </Provider>
    </div>
  );
};

export default Index;
