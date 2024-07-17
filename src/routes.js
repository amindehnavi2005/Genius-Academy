import { createBrowserRouter } from "react-router-dom";
import Home from "./client/Home";
import Courses from "./client/Courses";
import SignIn from "./components/SignIn/SignIn";
import Course from "./client/Course";

const router = createBrowserRouter(
    [
        {
            path: "/sign-in",
            element: <SignIn />
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/courses",
            element: <Courses />
        },
        {
            path: "/courses/course/:id",
            element: <Course />
        },
    ]
)

export default router;