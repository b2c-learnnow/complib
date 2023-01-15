import React from "react";
import IconButton from "../../elements/IconButton";
import { FaBeer } from "react-icons/fa";
import { Colors } from "../../config/Colors";

export default {
  title: "Elements/IconButton",
  component: IconButton,
  argTypes: {
    background: { control: 'color' },
    hover: { control: 'color' },
  },
};

const Template = (args) => (
  <IconButton {...args}>
    <FaBeer />
    <p>Some Text Here</p>
  </IconButton>
);

export const Normal = Template.bind({});
Normal.args = {
    background: Colors.Primary,
    color: "white",
    upperCase: 'uppercase',
    fontSize: "13px",
    hover: Colors.PrimaryDark
};