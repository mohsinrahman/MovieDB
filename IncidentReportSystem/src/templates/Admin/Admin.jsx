import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import DeviationsListMainContentMolecule from "../../components/DeviationsListMainContentMolecule/DeviationsListMainContentMolecule";
import PreviewReportDetailsMolecule from "../../components/PreviewReportDetailsMolecule/PreviewReportDetailsMolecule";
import { useHeaderLogic } from "../User/HeaderLogic";
import logo from "../../assets/LogoBlue.png";
import IncidentNotification from "../../components/IncidentNotification/IncidentNotification";
import PreviewIncidentDetails from "../../components/PreviewIncidentDetails";
function Admin({
  formValues,
  setFormValues,
  comment,
  setComment,
  tab,
  setTab,
  archiveList,
  setArchiveList,
  role,
  rows,
        setRows
}) {
  const [showIncidentForm, setShowIncidentForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
   const [isEditing, setIsEditing] = useState(false);
  const { anchorEl, setAnchorEl, updatedVal, handleClick } =
    useHeaderLogic(formValues);


    

  const initial = JSON.parse(localStorage.getItem("formEntries")) || [];
  const previewAdmin = (row) => {
    console.log(row);
    setSelectedRow(row);
     setOpen(true);
  };

  const editAdmin = (row) => {
    console.log("Helloooo",row);
    setFormValues(row);
    setSelectedRow(row);
     /* setOpen(true); */
     setIsEditing(true) ;
  };
  const adminList = [
    { name: "Sam David", email: "sa@example.com" },
    { name: "Bob Smith", email: "bob@example.com" },
  ];
  return (
    <>
      <Header
        logoSrc={logo}
        username="Olivia Rhye"
        userEmail="olivia@untitledui.com"
        anchorEl={anchorEl}
        handleClick={handleClick}
        updatedVal={updatedVal}
        setAnchorEl={setAnchorEl}
        comment={comment}
        setComment={setComment}
        NotificationComponent={IncidentNotification}
      />

      <Box display="flex" height="100vh" width="100vw" marginTop="64px">
        <Sidebar setShowIncidentForm={setShowIncidentForm} role={role} />

        <Box
          sx={{
            marginLeft: "230px",
            flexGrow: 1,
            overflowY: "auto",
            height: "calc(100vh - 64px)",
            padding: 2,
          }}
        >
       {isEditing ? (
  <PreviewIncidentDetails
    row={selectedRow}
    onCancel={() => setIsEditing(false)}
    formValues={formValues}
    setFormValues={setFormValues}
    role={role}
    adminList={adminList}
    archiveList={archiveList}
    setArchiveList={setArchiveList}
    rows = {rows}
      setRows={setRows}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      comment={comment}
          setComment={setComment}
    
  />
) : (
  <DeviationsListMainContentMolecule
    previewAdmin={previewAdmin}
    editAdmin={editAdmin}
    isEditing={isEditing}
    tab={tab}
    setTab={setTab}
    archiveList={archiveList}
    setArchiveList={setArchiveList}
    rows={rows || []}
    setRows={setRows}
  />
)}

        </Box>
      </Box>
      {/* Preview component at the bottom */}
      {open && (
        <PreviewReportDetailsMolecule
          open={open}
          onClose={() => setOpen(false)}
          formValues={formValues}
          setFormValues={setFormValues}
          role={role}
          adminList={adminList}
          archiveList={archiveList}
          setArchiveList={setArchiveList}
          rows = {rows}
            setRows={setRows}
        />
      )}
      {isEditing && (
        <PreviewReportDetailsMolecule
          open={open}
          onClose={() => {
            setOpen(false);
            setIsEditing(false);
          }}
          formValues={formValues}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          comment={comment}
          setComment={setComment}
          setFormValues={setFormValues}
          role={role}
          adminList={adminList}
          archiveList={archiveList}
          setArchiveList={setArchiveList}
          rows = {rows}
            setRows={setRows}
        />
      )}
    </>
  );
}

export default Admin;
