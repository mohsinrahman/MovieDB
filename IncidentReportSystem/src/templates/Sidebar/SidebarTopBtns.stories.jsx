import React, { useState } from "react";
import SidebarTopBtns from "./SidebarTopBtns";

export default {
  title: "Components/Sidebar/SidebarTopBtns",
  component: SidebarTopBtns,
  tags: ["autodocs"],
};

export const Default = () => {
  return (
    <SidebarTopBtns
      setShowIncidentForm={() => {
        alert("Form trigger activated");
      }}
    />
  );
};
