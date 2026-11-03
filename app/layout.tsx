import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "LH PTB",
  description: "LH PTB — ứng dụng Photo Booth chụp và chỉnh sửa ảnh trực tiếp trên trình duyệt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}
