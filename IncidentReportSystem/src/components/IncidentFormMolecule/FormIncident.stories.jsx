import React, { useRef, useState } from "react";
import FormIncident from "./FormIncident";

export default {
  title: "Organisms/FormIncident",
  component: FormIncident,
};

export const Default = () => {
  const formRef = useRef(null);

  const [formValues, setFormValues] = useState({
    actionBy: "",
    date: "",
    region: "",
    city: "",
    symptoms: "",
    causes: "",
    solutions: "",
  });

  const [errors, setErrors] = useState({});
  const [toastOpen, setToastOpen] = useState(false);

  const labels = [
    "Vehicle",
    "Communication",
    "Premises",
    "Healthcare",
    "Patient",
    "Personal",
    "Receiving Care Facility",
    "Medical Technical equipment",
    "SoS Alarm",
    "Other amb equipment",
  ];

  const handleChange = (setFn) => (e) => {
    const { name, value } = e.target;
    setFn((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = ({ event, formValues, setErrors, setToastOpen }) => {
    event.preventDefault();

    const newErrors = {};
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setToastOpen(true);
    }
  };

  return (
    <FormIncident
      formRef={formRef}
      formValues={formValues}
      setFormValues={setFormValues}
      errors={errors}
      setErrors={setErrors}
      toastOpen={toastOpen}
      setToastOpen={setToastOpen}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      labels={labels}
    />
  );
};
