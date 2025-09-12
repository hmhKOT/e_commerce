import AdminLayout from "../dashboard/layouts/AdminLayout";

const DashboardRouter = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      //   { index: true, element: <Dashboard /> },
      //   { path: "users", element: <Users /> },
    ],
  },
];

export default DashboardRouter;
