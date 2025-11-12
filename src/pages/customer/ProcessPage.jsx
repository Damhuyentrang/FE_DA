import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function ProcessPage() {
  const theme = useTheme();

  const introText = `Để đảm bảo quá trình khám chữa bệnh diễn ra nhanh chóng và hiệu quả, 
  Bệnh Viện Mắt Hồng Sơn áp dụng quy trình khám bệnh chuyên nghiệp, rõ ràng, 
  giúp bệnh nhân thuận tiện trong mọi bước.`;

  const steps = [
    {
      title: "Tiếp đón & Đăng ký thông tin",
      description:
        "Bệnh nhân đến quầy lễ tân, cung cấp thông tin cá nhân, số điện thoại, và lý do khám. Nhân viên hướng dẫn lấy số thứ tự và hồ sơ khám bệnh.",
    },
    {
      title: "Đo thị lực & kiểm tra ban đầu",
      description:
        "Nhân viên y tế sẽ tiến hành đo thị lực, soi đáy mắt, kiểm tra độ cận/viễn/loạn, đồng thời ghi nhận các triệu chứng ban đầu.",
    },
    {
      title: "Khám với bác sĩ chuyên khoa",
      description:
        "Bác sĩ chuyên khoa mắt sẽ thăm khám chi tiết, đánh giá tình trạng bệnh lý, tư vấn nguyên nhân và hướng điều trị.",
    },
    {
      title: "Thực hiện cận lâm sàng (nếu cần)",
      description:
        "Trong trường hợp cần thiết, bác sĩ sẽ chỉ định thêm các xét nghiệm như: chụp OCT, đo nhãn áp, siêu âm, hoặc xét nghiệm máu.",
    },
    {
      title: "Nhận kết quả & tư vấn điều trị",
      description:
        "Sau khi có kết quả, bác sĩ giải thích chi tiết, tư vấn phương pháp điều trị hoặc phẫu thuật phù hợp nhất với tình trạng của bệnh nhân.",
    },
    {
      title: "Thanh toán & nhận thuốc",
      description:
        "Bệnh nhân thanh toán chi phí tại quầy thu ngân, nhận thuốc và hướng dẫn sử dụng. Với bệnh nhân phẫu thuật, nhân viên sẽ hẹn lịch mổ và chăm sóc sau phẫu thuật.",
    },
  ];

  return (
    <Box>
      {/* Banner trên cùng */}
      <Box
        sx={{
          display: "flex",
          backgroundImage:
            "url(https://res.cloudinary.com/dsmvlvfy5/image/upload/v1703400921/blur-04.4f6865d2_tvrj9b.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          paddingY: { xs: "60px", md: "80px" },
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            QUY TRÌNH KHÁM BỆNH
          </Typography>
        </Box>
      </Box>

      {/* Nội dung dưới banner */}
      <Box sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
        {/* Mô tả giữ nguyên */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            mb: 6,
            textAlign: "center",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          {introText}
        </Typography>

        {/* Zig-zag steps */}
        <Box
          sx={{
            position: "relative",
            maxWidth: 900,
            mx: "auto",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: "4px",
              bgcolor: theme.palette.primary.main,
              transform: "translateX(-50%)",
              borderRadius: 2,
            },
          }}
        >
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: isLeft ? "flex-end" : "flex-start",
                  },
                  position: "relative",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "90%", md: "45%" },
                    p: 3,
                    bgcolor: "#f0f2f5",
                    borderRadius: 2,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                    textAlign: "left",
                    position: "relative",
                    ":hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    Bước {idx + 1}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {step.description}
                  </Typography>

                  {/* Circle connector */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: isLeft ? "100%" : "-16px",
                      width: "16px",
                      height: "16px",
                      bgcolor: theme.palette.primary.main,
                      borderRadius: "50%",
                      transform: "translateY(-50%)",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            mt: 6,
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          🌟 <strong>Lưu ý:</strong> Bệnh viện luôn khuyến khích bệnh nhân đặt
          lịch hẹn trước để giảm thời gian chờ đợi. Mọi quy trình đều được hướng
          dẫn tận tình bởi đội ngũ nhân viên.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProcessPage;
