import WebLayout from "../web/layouts/WebLayout";
import Home from "../web/pages/Home";
import Everything from "./pages/Everything";
const WebRouter = [
  {
    path: "/",
    element: <WebLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Everything /> },
    ],
  },
];

export default WebRouter;
