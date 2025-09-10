import React, { useState } from "react";
import NotificationToggleLinkAtom from "./NotificationToggleLinkAtom";

export default {
  title: "Components/IncidentNotification/NotificationToggleLinkAtom",
  component: NotificationToggleLinkAtom,
};

export const Default = (args) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <NotificationToggleLinkAtom
      {...args}
      showAll={showAll}
      setShowAll={setShowAll}
    />
  );
};
