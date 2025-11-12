import React from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";
import faqs from "../../services/customer/faqs";

function QuestionPage() {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 12 } }}>
      {/* Tiêu đề */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: theme.palette.primary.main,
          mb: 6,
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Câu hỏi thường gặp (FAQ)
      </Typography>

      {/* Danh sách FAQ */}
      <Stack spacing={4} maxWidth={900} mx="auto">
        {faqs.map((faq, idx) => (
          <Box
            key={idx}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: "#f8fafd",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 1,
              }}
            >
              {`Câu ${idx + 1}: ${faq.question}`}
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, color: theme.palette.text.secondary }}
            >
              {faq.answer}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default QuestionPage;
