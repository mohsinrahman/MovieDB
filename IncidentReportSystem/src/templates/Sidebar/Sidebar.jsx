import React from "react";
import { Box } from "@mui/material";
import styles from "./Sidebar.module.css";
import LogoutBtn from "./LogoutBtn";
import SidebarTopBtns from "./SidebarTopBtns";

function Sidebar({ children, setShowIncidentForm, role }) {
  return (
    <Box className={styles.sidebar}>
      {children || (
        <SidebarTopBtns setShowIncidentForm={setShowIncidentForm} role={role} />
      )}
      <LogoutBtn />
    </Box>
  );
}

export default Sidebar;
