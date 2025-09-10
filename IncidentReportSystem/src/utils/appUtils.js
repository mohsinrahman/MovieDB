export const baseIncidentFormValues = {
  /* id: "", */
  /* date: "", */
  reportDate: "",
  region: "",
  city: "",
  symptoms: "",
  causes: "",
  solutions: "",
  category: "",
  identifier: "",
  riskLevel: "",
  priority: null,
  status: "",
  assignedTo: {
    name: "",
    email: "",
    role: "",
  },
  /* email: "", */
  actionBy: "",
  handler: "",
};
export const getNewIncidentFormValues = () => ({
  ...baseIncidentFormValues,
  id: Date.now(),
  date: "xxxx-xx-xx",
  email: "olivia@untitledui.com",
  actionBy: "Olivia Rhye",
  handler: "Kami D",
  status: "New",
});

export const getEditIncidentFormValues = () => ({
  ...baseIncidentFormValues,
  id: "", // overwritten later with existing data
  email: "",
  date: "",
});
