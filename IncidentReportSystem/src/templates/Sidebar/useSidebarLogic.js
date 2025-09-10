// useSidebarLogic.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Add, Logout, DescriptionOutlined } from "@mui/icons-material";

export const useSidebarLogic = ({ setShowIncidentForm }) => {
  const navigate = useNavigate();
  /*   const [showIncidentForm, setShowIncidentForm] = useState(false);
   */
  const primaryActions = [
    {
      label: "New Incident",
      icon: <Add />,
      onClick: () => setShowIncidentForm(true),
    },
    {
      label: "Incidents",
      icon: <DescriptionOutlined />,
      onClick: () => navigate("/incidents"),
      sx: { color: "#0f172a", bgcolor: "#e0ecff" },
    },
  ];

  const secondaryActions = [
    {
      label: "Logout",
      icon: <Logout />,
      onClick: () => navigate("/"),
      sx: { color: "#1d4ed8" },
    },
  ];

  return {
    primaryActions,
    secondaryActions,
    showIncidentForm,
    setShowIncidentForm,
  };
};
