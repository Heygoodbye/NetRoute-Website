import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetRoute — Per-Application Internet Routing for Windows",
  description: "Route each Windows application through the network adapter you choose—Wi-Fi, Ethernet, or a phone hotspot—without a VPN.",
  icons: { icon: "/netroute-logo.png", shortcut: "/netroute-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
