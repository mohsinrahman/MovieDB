import React, { useState } from "react";
import SymtomsCausesSolutions from "./SymtomsCausesSolutions";

export default {
  title: "Molecules/SymtomsCausesSolutions",
  component: SymtomsCausesSolutions,
};

export const Default = () => {
  const [formValues, setFormValues] = useState({
    symptoms: "",
    causes: "",
    solutions: "",
  });

  const [errors, setErrors] = useState({
    symptoms: "",
    causes: "",
    solutions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Simple validation: mark field as error if empty
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : `Please provide ${name}`,
    }));
  };

  return (
    <SymtomsCausesSolutions
      formValues={formValues}
      errors={errors}
      handleChange={handleChange}
    />
  );
};
