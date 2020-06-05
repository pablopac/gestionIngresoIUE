import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../containers/LayoutPrincipal/LayoutPrincipal";
import Home from "../components/home/Home";
import Usersys from "../components/usersys/Usersys";
import TypeId from "../components/typeId/TypeId";
import Vehicle from '../components/vehicle/Vehicle';
import NotFound from "../components/notfound/NotFound";
import AppleCount from "../components/Applecount";

const AppRoutes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Usersys" component={Usersys}/>
				<Route exact path="/TypeId" component={TypeId}/>
		<Route exact path='/Vehicle' component={Vehicle} />
                <Route exact path="/AppleCount" component={AppleCount}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRoutes;