import React, { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  Typography,
  Tabs,
  Tab,
  InputBase,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";
import FilterPanel from "../FilterPanel/FilterPanel";
import styles from "./TabsAndSearchBarMolecule.module.css";

function TabsAndSearchBarMolecule({
  tab,
  setTab,
  paginatedRows,
  setRows,
  role,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredData, setFilteredData] = useState(paginatedRows); // initially all
  const initialFilters = {
    dateRange: { from: "", to: "" },
    district: "",
    station: "",
    priority: "",
    status: "",
    sorting: "",
    sortBy: "",
  };

  const handleApplyFilters = (filters) => {
    const { dateRange, district, station, priority, status } = filters;
    let results = [...paginatedRows];

    if (dateRange.from)
      results = results.filter(
        (row) => new Date(row.date) >= new Date(dateRange.from),
      );
    if (dateRange.to)
      results = results.filter(
        (row) => new Date(row.date) <= new Date(dateRange.to),
      );
    if (district) results = results.filter((row) => row.district === district);
    if (station) results = results.filter((row) => row.station === station);
    if (priority) results = results.filter((row) => row.priority === priority);
    if (status) results = results.filter((row) => row.status === status);

    setFilteredData(results);
    setRows(results);
    setOpen(false);
  };

  const handleSearch = (searchTerm) => {
    const filteredData = originalRows.filter((item) =>
      item.date.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setRows(filteredData);
  };

  return (
    <>
      <Typography variant="h6" fontWeight="bold">
        Incidents
      </Typography>
      <Box bgcolor="white" p={2} borderRadius={2} boxShadow={1}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="All" />
          {role !== "admin" && role !== "superAdmin" && role !== "user" && (
            <Tab label="On going" />
          )}
          {role !== "admin" && role !== "superAdmin" && role !== "user" && (
            <Tab label="Finished" />
          )}
          {(role === "admin" || role === "superAdmin") && (
            <Tab label="Archived" />
          )}
        </Tabs>

        <Box display="flex" alignItems="center" gap={2} mt={2} px={1}>
          <Box className={styles.searchBox}>
            <SearchIcon color="action" />
            <InputBase
              placeholder="Search"
              fullWidth
              sx={{ ml: 1 }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </Box>
          {(role === "admin" || role === "superAdmin") && (
            <Button
              startIcon={<FilterIcon />}
              variant="outlined"
              onClick={() => setOpen(true)}
            >
              Filter
            </Button>
          )}
        </Box>
      </Box>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: fullScreen ? "100%" : 350 } }}
      >
        <FilterPanel
          onClose={() => setOpen(false)}
          onApply={handleApplyFilters}
          initialFilters={initialFilters}
        />
      </Drawer>
    </>
  );
}

export default TabsAndSearchBarMolecule;
