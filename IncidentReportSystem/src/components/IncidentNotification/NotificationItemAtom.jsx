import React from "react";
import { Stack, Badge, Avatar, Box, Typography, Divider } from "@mui/material";
import styles from "./IncidentNotification.module.css";

const NotificationItemAtom = ({ item, onClick }) => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-start"
        py={2}
        mr={1}
        ml={1}
      >
        {item.new ? (
          <Badge
            badgeContent={1}
            color="error"
            sx={{ "& .MuiBadge-badge": { top: 0, right: 0 } }}
          >
            <Avatar className={styles.circleBadge}>AY</Avatar>
          </Badge>
        ) : (
          <Avatar sx={{ bgcolor: "#1e40af" }} className={styles.circleBadge}>
            AY
          </Avatar>
        )}
        <Box>
          <Typography variant="body1">
            You got a new comment on your Incident{" "}
            <b onMouseDown={() => onClick(item)} style={{ cursor: "pointer" }}>
              {item.incidentId}
            </b>{" "}
            from
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {item.date}
          </Typography>
        </Box>
      </Stack>
      <Divider />
    </>
  );
};

export default NotificationItemAtom;
