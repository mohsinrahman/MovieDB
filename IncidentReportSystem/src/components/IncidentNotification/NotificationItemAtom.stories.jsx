import React from "react";
import NotificationItemAtom from "./NotificationItemAtom";

export default {
  title: "Components/IncidentNotification/NotificationItemAtom",
  component: NotificationItemAtom,
};

const Template = (args) => <NotificationItemAtom {...args} />;

export const NewNotification = Template.bind({});
NewNotification.args = {
  item: {
    new: true,
    incidentId: "INC-12345",
    name: "Alice Young",
    date: "2025-07-12",
  },
  onClick: (item) => console.log("Clicked:", item),
};

export const ReadNotification = Template.bind({});
ReadNotification.args = {
  item: {
    new: false,
    incidentId: "INC-54321",
    name: "Bob Smith",
    date: "2025-07-10",
  },
  onClick: (item) => console.log("Clicked:", item),
};
