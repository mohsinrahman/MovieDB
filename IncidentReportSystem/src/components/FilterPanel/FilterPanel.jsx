import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function FilterPanel({ onClose, onApply, initialFilters = {} }) {
  const [dateRange, setDateRange] = useState(
    initialFilters.dateRange || { from: "", to: "" },
  );
  const [district, setDistrict] = useState(initialFilters.district || "");
  const [station, setStation] = useState(initialFilters.station || "");
  const [priority, setPriority] = useState(initialFilters.priority || "");
  const [status, setStatus] = useState(initialFilters.status || "");
  const [sorting, setSorting] = useState(initialFilters.sorting || "");
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || "");
  const [errors, setErrors] = useState({});

  const clearAll = () => {
    setDateRange({ from: "", to: "" });
    setDistrict("");
    setStation("");
    setPriority("");
    setStatus("");
    setSorting("");
    setSortBy("");
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (dateRange.from && dateRange.to) {
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      if (fromDate > toDate) {
        newErrors.dateRange = "From date must be before To date.";
      }
    }

    if (station && !district) {
      newErrors.station = "Please select a district first.";
    }

    return newErrors;
  };

  const applyFilters = () => {
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onApply({
        dateRange,
        district,
        station,
        priority,
        status,
        sorting,
        sortBy,
      });
    }
  };

  return (
    <Box
      p={3}
      sx={{
        width: "350px",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h6">Filter and Sorting</Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Date Range */}
      <Typography mt={1} variant="subtitle2">
        By Date
      </Typography>
      <Box display="flex" gap={1} mb={2} mt={0.5}>
        <TextField
          size="small"
          type="date"
          value={dateRange.from}
          onChange={(e) =>
            setDateRange((prev) => ({ ...prev, from: e.target.value }))
          }
          fullWidth
          error={!!errors.dateRange}
        />
        <TextField
          size="small"
          type="date"
          value={dateRange.to}
          onChange={(e) =>
            setDateRange((prev) => ({ ...prev, to: e.target.value }))
          }
          fullWidth
          error={!!errors.dateRange}
          helperText={errors.dateRange}
        />
      </Box>

      {/* Location */}
      <Typography variant="subtitle2">By Location</Typography>
      <Box display="flex" gap={1} mb={2} mt={0.5}>
        <FormControl fullWidth size="small">
          <InputLabel>District</InputLabel>
          <Select
            value={district}
            label="District"
            onChange={(e) => setDistrict(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="District1">District1</MenuItem>
            <MenuItem value="District2">District2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small" error={!!errors.station}>
          <InputLabel>Station</InputLabel>
          <Select
            value={station}
            label="Station"
            onChange={(e) => setStation(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Station1">Station1</MenuItem>
            <MenuItem value="Station2">Station2</MenuItem>
          </Select>
          {errors.station && <FormHelperText>{errors.station}</FormHelperText>}
        </FormControl>
      </Box>

      {/* Priority */}
      <Typography variant="subtitle2">By Priority</Typography>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>All</InputLabel>
        <Select
          value={priority}
          label="All"
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>

      {/* Status */}
      <Typography variant="subtitle2">By Status</Typography>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>All</InputLabel>
        <Select
          value={status}
          label="All"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
        </Select>
      </FormControl>

      {/* Sorting */}
      <Typography variant="subtitle2">By Sorting</Typography>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>All</InputLabel>
        <Select
          value={sorting}
          label="All"
          onChange={(e) => setSorting(e.target.value)}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Ascending">Ascending</MenuItem>
          <MenuItem value="Descending">Descending</MenuItem>
        </Select>
      </FormControl>

      {/* Sort By */}
      <Typography variant="subtitle2">Sort By</Typography>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>Dates</InputLabel>
        <Select
          value={sortBy}
          label="Dates"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="Dates">Dates</MenuItem>
          <MenuItem value="Priority">Priority</MenuItem>
          <MenuItem value="Status">Status</MenuItem>
        </Select>
      </FormControl>

      {/* Buttons */}
      <Box display="flex" gap={2} mt={2}>
        <Button variant="outlined" fullWidth onClick={clearAll}>
          Clear all
        </Button>
        <Button variant="contained" fullWidth onClick={applyFilters}>
          Apply
        </Button>
      </Box>
    </Box>
  );
}

export default FilterPanel;
