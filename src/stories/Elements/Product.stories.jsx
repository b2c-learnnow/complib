import React from "react";
import Product from "../../elements/Product";
import { FaBeer } from "react-icons/fa";
import { Colors } from "../../config/Colors";

export default {
  title: "Elements/Product",
  component: Product,
  argTypes: {
    background: { control: "color" },
    hover: { control: "color" },
  },
};

const Template = (args) => <Product {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: "https://images.unsplash.com/photo-1673617526263-4869f8d175de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  label: "New",
  price: 100,
  discount: 10,
  name: 'Product Name',
  containerWidth: "",
  containerClass: "",
};

const Div = ({chidlren})=>{
    return (
        <div>
            {chidlren}
        </div>
    )
}