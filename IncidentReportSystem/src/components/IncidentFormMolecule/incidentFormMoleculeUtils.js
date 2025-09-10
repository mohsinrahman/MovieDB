// Generic handleChange helper
export const handleChange = (setFormValues, setErrors) => (event) => {
  const { name, value } = event.target;

  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Clear error for the field being updated
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: "", // or null
  }));
};
// Validation helper
export const validateForm = (formValues) => {
  let errors = {};

  if (!formValues.actionBy) errors.actionBy = "Action By is required";
  if (!formValues.region) errors.region = "Please select a region";
  if (!formValues.city) errors.city = "Please select a city";
  if (!formValues.symptoms) errors.symptoms = "Please describe symptoms";
  if (!formValues.causes) errors.causes = "Please explain the causes";
  if (!formValues.solutions) errors.solutions = "Please suggest solutions";
  if (!formValues.category) errors.category = "Please select category";
  if (!formValues.riskLevel) errors.riskLevel = "Please select risk level";
  if (!formValues.priority) errors.priority = "Please select a priority";

  return errors;
};
// Submit handler helper

export const handleSubmit = ({
  event,
  formValues,
  setErrors,
  setToastOpen,
  setShowIncidentForm,
}) => {
  event.preventDefault();

  const errors = validateForm(formValues);
  setErrors(errors);

  if (Object.keys(errors).length === 0) {
    console.log("Form submitted successfully:", formValues);

    const existingEntries =
      JSON.parse(localStorage.getItem("formEntries")) || [];

    const entryToStore = {
      ...formValues,
      id: Date.now(), // Generates unique ID
    };
    console.log(entryToStore);
    const isDuplicate = existingEntries.some(
      (entry) =>
        entry.actionBy === entryToStore.actionBy &&
        entry.date === entryToStore.date &&
        entry.city === entryToStore.city &&
        entry.causes === entryToStore.causes,
    );
    console.log(isDuplicate);
    if (!isDuplicate) {
      const updatedEntries = [...existingEntries, entryToStore];
      localStorage.setItem("formEntries", JSON.stringify(updatedEntries));
      console.log("Hellloooooooo", updatedEntries);
    }
    setToastOpen(true);
    setTimeout(() => setShowIncidentForm(false), 2000);
  }
};

// Reusable labels list
export const labels = [
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
