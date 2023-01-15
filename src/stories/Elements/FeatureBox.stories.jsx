import React from "react";
import FeaturesBox from "../../elements/FeatureBox";
import { FaBeer } from "react-icons/fa";

export default {
  title: "Elements/FeaturesBox",
  component: FeaturesBox,
  argTypes: {},
};

const Template = (args) => <FeaturesBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerText: "Some Text Here",
  description: "Some Description here.",
  icon: <FaBeer />,
};
