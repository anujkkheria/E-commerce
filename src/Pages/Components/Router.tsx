import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import App from "../../App"
import Login from "../Login"
import Auth from '../Auth'
import SignUp from "../SignUp"

const Router = ()=>{
    const router = createBrowserRouter([
        {
            path:"/app",
            element: <App />
                },
                {
                    path:"/auth",
                    element:<Auth/>,
                    children:[{
                        path:"login",
                        element:<Login/>
                    },
                {
                    path:"Signup",
                    element:<SignUp/>
                }]
                },{
                    path:"/",
                    element:<Navigate to="/auth/login"/>
                }
    ])
    return <RouterProvider router={router}/>
}

export default Router