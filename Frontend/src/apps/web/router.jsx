import WebLayout from "../web/layouts/WebLayout";
import Home from "../web/pages/Home";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
const WebRouter = [
  {
    path: "/",
    element: <WebLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
    ],
  },
];

export default WebRouter;
