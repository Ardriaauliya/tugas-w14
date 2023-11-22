import Navbar from "@components/navbar/navbar";
import "@styles/global.css";

export const metadata = {
  title: "Ardria Auliya",
  description: "Tugas Pemrograman Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
