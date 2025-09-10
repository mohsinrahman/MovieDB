import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, Stack } from "@mui/material";

function SliderSendBtn({ sendMessage, val }) {
  return (
    <Stack direction="row" spacing={2} marginTop="15px">
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => {
          sendMessage("user", "User", val);
        }}
      >
        Send
      </Button>
    </Stack>
  );
}

export default SliderSendBtn;
