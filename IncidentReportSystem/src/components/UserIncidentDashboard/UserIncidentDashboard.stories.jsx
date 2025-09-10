import React, { useState } from "react";
import UserIncidentDashboard from "./UserIncidentDashboard";
import DefaultPageWrapper from "./PageWrapper";
import DefaultMainContentWrapper from "./MainContentWrapper";
import { Box, Typography, Button } from "@mui/material";

export default {
  title: "Pages/UserIncidentDashboard",
  component: UserIncidentDashboard,
  tags: ["autodocs"],
};

const MockSidebar = ({ setShowIncidentForm }) => (
  <Box sx={{ bgcolor: "#E0F2F1", p: 2 }}>
    <Typography variant="h6">Sidebar</Typography>
    <Button
      variant="outlined"
      onClick={() => setShowIncidentForm((prev) => !prev)}
    >
      + Incident
    </Button>
  </Box>
);

const MockListView = ({ tab }) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5">Deviations List View</Typography>
    <Typography>Currently viewing tab {tab}</Typography>
  </Box>
);

const MockFormView = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h5">Incident Form View</Typography>
    <Typography>This is the form preview panel.</Typography>
  </Box>
);

export const DefaultDashboard = () => {
  const [tab, setTab] = useState(1);
  const [showIncidentForm, setShowIncidentForm] = useState(false);

  return (
    <UserIncidentDashboard
      tab={tab}
      setTab={setTab}
      showIncidentForm={showIncidentForm}
      setShowIncidentForm={setShowIncidentForm}
      Sidebar={MockSidebar}
      DeviationsListMainContentMolecule={MockListView}
      IncidentDetailsForm={MockFormView}
      PageWrapper={DefaultPageWrapper}
      MainContentWrapper={DefaultMainContentWrapper}
    />
  );
};
