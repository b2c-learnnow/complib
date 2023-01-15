import React from "react";
import ProductType1 from "../../elements/ProductType1";
import { FaBeer } from "react-icons/fa";
import { Colors } from "../../config/Colors";

export default {
  title: "Elements/Product2",
  component: ProductType1,
  argTypes: {
    background: { control: "color" },
    hover: { control: "color" },
  },
};

const Template = (args) => <ProductType1 {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: "https://images.unsplash.com/photo-1673617526263-4869f8d175de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  background: "gray",
  height: "300px",
  className:"",
  headerText:"Some Header Text",
  description: "Some Description",
  width: "600px"
};
