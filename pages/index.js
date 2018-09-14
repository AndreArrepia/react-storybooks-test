import Link from "next/link";
import { Provider } from "react-fela";
import { createRenderer } from "fela";

//import MenuContainer from "../src/components/containers/MenuContainer";
import LayoutContainer from "../src/components/containers/LayoutContainer";

const Index = () => {
  const renderer = createRenderer();

  return (
    <div>
      <Provider renderer={renderer}>
        <LayoutContainer
        //   title="First App"
        //   menus={[
        //     {
        //       itemName: "Main",
        //       subItems: [
        //         {
        //           title: "About",
        //           link: "/about"
        //         }
        //       ]
        //     },
        //     { itemName: "Item 2" },
        //     { itemName: "Item 3" }
        //   ]}
        />
      </Provider>
      <p>Index Page Mon!</p>
    </div>
  );
};

export default Index;
