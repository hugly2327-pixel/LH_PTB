# LH PTB

Nâng cấp từ v3:
- Ảnh luôn được bố trí ở giữa composition.
- Background nằm phía sau ảnh và có thêm một lớp foreground overlay nhẹ nằm trên ảnh để tạo chiều sâu.
- Background/pattern/frame/sticker/caption được đóng gói vào cùng một ảnh cuối.
- Export PNG chất lượng cao, kích thước lớn hơn bản v3.
- Maximum camera capture lên đến 3840px nếu camera cung cấp độ phân giải tương ứng.
- Trên thiết bị hỗ trợ Web Share, nút lưu sẽ mở sheet hệ thống để chọn Save Image/Photos; nếu không hỗ trợ sẽ tải PNG xuống.
- Ảnh composite vẫn được lưu vào IndexedDB của trình duyệt và tự xoá sau 30 phút.
- Không thể dùng web API để tự động ghi thẳng vào ứng dụng Photos mà không có hành động xác nhận của người dùng; Web Share là cách tương thích nhất trên mobile.

Build:
```bash
npm install
npm run build
```

## LH PTB v3.6.1 additions
- Photo Strip 1x4, 2x2 and 2x3 layouts
- Auto 6-shot mode for 2x3
- Upload/replace individual photo slots in the editor
- Custom transparent PNG frame overlay
- TimeStamp, Light Leak, Vignette, Grain and Chromatic effects
- Video Recap export as WebM when MediaRecorder is supported
- Client-side processing and temporary browser library retained
