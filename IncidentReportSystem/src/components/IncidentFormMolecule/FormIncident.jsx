import React from "react";
import { Box, Grid } from "@mui/material";
import LocationMolecule from "./LocationMolecule/LocationMolecule";
import SymtomsCausesSolutions from "./SymtomsCausesSolutions/SymtomsCausesSolutions";
import SortingMolecule from "./SortingMolecule/SortingMolecule";
import SuccessToast from "../SuccessToast/SuccessToast";
import DateForm from "./DateForm";
import HandlerAtom from "./HandlerAtom";
import Priority from "./Priority";
import RiskLevel from "./RiskLevel";
import PersonEmailDate from "./PersonEmailDate";

function FormIncident({
  formRef,
  formValues,
  setErrors,
  setToastOpen,
  toastOpen,
  handleChange,
  setFormValues,
  errors,
  labels,
  handleSubmit,
  setShowIncidentForm,
}) {
  return (
    <Box
      bgcolor="#F5FAFF"
      width="1146px"
      sx={{
        margin: "10px",
      }}
    >
      <form
        ref={formRef}
        onSubmit={(e) =>
          handleSubmit({
            event: e,
            formValues,
            setErrors,
            setToastOpen,
            toastOpen,
            setShowIncidentForm,
          })
        }
        autoComplete="off"
      >
        <PersonEmailDate
          formValues={formValues}
          setFormValues={setFormValues}
        />
        {/*  <HandlerAtom
          formValues={formValues}
          handleChange={handleChange}
          setFormValues={setFormValues}
          errors={errors}
        /> */}

        {/*  <DateForm
          formValues={formValues}
          handleChange={handleChange}
          setFormValues={setFormValues}
        /> */}
        <DateForm formValues={formValues} setFormValues={setFormValues} />
        <Grid container sx={{ gap: "20%" }}>
          <Grid item xs={12} md={6}>
            <Priority
              name="priority"
              value={formValues.priority}
              handleChange={handleChange(setFormValues, setErrors)}
              fieldError={errors.priority}
              helperText={errors.priority}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RiskLevel
              name="riskLevel"
              value={formValues.riskLevel}
              handleChange={handleChange(setFormValues, setErrors)}
              fieldError={errors.riskLevel}
              helperText={errors.riskLevel}
            />
          </Grid>
        </Grid>

        {/* <SortingMolecule
          labels={labels}
          name="sorting"
          value={formValues.sorting || ""}
          handleChange={handleChange(setFormValues)}
        /> */}
        <SortingMolecule
          labels={labels}
          name="category"
          value={formValues.category || ""}
          identifierValue={formValues.identifier || ""}
          handleChange={handleChange(setFormValues, setErrors)}
          fieldError={errors.category}
          helperText={errors.category}
        />

        <LocationMolecule
          nameRegion="region"
          valueRegion={formValues.region}
          nameCity="city"
          valueCity={formValues.city}
          handleChange={handleChange(setFormValues, setErrors)}
          errRegion={errors?.region}
          errCity={errors?.city}
        />

        <SymtomsCausesSolutions
          formValues={formValues}
          errors={errors}
          handleChange={handleChange(setFormValues, setErrors)}
        />
      </form>
      <SuccessToast
        open={toastOpen}
        handleClose={() => setToastOpen(false)}
        message="Incident has been registered successfully"
      />
    </Box>
  );
}

export default FormIncident;
