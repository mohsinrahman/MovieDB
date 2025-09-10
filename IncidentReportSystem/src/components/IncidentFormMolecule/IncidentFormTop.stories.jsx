import React, { useState, useRef } from "react";
import IncidentFormTop from "./IncidentFormTop";

export default {
  title: "Organisms/IncidentFormTop",
  component: IncidentFormTop,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  const [formValues, setFormValues] = useState({
    actionBy: "John Doe",
    otherAmbEquipment: "Basic kit",
    mtaId: "MTA-12345",
    date: "2025-07-14",
    district: "District A",
    station: "Station A",
    symptoms: "Device malfunction",
    causes: "Overload due to heat",
    solutions: "Install cooling unit",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <IncidentFormTop
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      formValues={formValues}
      formRef={formRef}
    />
  );
};
