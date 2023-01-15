import React from "react";
import HeaderNormal from "../../elements/HeaderNormal";

export default {
  title: "Elements/HeaderNormal",
  component: HeaderNormal,
  argTypes: {},
};

const Template = (args) => <HeaderNormal {...args} />;

export const Children = Template.bind({});
Children.args = {
    children: <span>Hello this is some text.</span>
};

export const Text = Template.bind({});
Text.args = {
    children: "Some New Component"
};
