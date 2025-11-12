import styled from "@emotion/styled";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  CardMedia,
  IconButton,
  MenuItem,
  Stack,
  SvgIcon,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { usePopover } from "../../../hooks/use-popover";
import AccountPopover from "./AccountPopover";
import { useNavigate } from "react-router-dom";
import { checkInfo } from "../../../services/customer/AuthServices";
import { useAuth } from "../../../auth/AuthProvider";

const TOP_NAV_HEIGHT = 64;

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.white.main,
  display: "flex",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 100,
  boxShadow: "0 0 25px 0 rgba(0,0,0,.06)",
}));

const StyledLogo = styled(CardMedia)(({ theme }) => ({
  display: "flex",
  width: "190px",
  cover: "no-repeat",
  backgroundSize: "contain",
  height: theme.spacing(8),
  marginRight: "10px",
  cursor: "pointer",
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.template.main,
  padding: "12px 20px !important",
  borderRadius: 0,
  fontWeight: "bold",
  fontSize: "18px",
  transition: "all 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "rgba(11, 83, 148, 0.08)", // hover nền nhẹ, tinh tế
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)", // shadow mảnh
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  padding: "10px 18px !important",
  borderRadius: 0,
  fontWeight: "bold",
  fontSize: "14px",
  boxShadow: "none",
  color: theme.palette.white.main,
  "&:hover": {
    background: "linear-gradient(45deg, #4dc9e6 30%, #0974f1 90%)", // giữ màu cũ
    color: theme.palette.white.main,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // hover nổi nhẹ
  },
}));

function NavBar({ onDrawerClick }) {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const accountPopover = usePopover();
  const { token, setFullName, fullName, setRole, setNurseType } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleGetFullName = async () => {
      const response = await checkInfo();
      if (response.success) {
        setFullName(response.data.data.fullName);
        setRole(response.data.data.role);
        setNurseType(response.data.data.nurseType);
      }
    };
    handleGetFullName();
  }, [setFullName, setRole, setNurseType]);

  const menuItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", path: "/introduce" },
    { label: "Quy trình", path: "/process" },
    { label: "Thắc mắc", path: "/question" },
    { label: "Liên hệ", path: "/support" },
  ];

  return (
    <Wrapper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ width: "100%", minHeight: TOP_NAV_HEIGHT }}
      >
        {!lgUp && (
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={2}
            py={1.5}
          >
            <StyledLogo
              onClick={() => navigate("/")}
              image="https://res.cloudinary.com/dgxmy3xwq/image/upload/v1762684631/images_vvrjpb.jpg"
            />
            <IconButton onClick={() => onDrawerClick(true)}>
              <SvgIcon fontSize="medium">
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </Stack>
        )}

        {lgUp && (
          <Stack
            direction={"row"}
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 5, py: 1.5, maxWidth: "1240px", width: "100%" }}
          >
            <StyledLogo
              onClick={() => navigate("/")}
              image="https://res.cloudinary.com/dgxmy3xwq/image/upload/v1762684631/images_vvrjpb.jpg"
            />

            <Toolbar component={Stack} direction={"row"} sx={{ height: 40 }}>
              {menuItems.map((item, index) => (
                <CustomMenuItem key={index} onClick={() => navigate(item.path)}>
                  {item.label}
                </CustomMenuItem>
              ))}
            </Toolbar>

            <Box>
              {!token || !fullName ? (
                <CustomButton
                  variant="contained"
                  onClick={() => navigate("/auth/login")}
                  sx={{
                    background:
                      "linear-gradient(45deg, #4dc9e6 30%, #0974f1 90%)",
                  }}
                >
                  <LoginIcon sx={{ mr: 0.5 }} />
                  Đăng nhập
                </CustomButton>
              ) : (
                <CustomButton
                  variant="outlined"
                  onClick={accountPopover.handleOpen}
                  ref={accountPopover.anchorRef}
                >
                  <PersonIcon sx={{ mr: 0.5 }} />
                  {fullName}
                </CustomButton>
              )}
            </Box>
            <AccountPopover
              anchorEl={accountPopover.anchorRef.current}
              open={accountPopover.open}
              onClose={accountPopover.handleClose}
            />
          </Stack>
        )}
      </Stack>
    </Wrapper>
  );
}

export default NavBar;
