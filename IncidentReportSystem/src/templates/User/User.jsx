import React, { useState } from "react";
import Header from "../Header/Header";
import UserIncidentDashboard from "../../components/UserIncidentDashboard/UserIncidentDashboard";
import Sidebar from "../Sidebar/Sidebar";
import DeviationsListMainContentMolecule from "../../components/DeviationsListMainContentMolecule/DeviationsListMainContentMolecule";
import IncidentDetailsForm from "../../components/IncidentFormMolecule/IncidentFormMolecule";
import { useHeaderLogic } from "./HeaderLogic";
import logo from "../../assets/LogoBlue.png";
import IncidentNotification from "../../components/IncidentNotification/IncidentNotification";

function User({
  formRef,
  formValues,
  setFormValues,
  comment,
  setComment,
  tab,
  setTab,
  rows,
  setRows
}) {
  const [showIncidentForm, setShowIncidentForm] = useState(false);
  const { anchorEl, setAnchorEl, updatedVal, handleClick } =
    useHeaderLogic(formValues);

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
      <UserIncidentDashboard
        tab={tab}
        setTab={setTab}
        showIncidentForm={showIncidentForm}
        setShowIncidentForm={setShowIncidentForm}
        formRef={formRef}
        formValues={formValues}
        setFormValues={setFormValues}
        comment={comment}
        setComment={setComment}
        Sidebar={Sidebar}
        DeviationsListMainContentMolecule={DeviationsListMainContentMolecule}
        IncidentDetailsForm={IncidentDetailsForm}
        rows={rows}
        setRows={setRows}
      />
    </>
  );
}

export default User;
