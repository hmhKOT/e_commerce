import { createBrowserRouter } from "react-router-dom";
import WebRouter from "./apps/web/router";
import DashboardRouter from "./apps/dashboard/router";

const router = createBrowserRouter([...WebRouter, ...DashboardRouter]);

export default router;
