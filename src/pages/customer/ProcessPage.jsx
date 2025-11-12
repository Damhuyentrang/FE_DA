import { Box, Typography } from "@mui/material";
import React from "react";

function ProcessPage() {
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
          paddingY: "80px",
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
              fontSize: "2.5rem",
            }}
          >
            QUY TRÌNH KHÁM BỆNH
          </Typography>
        </Box>
      </Box>

      {/* Nội dung chính */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          margin: "-50px auto 120px",
          borderRadius: "5px",
          minHeight: "300px",
          maxWidth: "1140px",
          border: "1px solid #ebebeb",
          padding: "30px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            marginBottom: "1rem",
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          Để đảm bảo quá trình khám chữa bệnh diễn ra nhanh chóng và hiệu quả,
          Bệnh Viện Mắt Hồng Sơn áp dụng quy trình khám bệnh chuyên nghiệp, rõ ràng,
          giúp bệnh nhân thuận tiện trong mọi bước.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#1976d2",
            marginBottom: "1rem",
          }}
        >
          🩺 Quy trình khám bệnh gồm 6 bước:
        </Typography>

        <ul
          style={{
            listStyle: "decimal",
            paddingLeft: "25px",
            marginBottom: "1rem",
          }}
        >
          <li>
            <Typography sx={{ marginBottom: "8px", textAlign: "justify" }}>
              <strong>Bước 1: Tiếp đón và đăng ký thông tin</strong>  
              <br />Bệnh nhân đến quầy lễ tân, cung cấp thông tin cá nhân, số điện thoại,
              và lý do khám. Nhân viên hướng dẫn lấy số thứ tự và hồ sơ khám bệnh.
            </Typography>
          </li>

          <li>
            <Typography sx={{ marginBottom: "8px", textAlign: "justify" }}>
              <strong>Bước 2: Đo thị lực và kiểm tra ban đầu</strong>  
              <br />Nhân viên y tế sẽ tiến hành đo thị lực, soi đáy mắt, kiểm tra độ cận/viễn/loạn,
              đồng thời ghi nhận các triệu chứng ban đầu.
            </Typography>
          </li>

          <li>
            <Typography sx={{ marginBottom: "8px", textAlign: "justify" }}>
              <strong>Bước 3: Khám với bác sĩ chuyên khoa</strong>  
              <br />Bác sĩ chuyên khoa mắt sẽ thăm khám chi tiết, đánh giá tình trạng
              bệnh lý, tư vấn nguyên nhân và hướng điều trị.
            </Typography>
          </li>

          <li>
            <Typography sx={{ marginBottom: "8px", textAlign: "justify" }}>
              <strong>Bước 4: Thực hiện cận lâm sàng (nếu cần)</strong>  
              <br />Trong trường hợp cần thiết, bác sĩ sẽ chỉ định thêm các xét nghiệm như:
              chụp OCT, đo nhãn áp, siêu âm, hoặc xét nghiệm máu.
            </Typography>
          </li>

          <li>
            <Typography sx={{ marginBottom: "8px", textAlign: "justify" }}>
              <strong>Bước 5: Nhận kết quả và tư vấn điều trị</strong>  
              <br />Sau khi có kết quả, bác sĩ giải thích chi tiết, tư vấn phương pháp điều trị
              hoặc phẫu thuật phù hợp nhất với tình trạng của bệnh nhân.
            </Typography>
          </li>

          <li>
            <Typography sx={{ marginBottom: "8px", textAlign: "justify" }}>
              <strong>Bước 6: Thanh toán và nhận thuốc</strong>  
              <br />Bệnh nhân thanh toán chi phí tại quầy thu ngân, nhận thuốc và hướng dẫn
              sử dụng. Với bệnh nhân phẫu thuật, nhân viên sẽ hẹn lịch mổ và chăm sóc sau phẫu thuật.
            </Typography>
          </li>
        </ul>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            marginTop: "2rem",
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: "justify",
          }}
        >
          🌟 <strong>Lưu ý:</strong> Bệnh viện luôn khuyến khích bệnh nhân đặt lịch hẹn trước
          để giảm thời gian chờ đợi. Mọi quy trình đều được hướng dẫn tận tình bởi đội ngũ nhân viên.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProcessPage;
