import React, { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import Login from "./LoginMolecule";
import { Typography, Box } from "@mui/material";

export default {
  title: "Pages/Login",
  component: Login,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
};

export const LoginSuccess = () => {
  const [message, setMessage] = useState("");

  const mockLogin = (e) => {
    e.preventDefault();

    const emailValue =
      document.querySelector('input[name="email"]')?.value || "";
    const passwordValue =
      document.querySelector('input[name="password"]')?.value || "";
    const validUsers = [
      { email: "user@example.com", password: "user123" },
      { email: "admin@example.com", password: "admin123" },
    ];

    const isValid = validUsers.some(
      (user) => user.email === emailValue && user.password === passwordValue,
    );

    if (isValid) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <Box>
      {message && (
        <Typography
          color={message.includes("successful") ? "success.main" : "error.main"}
          sx={{ mt: 2 }}
        >
          {message}
        </Typography>
      )}
      <Login onSubmit={mockLogin} />
    </Box>
  );
};
