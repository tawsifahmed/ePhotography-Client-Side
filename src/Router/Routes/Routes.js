import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import ServiceDetailCard from "../../pages/Home/Services/ServiceDetailCard";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Reviewers from "../../pages/Reviewers/Reviewers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services/:id',
                element: <ServiceDetailCard></ServiceDetailCard>,
                loader: ({ params }) => fetch(`http://localhost:1000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviewers></Reviewers>
            }
        ]
    }
]);

export default router;
