import React from "react";
import InputAtom from "./InputAtom";

export default {
  title: "Atoms/InputAtom",
  component: InputAtom,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

const Template = (args) => <InputAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
};
