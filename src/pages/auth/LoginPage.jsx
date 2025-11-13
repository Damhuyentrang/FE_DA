import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import InputPhoneNumber from "../../components/Auth/InputPhoneNumber";
import Page from "../../components/General/Page";
import InputPassword from "../../components/Auth/InputPassword";
import InputOTP from "../../components/Auth/InputOTP";
import Register from "../../components/Auth/Register";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const urlImage =
  "https://res.cloudinary.com/dgxmy3xwq/image/upload/v1762684631/images_vvrjpb.jpg";

const urlBackground =
  "https://static.royacdn.com/Site-f5437b08-ac5f-4e8d-ae22-82cae06b8d55/Background_images/textured_background.jpg";

const RootPageLogin = styled(Page)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${urlBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: "none",
    backgroundColor: "#fbfafc",
  },
}));

const borderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LoginContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "2px",
  borderRadius: "12px",
  background: `linear-gradient(90deg, ${theme.palette.template.main}, ${theme.palette.template.lightest}, ${theme.palette.template.main})`,
  backgroundSize: "200% 200%",
  animation: `${borderAnimation} 3s ease infinite`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100vh",
    borderRadius: 0,
    padding: 0,
  },
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
}));

const Right = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: "#fbfafc",
  overflow: "auto",
  borderRadius: "8px",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    minHeight: "100vh",
  },
}));

function LoginPage(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = React.useState("");
  const [loginType, setLoginType] = React.useState("password");
  const [step, setStep] = React.useState(1);
  const { token, fullName } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && fullName) {
      setTimeout(() => {
        window.location.href = "/";
      }, 200);
    }
  }, [token, navigate, fullName]);
  return (
    <RootPageLogin title="Đăng nhập">
      <LoginContainer>
        <Right>
          <Button
            onClick={() => navigate("/")}
            sx={{
              position: "absolute",
              top: theme.spacing(2),
              right: theme.spacing(2),
              color: theme.palette.template.main,
              textTransform: "none",
              fontWeight: "500",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              "&:hover": {
                backgroundColor: theme.palette.template.lightest,
                color: theme.palette.template.darker,
              },
              [theme.breakpoints.down("sm")]: {
                top: theme.spacing(1),
                right: theme.spacing(1),
                fontSize: "12px",
              },
            }}
          >
            <ArrowBackIcon fontSize="small" />
            <Typography variant="body2">Quay lại trang chủ</Typography>
          </Button>
          <Stack
            direction="column"
            spacing={isMobile ? 1.5 : 2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down("sm")]: {
                "& > *": {
                  transform: "scale(0.9)",
                  transformOrigin: "center",
                },
              },
            }}
          >
            <CardMedia
              component={"img"}
              image={urlImage}
              onClick={() => navigate("/")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate("/");
              }}
              sx={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
                objectPosition: "center",
                marginTop: "20px",
                cursor: "pointer",
                [theme.breakpoints.down("sm")]: {
                  width: "150px",
                  height: "150px",
                  marginTop: "10px",
                },
              }}
            />
            {step === 1 && (
              <InputPhoneNumber
                phone={emailOrPhoneNumber}
                setPhone={setEmailOrPhoneNumber}
                setStep={() => setStep(2)}
                setLoginType={setLoginType}
              />
            )}

            {step === 2 && loginType === "password" && (
              <InputPassword
                phone={emailOrPhoneNumber}
                setLoginType={() => setLoginType("otp")}
              />
            )}

            {step === 2 && loginType === "otp" && (
              <InputOTP phone={emailOrPhoneNumber} />
            )}

            {step === 2 && loginType === "register" && (
              <Register phone={emailOrPhoneNumber} />
            )}
          </Stack>
        </Right>
      </LoginContainer>
    </RootPageLogin>
  );
}

export default LoginPage;
