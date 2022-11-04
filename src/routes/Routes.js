import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import CheckOut from '../pages/CheckOut';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            {
                path: '/checkout/:id',
                element: (
                    <PrivateRoute>
                        <CheckOut />
                    </PrivateRoute>
                ),
                loader: ({ params }) => {
                    return fetch(
                        `https://genius-car-server-beta.vercel.app/services/${params.id}`
                    );
                },
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <Orders />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
