import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login, {loader as loaderLogin} from "../modules/Authentication/pages/Login";
import ErrorPage from "../shared/pages/Error/ErrorPage";
import UploadCharge from "../modules/Upload/pages/UploadZone";
import UploadEdit from "../modules/Upload/pages/UploadEdit";
import DefaultLayout, {loader as loaderUpload} from "../shared/pages/DefaultLayout/DefaultLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        loader: loaderUpload,
        children: [
            {
                path: "upload",
                element: <UploadCharge />,
                errorElement: <ErrorPage />,
            },
            {
                path: "upload/edit",
                element: <UploadEdit />,
                errorElement: <ErrorPage />,
            }
        ]
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
        loader: loaderLogin
    },

]);
