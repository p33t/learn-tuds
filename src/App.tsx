import './init'
import './App.css'
import * as About from './feature/About'
import * as Home from './feature/Home'
import * as Sidebar from './feature/Sidebar'
import React from 'react'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import alliumTheme from '@telus-uds/theme-allium'
import {BaseProvider} from '@telus-uds/components-web'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import * as PetList from "./feature/Pet/List";
import * as PetAdd from "./feature/Pet/Add";
import * as PetDetail from "./feature/Pet/Detail";


interface SkeletonProps {
    baseRoute?: string;
}

const Skeleton: React.FC<SkeletonProps> = () => {
    return (
        <div className="main">
            <Sidebar.Ui/>
            <div className="children">
                <Outlet/>
            </div>
        </div>
    );
};

function App() {

    const baseRoute = "";
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: (
                    <>
                        <Skeleton baseRoute={baseRoute}/>
                        {/*<Notification/>*/}
                    </>
                ),
                children: [
                    {path: "/", element: <Home.Ui/>},
                    {path: "/pet/list", element: <PetList.Ui/>},
                    {path: "/pet/add", element: <PetAdd.Ui/>},
                    {path: "/pet/detail/:id", element: <PetDetail.Ui/>},
                    {path: "/about", element: <About.Ui/>}
                ],
            },
        ],
        {
            basename: baseRoute || "/",
        },
    );

    return (
        <React.StrictMode><Provider store={store}><BaseProvider defaultTheme={alliumTheme}>
            <RouterProvider router={router} />
        </BaseProvider></Provider></React.StrictMode>
    )
}

export default App
