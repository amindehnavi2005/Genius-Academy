import { createBrowserRouter } from "react-router-dom";
import Home from "./client/Home";
import Courses from "./client/Courses";
import SignIn from "./components/SignIn/SignIn";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/courses",
            element: <Courses />
        },
        {
            path: "/sign-in",
            element: <SignIn />
        }
    ]
)

export default router;