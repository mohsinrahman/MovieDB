import React, { useState } from "react";
import HandlerAtom from "./HandlerAtom";

export default {
  title: "Atoms/HandlerAtom",
  component: HandlerAtom,
};

export const Default = () => {
  const [formValues, setFormValues] = useState({
    actionBy: "",
  });

  const [errors, setErrors] = useState({
    actionBy: "",
  });

  const handleChange = (setForm) => (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Simple validation
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : "Please enter a name",
    }));
  };

  return (
    <>
      <HandlerAtom
        formValues={formValues}
        setFormValues={setFormValues}
        handleChange={handleChange}
        errors={errors}
      />
      <pre style={{ marginTop: "16px", fontSize: "14px" }}>
        {JSON.stringify(formValues, null, 2)}
      </pre>
    </>
  );
};
