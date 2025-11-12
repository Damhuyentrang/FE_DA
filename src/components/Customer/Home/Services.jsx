import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Services(props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  const servicesData = [
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702187406/icon1.png_kmzx5m.webp",
      title: "Dịch vụ khẩn cấp",
      description:
        "Chúng tôi có một đội ngũ y tế chuyên nghiệp luôn sẵn sàng phục vụ bạn những lúc khẩn cấp.",
      action: "Gọi ngay: 1900 1008",
      onClick: null,
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702187406/icon2.png_gl7ogl.webp",
      title: "Đặt khám trực tuyến",
      description:
        "The Duck Hospital cung cấp dịch vụ đặt khám nhanh chóng, tiết kiệm thời gian và an toàn.",
      action: "Đặt khám ngay",
      onClick: () => navigate("/choose-patient-profiles"),
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702187406/icon3.png_cvlzau.webp",
      title: "Hỗ trợ phục vụ 24/7",
      description:
        "Chúng tôi luôn sẵn sàng giúp đỡ bạn bất cứ khi nào bạn cần. Hãy liên hệ với chúng tôi ngay nhé.",
      action: "Liên hệ với chúng tôi",
      onClick: null,
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
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={6}
        sx={{ color: theme.palette.text.main }}
      >
        Dịch vụ của chúng tôi
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "#f0f2f5", // nền đậm hơn trắng một chút
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: "translateY(-8px)",
                  boxShadow:
                    "rgba(0,0,0,0.1) 0px 8px 20px, rgba(0,0,0,0.05) 0px 12px 40px",
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <img
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  sx={{ color: theme.palette.text.main }}
                >
                  {service.title}
                </Typography>
              </Stack>

              <Typography
                mt={2}
                fontSize={16}
                fontWeight={400}
                textAlign="justify"
                sx={{ color: theme.palette.text.main }}
              >
                {service.description}
              </Typography>

              <Typography
                mt={1}
                fontSize={16}
                fontWeight={500}
                textAlign="justify"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: theme.palette.primary.main,
                  cursor: service.onClick ? "pointer" : "default",
                  "&:hover": { color: theme.palette.template.normal2 },
                }}
                onClick={service.onClick}
              >
                {service.action}{" "}
                {service.onClick && (
                  <ArrowForwardIosIcon sx={{ fontSize: 14, ml: 0.5 }} />
                )}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
