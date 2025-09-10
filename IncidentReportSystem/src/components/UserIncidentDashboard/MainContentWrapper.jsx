import React from "react";
import { Box } from "@mui/material";
import styles from "./UserIncidentDashboard.module.css";

function MainContentWrapper({ children }) {
  return <Box className={styles.maincontainer}>{children}</Box>;
}

export default MainContentWrapper;
