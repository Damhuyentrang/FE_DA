import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import { checkPhoneOrEmail } from "../../services/customer/AuthServices";

const CustomTextField = styled(TextField)(({ theme }) => ({
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

InputPhoneNumber.propTypes = {
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  setStep: PropTypes.func,
  setLoginType: PropTypes.func,
};

function InputPhoneNumber({ phone, setPhone, setStep, setLoginType }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleCheckPhone = async () => {
    setIsLoading(true);
    const phoneTrim = phone.trim();

    if (phoneTrim === "") {
      enqueueSnackbar("Vui lòng nhập số điện thoại!", { variant: "error" });
      setIsLoading(false);
      return;
    }

    const response = await checkPhoneOrEmail({ emailOrPhoneNumber: phoneTrim });
    setIsLoading(false);

    if (!response.success) {
      enqueueSnackbar(
        response.statusCode === 400
          ? "Email/Số điện thoại không tồn tại"
          : "Đã có lỗi xảy ra, vui lòng thử lại sau",
        { variant: "error" }
      );
      return;
    }

    if (response.data.data) setLoginType("password");
    else setLoginType("register");

    setStep();
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
      <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "14px" }}>
        Vui lòng nhập số điện thoại để đăng nhập
      </Typography>

      <Box sx={{ width: { xs: 350, sm: 390 } }}>
        <CustomTextField
          autoFocus
          variant="outlined"
          placeholder="Số điện thoại"
          size="large"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCheckPhone()}
          autoComplete="off"
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
        {phone.trim() === "" && (
          <FormHelperText error sx={{ width: "100%", textAlign: "left" }}>
            Vui lòng nhập số điện thoại!
          </FormHelperText>
        )}
      </Box>

      <CustomButton onClick={handleCheckPhone} disabled={isLoading}>
        Tiếp tục
      </CustomButton>
    </Stack>
  );
}

export default InputPhoneNumber;
