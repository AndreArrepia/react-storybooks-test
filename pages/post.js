import { withRouter } from "next/router";
import LayoutContainer from "../src/components/containers/LayoutContainer";
import { Provider } from "react-fela";
import { createRenderer } from "fela";

const Post = withRouter(props => {
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
    {
      itemName: "About",
      subItems: [
        {
          title: "About",
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
        <LayoutContainer title="Post" menus={menus}>
          <h1>{props.router.query.title}</h1>
          <p>This is the blog post content.</p>
        </LayoutContainer>
      </Provider>
    </div>
  );
});

export default Post;
