import React from "react";
import { Switch, Route } from "react-router-dom";
import { publicRoutes } from "./publicRoutes"

export default function AppRouter(){
    return (
        <Switch>
            {
                publicRoutes.map((route)=>(
                    <Route exact {...route} />
                ))
            }
        </Switch>
    )
}