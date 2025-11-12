import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useAuth } from "../../auth/AuthProvider";
import {
  loginWithPassword,
  sendOTP,
} from "../../services/customer/AuthServices";

const CustomTextFieldPhone = styled(TextField)(({ theme }) => ({
  width: "390px",
  [theme.breakpoints.down("sm")]: { width: "350px" },
  height: "50px",
  backgroundColor: "#f2f2f2",
}));

const CustomTextFieldPassword = styled(OutlinedInput)(({ theme }) => ({
  width: "390px",
  [theme.breakpoints.down("sm")]: { width: "350px" },
  height: "50px",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      boxShadow: "0px 0px 5px 0px rgba(0, 148, 212, 0.4)",
    },
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#fff",
  width: "390px",
  [theme.breakpoints.down("sm")]: { width: "350px" },
  height: "45px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  "&:hover": {
    background: theme.palette.primary.dark,
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.25)",
    transform: "scale(1.02)",
  },
}));

InputPassword.propTypes = {
  phone: PropTypes.string,
  setPassword: PropTypes.func,
  setLoginType: PropTypes.func,
};

function InputPassword({ phone, setLoginType }) {
  const { setToken } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (e) => e.preventDefault();

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setErrorText(e.target.value.trim() === "" ? "Vui lòng nhập mật khẩu!" : "");
  };

  const handleLogin = async () => {
    if (!password.trim()) {
      setErrorText("Vui lòng nhập mật khẩu!");
      return;
    }
    setIsLoading(true);
    const response = await loginWithPassword({
      emailOrPhoneNumber: phone,
      passwordOrOTP: password,
    });
    setIsLoading(false);

    if (!response.success) {
      enqueueSnackbar(
        response.statusCode === 401
          ? "Mật khẩu không chính xác"
          : "Đã có lỗi xảy ra",
        { variant: "error" }
      );
      return;
    }
    setToken(response.data.data);
    enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
    window.location.href = "/";
  };

  const handleSendOTP = async () => {
    const response = await sendOTP({ emailOrPhoneNumber: phone });
    if (!response.success) {
      enqueueSnackbar("Đã có lỗi xảy ra, vui lòng thử lại", {
        variant: "error",
      });
      return;
    }
    setLoginType();
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
      <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "14px" }}>
        Vui lòng đăng nhập để tiếp tục
      </Typography>

      <CustomTextFieldPhone
        variant="outlined"
        disabled
        value={phone}
        InputProps={{
          startAdornment: (
            <img
              src="https://flagcdn.com/w20/vn.png"
              alt="Vietnam Flag"
              style={{ width: "30px", height: "20px", marginRight: 8 }}
            />
          ),
          style: { padding: "0.5rem 0.7rem" },
        }}
      />

      <FormControl sx={{ width: { xs: 350, sm: 390 } }} variant="outlined">
        <CustomTextFieldPassword
          autoFocus
          placeholder="Nhập mật khẩu"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChangePassword}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errorText && (
          <FormHelperText error sx={{ textAlign: "right" }}>
            {errorText}
          </FormHelperText>
        )}

        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "14px", cursor: "pointer" }}
            onClick={handleSendOTP}
          >
            Đăng nhập bằng OTP
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Quên mật khẩu?
          </Typography>
        </Stack>
      </FormControl>
      <CustomButton onClick={handleLogin} disabled={isLoading}>
        Đăng nhập
      </CustomButton>
    </Stack>
  );
}

export default InputPassword;
