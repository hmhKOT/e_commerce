import WebLayout from "../web/layouts/WebLayout";
import Home from "../web/pages/Home";
import Everything from "../web/pages/Everything";
const WebRouter = [
  {
    path: "/",
    element: <WebLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "everything", element: <Everything /> },
    ],
  },
];

export default WebRouter;
