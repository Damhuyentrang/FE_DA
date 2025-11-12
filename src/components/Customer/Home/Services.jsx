import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Services(props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: isLgUp ? 20 : 2,
        py: isLgUp ? 12 : 10,
        bgcolor: "#f7f9fc", // nền khung chung
        width: "100%",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={6}
        sx={{ color: "#333" }}
      >
        Dịch vụ của chúng tôi
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Service 1 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 4,
              height: "100%",
              bgcolor: "#fff",
              borderRadius: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              ":hover": {
                transform: "translateY(-8px)",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 8px 20px, rgba(0, 0, 0, 0.05) 0px 12px 40px",
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <img
                src="https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702187406/icon1.png_kmzx5m.webp"
                alt="icon-hospital"
                width={43}
                height={40}
              />
              <Typography fontWeight={700} fontSize={18}>
                Dịch vụ khẩn cấp
              </Typography>
            </Stack>

            <Typography
              mt={2}
              fontSize={16}
              fontWeight={400}
              textAlign="justify"
            >
              Chúng tôi có một đội ngũ y tế chuyên nghiệp luôn sẵn sàng phục vụ
              bạn những lúc khẩn cấp.
            </Typography>

            <Typography
              mt={1}
              fontSize={16}
              fontWeight={500}
              textAlign="justify"
              sx={{ ":hover": { color: "#179ecf", cursor: "pointer" } }}
            >
              Gọi ngay: 1900 1008
            </Typography>
          </Box>
        </Grid>

        {/* Service 2 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 4,
              height: "100%",
              bgcolor: "#fff",
              borderRadius: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              ":hover": {
                transform: "translateY(-8px)",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 8px 20px, rgba(0, 0, 0, 0.05) 0px 12px 40px",
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <img
                src="https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702187406/icon2.png_gl7ogl.webp"
                alt="icon-hospital"
                width={40}
                height={40}
              />
              <Typography fontWeight={700} fontSize={18}>
                Đặt khám trực tuyến
              </Typography>
            </Stack>

            <Typography
              mt={2}
              fontSize={16}
              fontWeight={400}
              textAlign="justify"
            >
              The Duck Hospital cung cấp dịch vụ đặt khám nhanh chóng, tiết kiệm
              thời gian và an toàn.
            </Typography>

            <Typography
              mt={1}
              fontSize={16}
              fontWeight={500}
              textAlign="justify"
              sx={{
                display: "flex",
                alignItems: "center",
                ":hover": { color: "#179ecf", cursor: "pointer" },
              }}
              onClick={() => navigate("/choose-patient-profiles")}
            >
              Đặt khám ngay{" "}
              <ArrowForwardIosIcon sx={{ fontSize: 14, ml: 0.5 }} />
            </Typography>
          </Box>
        </Grid>

        {/* Service 3 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 4,
              height: "100%",
              bgcolor: "#fff",
              borderRadius: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              ":hover": {
                transform: "translateY(-8px)",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 8px 20px, rgba(0, 0, 0, 0.05) 0px 12px 40px",
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <img
                src="https://res.cloudinary.com/dsmvlvfy5/image/upload/v1702187406/icon3.png_cvlzau.webp"
                alt="icon-hospital"
                width={40}
                height={40}
              />
              <Typography fontWeight={700} fontSize={18}>
                Hỗ trợ phục vụ 24/7
              </Typography>
            </Stack>

            <Typography
              mt={2}
              fontSize={16}
              fontWeight={400}
              textAlign="justify"
            >
              Chúng tôi luôn sẵn sàng giúp đỡ bạn bất cứ khi nào bạn cần. Hãy
              liên hệ với chúng tôi ngay nhé.
            </Typography>

            <Typography
              mt={1}
              fontSize={16}
              fontWeight={500}
              textAlign="justify"
              sx={{ ":hover": { color: "#179ecf", cursor: "pointer" } }}
            >
              Liên hệ với chúng tôi
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
