import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Button,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Email, CalendarToday, Person } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ThreeDotBtn from "../ThreeDotBtn";

import emailjs from "emailjs-com";

import IncidentComments from "../IncidentComments/IncidentComments";
import {
  getDaysSince,
  isArchived,
  statusStyles,
} from "../ReportedDeviationsListMolecule/reportedDeviationsListUtils";

export default function PreviewReportDetailsMolecule({
  open,
  onClose,
  formRef,
  formValues,
  setFormValues,
  isEditing,
  setIsEditing,
  comment,
  setComment,
  setArchiveList,
  archiveList,
  role,
  adminList,
  rows,
  setRows
}) {
  const [editing, setEditing] = useState(false);
  const [showReassignSelect, setShowReassignSelect] = useState(false);

  const handleDialogClose = (event, reason) => {
    if (onClose) {
      onClose(event, reason);
    }
    setIsEditing(false);
  };

  const handleIconClick = () => {
    setEditing(!editing);
  };

  const handlePriorityChange = (id) => (event) => {
    const newPriority = Number(event.target.value);
    const allStoredIncidents =
      JSON.parse(localStorage.getItem("formEntries")) || [];

    const updatedIncidents = allStoredIncidents.map((incident) =>
      incident.id === id ? { ...incident, priority: newPriority } : incident,
    );

    localStorage.setItem("formEntries", JSON.stringify(updatedIncidents));

    const updatedForm = updatedIncidents.find((i) => i.id === id);
    console.log(updatedForm);
    if (updatedForm) {
      setFormValues(updatedForm);
    } else {
      console.warn("Updated incident not found!");
    }

    setEditing(false);
  };

  const handleMarkAsDone = () => {
    const updatedStatus = "Finished";

    const allStoredIncidents =
      JSON.parse(localStorage.getItem("formEntries")) || [];

    const updatedIncidents = allStoredIncidents.map((incident) =>
      incident.id === formValues.id
        ? { ...incident, status: updatedStatus }
        : incident,
    );

    localStorage.setItem("formEntries", JSON.stringify(updatedIncidents));

    const updatedIncident = updatedIncidents.find(
      (i) => i.id === formValues.id,
    );
    if (updatedIncident) {
      setFormValues(updatedIncident);
    }
  };

  const handleReassign = async (selectedEmail) => {
    const selectedAdmin = adminList.find((a) => a.email === selectedEmail);
    if (!selectedAdmin) return;

    const allIncidents = JSON.parse(localStorage.getItem("formEntries")) || [];
    const updatedIncidents = allIncidents.map((incident) =>
      incident.id === formValues.id
        ? { ...incident, assignedTo: selectedAdmin }
        : incident,
    );

    localStorage.setItem("formEntries", JSON.stringify(updatedIncidents));
    const updatedIncident = updatedIncidents.find(
      (i) => i.id === formValues.id,
    );
    setFormValues(updatedIncident);
    setShowReassignSelect(false);

    try {
      await emailjs.send(
        "service_7zkc509",
        "template_mb7tvri",
        {
          to_name: selectedAdmin.name,
          to_email: selectedAdmin.email,
          incident_id: formValues.id,
          priority: formValues.priority,
        },
        "pnNzD1bgS99w4FmOo",
      );
      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };
  const handelArchiveList = (formValues) => {
    alert(formValues.id);
    setArchiveList((prev) => {
      const alreadyExists = prev.some((item) => item.id === formValues.id);
      if (alreadyExists) return prev;

      const updatedList = [...prev, formValues];
      localStorage.setItem("archiveList", JSON.stringify(updatedList));
      return updatedList;
    });

    setRows((prev) => {
      const updatedRows = prev.filter((row) => row.id !== formValues.id);
      return updatedRows;
    }); 
  };
  useEffect(() => {
    if (role !== "admin" && role !== "superAdmin") return;
  
    try {
      const saved = localStorage.getItem("archiveList");
      if (saved) {
        setArchiveList(JSON.parse(saved));
      }
    } catch (error) {
      setArchiveList([]);
    }
  }, [role]);
  

  useEffect(() => {
    if (role === "admin" || role === "superAdmin") {
      console.log("Updated archiveList:", archiveList);
    }
  }, [archiveList]);

  return (
    <>
      <Dialog open={open} onClose={handleDialogClose} fullWidth maxWidth="md">
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Preview Report Details
          {/* <IconButton onClick={onClose} sx={{ borderRadius: "0px" }}>
            <Typography variant="button">Cancel</Typography>
          </IconButton> */}
          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            {!isEditing && (
              <>
                <Button variant="outlined" onClick={onClose}>
                  Edit
                </Button>

                <Button
                  variant="contained"
                  onClick={(event) => {
                    event.preventDefault();
                    if (formRef?.current) {
                      formRef.current.requestSubmit();
                      /* setShowIncidentForm(false); */ // Assume success or handle in onSubmit
                    }
                  }}
                >
                  Submit
                </Button>
              </>
            )}
          </Box>
        </DialogTitle>
        {(role === "admin" || role === "superAdmin") && (
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              paddingY: 2,
            }}
          >
            {/* Left Section: Status, Time, Priority */}
            <Box display="flex" alignItems="center" gap={2}>
              {/* Status */}
              <Box display="flex" alignItems="center" gap={0.5}>
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: statusStyles[formValues.status]?.dot || "#999",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                <Typography
                  sx={{
                    color: "#001F4D",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  {formValues.status}
                </Typography>
              </Box>

              {/* Time Since */}
              <Box display="flex" alignItems="center" gap={0.5}>
                <AccessTimeIcon sx={{ color: "#F04438", fontSize: 20 }} />
                <Typography
                  sx={{
                    color: "#001F4D",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  Since{" "}
                  {getDaysSince(
                    formValues.reportDate
                      ? formValues.reportDate.split("T")[0]
                      : " ",
                  )}
                </Typography>
              </Box>

              {/* Priority */}
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography
                  sx={{
                    color: "#001F4D",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  Priority
                </Typography>

                <ArrowUpwardIcon
                  sx={{ color: "#001F4D", strokeWidth: 1, fontSize: 16 }}
                />

                <Typography sx={{ color: "#F04438", fontWeight: 600 }}>
                  {formValues.priority}
                </Typography>

                <IconButton onClick={handleIconClick} size="small">
                  <EditNoteIcon sx={{ color: "#001F4D", fontSize: 20 }} />
                </IconButton>

                {editing && (
                  <Select
                    value={formValues.priority}
                    onChange={(event) =>
                      handlePriorityChange(formValues.id)(event)
                    }
                    size="small"
                    sx={{ fontSize: 14, height: 30 }}
                  >
                    {[1, 2, 3, 4, 5].map((level) => (
                      <MenuItem key={level} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </Box>
            </Box>

            {/* Right Section: Action Buttons */}
            <Box display="flex" alignItems="center" gap={1}>
              <Button
                variant="contained"
                startIcon={<CheckCircleIcon />}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#1976d2",
                  },
                }}
                onClick={handleMarkAsDone}
                disabled={formValues.status === "Finished"}
              >
                Mark as done
              </Button>
              {/* uuuuuu */}
              {role === "superAdmin" && (
                <>
                  {showReassignSelect ? (
                    <Select
                      value={formValues.assignedTo?.email || ""}
                      onChange={(e) => handleReassign(e.target.value)}
                      size="small"
                      sx={{ minWidth: 150 }}
                    >
                      {adminList.map((admin) => (
                        <MenuItem key={admin.email} value={admin.email}>
                          {admin.name}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    <Button
                      variant="outlined"
                      startIcon={<SwapHorizIcon />}
                      onClick={() => setShowReassignSelect(true)}
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#1976d2",
                        color: "#1976d2",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: 14,
                        "&:hover": {
                          backgroundColor: "#1976d2",
                          borderColor: "#1976d2",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      Reassign to
                    </Button>
                  )}
                </>
              )}

              {/* sssssss */}
              <ThreeDotBtn  handelArchiveList={handelArchiveList} formValues={formValues}/>
            </Box>
          </DialogTitle>
        )}

        {role !== "admin" && role !== "superAdmin" && (
          <DialogTitle
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              paddingY: 2,
            }}
          >
            <ArrowUpwardIcon
              sx={{ color: "red", strokeWidth: 1, fontSize: 16 }}
            />

            <Typography sx={{ color: "#000000", fontWeight: 600 }}>
              {formValues.priority}
            </Typography>
          </DialogTitle>
        )}

        <DialogContent dividers>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Person />
              <Typography>{formValues.actionBy}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Email />
              <Typography>{formValues.email}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <CalendarToday />
              <Typography>
                {formValues.reportDate
                  ? new Date(formValues.reportDate).toISOString().split("T")[0]
                  : "—"}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 3 }}>
            Incident Date{" "}
          </Typography>
          <Typography>{formValues.date}</Typography>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={2} mt={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" fontWeight="bold">
                Risk Level
              </Typography>
              <Typography>{formValues.riskLevel}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />

          <Grid
            container
            mt={2}
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "16px",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" fontWeight="bold">
                Category
              </Typography>
              <Typography>{formValues.category}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" fontWeight="bold">
              {(formValues.identifier) ? formValues.identifier : ""}
              </Typography>
              <Typography>{formValues.identifier}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />
          <Grid
            container
            mt={2}
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "16px",
            }}
          >
            <Grid item xs={6}>
              <Typography variant="subtitle2" fontWeight="bold">
                Region
              </Typography>
              <Typography>{formValues.region}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" fontWeight="bold">
                City
              </Typography>
              <Typography>{formValues.city}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Symptoms
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <Box component="ul" sx={{ listStyle: "none", margin: 0 }}>
                <Box component="li">{formValues.symptoms}</Box>
              </Box>
            </Typography>
          </Box>

          <Box mt={3}>
            <Typography variant="subtitle1" fontWeight="bold">
              Causes
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", margin: 0 }}>
              <Box component="li">{formValues.causes}</Box>
            </Box>
          </Box>

          <Box mt={3}>
            <Typography variant="subtitle1" fontWeight="bold">
              Solutions
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", margin: 0 }}>
              <Box component="li">{formValues.solutions}</Box>
            </Box>
          </Box>
        </DialogContent>
        {isEditing && (
          <IncidentComments comment={comment} setComment={setComment} />
        )}
      </Dialog>
    </>
  );
}
