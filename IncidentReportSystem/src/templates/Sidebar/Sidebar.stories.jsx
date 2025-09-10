import React from "react";
import Sidebar from "./Sidebar";
import { Button, Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    setShowIncidentForm: { action: "setShowIncidentForm triggered" },
    children: { control: false },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Sidebar setShowIncidentForm={() => alert("Incident triggered")} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  setShowIncidentForm: () => {},
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  setShowIncidentForm: () => {},
  children: (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button variant="contained">Custom Action A</Button>
      <Button variant="outlined">Custom Action B</Button>
    </Box>
  ),
};
