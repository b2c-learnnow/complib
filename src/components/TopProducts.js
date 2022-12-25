import React from "react";
import { Colors} from "../config/Colors";
import HeaderNormal from "../elements/HeaderNormal"

export default function TopProducts(){
    return (
        <div className="container p-5" style={{ backgroundColor: Colors.LightGrey}}>
            <HeaderNormal>Top Products</HeaderNormal>
        </div>
    )
}