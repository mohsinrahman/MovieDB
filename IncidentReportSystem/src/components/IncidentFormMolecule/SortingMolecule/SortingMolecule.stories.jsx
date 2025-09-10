import React, { useState } from "react";
import SortingMolecule from "./SortingMolecule";

export default {
  title: "Molecules/SortingMolecule",
  component: SortingMolecule,
};

export const Default = () => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const labels = [
    "Vehicle",
    "Communication",
    "Premises",
    "Healthcare",
    "Patient",
    "Personal",
    "Receiving Care Facility",
    "Medical Technical equipment",
    "SoS Alarm",
    "Other amb equipment",
  ];

  return (
    <>
      <SortingMolecule labels={labels} />
      <div style={{ marginTop: "16px", fontSize: "14px" }}>
        {selectedLabels.join(", ")}
      </div>
    </>
  );
};
