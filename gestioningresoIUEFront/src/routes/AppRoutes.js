import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../containers/LayoutPrincipal/LayoutPrincipal";
import Home from "../components/home/Home";
import Usersys from "../components/usersys/Usersys";
import TypeId from "../components/typeId/TypeId";
import Vehicle from '../components/vehicle/Vehicle';
import Area from "../components/area/Area";
import Facultad from "../components/facultad/Facultad";
import Proveedor from "../components/proveedor/Proveedor"
import NotFound from "../components/notfound/NotFound";
import AppleCount from "../components/Applecount";
import Organizacion from '../components/organizacion/Organizacion';
import Associated from '../components/associated/Associated';

const AppRoutes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Usersys" component={Usersys}/>
				<Route exact path="/TypeId" component={TypeId}/>
		        <Route exact path='/Vehicle' component={Vehicle} />
                <Route exact path="/Area" component={Area}/>
                <Route exact path="/Facultad" component={Facultad}/>
                <Route exact path="/Proveedor" component={Proveedor}/>
                <Route exact path="/AppleCount" component={AppleCount}/>
		<Route exact path='/Organizacion' component={Organizacion} />
		<Route exact path='/Associated' component={Associated} />
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRoutes;