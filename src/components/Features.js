import React from "react";
import FeaturesBox from "../elements/FeatureBox"
import { BsTruck } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { MdPayment, MdOutlineCall } from "react-icons/md"
import { IoCallOutline } from "react-icons/io"
import { AiOutlineGift } from "react-icons/ai"

const data = [
    {
        icon: <BsTruck />,
        headerText:'Free Shipping',
        description: 'On all orders over $75.00',
    },
    {
        icon: <FiRefreshCcw />,
        headerText:'Free Return',
        description: 'If goods have problems',
    },
    {
        icon: <MdPayment />,
        headerText:'Secure Payment',
        description: '100% secure payment',
    },
    {
        icon: <MdOutlineCall />,
        headerText:'Support 24/7',
        description: 'Contact us 24hrs a day',
    },
    {
        icon: <AiOutlineGift />,
        headerText:'Gift Service',
        description: 'Support gift service',
    },
]

export default function Features() {
    return (
        <div className="container my-5">
            <div className="border p-4 border-radius d-flex justify-content-between align-items-center">
                {data.map((item)=>(
                    <FeaturesBox description={item.description} icon={item.icon} headerText={item.headerText} />
                ))}
            </div>
        </div>
    )
}