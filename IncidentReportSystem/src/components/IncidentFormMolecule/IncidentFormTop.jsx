import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import PreviewReportDetailsMolecule from "../PreviewReportDetailsMolecule/PreviewReportDetailsMolecule";
import WarningToast from "../WarningToast/WarningToast";
import { validateForm } from "./incidentFormMoleculeUtils";

function IncidentFormTop({
  open,
  handleClose,
  formValues,
  formRef,
  handleOpen,
  showIncidentForm,
  setShowIncidentForm,
  setErrors,
}) {
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    const validationErrors = validateForm(formValues);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); //
      setShowWarning(true);
      return;
    }

    handleOpen(); // ✅ Proceed if no errors
  };

  return (
    <>
      <Typography variant="h5" gutterBottom paddingLeft="5px" paddingTop="10px">
        Incidents
      </Typography>
      <Typography variant="body2" gutterBottom paddingLeft="5px">
        Incident
      </Typography>

      <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
        {/* <Button variant="outlined">Save as Draft</Button> */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

        {showWarning && (
          <WarningToast
            open={showWarning}
            onClose={() => setShowWarning(false)}
            message="Please fill in all required fields."
          />
        )}

        <PreviewReportDetailsMolecule
          open={open}
          onClose={handleClose}
          formRef={formRef}
          formValues={formValues}
          showIncidentForm={showIncidentForm}
          setShowIncidentForm={setShowIncidentForm}
        />
      </Grid>
    </>
  );
}

export default IncidentFormTop;
