import React from "react";
import LoginBtnAtom from "./LoginBtnAtom";

export default {
  title: "Atoms/LoginBtnAtom",
  component: LoginBtnAtom,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
  },
};

const Template = (args) => <LoginBtnAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Login",
};
