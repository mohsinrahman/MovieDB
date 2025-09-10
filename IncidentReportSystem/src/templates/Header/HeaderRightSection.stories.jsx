import React, { useState } from "react";
import HeaderRightSection from "./HeaderRightSection";
import IncidentNotification from "../../components/IncidentNotification/IncidentNotification"; // Optional, only if used

export default {
  title: "Components/Header/HeaderRightSection",
  component: HeaderRightSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
HeaderRightSection is a reusable subcomponent that renders:
- Notification icon with badge
- Custom notification dropdown (optional)
- User avatar and metadata (username/email)
        `,
      },
    },
  },
  argTypes: {
    username: {
      control: "text",
      defaultValue: "Olivia Rhye",
      description: "User's full name",
    },
    userEmail: {
      control: "text",
      defaultValue: "olivia@untitledui.com",
      description: "User's email address",
    },
    updatedVal: {
      control: "boolean",
      defaultValue: true,
      description: "If true, shows the red badge on notification icon",
    },
    comment: {
      control: "text",
      defaultValue: "Sample comment",
      description: "Comment text passed to NotificationComponent",
    },
    NotificationComponent: {
      control: false,
      description: "Optional component for rendering notification dropdown",
    },
  },
};

const Template = (args) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [comment, setComment] = useState(args.comment);

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  return (
    <HeaderRightSection
      {...args}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      comment={comment}
      setComment={setComment}
      handleClick={handleClick}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  username: "Olivia Rhye",
  userEmail: "olivia@untitledui.com",
  updatedVal: true,
  NotificationComponent: IncidentNotification,
};
