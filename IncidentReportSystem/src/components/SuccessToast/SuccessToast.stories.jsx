import React, { useState } from "react";
import SuccessToast from "./SuccessToast";

export default {
  title: "Atoms/SuccessToast",
  component: SuccessToast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
SuccessToast is a reusable toast notification component using MUI's Snackbar and Alert.  
It is agnostic, customizable, and used to show contextual messages (success, error, etc.) to users.

### Usage
\`\`\`jsx
<SuccessToast
  open={open}
  handleClose={handleClose}
  message="Incident has been sent successfully"
  severity="success"
/>
\`\`\`

Supports:
- Different severity levels
- Custom auto hide duration
- Optional icon toggle
- Dynamic message (text or JSX)
`,
      },
    },
  },
  argTypes: {
    open: {
      description: "Whether the toast is visible",
      control: false,
    },
    handleClose: {
      description: "Callback to handle close event",
      control: false,
    },
    message: {
      description: "Toast message (text or JSX)",
      control: "text",
      defaultValue: "Incident has been sent successfully",
    },
    severity: {
      description: "Alert severity level",
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
      defaultValue: "success",
    },
    autoHideDuration: {
      description: "Duration before toast auto closes (ms)",
      control: { type: "number" },
      defaultValue: 4000,
    },
    showIcon: {
      description: "Toggle MUI Alert icon visibility",
      control: "boolean",
      defaultValue: false,
    },
    className: {
      description: "Custom class for styling (optional)",
      control: "text",
    },
  },
};

const Template = (args) => {
  const [open, setOpen] = useState(true);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return <SuccessToast {...args} open={open} handleClose={handleClose} />;
};

export const Default = Template.bind({});
Default.args = {
  message: "Incident has been sent successfully",
  severity: "success",
  autoHideDuration: 4000,
  showIcon: false,
};
