import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const StyledFooter = styled(Grid)(({ theme }) => ({
  backgroundColor: "#f8fafd",
}));

function Footer(props) {
  return (
    <StyledFooter container alignItems={"center"}>
      <Grid item xs={12} md={2} justifyContent={"center"} display={"flex"}>
        <Stack
          direction="column"
          spacing={0.5}
          width={{
            xs: "50%",
            sm: "30%",
            md: "70%",
          }}
        >
          <img
            src="https://res.cloudinary.com/dgxmy3xwq/image/upload/v1762684631/images_vvrjpb.jpg"
            alt="img"
            width="100%"
          />
        </Stack>
      </Grid>
      <Grid
        xs={12}
        item
        container
        md={4}
        justifyContent={{
          xs: "center",
          md: "flex-start",
        }}
      >
        <Stack
          direction="column"
          spacing={0.5}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          display={"flex"}
        >
          <Typography
            variant="body1"
            color={"template.normal1"}
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            HONG SON EYE HOSPITAL
          </Typography>
          <Typography variant="body2">
            CS1: Hà Nội: 709 Giải Phóng. ĐT: 0904088899 CS2: TP. HCM: 40C Út Tịch. ĐT: 0333428899 CS3: TP. Hải Phòng: 140 Nguyễn Văn Linh (Coming) CS4: TP. Đà Nẵng: 733 Nguyễn Tất Thành (Coming)
          </Typography>
          <Typography variant="body2">
            Website: chưa deploy
          </Typography>
          <Typography variant="body2">
            Email: benhvienmathongson@gmail.com
          </Typography>
          <Typography variant="body2">Điện thoại: 0812.102.204</Typography>
        </Stack>
      </Grid>

      <Grid
        item
        container
        md={2}
        display={{
          xs: "none",
          md: "flex",
        }}
        justifyContent={"center"}
      >
        <Stack direction="column" spacing={0.5}>
          <Typography variant="body2">Về chúng tôi</Typography>
          <Typography variant="body2">Giới thiệu</Typography>
          <Typography variant="body2">Tuyển dụng</Typography>
          <Typography variant="body2">Điều khoản sử dụng</Typography>
          <Typography variant="body2">Chính sách bảo mật</Typography>
        </Stack>
      </Grid>

      <Grid
        item
        container
        md={4}
        xs={12}
        marginTop={{
          xs: "1rem",
          md: "0",
        }}
        justifyContent={"center"}
      >
        <Stack
          width={{
            xs: "100%",
            md: "90%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.598058669818!2d105.82612117539709!3d21.00874318063563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac800f450807%3A0x419a49bcd94b693a!2zSOG7jWMgVmnhu4duIE5nw6JuIEjDoG5n!5e0!3m2!1svi!2s!4v1758354882071!5m2!1svi!2s"
            width="100%"
            style={{
              border: "none",
            }}
            height="100%"
            title="Map"
            loading="lazy"
          ></iframe>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        marginTop={{
          xs: "1rem",
          md: "0",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            backgroundColor: "template.normal1",
            fontWeight: "bold",
            width: "100%",
            padding: "1rem 0",
            color: "#fff",
          }}
        >
          © 2025 HONG SON EYE HOSPITAL.TRANG&LAN.
        </Typography>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
