import React from "react";
import { Box, Button } from "@mui/material";
import styles from "./Sidebar.module.css";
import { Add as AddIcon, DescriptionOutlined } from "@mui/icons-material";

function SidebarTopBtns({ setShowIncidentForm, role }) {
  return (
    <Box component="div">
      {role !== "admin" && (
        <Button
          fullWidth
          variant="contained"
          startIcon={<AddIcon />}
          className={styles.spacing}
          sx={{ mt: 4, mb: 2 }}
          onClick={() => setShowIncidentForm(true)}
        >
          New Incident
        </Button>
      )}

      <Button
        startIcon={<DescriptionOutlined />}
        className={styles.incidentButton}
        onClick={() => setShowIncidentForm(false)}
      >
        Incidents
      </Button>
    </Box>
  );
}

export default SidebarTopBtns;
