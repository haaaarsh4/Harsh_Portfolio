import type { Metadata } from "next";
import SiteCursor from "@/components/layout/SiteCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Upadhyay",
  description: "Computer science student at McMaster University. Full stack developer & software engineer.",
  openGraph: {
    title: "Harsh Upadhyay",
    description: "Computer science student at McMaster University.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline background paints the paper colour on the very first frame,
    // before the stylesheet arrives, so a full page load never flashes white.
    <html lang="en" style={{ backgroundColor: "#f4ecde" }}>
      <body>
        {children}
        <SiteCursor />
      </body>
    </html>
  );
}