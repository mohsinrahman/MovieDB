import React, { useState } from "react";
import Header from "./Header";
import IncidentNotification from "../../components/IncidentNotification/IncidentNotification";
import logo from "../../assets/LogoBlue.png";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The **Header** component is a reusable top navigation bar that includes:

- A logo
- Notification icon with optional dropdown
- User info (avatar, name, email)

Supports external state control via props and can receive custom notification components.
        `,
      },
    },
  },
  argTypes: {
    logoSrc: {
      control: "text",
      description: "Source URL or import for the logo image",
    },
    username: {
      control: "text",
      description: "User's display name",
    },
    userEmail: {
      control: "text",
      description: "User's email address",
    },
    updatedVal: {
      control: "boolean",
      description: "If true, shows a red dot on the notification icon",
    },
    comment: {
      control: "text",
      description: "Value passed to notification component",
    },
    NotificationComponent: {
      control: false,
      description: "Component rendered inside the notification icon (dropdown)",
    },
  },
};

const Template = (args) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [comment, setComment] = useState(args.comment || "");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    localStorage.removeItem("formEntries");
  };

  return (
    <Header
      {...args}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      handleClick={handleClick}
      comment={comment}
      setComment={setComment}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  logoSrc: logo,
  username: "Olivia Rhye",
  userEmail: "olivia@untitledui.com",
  updatedVal: true,
  comment: "Incident submitted successfully.",
  NotificationComponent: IncidentNotification,
};

Default.parameters = {
  docs: {
    description: {
      story: "The default configuration of the Header component.",
    },
  },
};
