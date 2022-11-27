import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import PageError from "../../pages/404/PageError";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import AddService from "../../pages/Home/Services/AddService/AddService";
import AllServices from "../../pages/Home/Services/AllServices/AllServices";
import ServiceDetailCard from "../../pages/Home/Services/ServiceDetailCard/ServiceDetailCard";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Reviewers from "../../pages/Reviewers/Reviewers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetailCard></ServiceDetailCard>,
                loader: ({ params }) => fetch(`https://a11-server-side.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviewers></Reviewers></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <PageError></PageError>
    }
]);

export default router;
