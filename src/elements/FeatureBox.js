import React from "react"
import { Colors } from "../config/Colors"
import { Font } from "../config/Font"

export default function FeaturesBox({headerText, description, icon}){
    return (
        <div className="d-flex align-items-center">
            <div style={{ fontSize: '20px' }}>{icon}</div>
            <div className="ms-3">
                <p style={{ color: Colors.Grey, fontSize: Font.ExtraSmall, fontWeight: '700' }}>
                    {headerText}
                </p>
                <p style={{ color: Colors.Grey, fontSize: Font.ExtraSmall }}>{description}</p>
            </div>
        </div>
    )
}