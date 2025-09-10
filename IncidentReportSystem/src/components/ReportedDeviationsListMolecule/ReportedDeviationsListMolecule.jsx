import React from "react";
import TableTop from "./TableTop";
import TableData from "./TableData";
import {
  Box,
  Table,
  TableContainer,
  Paper,
  Pagination,
  PaginationItem,
  IconButton,
} from "@mui/material";
import styles from "./ReportedDeviationsListMolecule.module.css";

function ReportedDeviationsListMolecule({
  previewAdmin,
  editAdmin,
  handleChangePage,
  paginatedRows,
  totalPages,
  page,
  tab,
  setRows,
  rows,
  archiveList,
  setArchiveList,
  role,
}) {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ mt: 4, width: "100%", overflowX: "hidden" }}
      >
        {(tab === 0 || tab === 1) && (
          <Table>
            <TableTop role={role} />
            <TableData
              setRows={setRows}
              tab={tab}
              paginatedRows={paginatedRows}
              role={role}
              previewAdmin={previewAdmin}
              editAdmin={editAdmin}
              archiveList={archiveList}
              setArchiveList={setArchiveList}
              rows={rows}
            />
          </Table>
        )}
        {/*        {tab === 3 && (
          <Table  sx={{ tableLayout: "fixed", width: "100%" }}>
            <TableTop role={role} />
            <TableData
              setRows={setRows}
              tab={tab}
              paginatedRows={paginatedRows}
              role={role}
              previewAdmin={previewAdmin}
              editAdmin={editAdmin}
              archiveList={archiveList}
              setArchiveList={setArchiveList}
              rows={rows}
            />
          </Table>
        )}
        {tab === 0 && (
          <Table  sx={{ tableLayout: "fixed", width: "100%" }}>
            <TableTop role={role} />
            <TableData
              setRows={setRows}
              tab={tab}
              paginatedRows={paginatedRows}
              role={role}
              previewAdmin={previewAdmin}
              editAdmin={editAdmin}
              archiveList={archiveList}
              setArchiveList={setArchiveList}
            />
          </Table>
        )} */}

        <Box className={styles.flexContainer}>
          <IconButton
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            {/*             <ArrowBackIcon />
             */}{" "}
          </IconButton>

          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            shape="rounded"
            siblingCount={1}
            boundaryCount={1}
            showFirstButton={false}
            showLastButton={false}
            renderItem={(item) => (
              <PaginationItem className={styles.tabSelected} {...item} />
            )}
          />

          <IconButton
            disabled={page === totalPages}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            {/*  <ArrowForwardIcon /> */}
          </IconButton>
        </Box>
      </TableContainer>
    </>
  );
}

export default ReportedDeviationsListMolecule;
