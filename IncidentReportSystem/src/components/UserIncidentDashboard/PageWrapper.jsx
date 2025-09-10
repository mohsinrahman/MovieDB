import React from "react";
import { Box } from "@mui/material";
import styles from "./UserIncidentDashboard.module.css";

function PageWrapper({ children }) {
  return <Box className={styles.container}>{children}</Box>;
}

export default PageWrapper;
