import React, { useState } from "react";
import InputFieldAtom from "./InputFieldAtom";

export default {
  title: "Atoms/InputFieldAtom",
  component: InputFieldAtom,
};

export const Default = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputFieldAtom
      label="Your Name"
      name="username"
      value={inputValue}
      handleChange={(e) => setInputValue(e.target.value)}
      fieldError={inputValue.length < 2}
      HelperTxt={inputValue.length < 2 ? "Name is too long" : "Enter your name"}
    />
  );
};
