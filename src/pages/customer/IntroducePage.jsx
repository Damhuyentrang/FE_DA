import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";

function IntroducePage() {
  const theme = useTheme();

  const services = [
    {
      title: "Trước mổ",
      description:
        "Khám và tư vấn phẫu thuật miễn phí. Các xét nghiệm mổ cận và xét nghiệm Covid miễn phí!",
    },
    {
      title: "Sau mổ",
      description:
        "Sẽ được phát miễn phí thuốc sau mổ: kính bảo vệ, ăn trưa, và nằm viện miễn phí trong ngày.",
    },
    {
      title: "Hỗ trợ 1 năm",
      description: "Được PGS - TS Cung Hồng Sơn khám miễn phí 1 năm sau mổ.",
    },
    {
      title: "Bảo hành trọn đời",
      description:
        "Bệnh Viện Mắt Hồng Sơn là địa chỉ duy nhất: bảo hành miễn phí trọn đời, tái cận sẽ được mổ miễn phí nếu còn chiều dầy nền giác mạc trên 310 micromet.",
    },
  ];

  return (
    <Box>
      {/* Hero / Banner */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://res.cloudinary.com/dsmvlvfy5/image/upload/v1703400921/blur-04.4f6865d2_tvrj9b.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: 200, md: 300 },
          color: "#fff",
          textAlign: "center",
          py: { xs: 6, md: 12 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          ABOUT US
        </Typography>
      </Box>

      {/* Main content */}
      <Box
        sx={{
          maxWidth: 1140,
          mx: "auto",
          mt: -6,
          mb: 12,
          p: { xs: 2, md: 4 },
          borderRadius: 2,
          bgcolor: "#fff",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Introduction */}
        <Typography
          variant="h3"
          sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
        >
          Giới thiệu Bệnh Viện Mắt Hồng Sơn
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, lineHeight: 1.8, textAlign: "justify" }}
        >
          Chúng tôi tự hào là nơi thực hiện hơn{" "}
          <Box
            component="span"
            sx={{ fontWeight: 700, color: theme.palette.primary.main }}
          >
            130.000 ca mổ cận thị thành công
          </Box>
          , cùng hàng nghìn ca về đục thủy tinh thể, dịch kính võng mạc, glocom
          và các phẫu thuật thẩm mỹ mắt khác.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, lineHeight: 1.8, textAlign: "justify" }}
        >
          Bác sĩ Cung Hồng Sơn – Giao sư danh dự, Phó Giáo sư, Tiến sĩ Nhãn
          khoa, là phẫu thuật viên duy nhất tại Việt Nam có thể phẫu thuật thành
          thạo cả bán phần trước và bán phần sau nhãn cầu.
        </Typography>

        {/* Services / Bullet points */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
            Cam kết & Dịch vụ nổi bật
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "#f0f2f5",
                    height: "100%",
                    transition: "all 0.3s ease",
                    ":hover": {
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional description */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            Với cam kết đem lại kết quả tốt nhất và giá tốt nhất trên toàn quốc,
            bệnh nhân hoàn toàn yên tâm tạm biệt gọng kính và tận hưởng cuộc
            sống không phụ thuộc vào đôi mắt thủy tinh.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            Chúng tôi sử dụng các thiết bị hiện đại nhất: IOL Master 700, OCT -
            Võng mạc Angiography, Máy Phaco lạnh đầu típ 2.2mm, Laser FEMTO
            CATARACT, Camera nội nhãn, Laser nội nhãn, OCT-Angiography...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default IntroducePage;
