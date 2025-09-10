import React, { useState } from "react";
import IncidentFormTop from "./IncidentFormTop";
import FormIncident from "./FormIncident";
import IncidentForm from "./IncidentForm";

/* Utils */
import {
  handleChange,
  handleSubmit,
  labels,
} from "./incidentFormMoleculeUtils";

const IncidentDetailsForm = ({
  formRef,
  formValues,
  setFormValues,
  showIncidentForm,
  setShowIncidentForm,
}) => {
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  console.log(showIncidentForm);
  console.log(setShowIncidentForm);

  return (
    <IncidentForm>
      <IncidentFormTop
        open={open}
        handleClose={() => setOpen(false)}
        handleOpen={() => setOpen(true)}
        formValues={formValues}
        formRef={formRef}
        showIncidentForm={showIncidentForm}
        setShowIncidentForm={setShowIncidentForm}
        setErrors={setErrors}
      />
      <FormIncident
        formRef={formRef}
        formValues={formValues}
        setErrors={setErrors}
        setToastOpen={setToastOpen}
        handleChange={handleChange}
        setFormValues={setFormValues}
        errors={errors}
        toastOpen={toastOpen}
        labels={labels}
        handleSubmit={handleSubmit}
        setShowIncidentForm={setShowIncidentForm}
      />
    </IncidentForm>
  );
};

export default IncidentDetailsForm;
