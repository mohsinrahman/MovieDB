import React, { useState } from "react";
import { Box } from "@mui/material";
import ReportedDeviationsListMolecule from "../ReportedDeviationsListMolecule/ReportedDeviationsListMolecule";
import TabsAndSearchBarMolecule from "../TabsAndSearchBarMolecule/TabsAndSearchBarMolecule";

import NoIncident from "../NoIncident/NoIncident";
function DeviationsListMainContentMolecule({
  tab,
  setTab,
  previewAdmin,
  editAdmin,
  isEditing,
  setIsEditing,
  archiveList,
  setArchiveList,
  rows,
  setRows
}) {
  /* fetch("http://localhost:8080/api/incidents")
    .then((res) => res.json())
    .then((data) => console.log(data)); */
console.log(rows);

  const { noIncident, setNoIncident } = useState(true);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const safeRows = Array.isArray(rows) ? [...rows] : [];
const totalPages = Math.ceil(safeRows.length / rowsPerPage);
safeRows.sort((a, b) => new Date(b.date) - new Date(a.date));
const paginatedRows = safeRows.slice(
  (page - 1) * rowsPerPage,
  page * rowsPerPage
);

 /*  const totalPages = Math.ceil(rows.length / rowsPerPage);
  rows.sort((a, b) => new Date(b.date) - new Date(a.date));
  const paginatedRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  ); */
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const userData = JSON.parse(localStorage.getItem("user"));
  const role = userData?.role;

  return (
    <Box flex={1} bgcolor="#F5FAFF" p={3}>
      {/* Tabs + Search */}
      <TabsAndSearchBarMolecule
        tab={tab}
        setTab={setTab}
        paginatedRows={paginatedRows}
        setRows={setRows} /* originalRows={originalRows} */
        role={role}
      />
      {/* Empty State */}
      {noIncident ? (
        <Box
          /*           height="60%"
           */ display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={4}
        >
          <NoIncident />
        </Box>
      ) : (
        <ReportedDeviationsListMolecule
          previewAdmin={previewAdmin}
          editAdmin={editAdmin}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleChangePage={handleChangePage}
          paginatedRows={paginatedRows}
          totalPages={totalPages}
          page={page}
          rows={rows}
          setRows={setRows}
          tab={tab}
          setTab={setTab}
          archiveList={archiveList}
          setArchiveList={setArchiveList}
          role={role}
        />
      )}
    </Box>
  );
}

export default DeviationsListMainContentMolecule;
