import { useEffect, useState } from "react";

export const useHeaderLogic = (formValues) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [updated, setUpdated] = useState([]);
  const [updatedVal, setUpdatedVal] = useState(false);

  useEffect(() => {
    const storedRaw = localStorage.getItem("formEntries");
    const stored = Array.isArray(JSON.parse(storedRaw))
      ? JSON.parse(storedRaw)
      : [];

    if (formValues) {
      const newUpdated = [...stored, formValues];
      setUpdated(newUpdated);
      /*       localStorage.setItem("formEntries", JSON.stringify(newUpdated));
       */ setUpdatedVal(newUpdated.length > 0);
    }
  }, [formValues]);

  const handleClick = (event) => {
    console.log("clicked");
    const newAnchorEl = anchorEl ? null : event.currentTarget;
    setAnchorEl(newAnchorEl);

    /*     localStorage.removeItem("formEntries");
     */ setUpdated([]);
    setUpdatedVal(false);
  };

  return {
    anchorEl,
    setAnchorEl,
    updatedVal,
    handleClick,
  };
};
