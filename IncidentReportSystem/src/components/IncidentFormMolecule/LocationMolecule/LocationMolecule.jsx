import React from "react";
import {
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

function LocationMolecule({
  nameRegion,
  nameCity,
  valueRegion,
  valueCity,
  handleChange,
  errRegion,
  errCity,
}) {
  return (
    <Grid item xs={12} md={6} padding={2}>
      <Typography variant="subtitle1" fontWeight="600" mb={1}>
        Location
      </Typography>

      <Box display="flex" gap={2}>
        {/* Region Select */}
        <FormControl fullWidth error={Boolean(errRegion)}>
          <InputLabel id="region-label">Region</InputLabel>
          <Select
            labelId="region-label"
            name={nameRegion}
            value={valueRegion}
            onChange={handleChange}
            label="Region"
          >
            <MenuItem value="">
              <em>Select Region</em>
            </MenuItem>
            <MenuItem value="Skåne">Skåne</MenuItem>
            <MenuItem value="Västra Götaland">Västra Götaland</MenuItem>
            <MenuItem value="Småland">Småland</MenuItem>
          </Select>
          {errRegion && <FormHelperText>{errRegion}</FormHelperText>}
        </FormControl>

        {/* City Select */}
        <FormControl fullWidth error={Boolean(errCity)}>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            name={nameCity}
            value={valueCity}
            onChange={handleChange}
            label="City"
          >
            <MenuItem value="">
              <em>Select City</em>
            </MenuItem>
            <MenuItem value="Malmö">Malmö</MenuItem>
            <MenuItem value="Lund">Lund</MenuItem>
            <MenuItem value="Gothenburg">Gothenburg</MenuItem>
            <MenuItem value="Jönköping">Jönköping</MenuItem>
          </Select>
          {errCity && <FormHelperText>{errCity}</FormHelperText>}
        </FormControl>
      </Box>
    </Grid>
  );
}

export default LocationMolecule;
