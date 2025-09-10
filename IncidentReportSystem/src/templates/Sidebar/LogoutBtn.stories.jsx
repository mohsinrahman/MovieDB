import React from "react";
import LogoutBtn from "./LogoutBtn";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Sidebar/LogoutBtn",
  component: LogoutBtn,
  tags: ["autodocs"],
};

export const Default = () => (
  <BrowserRouter>
    <LogoutBtn />
  </BrowserRouter>
);
