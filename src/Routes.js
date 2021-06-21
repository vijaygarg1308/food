import React from "react";
import {Route,Switch} from 'react-router-dom';
import Home from "./containers/Home";
import About from "./containers/About";
import Delivery from "./containers/Delivery";
import OurMenu from "./containers/OurMenu";
import Reservation from "./containers/Reservation";
import Services from "./containers/Services";
import Food from "./containers/Food";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/delivery">
                <Delivery />
            </Route>
            <Route exact path="/our-menu">
                <OurMenu />
            </Route>
            <Route exact path="/reservation">
                <Reservation />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
            <Route exact path="/home/food/:id">
                <Food />
            </Route>
        </Switch>
    )
}