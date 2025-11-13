import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function MainComponent(props) {
  const theme = useTheme();
  const isSmallDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      className="back-ground" // giữ background từ CSS cũ
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        px: 2,
      }}
    >
      {/* Overlay */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Nội dung với background container */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: 4,
              padding: { xs: 3, md: 5 },
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Typography
              variant={isSmallDown ? "h4" : "h3"}
              sx={{
                textTransform: "uppercase",
                fontWeight: 400,
                lineHeight: 1.2,
                mb: 3,
                color: theme.palette.white.main,
              }}
            >
              Chúng tôi ở đây <br />
              là vì sức khỏe của bạn
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: theme.palette.white.main,
                whiteSpace: "pre-line",
              }}
            >
              {isSmallDown
                ? `Người có sức khỏe là người có hy vọng
Người có hy vọng là người có tất cả
Hãy trao cho chúng tôi niềm tin
Chúng tôi sẽ trao lại cho bạn hy vọng`
                : `Người có sức khỏe là người có hy vọng - Người có hy vọng là người có tất cả.
Hãy trao cho chúng tôi niềm tin - Chúng tôi sẽ trao lại cho bạn hy vọng`}
            </Typography>

            <Button
              size="large"
              sx={{
                bgcolor: theme.palette.red.main,
                color: theme.palette.white.main,
                px: 5,
                py: 2,
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                "&:hover": { bgcolor: theme.palette.red.main + "CC" },
              }}
            >
              Tìm hiểu về chúng tôi
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainComponent;
