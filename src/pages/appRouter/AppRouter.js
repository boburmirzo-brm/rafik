import React from 'react';
import {Route, Switch,Redirect, useRouteMatch} from 'react-router-dom'
import { useStateValue } from '../../context/stateprovider/StateProvider';
import Admin from '../admin/Admin';
import Login from '../login/Login';

function AppRouter() {
    const [{user}] = useStateValue()
    const {path, url} = useRouteMatch();

   return user || JSON.parse(localStorage.getItem("admin")) ? (
        <Switch>
            <Route path={`${url}/admin`} component={Admin} />
            <Redirect to={`${path}/admin`}/>
        </Switch>
    ):(
        <Switch>
            <Route path={`${url}/login`} component={Login} />
            <Redirect to={`${path}/login`}/>
        </Switch>
    )
}

export default AppRouter;
