import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function SupportPage(props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const supportData = [
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702200839/customer-service_1_ithrzl.png",
      title: "Dịch vụ đặt khám",
      action: "1900 1008",
      onClick: null,
      style: { iconWidth: 80, iconHeight: 80, bgcolor: "#f0f2f5", padding: 4 },
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702201304/md_5aff6081b74c8-removebg-preview_yeisxb.png",
      title: "Hỗ trợ qua Facebook",
      action: "Bấm tại đây",
      onClick: null,
      style: { iconWidth: 80, iconHeight: 80, bgcolor: "#f0f2f5", padding: 4 },
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702201167/logo-zalo-02-removebg-preview_wvnztk.png",
      title: "Hỗ trợ qua Zalo",
      action: "Bấm vào đây",
      onClick: null,
      style: { iconWidth: 95, iconHeight: 80, bgcolor: "#f0f2f5", padding: 4 },
    },
    {
      icon: "https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702201420/1702200726733.089_fsnxlv.png",
      title: "Chat qua Zalo",
      action: "Quét mã trên",
      onClick: null,
      style: { iconWidth: 80, iconHeight: 80, bgcolor: "#f0f2f5", padding: 4 },
    },
  ];

  return (
    <Box>
      {/* Banner đầu trang */}
      <Box
        sx={{
          display: "flex",
          backgroundImage:
            "url(https://res.cloudinary.com/dsmvlvfy5/image/upload/v1703400921/blur-04.4f6865d2_tvrj9b.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          paddingTop: "60px",
          paddingBottom: "80px",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", px: 2 }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: 550,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            HỖ TRỢ KHÁCH HÀNG
          </Typography>
        </Box>
      </Box>

      {/* Nội dung chính: mô tả */}
      <Box
        sx={{
          maxWidth: "1140px",
          margin: "-50px auto 40px",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
          p: { xs: 3, md: 6 },
          textAlign: "justify",
          lineHeight: 1.6,
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          Để đảm bảo khách hàng nhận được dịch vụ nhanh chóng và hiệu quả, Bệnh
          Viện Mắt Hồng Sơn cung cấp nhiều kênh hỗ trợ trực tiếp và trực tuyến,
          giúp bệnh nhân thuận tiện trong mọi bước.
        </Typography>
        <Typography variant="body1">
          Chúng tôi luôn sẵn sàng giải đáp thắc mắc, tư vấn lịch khám và hướng
          dẫn sử dụng dịch vụ để trải nghiệm của bạn tại bệnh viện trở nên dễ
          dàng và thoải mái nhất.
        </Typography>
      </Box>

      {/* Section các card support */}
      <Box sx={{ px: isLgUp ? 6 : 2, py: isLgUp ? 12 : 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {supportData.map((support, index) => (
            <Grid key={index} item xs={12} md={3} sx={{ px: "15px" }}>
              <Box
                sx={{
                  p: support.style.padding,
                  height: "100%",
                  bgcolor: support.style.bgcolor,
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  ":hover": {
                    transform: "scale(1.001) translateY(-4px)",
                    boxShadow:
                      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                  },
                }}
              >
                <Stack direction="column" spacing={2} alignItems="center">
                  <img
                    src={support.icon}
                    alt={support.title}
                    width={support.style.iconWidth}
                    height={support.style.iconHeight}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    textAlign="center"
                  >
                    {support.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    mt={1}
                    textAlign="center"
                    sx={{
                      color: theme.palette.primary.main,
                      cursor: support.onClick ? "pointer" : "default",
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
    </Box>
  );
}

export default SupportPage;
