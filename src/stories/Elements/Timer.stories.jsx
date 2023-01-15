import React from "react";
import Timer from "../../elements/CountDownTimer";

export default {
  title: "Elements/Timer",
  component: Timer,
  argTypes: {},
};

const Template = (args) => <Timer {...args} />;

export const PastDateTimer = Template.bind({});
PastDateTimer.args = {
  time: new Date(2021, 8, 20),
};

export const FutureDateTimer = Template.bind({});
FutureDateTimer.args = {
  time: new Date(2023, 8, 20),
};
