import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo, useMemo } from "react";
import { ContactItem } from "./Invoice";
import QRCode from "react-qr-code";
import dayjs from "dayjs";

function HospitalAdmissionLetter(props, ref) {
  const { info, symptoms, diagnostic, hospitalAdmissionDate, admissionLeter } =
    props;
  const contacts = useMemo(
    () => [
      {
        title: "Email",
        value: "benhvienmathongson@gmail.com",
      },
      {
        title: "Số điện thoại",
        value: "0812102204",
      },
      {
        title: "Website",
        value: "chưa deploy",
      },
      {
        title: "Địa chỉ",
        value: "CS1: Hà Nội: 709 Giải Phóng. ĐT: 0904088899 CS2: TP. HCM: 40C Út Tịch. ĐT: 0333428899 CS3: TP. Hải Phòng: 140 Nguyễn Văn Linh (Coming) CS4: TP. Đà Nẵng: 733 Nguyễn Tất Thành (Coming)",
      },
    ],
    []
  );
  return (
    <Grid container ref={ref} p={2}>
      <Grid
        item
        xs={3.75}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <CardMedia
          src="https://res.cloudinary.com/dgxmy3xwq/image/upload/v1755508437/d8136dcd-0d1c-449c-9ad5-d2bc282fe9db_pmuiox.png"
          alt="logo"
          component="img"
          sx={{ width: "70%", objectFit: "contain", margin: "auto 0" }}
        />
      </Grid>
      <Grid item xs={8.25} justifyContent={"flex-end"} display={"flex"}>
        <Box>
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              title={contact.title}
              content={contact.value}
            />
          ))}
        </Box>
      </Grid>

      <Divider sx={{ width: "100%", margin: "16px 0" }} />

      <Grid container item xs={12} rowGap={2} direction={"column"} paddingX={4}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
          mb={4}
          mt={2}
        >
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontSize={"24px"}
            textTransform={"uppercase"}
          >
            Giấy nhập viện
          </Typography>
          <Typography>
            Mã nhập viện: <b>{admissionLeter?.hospitalAdmissionCode}</b>
          </Typography>
        </Stack>

        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography>Họ và tên bệnh nhân:</Typography>
          <Typography fontWeight={500} textTransform={"uppercase"}>
            {info?.patient?.fullName}
          </Typography>
        </Typography>
        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography minWidth={"150px"}> Sinh ngày:</Typography>
          <Typography fontStyle={"italic"}>
            {dayjs(info?.patient?.dateOfBirth).format("DD/MM/YYYY")}
          </Typography>
        </Typography>
        <Box width={"60%"} display={"flex"} justifyContent={"space-between"}>
          <Typography noWrap component={Stack} direction={"row"} spacing={4}>
            <Typography minWidth={"150px"}>Dân tộc:</Typography>
            <Typography>{info?.patient?.nationality}</Typography>
          </Typography>
          <Typography noWrap component={Stack} direction={"row"} spacing={4}>
            <Typography>Giới tính:</Typography>
            <Typography>
              {info?.patient?.gender === "FEMALE" ? "Nữ" : "Nam"}
            </Typography>
          </Typography>
        </Box>
        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography minWidth={"150px"}>Điện thoại:</Typography>
          <Typography>{info?.patient?.phoneNumber}</Typography>
        </Typography>
        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography minWidth={"150px"}>Địa chỉ:</Typography>
          <Typography>{`${info?.patient?.street}, ${info?.patient?.ward}, ${info?.patient?.district}, ${info?.patient?.province}`}</Typography>
        </Typography>
        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography minWidth={"150px"}>Triệu chứng:</Typography>
          <Typography fontWeight={500}>{symptoms}</Typography>
        </Typography>
        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography minWidth={"150px"}>Chuẩn đoán:</Typography>
          <Typography fontWeight={500}>{diagnostic}</Typography>
        </Typography>
        <Typography noWrap component={Stack} direction={"row"} spacing={4}>
          <Typography minWidth={"150px"}>Ngày nhập viện:</Typography>
          <Typography>
            {dayjs(hospitalAdmissionDate).format("DD/MM/YYYY")}
          </Typography>
        </Typography>
      </Grid>

      <Divider sx={{ width: "100%", margin: "16px 0" }} />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        paddingX={4}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontStyle={"italic"}>Quét mã QR</Typography>
            <Typography fontStyle={"italic"}>để thanh toán tạm ứng</Typography>
          </Box>
          <QRCode
            value={admissionLeter?.hospitalAdmissionCode || "HA123456"}
            size={96}
          />
          <Typography fontWeight={500}>
            {admissionLeter?.hospitalAdmissionCode || "HA123456"}
          </Typography>
        </Stack>
        <Stack spacing={15} width={"40%"}>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <Typography fontStyle={"italic"}>
              Tp. HN, Ngày {dayjs().get("D").toString().padStart(2, "0")} tháng{" "}
              {(dayjs().get("M") + 1).toString().padStart(2, "0")} năm{" "}
              {dayjs().get("year")}
            </Typography>
            <Typography textTransform={"uppercase"} fontWeight={600}>
              Bác sĩ điều trị
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            fontWeight={500}
            fontStyle={"italic"}
          >
            <Typography>{admissionLeter?.doctorName}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default memo(React.forwardRef(HospitalAdmissionLetter));
