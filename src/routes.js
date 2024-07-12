import { createBrowserRouter } from "react-router-dom";
import Home from "./client/Home";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>,
        }
    ]
)

export default router;