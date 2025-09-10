import React from "react";
import { Box, Link } from "@mui/material";
const NotificationToggleLinkAtom = ({ showAll, setShowAll }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    setShowAll((prev) => !prev);
  };
  return (
    <Box mt={2} textAlign="center">
      <Link
        href="#"
        underline="hover"
        fontWeight={600}
        color="#2563eb"
        onClick={handleToggle}
      >
        {showAll ? "Show Less" : "Show All Notifications"}
      </Link>
    </Box>
  );
};

export default NotificationToggleLinkAtom;
