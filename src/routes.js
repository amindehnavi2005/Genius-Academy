import { createBrowserRouter } from "react-router-dom";
import Home from "./client/Home";
import Courses from "./client/Courses";
import SignIn from "./components/SignIn/SignIn";
import Course from "./client/Course";
import UserBasket from "./client/UserBasket";
import UserPanel from "./client/UserPanel";

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
        {
            path: "/user-basket",
            element: <UserBasket />
        },
        {
            path: "/user-panel",
            element: <UserPanel />
        }
    ]
)

export default router;