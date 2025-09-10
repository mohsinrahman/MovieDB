// components/CommentInput.jsx
import React from "react";
import {
  Paper,
  Stack,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styles from "./IncidentComments.module.css";

const IncidentCommentInput = ({ val, setVal, sendMessage }) => {
  return (
    <Paper variant="outlined" sx={{ padding: 2, mt: 1 }}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Stack alignItems="center" mt={1}>
          <Typography variant="body2" className={styles.circle}>
            OR
          </Typography>
        </Stack>
        <Box flex={1}>
          <FormControl fullWidth size="small" sx={{ mb: 1 }}>
            {/*  <Select defaultValue="Normal text" disabled>
              <MenuItem value="Normal text">Normal text</MenuItem>
              <MenuItem value="bold">Bold</MenuItem>
              <MenuItem value="italic">Italic</MenuItem>
            </Select> */}
          </FormControl>
          <TextField
            fullWidth
            multiline
            minRows={2}
            placeholder="Write a Comment"
            variant="outlined"
            size="small"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </Box>
        <Stack direction="row" spacing={2}>
          {/*           <Button variant="outlined">Edit</Button>
           */}{" "}
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              if (!val || val.trim() === "") return;
              sendMessage("admin", "Admin", val);
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default IncidentCommentInput;
