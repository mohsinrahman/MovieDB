import React, { useRef, useState } from "react";
import IncidentDetailsForm from "./IncidentFormMolecule";

/* Mock utils */
const labels = [
  "Medical Technical equipment",
  "First Aid",
  "Logistics",
  "Documentation",
  "Hazmat",
  "Rescue Tools",
];

const handleChange = (setFormValues) => (e) => {
  const { name, value } = e.target;
  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = ({ event, formValues, setErrors, setToastOpen }) => {
  event.preventDefault();
  const errors = {};

  Object.entries(formValues).forEach(([key, value]) => {
    if (!value.trim()) errors[key] = "This field is required";
  });

  if (Object.keys(errors).length > 0) {
    setErrors(errors);
  } else {
    setErrors({});
    setToastOpen(true);
  }
};

export default {
  title: "Organisms/IncidentDetailsForm",
  component: IncidentDetailsForm,
};

export const Default = () => {
  const formRef = useRef(null);

  const [formValues, setFormValues] = useState({
    actionBy: "",
    otherAmbEquipment: "",
    mtaId: "",
    date: "",
    district: "",
    station: "",
    symptoms: "",
    causes: "",
    solutions: "",
  });

  return (
    <IncidentDetailsForm
      formRef={formRef}
      formValues={formValues}
      setFormValues={setFormValues}
    />
  );
};
