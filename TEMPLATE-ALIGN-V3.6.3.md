# LH PTB v3.6.3 — Template Align Fix

Bản này sửa phần tự động căn ảnh vào Template PNG.

## Các thay đổi

- Không còn sắp xếp vùng ảnh theo diện tích. Các vùng được sắp xếp theo vị trí thực tế: trên xuống dưới, trái sang phải.
- Phân tích vùng trong suốt ở độ phân giải cao hơn để giảm sai số vị trí.
- Dùng kết nối 8 hướng để không làm vỡ các góc bo hoặc cạnh chống răng cưa thành nhiều vùng nhỏ.
- Lọc các vùng trang trí nhỏ, vùng quá mỏng và vùng không có hình dạng phù hợp với ô ảnh.
- Giữ tọa độ slot theo tỷ lệ của kích thước Template PNG gốc rồi mới scale đồng đều khi preview/export.
- Template PNG vẫn được vẽ sau cùng nên artwork, chữ, sticker, viền và họa tiết của Template không bị biến dạng.
- Ảnh bên trong slot vẫn dùng crop kiểu cover, giữ nguyên tỷ lệ ảnh và không kéo méo.

## Lưu ý

Template cần có các vùng ảnh trong suốt được tách tương đối rõ. Nếu Template không có alpha trong vùng ảnh, hệ thống vẫn thử nhận vùng tối lớn được bao kín.
