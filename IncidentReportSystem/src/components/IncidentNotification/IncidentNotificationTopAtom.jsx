import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import styles from "./IncidentNotification.module.css";
function IncidentNotificationTopAtom() {
  return (
    <>
      <Box className={styles.notificationBox}>
        <Typography variant="body2" fontWeight={700} gutterBottom>
          Notifications
        </Typography>
      </Box>
      <Divider />
    </>
  );
}
export default IncidentNotificationTopAtom;
