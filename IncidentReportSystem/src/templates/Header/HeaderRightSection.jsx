import React from "react";
import { Box, Typography, IconButton, Avatar, Badge } from "@mui/material";
import { NotificationsNone as NotificationIcon } from "@mui/icons-material";
import { background } from "storybook/internal/theming";

function HeaderRightSection({
  anchorEl,
  setAnchorEl,
  username,
  userEmail,
  handleClick,
  updatedVal,
  comment,
  setComment,
  NotificationComponent,
}) {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {NotificationComponent && (
        <NotificationComponent
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          comment={comment}
          setComment={setComment}
        />
      )}

      <IconButton onClick={handleClick}>
        <Badge color="error" variant="dot" invisible={!updatedVal} />
        <NotificationIcon />
      </IconButton>

      <Avatar sx={{ bgcolor: "#1d4ed8" }}>
        {" "}
        {username?.slice(0, 2).toUpperCase()}
      </Avatar>

      <Box sx={{ marginRight: "25px" }}>
        <Typography fontWeight="bold">{username}</Typography>
        <Typography variant="body2" color="gray">
          {userEmail}
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderRightSection;
