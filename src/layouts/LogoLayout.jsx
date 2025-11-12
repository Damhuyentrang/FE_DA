import styled from "@emotion/styled";
import { CardMedia } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const StyledLogo = styled(CardMedia)(({ theme }) => ({
  width: "400px", // Tăng từ 150px lên 450px (gấp 3)
  cover: "no-repeat",
  backgroundSize: "contain",
  height: theme.spacing(24), // Tăng từ theme.spacing(8) lên theme.spacing(24) (gấp 3)
  marginRight: "10px",
}));
function LogoLayout(props) {
  const navigate = useNavigate();
  return (
    <>
      <StyledLogo
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "1rem",
          left: "1rem",
        }}
        image=""
      />
      <Outlet />
    </>
  );
}

export default LogoLayout;