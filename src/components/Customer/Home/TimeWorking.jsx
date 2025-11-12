import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountUpAnimation from "./CountUpAnimation";
import { getAllHomeStatistics } from "../../../services/common/StatisticsServices";

function TimeWorking(props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const getHomeStatistics = async () => {
      const response = await getAllHomeStatistics();
      if (response.success) {
        setStatistics(response.data.data);
      }
    };
    getHomeStatistics();
  }, []);

  const statsData = [
    { value: 10, label: "Năm kinh nghiệm" },
    { value: statistics?.totalDoctors, label: "Bác sĩ chuyên môn" },
    { value: statistics?.totalDepartments, label: "Chuyên khoa" },
  ];

  return (
    <Box
      sx={{
        py: isLgUp ? 15 : 6,
        position: "relative",
        width: "100%",
        backgroundImage:
          'url("https://res.cloudinary.com/dgxmy3xwq/image/upload/v1762689439/9831a80fb4086d563419_20221127170231563_kahgaz.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        "&::after": {
          content: "''",
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.6)", // overlay
          zIndex: 0,
        },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          position: "relative",
          zIndex: 1,
          px: isLgUp ? 20 : 2,
        }}
      >
        {statsData.map((stat, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: "100%",
                py: 6,
                px: 3,
                textAlign: "center",
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: 3,
                boxShadow: "0 0 50px rgba(153,153,153,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: "translateY(-8px)",
                  boxShadow:
                    "rgba(0,0,0,0.1) 0px 8px 20px, rgba(0,0,0,0.05) 0px 12px 40px",
                },
              }}
            >
              <CountUpAnimation value={stat.value} />
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: theme.palette.white.main,
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TimeWorking;
