import React from "react";
import { Typography } from "@mui/material";
import HeaderWrapper from "./HeaderWrapper";
import HeaderRightSection from "./HeaderRightSection";

function Header({
  anchorEl,
  setAnchorEl,
  logoSrc,
  username,
  userEmail,
  handleClick,
  updatedVal,
  comment,
  setComment,
  NotificationComponent = null,
}) {
  return (
    <HeaderWrapper>
      <Typography variant="h5" fontWeight="bold" color="#1d4ed8">
        <img src={logoSrc} alt="Nticd" />
      </Typography>
      <HeaderRightSection
        NotificationComponent={NotificationComponent}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        comment={comment}
        setComment={setComment}
        handleClick={handleClick}
        updatedVal={updatedVal}
        username={username}
        userEmail={userEmail}
      />
    </HeaderWrapper>
  );
}

export default Header;
