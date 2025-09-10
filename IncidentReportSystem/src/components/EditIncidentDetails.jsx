import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { CalendarToday, Send } from "@mui/icons-material";
import Header from "../templates/Header/Header";
import Sidebar from "../templates/Sidebar/Sidebar";
import logo from "../assets/LogoBlue.png";
import SymtomsCausesSolutions from "../components/IncidentFormMolecule/SymtomsCausesSolutions/SymtomsCausesSolutions";
import SortingMolecule from "../components/IncidentFormMolecule/SortingMolecule/SortingMolecule";
import LocationMolecule from "../components/IncidentFormMolecule/LocationMolecule/LocationMolecule";
import { labels } from "./IncidentFormMolecule/incidentFormMoleculeUtils";
import { getEditIncidentFormValues } from "./../utils/appUtils";
import SuccessToast from "./SuccessToast/SuccessToast";

import {
  createHandleChange,
  updateIncidentInStorage,
} from "./EditIncidentDetailsUtils";

const EditIncidentDetails = () => {
  const { state: incidentData } = useLocation();
  const [showDetails, setShowDetails] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(getEditIncidentFormValues());

  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (incidentData) {
      setFormValues(incidentData);
    }
  }, [incidentData]);
  const handleChange = createHandleChange(setFormValues, setErrors);
  const handleSave = () => {
    updateIncidentInStorage(formValues);
    setToastOpen(true);
    setTimeout(() => {
      navigate("/user");
    }, 1500);
  };

  return (
    <>
      <Header
        logoSrc={logo}
        username="Olivia Rhye"
        userEmail="olivia@untitledui.com"
      />
      <Box display="flex" height="100vh" width="100vw" marginTop="64px">
        <Sidebar />

        <Box
          sx={{
            marginLeft: "230px",
            flexGrow: 1,
            overflowY: "auto",
            height: "calc(100vh - 64px)",
            padding: 2,
          }}
        >
          <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h5" gutterBottom>
              Incidents &gt; Edit Incident Details
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="h6" color="warning.main">
                ● {incidentData.status}
              </Typography>
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1">Olivia Rhye Norman</Typography>
              <Typography variant="body2">olivia@untitledui.com</Typography>
              <Typography variant="body2" display="flex" alignItems="center">
                <CalendarToday fontSize="small" sx={{ mr: 1 }} />{" "}
                {incidentData.date}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="Incident Date"
                name="date"
                type="date"
                value={formValues.date || ""}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    name="priority"
                    value={formValues.priority || ""}
                    onChange={handleChange}
                    label="Priority"
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Risk Level</InputLabel>
                  <Select
                    name="riskLevel"
                    value={formValues.riskLevel || ""}
                    onChange={handleChange}
                    label="Risk Level"
                  >
                    <MenuItem value="No damage">No damage</MenuItem>
                    <MenuItem value="Minor damage">Minor damage</MenuItem>
                    <MenuItem value="Moderate damage">Moderate damage</MenuItem>
                    <MenuItem value="Serious Injury">Serious Injury</MenuItem>
                    <MenuItem value="Death">Death</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* Show Details Placeholder */}
              <Button
                variant="text"
                fullWidth
                onClick={() => setShowDetails((prev) => !prev)}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </Button>
              {showDetails && (
                <Box mt={2}>
                  <SortingMolecule
                    labels={labels}
                    name="category"
                    value={formValues.category || ""}
                    identifierValue={formValues.identifier || ""}
                    handleChange={handleChange}
                    fieldError={errors.category}
                    helperText={errors.category}
                  />
                  <LocationMolecule
                    nameRegion="region"
                    valueRegion={formValues.region}
                    nameCity="city"
                    valueCity={formValues.city}
                    handleChange={handleChange}
                    errRegion={errors?.region}
                    errCity={errors?.city}
                  />
                  <SymtomsCausesSolutions
                    formValues={formValues}
                    errors={errors}
                    handleChange={handleChange}
                  />
                </Box>
              )}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Comment
            </Typography>

            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent
                sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
              >
                <Avatar>A</Avatar>
                <Box>
                  <Typography variant="subtitle2">Aya Youssef</Typography>
                  <Typography variant="caption">Commented 1h ago</Typography>
                  <Typography variant="body2" mt={1}>
                    Lorem Ipsum is simply dummy text of the printing and Lorem
                    Ipsum is simply dummy text of the?
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent
                sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
              >
                <Avatar>O</Avatar>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  placeholder="Write a Comment"
                  variant="outlined"
                />
              </CardContent>
            </Card>

            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" endIcon={<Send />}>
                Send
              </Button>
            </Box>
          </Container>
        </Box>
        <SuccessToast
          open={toastOpen}
          handleClose={() => setToastOpen(false)}
          message="Incident has been updated successfully"
        />
      </Box>
    </>
  );
};

export default EditIncidentDetails;
