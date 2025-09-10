import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { Logout as LogoutIcon } from "@mui/icons-material";
function LogoutBtn() {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<LogoutIcon />}
      onClick={() => navigate("/")}
      className={styles.logoutButton}
    >
      Logout
    </Button>
  );
}
export default LogoutBtn;
