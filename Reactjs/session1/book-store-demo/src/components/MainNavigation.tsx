
//component lazy loading 

import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";

const Login = lazy(() => import("../pages/login")); 

const Register = lazy(() => import("../pages/register")); 



const AppRoutes: React.FC = () => {
    return (
        <switch>
            <Route exact path={RoutePaths.Login} component={Login} />
            <Route exact path={RoutePaths.Register} component={Register} />
         
        </switch>

    );
};


export default AppRoutes;