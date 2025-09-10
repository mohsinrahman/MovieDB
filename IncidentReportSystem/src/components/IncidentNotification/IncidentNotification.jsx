import React, { useState } from "react";
import { Popover } from "@mui/material";
import { notifications } from "./incidentNotificationUtils";
import IncidentNotificationTopAtom from "./IncidentNotificationTopAtom";
import NotificationItemAtom from "./NotificationItemAtom";
import NotificationToggleLinkAtom from "./NotificationToggleLinkAtom";
import CommentSliderPanel from "./CommentSliderPanel";

function IncidentNotification({ anchorEl, setAnchorEl, comment, setComment }) {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));
  const role = userData?.role;
  const visibleNotifications = showAll
    ? notifications
    : notifications.slice(0, 2);

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <IncidentNotificationTopAtom />
        {visibleNotifications.map((item) => (
          <NotificationItemAtom
            key={item.id}
            item={item}
            onClick={() => setOpen(true)}
          />
        ))}
        <NotificationToggleLinkAtom showAll={showAll} setShowAll={setShowAll} />
      </Popover>
      <CommentSliderPanel
        role={role}
        open={open}
        comment={comment}
        setComment={setComment}
        setOpen={setOpen}
      />
    </>
  );
}
export default IncidentNotification;
