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
        px: 2, // padding responsive
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

      {/* Nội dung */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <Grid item xs={12} md={8}>
          <Typography
            variant={isSmallDown ? "h4" : "h3"}
            sx={{
              textTransform: "uppercase",
              fontWeight: 400,
              lineHeight: 1.2,
              mb: 3,
              color: "#fff",
            }}
          >
            Chúng tôi ở đây <br />
            là vì sức khỏe của bạn
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#fff",
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
              bgcolor: "#c01e1eff",
              color: "#fff",
              px: 5,
              py: 2,
              boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              "&:hover": { bgcolor: "#a01b1b" },
            }}
          >
            Tìm hiểu về chúng tôi
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainComponent;
