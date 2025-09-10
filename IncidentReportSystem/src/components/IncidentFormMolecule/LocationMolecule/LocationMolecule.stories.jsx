import React, { useState } from "react";
import LocationMolecule from "./LocationMolecule";

export default {
  title: "Molecules/LocationMolecule",
  component: LocationMolecule,
};

export const Default = () => {
  const [formData, setFormData] = useState({
    district: "",
    station: "",
  });

  const [errors, setErrors] = useState({
    district: "",
    station: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user selects something
    setErrors((prev) => ({
      ...prev,
      [name]: value ? "" : `Please select a ${name}`,
    }));
  };

  return (
    <LocationMolecule
      nameDistrict="district"
      nameStation="station"
      valueDistrict={formData.district}
      valueStation={formData.station}
      handleChange={handleChange}
      errDistrict={errors.district}
      errStation={errors.station}
    />
  );
};
