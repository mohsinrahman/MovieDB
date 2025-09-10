import React from "react";
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function TableTop({ role }) {
  return (
    <TableHead sx={{ borderBottom: "1.5px solid rgba(224, 224, 224, 1)" }}>
      <TableRow>
        {/*  {role !== "admin" && "user" ? (
          <TableCell>
             <Checkbox />
            <Typography variant="subtitle2" display="inline" ml={1}>
              Select All
            </Typography> 
          </TableCell>
        ) : (
          <TableCell />
        )} */}
        {(role === "admin" || role === "superAdmin") && (
          <TableCell>
            <strong>Since</strong>
          </TableCell>
        )}
        <TableCell>
          <strong>Risk Level</strong>
        </TableCell>
        <TableCell>
          <strong>Priority</strong>
        </TableCell>
        <TableCell>
          <strong>Issue Date</strong>
        </TableCell>
        {role === "user" && (
          <TableCell>
            <strong>Publication Date</strong>
          </TableCell>
        )}

        <TableCell>
          <strong>Status</strong>
        </TableCell>
        {role === "user" && (
          <TableCell>
            <strong>Handler</strong>
          </TableCell>
        )}
        {(role === "admin" || role === "superAdmin") && (
          <>
            <TableCell>
              <strong>Region</strong>
            </TableCell>
            <TableCell>
              <strong>Sender</strong>
            </TableCell>
          </>
        )}
        <TableCell>
          <strong>Category</strong>
        </TableCell>
        {/*  {role === "user" && (
          <TableCell>
            <strong>Sorting</strong>
          </TableCell>
        )} */}
        <TableCell />
      </TableRow>
    </TableHead>
  );
}

export default TableTop;
