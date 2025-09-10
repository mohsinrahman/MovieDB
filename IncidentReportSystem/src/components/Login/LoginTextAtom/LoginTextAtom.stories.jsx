import React from "react";
import LoginTextAtom from "./LoginTextAtom";

export default {
  title: "Atoms/LoginTextAtom",
  component: LoginTextAtom,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    description: { control: "text" },
  },
};

const Template = (args) => <LoginTextAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Login",
  subtitle: "Welcome",
  description: "Please Select how you want to login",
};
