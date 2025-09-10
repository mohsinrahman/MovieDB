import React from "react";
import PasswordInputAtom from "./PasswordInputAtom";

export default {
  title: "Atoms/PasswordInputAtom",
  component: PasswordInputAtom,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

const Template = (args) => <PasswordInputAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
};
