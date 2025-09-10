import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  getDaysSince,
  statusStyles,
  isArchived,
} from "./reportedDeviationsListUtils";

import {
  Box,
  TableBody,
  TableCell,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "./TableDataMolecule.module.css";
function TableData({
  paginatedRows,
  role,
  editAdmin,
  previewAdmin,
  setArchiveList,
  archiveList,
  tab,
  setRows,
  rows,
}) {
  const navigate = useNavigate();

  const editEntry = (row, e) => {
    navigate(`/edit/${row.id}`, { state: row });
  };
  const riskClassMap = {
    death: styles.death,
    "serious injury": styles.seriousInjury,
    "moderate damage": styles.moderateDamage,
    "minor damage": styles.minorDamage,
    "no damage": styles.noDamage,
  };

  const normalizeRiskLevel = (riskLevel) => {
    return riskLevel?.toLowerCase();
  };
  return (
    <TableBody sx={{ overflowY: "auto" }}>
      {/* For Archive list */}
      {(role === "admin" || role === "superAdmin") &&
        tab === 1 &&
        archiveList.map((row, index) => (
          <TableRow hover key={index}>
            <TableCell>
              <Box display="flex" alignItems="center">
                <Box component="p" ml={1}>
                  <b>{row.actionBy}</b>
                </Box>
              </Box>
            </TableCell>

            <TableCell> {new Date(row.date).toLocaleDateString()}</TableCell>
            <TableCell>
              <Chip
                label="Active"
                color="primary"
                size="small"
                className={styles.chip}
                icon={<Box component="span" className={styles.chipIcon} />}
              />
            </TableCell>
            <TableCell>{row.handler}</TableCell>
            <TableCell>
              {row.city ? row.city.split(" ").slice(0, 3).join(" ") : ""}
            </TableCell>
            {role === "user" && (
              <TableCell>
                {row.symptoms.split(" ").slice(0, 3).join(" ")}
              </TableCell>
            )}
            <TableCell>
              {(role === "admin" || role === "superAdmin") && (
                <IconButton size="small">
                  <VisibilityIcon
                    fontSize="small"
                    onClick={(e) => previewAdmin(row, e)}
                  />
                </IconButton>
              )}
              {role === "user" && (
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              )}

              {(role === "admin" || role === "superAdmin") && (
                <IconButton size="small">
                  <EditIcon
                    fontSize="small"
                    onClick={(e) => editAdmin(row, e)}
                  />
                </IconButton>
              )}
            </TableCell>
          </TableRow>
        ))}

      {/*   ))} */}
      {/* {paginatedRows.map((row, index) => ( */}
      {tab === 0 &&
        [...paginatedRows]
          .filter((row) => !isArchived(row))
          .map((row, index) => (
            <TableRow
              hover
              key={index}
              className={riskClassMap[normalizeRiskLevel(row.riskLevel)] || ""}
            >
              {/*    <TableCell>
                <Box display="flex" alignItems="flex-start">
                  {role === "admin" && (
                    <Box display="flex" alignItems="center">
                      <IconButton size="small">
                        <ArchiveIcon
                          color="action"
                          onClick={() => handelArchiveList(row)}
                        />
                      </IconButton>

                      <Box component="p" ml={1}>
                        <b>{row.actionBy}</b>
                      </Box>
                    </Box>
                  )}
                </Box>
              </TableCell> */}

              {(role === "admin" || role === "superAdmin") && (
                <TableCell>
                  {getDaysSince(
                    row.reportDate ? row.reportDate.split("T")[0] : "—",
                  )}
                </TableCell>
              )}
              <TableCell>{row.riskLevel}</TableCell>
              <TableCell>
                {row.priority >= 3 ? (
                  <ArrowUpwardIcon
                    fontSize="small"
                    sx={{ verticalAlign: "middle", ml: 1 }}
                  />
                ) : (
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ verticalAlign: "middle", ml: 1 }}
                  />
                )}
                {row.priority}
              </TableCell>
              <TableCell> {new Date(row.date).toLocaleDateString()}</TableCell>
              {role === "user" && <TableCell> {row.reportDate}</TableCell>}
              <TableCell>
                <Chip
                  label={statusStyles[row.status]?.text || "Unknown"}
                  size="small"
                  sx={{
                    backgroundColor: statusStyles[row.status]?.bg || "#eee",
                    color: "#000",
                    fontWeight: "bold",
                    pl: 1,
                    pr: 1,
                    borderRadius: "16px",
                  }}
                  icon={
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: statusStyles[row.status]?.dot || "#999",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    />
                  }
                />
              </TableCell>
              {(role === "admin" || role === "superAdmin") && (
                <>
                  <TableCell>{row.region}</TableCell>
                  <TableCell>
                    {row.actionBy} {row.email}
                  </TableCell>
                </>
              )}
              {role === "user" && (
                <>
                  <TableCell>{row.handler}</TableCell>
                </>
              )}

              {/* <TableCell>
                {row.city .split(" ").slice(0, 3).join(" ") }
              </TableCell> */}

              <TableCell>{row.category}</TableCell>
              {role === "user" && (
                <TableCell>
                  <IconButton size="small" sx={{ mt: 1 }}>
                    <EditIcon
                      fontSize="small"
                      onClick={(e) => editEntry(row, e)}
                    />
                  </IconButton>
                </TableCell>
              )}

              <TableCell>
                {(role === "admin" || role === "superAdmin") && (
                  <IconButton size="small">
                    <VisibilityIcon
                      fontSize="small"
                      onClick={(e) => previewAdmin(row, e)}
                    />
                  </IconButton>
                )}
                {/* {role === "user" && (
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              )} */}

                {(role === "admin" || role === "superAdmin") && (
                  <IconButton size="small">
                    <EditIcon
                      fontSize="small"
                      onClick={(e) => editAdmin(row, e)}
                    />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
      {/*   ))} */}
    </TableBody>
  );
}

export default TableData;
