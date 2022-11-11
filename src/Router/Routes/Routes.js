import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import ServiceDetailCard from "../../pages/Home/Services/ServiceDetailCard";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

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
            }
        ]
    }
]);

export default router;
