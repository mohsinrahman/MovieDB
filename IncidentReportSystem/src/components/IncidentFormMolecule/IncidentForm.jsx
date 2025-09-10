import React from "react";
import { Box } from "@mui/material";
import styles from "./IncidentFormMolecule.module.css";
function IncidentForm({ children }) {
  return (
    <Box component="div" className={styles.formroot}>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Box>
  );
}

export default IncidentForm;
