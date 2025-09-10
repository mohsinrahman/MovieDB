import React from "react";
import InputFieldAtom from "./InputFieldAtom";

export default {
  title: "Components/InputFieldAtom",
  component: InputFieldAtom,
};

const Template = (args) => <InputFieldAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  name: "name",
  value: "John",
  handleChange: () => {},
  fieldError: false,
  HelperTxt: "",
};

export const Empty = Template.bind({});
Empty.args = {
  label: "Username",
  name: "username",
  value: "",
  handleChange: () => {},
  fieldError: false,
  HelperTxt: "",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Email",
  name: "email",
  value: "",
  handleChange: () => {},
  fieldError: true,
  HelperTxt: "Email is required",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: "Age",
  name: "age",
  value: "25",
  handleChange: () => {},
  fieldError: false,
  HelperTxt: "Enter age in years",
};

export const LongText = Template.bind({});
LongText.args = {
  label: "Full Name",
  name: "fullname",
  value:
    "ThisIsAnExtremelyLongNameThatMightOverflowTheTextFieldIfNotHandledProperly",
  handleChange: () => {},
  fieldError: false,
  HelperTxt: "This is a long input value",
};

export const MissingProps = Template.bind({});
MissingProps.args = {
  // Intentionally omitting `value`, `name`, `label`, etc.
  handleChange: undefined,
};

export const SpecialCharacters = Template.bind({});
SpecialCharacters.args = {
  label: "Emoji Input",
  name: "emoji",
  value: "😀🎉💻🔥✨!&~",
  handleChange: () => {},
  fieldError: false,
  HelperTxt: "Emoji allowed",
};

export const NarrowContainer = Template.bind({});
NarrowContainer.args = {
  label: "Email",
  name: "email",
  value: "a@b.com",
  handleChange: () => {},
};
NarrowContainer.decorators = [
  (Story) => (
    <div style={{ width: "100px" }}>
      <Story />
    </div>
  ),
];
