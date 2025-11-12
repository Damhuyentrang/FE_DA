import { Box, Typography } from "@mui/material";
import React from "react";

function IntroducePage(props) {
  return (
    <Box>
      <Box
        sx={{
          "@media (min-width:992px)": {
            ".d-lg-block": {
              display: "block !important",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundImage:
              "url(https://res.cloudinary.com/dsmvlvfy5/image/upload/v1703400921/blur-04.4f6865d2_tvrj9b.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: "50% !important",
            backgroundPositionY: "center !important",
            backgroundAttachment: "fixed",
            height: "unset",
            alignItems: "center",
            paddingTop: "60px !important",
            paddingBottom: "80px !important",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "15px auto",
            }}
          >
            <div className="col">
              <Typography
                variant="h1"
                className="text-center"
                sx={{
                  textAlign: "center",
                  zIndex: 2,
                  color: "#fff",
                  fontSize: "2.6rem",
                  fontWeight: 550,
                }}
              >
                ABOUT US
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
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
        <Box
          sx={{
            width: "100%",
            paddingX: "15px",
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              marginBottom: "15px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                marginBottom: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "justify",
              }}
            >
              Welcome to{" "}
              <span
                style={{
                  fontWeight: 500,
                }}
              >
                HONG SON EYE HOSPITAL
              </span>
              , MỔ CẬN LOẠN THỊ, ĐỤC THỦY TINH THỂ, BỆNH VÕNG MẠC... VỚI PHẪU THUẬT VIÊN SỐ 1 VIỆT NAM, GIÁ VÀ KẾT QUẢ TỐT NHẤT! 
              TẠI BỆNH VIỆN THƯƠNG HIỆU UY TÍN HÀNG ĐẦU CHÂU Á!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                marginBottom: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "justify",
              }}
            >
             Giao Sư Danh Dự Đại Học Quốc Tế Hoa Kỳ - Phó Giáo Sư - Tiến Sĩ - Thạc Sĩ Nhãn Khoa Vương Quốc Anh - Bác Sĩ Cao Cấp - Thầy thuốc Ưu Tú: CUNG HỒNG SƠN là phẫu thuật viên mổ tại Bệnh Viện Mắt Hồng Sơn, là bác sĩ duy nhất ở Việt Nam có thể phẫu thuật tốt cả bán phần trước và bán phần sau nhãn cầu. Với hơn 130.000 ca phẫu thuật cận thị thành công, 130.000 ca phẫu thuật đục thuỷ tinh thể, 25.000 ca về dịch kính võng mạc và hàng nghìn ca về Glocom, thẩm mỹ và các phẫu thuật khác. Hiện tại bác sĩ Cung Hồng Sơn là bác sĩ có số
              lượng ca mổ cận thị nhiều nhất Việt Nam.
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                marginBottom: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "justify",
              }}
            >
              Với cam kết đem lại KẾT QUẢ TỐT NHẤT và GIÁ TỐT NHẤT trên toàn quốc, để bạn tự tin tạm biệt gọng kính và tận
               hưởng cuộc sống không phụ thuộc vào đôi mắt thuỷ tinh.
            </Typography>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "30px",
                marginBottom: "1rem",
              }}
            >
              <li>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                   Trước mổ:
                  </span>{" "}
                  Khám và tư vấn phẫu thuật miễn phí: Các xét nghiệm mổ cận và xét nghiệm Covid miễn phí!
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                    Sau mổ:
                  </span>{" "}
                   Sẽ được phát miễn phí thuốc sau mổ: kính bảo vệ, ăn trưa, và nằm viện miễn phí trong ngày.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                    Được PGS - TS CUNG HỒNG SƠN:
                  </span>{" "}
                  sẽ khám miễn phí 1 năm sau mổ
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                     Bệnh Viện Mắt Hồng Sơn là địa chỉ DUY NHẤT:
                  </span>{" "}
                 Bảo Hành Miễn Phí TRỌN ĐỜI , tái cận sẽ được mổ miễn phí nếu còn chiều dầy nền giác mạc trên 310 micromet.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                    Bệnh Viện Mắt Hồng Sơn còn là 
                  </span>{" "}
                địa chỉ uy tín đặc biệt với các PHẪU THUẬT CHUYÊN SÂU được hỗ trợ bảo hiểm y tế như:
- Mổ ĐỤC THUỶ TINH THỂ theo phương pháp Phaco : các loại thuỷ tinh thể nhân tạo thế hệ mới: đơn tiêu, đa tiêu 2D không có các vòng tròn gây chói loá, đa tiêu cự 3D ... Sử dụng các máy hiện đại nhất: IOL Master 700. OCT - võng mạc Angiography, Máy Phaco lạnh đầu típ 2,2 mm...
- Mổ ĐỤC THUỶ TINH THỂ bằng LASER (FEMTO CATARACT). Ưu điểm: 1. Không dùng dao. 2. Điểu chỉnh loạn thị. 3. Rạch giác mạc, xé bao và chia nhỏ thuỷ tinh thể bằng Laser. 4. An toàn, chính xác và kết quả tốt hơn
- Phẫu thuật BÁN PHẦN SAU: Bong võng mạc. Bệnh lý võng mạc đái tháo đường. Cắt dịch kính. Màng xơ trước võng mạc. Lỗ hoàng điểm... với hệ thống máy hiện đại như: Camera nội nhãn, Laser nội nhãn, OCT-Angiography... - Phẫu thuật GLOCOM: Cắt bè. Đặt Valve tiền phòng...
- Phẫu thuật thẩm mỹ mắt và vùng mặt: với máy đốt siêu cao tần...
                </Typography>
              </li>
            </ul>

            <br />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                marginBottom: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "justify",
              }}
            >
             
            </Typography>
            <br />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                marginBottom: "1rem",
                fontWeight: 400,
                lineHeight: 1.5,
                textAlign: "justify",
              }}
            >
             
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default IntroducePage;
