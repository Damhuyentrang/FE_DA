import styled from "@emotion/styled";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const StyledFooter = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.main,
  paddingTop: theme.spacing(8), // tăng từ 6 lên 8 để cao hơn
  borderTop: "6px solid",
  borderImage: "linear-gradient(45deg, #ff7b7b 30%, #e63946 90%) 1", // border gradient
}));

function Footer(props) {
  const theme = useTheme();

  const links = [
    "Về chúng tôi",
    "Giới thiệu",
    "Tuyển dụng",
    "Điều khoản sử dụng",
    "Chính sách bảo mật",
  ];

  return (
    <StyledFooter container spacing={2} alignItems={"flex-start"}>
      {/* Logo */}
      <Grid item xs={12} md={2} justifyContent={"center"} display={"flex"}>
        <Stack
          direction="column"
          spacing={0.5}
          width={{ xs: "50%", sm: "30%", md: "70%" }}
        >
          <img
            src="https://res.cloudinary.com/dgxmy3xwq/image/upload/v1762684631/images_vvrjpb.jpg"
            alt="logo"
            width="100%"
          />
        </Stack>
      </Grid>

      {/* Contact info */}
      <Grid item xs={12} md={4}>
        <Stack
          direction="column"
          spacing={0.5}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: theme.palette.template.normal1,
            }}
          >
            HONG SON EYE HOSPITAL
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            CS1: Hà Nội: 709 Giải Phóng. ĐT: 0904088899
            <br />
            CS2: TP. HCM: 40C Út Tịch. ĐT: 0333428899
            <br />
            CS3: TP. Hải Phòng: 140 Nguyễn Văn Linh (Coming)
            <br />
            CS4: TP. Đà Nẵng: 733 Nguyễn Tất Thành (Coming)
          </Typography>
          <Typography variant="body2">Website: chưa deploy</Typography>
          <Typography variant="body2">
            Email: benhvienmathongson@gmail.com
          </Typography>
          <Typography variant="body2">Điện thoại: 0812.102.204</Typography>
        </Stack>
      </Grid>

      {/* Links */}
      <Grid
        item
        xs={12}
        md={2}
        display={{ xs: "none", md: "flex" }}
        justifyContent="center"
      >
        <Stack direction="column" spacing={0.5}>
          {links.map((link, idx) => (
            <Typography
              key={idx}
              variant="body2"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {link}
            </Typography>
          ))}
        </Stack>
      </Grid>

      {/* Map */}
      <Grid item xs={12} md={4} marginTop={{ xs: "1rem", md: 0 }}>
        <Stack width="100%" height={{ xs: 200, md: 350 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.598058669818!2d105.82612117539709!3d21.00874318063563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac800f450807%3A0x419a49bcd94b693a!2zSOG7jWMgVmnhu4duIE5nw6JuIEjDoG5n!5e0!3m2!1svi!2s!4v1758354882071!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Map"
          />
        </Stack>
      </Grid>

      {/* Copyright */}
      {/* Copyright */}
      <Grid item xs={12}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            backgroundColor: theme.palette.template.normal1,
            fontWeight: "bold",
            width: "100%",
            padding: "1rem 0",
            margin: 0,
            color: "#fff",
          }}
        >
          © 2025 HONG SON EYE HOSPITAL. TRANG&LAN.
        </Typography>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
