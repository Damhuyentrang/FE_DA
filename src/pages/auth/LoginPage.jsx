import styled from "@emotion/styled";
import { Box, CardMedia, Paper, Stack } from "@mui/material";
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
  "https://cdnphoto.dantri.com.vn/ShdbLNAsoDlEXw6jOPpOnarv0hc=/thumb_w/1020/2023/06/02/bv-hong-sondocx-1685694436755.png";

const RootPageLogin = styled(Page)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

const Left = styled(Box)(({ theme }) => ({
  flex: 6,
  height: "90%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundImage: `url(${urlBackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
  backgroundPosition: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Right = styled(Paper)(({ theme }) => ({
  flex: 4,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  backgroundColor: "#fbfafc",
  overflow: "auto",
}));

function LoginPage(props) {
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
      <Left>
        <Box
          sx={{
            bgcolor: "white",
            width: "50px",
            height: "0%",
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "auto",
            clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 0% 100%)",
            border: "none",
            backgroundColor: "#941616ff",
          }}
        />
      </Left>
      <Right>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "100%",
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 0, // loại bỏ 80px dư thừa
          }}
        >
          <CardMedia
            component={"img"}
            image={urlImage}
            sx={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              objectPosition: "center",
              marginTop: "20px",
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
    </RootPageLogin>
  );
}

export default LoginPage;
