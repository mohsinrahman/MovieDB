import React from "react";
import DefaultPageWrapper from "./PageWrapper";
import DefaultMainContentWrapper from "./MainContentWrapper";

function UserIncidentDashboard({
  showIncidentForm = false,
  Sidebar,
  DeviationsListMainContentMolecule,
  IncidentDetailsForm,
  PageWrapper = DefaultPageWrapper,
  MainContentWrapper = DefaultMainContentWrapper,
  ...props
}) {
  return (
    <PageWrapper>
      {Sidebar && <Sidebar {...props} />}
      <MainContentWrapper>
        {!showIncidentForm ? (
          <DeviationsListMainContentMolecule {...props} />
        ) : (
          <IncidentDetailsForm {...props} showIncidentForm={showIncidentForm} />
        )}
      </MainContentWrapper>
    </PageWrapper>
  );
}

export default UserIncidentDashboard;
