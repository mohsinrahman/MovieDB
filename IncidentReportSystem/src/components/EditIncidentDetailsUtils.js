export const createHandleChange = (setFormValues, setErrors) => (e) => {
  if (!e?.target) return;

  const { name, value } = e.target;

  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (!value.trim()) {
    setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
  } else {
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }
};

export const updateIncidentInStorage = (updatedIncident) => {
  const storedIncidents = JSON.parse(localStorage.getItem("formEntries")) || [];

  const updatedIncidents = storedIncidents.map((incident) =>
    incident.id === updatedIncident.id ? updatedIncident : incident,
  );

  localStorage.setItem("formEntries", JSON.stringify(updatedIncidents));
};
