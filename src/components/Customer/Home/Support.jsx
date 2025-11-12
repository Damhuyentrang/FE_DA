import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function Support(props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const supportData = [
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702200839/customer-service_1_ithrzl.png",
      title: "Dịch vụ đặt khám",
      action: "1900 1008",
      onClick: null,
      style: {
        iconWidth: 80,
        iconHeight: 80,
        bgcolor: "#f0f2f5",
        padding: 4,
        hoverShadow:
          "rgba(0,0,0,0.1) 0px 8px 20px, rgba(0,0,0,0.05) 0px 12px 40px",
        hoverTransform: "translateY(-8px)",
      },
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702201304/md_5aff6081b74c8-removebg-preview_yeisxb.png",
      title: "Hỗ trợ qua Facebook",
      action: "Bấm tại đây",
      onClick: null,
      style: {
        iconWidth: 80,
        iconHeight: 80,
        bgcolor: "#f0f2f5",
        padding: 4,
        hoverShadow:
          "rgba(0,0,0,0.1) 0px 8px 20px, rgba(0,0,0,0.05) 0px 12px 40px",
        hoverTransform: "translateY(-8px)",
      },
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702201167/logo-zalo-02-removebg-preview_wvnztk.png",
      title: "Hỗ trợ qua Zalo",
      action: "Bấm vào đây",
      onClick: null,
      style: {
        iconWidth: 95, // giữ kích thước gốc Zalo
        iconHeight: 80,
        bgcolor: "#f0f2f5",
        padding: 4,
        hoverShadow:
          "rgba(0,0,0,0.1) 0px 8px 20px, rgba(0,0,0,0.05) 0px 12px 40px",
        hoverTransform: "translateY(-8px)",
      },
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702201420/1702200726733.089_fsnxlv.png",
      title: "Chat qua Zalo",
      action: "Quét mã trên",
      onClick: null,
      style: {
        iconWidth: 80,
        iconHeight: 80,
        bgcolor: "#f0f2f5",
        padding: 4,
        hoverShadow:
          "rgba(0,0,0,0.1) 0px 8px 20px, rgba(0,0,0,0.05) 0px 12px 40px",
        hoverTransform: "translateY(-8px)",
      },
    },
  ];

  return (
    <Box
      sx={{
        px: isLgUp ? 20 : 2,
        py: isLgUp ? 12 : 10,
        bgcolor: theme.palette.lightest, // nền khung chung
        width: "100%",
        borderRadius: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {supportData.map((support, index) => (
          <Grid key={index} item xs={12} md={3}>
            <Box
              sx={{
                p: support.style.padding,
                height: "100%",
                bgcolor: support.style.bgcolor,
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: support.style.hoverTransform,
                  boxShadow: support.style.hoverShadow,
                },
              }}
            >
              <Stack direction="column" spacing={2} alignItems="center">
                <img
                  src={support.icon}
                  alt={support.title}
                  width={support.style.iconWidth}
                  height={support.style.iconHeight}
                  // style={{
                  //   filter:
                  //     "invert(27%) sepia(80%) saturate(4000%) hue-rotate(350deg) brightness(95%) contrast(100%)",
                  // }}
                />
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  sx={{ color: theme.palette.text.main }}
                >
                  {support.title}
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  mt={1}
                  textAlign="center"
                  sx={{
                    color: theme.palette.primary.main,
                    cursor: support.onClick ? "pointer" : "default",
                    "&:hover": { color: theme.palette.template.normal2 },
                  }}
                  onClick={support.onClick}
                >
                  {support.action}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Support;
