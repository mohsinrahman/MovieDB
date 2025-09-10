import React, { useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { getNewIncidentFormValues } from "./utils/appUtils";

function App() {
  const [tab, setTab] = useState(0);
  const [archiveList, setArchiveList] = useState([]);
  /* const [archiveList, setArchiveList] = useState(() => {
    const savedArchiveList = localStorage.getItem("archiveList");
    return savedArchiveList ? JSON.parse(savedArchiveList) : [];
  }); */
  const dataRows = [
    {
      id: 1,
      actionBy: "Olivia",
      causes: "Coolar is simply Writers...",
      date: "2025-01-09",
      status: "Ongoing",
      handler: "Jazzy B",
      station: "Report in process...",
      symptoms: "Keep it clean...",
      district: "District1",
      solutions: "Fix the router...",
      priority: "High",
    },
  ];
  
  const storedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
  const normalizedEntries = Array.isArray(storedEntries)
    ? storedEntries
    : [storedEntries];
  
  const [rows, setRows] = useState([...dataRows, ...normalizedEntries]);
  const [comment, setComment] = useState([
    {
      id: 10001,
      sender: "admin",
      name: "Admin",
      message: "Welcome! How can I help?",
      timestamp: new Date().toISOString(),
      isRead: false,
    },
    {
      id: 10002,
      sender: "user",
      name: "User",
      message: "I need help.",
      timestamp: new Date().toISOString(),
      isRead: false,
    },
  ]);

  const formRef = useRef(null);

  const [formValues, setFormValues] = useState(getNewIncidentFormValues());
  const userData = JSON.parse(localStorage.getItem("user"));
  const role = userData?.role;
  return (
    <Router>
      <AppRoutes
        tab={tab}
        setTab={setTab}
        formRef={formRef}
        formValues={formValues}
        setFormValues={setFormValues}
        comment={comment}
        setComment={setComment}
        archiveList={archiveList}
        setArchiveList={setArchiveList}
        role={role}
        rows={rows}
        setRows={setRows}
      />
    </Router>
  );
}

export default App;
