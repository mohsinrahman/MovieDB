import React from "react";
import { Box, Typography } from "@mui/material";
import InputFieldAtom from "./InputFieldAtom/InputFieldAtom";
function HandlerAtom({ formValues, handleChange, setFormValues, errors }) {
  return (
    <>
      <Typography variant="subtitle1" textAlign="left" fontWeight="600">
        Handler
      </Typography>
      <Box
        display="flex"
        gap={2}
        mt={2}
        mb={2}
        ml={2}
        sx={{ width: "513px", height: "44px" }}
      >
        <InputFieldAtom
          /* label="Action By" */
          name="actionBy"
          value={formValues.actionBy}
          handleChange={handleChange(setFormValues)}
          fieldError={!!errors.actionBy}
          HelperTxt={errors.actionBy}
        />
      </Box>
    </>
  );
}

export default HandlerAtom;
